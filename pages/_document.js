import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

//import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WSLC3QB');`,
            }}
          /> */}
          <meta
            name="facebook-domain-verification"
            content="y4ylg5eq8d7lgh9w8vol92gr076mfd"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WSLC3QB" height="0" width="0" style="display: none; visibility: hidden;" />`,
            }}
          />
        </body>
      </Html>
    )
  }
}
