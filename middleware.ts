import { addBasePath } from "next/dist/client/add-base-path";
import { addLocale } from "next/dist/client/add-locale";
import { hasBasePath } from "next/dist/client/has-base-path";
import { removeBasePath } from "next/dist/client/remove-base-path";
import { removeLocale } from "next/dist/client/remove-locale";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Ensure you export the configuration matcher to avoid running on static files efficiently
export const config = {
    matcher: [
        // Match all paths except those starting with:
        // - api (API routes)
        // - _next/static (static files)
        // - _next/image (image optimization files)
        // - _meta (Nextra meta files - handled manually below, but good to exclude from general routing if possible)
        // - favicon.ico (favicon file)
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};

function getCookie(cookies: any, key: string) {
    if (typeof cookies.get === "function") {
        const cookie = cookies.get(key);
        if (cookie && typeof cookie === "object") {
            return cookie.value;
        }
        return cookie;
    }
    return cookies[key];
}

export default function middleware(request: NextRequest) {
    const { nextUrl } = request;

    // 1. Meta File Protection
    // Modified regex to support standard (en), hyphenated (zh-CN), and case-insensitive variations.
    // It matches /_meta, /_meta.en, /_meta.zh-CN, etc.
    if (/\/_meta(\.[a-z]{2,}(-[a-zA-Z0-9]+)?)?$/.test(nextUrl.pathname)) {
        const url = nextUrl.clone();
        url.pathname = `/404`;
        return NextResponse.rewrite(url);
    }

    // 2. Resource Exclusion
    // Logic refactored for readability. Checks for public files or Next.js internals.
    const isPublicFile = /\.(jpe?g|svg|png|webmanifest|xml|ico|txt|mp4)$/i.test(nextUrl.pathname);
    const isInternal = /^\/(api|_next)\//.test(nextUrl.pathname);

    // Ensure we have a locale and are not on the 500 error page
    const shouldHandleLocale = !isInternal && !isPublicFile && nextUrl.locale !== "" && nextUrl.pathname !== "/500";

    if (!shouldHandleLocale) return;

    // 3. Locale Resolution
    // If the current locale is the default, we treat it as an empty string for the pathname calculation,
    // unless your Nextra setup explicitly requires .en.md for default locale.
    const locale = nextUrl.locale === nextUrl.defaultLocale ? "" : nextUrl.locale;

    // Clean the pathname: Remove BasePath and existing Locale to get the "raw" path.
    nextUrl.pathname = hasBasePath(nextUrl.pathname)
        ? removeLocale(removeBasePath(nextUrl.pathname), nextUrl.locale)
        : nextUrl.pathname;

    let finalLocale;

    // 4. Client-side Preference Detection
    if (locale) {
        finalLocale = locale;
    } else {
        const clientLocale = getCookie(request.cookies, "NEXT_LOCALE");
        if (clientLocale) {
            try {
                nextUrl.locale = clientLocale;
            } catch (error) {
                // Fallback if clientLocale is invalid
                console.error("Invalid locale in cookie:", clientLocale);
            }
        }
        finalLocale = nextUrl.locale;

        // Redirect if the URL does not match the detected/cookie locale (except for default locale)
        if (finalLocale !== nextUrl.defaultLocale) {
            const url = addBasePath(
                addLocale(
                    `${nextUrl.pathname}${nextUrl.search}`,
                    finalLocale,
                    nextUrl.defaultLocale
                )
            );
            return NextResponse.redirect(new URL(url, request.url));
        }
    }

    // 5. Path Rewriting for Nextra
    let pathname = nextUrl.pathname || "/";
    if (pathname === "/") pathname += "index";
    else if (pathname.endsWith("/")) pathname = pathname.slice(0, -1);

    // Append locale extension if not present.
    // This logic is critical for Nextra to find `filename.zh-CN.md`
    if (!pathname.endsWith("." + finalLocale)) {
        const url = addBasePath(
            addLocale(
                `${pathname}.${finalLocale}${nextUrl.search}`,
                finalLocale,
                nextUrl.defaultLocale
            )
        );
        return NextResponse.rewrite(new URL(url, request.url));
    }
}
