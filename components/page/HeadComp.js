// Library imports
import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
// const SEGMENT = process.env.NEXT_PUBLIC_SEGMENT

const HeadComp = ({ headKeywords, headDescription, headTitle }) => {
  return (
    <React.Fragment>
      <NextSeo title={headTitle} description={headDescription} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="alternate"
          type="application/rss+xml"
          title={`alzubda's blog feed`}
          href="/rss/الصحة/feed.xml"
        /> */}
        {/* <script src="lazysizes.min.js" async /> */}

        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* <link rel="canonical" href="https://alzubda.com" />
        <meta property="og:keywords" content={headKeywords} /> */}
        {/* <meta name="keywords" content={headKeywords} />  */}
        {/* <meta
          property="og:image"
          content="https://www.alzubda.com/favicon.ico"
        /> */}
        {/* <meta
          property="og:image:type"
          content="image/jpeg/png/svg/jpg/webp"
          data-react-helmet="true"
        /> */}
        {/* <meta property="fb:app_id" content="2663104457235241" /> */}
        {/* <meta
          content="https://alzubda.com"
          ng-if="og_meta.url"
          property="og:url"
        /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          name="facebook-domain-verification"
          content="y4ylg5eq8d7lgh9w8vol92gr076mfd"
        /> */}

        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
      var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
        analytics.load("${SEGMENT}");analytics.page();}
   `,
          }}
        /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
        {/* UNPKG */}

        {/* <script
          crossorigin
          src="https://unpkg.com/react@^18/umd/react.development.js"
        ></script>
        <script
          crossorigin
          src="https://unpkg.com/react@^18/umd/react.production.min.js"
        ></script> */}
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
        /> */}
        {/* <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap"
          rel="stylesheet"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        /> */}

        {/* <link
          rel="stylesheet"
          href="path/to/font-awesome/css/font-awesome.min.css"
        /> */}
      </Head>
    </React.Fragment>
  )
}

export default HeadComp
