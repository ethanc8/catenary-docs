import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  i18n: {
    locales: ['de', 'en', 'es', 'fr'],
    defaultLocale: 'en'
  },
  redirects: () => [
    {
      source: '/',
      destination: '/home',
      permanent: true,
    },
    {
      source: '/fr',
      destination: '/fr/home',
      permanent: true,
    },
    {
      source: '/es',
      destination: '/es/home',
      permanent: true,
    },
    {
      source: '/de',
      destination: '/de/home',
      permanent: true,
    }
  ],
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  },
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })
    return config
  }
})
