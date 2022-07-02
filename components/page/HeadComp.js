// Library imports
import React from 'react'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

const HeadComp = ({ headKeywords, headDescription, headTitle }) => {
  return (
    <React.Fragment>
      <NextSeo
        title={headTitle}
        description={headDescription}
        twitter={{
          image: '/twitter.png',
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        facebook={{
          image: '/facebook.png',
          url: 'https://alzubda.com',
          type: 'website',
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`alzubda's blog feed`}
          href="/rss/الصحة/feed.xml"
        />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="canonical" href="https://alzubda.com" />
        <meta property="og:keywords" content={headKeywords} />
        {/* <meta name="keywords" content={headKeywords} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

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
