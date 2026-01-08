import Script from 'next/script'
import '../style.css'

export default function App({ Component, pageProps }) {
  return <>
        <Component {...pageProps} />
    </>
}
