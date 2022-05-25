import dynamic from 'next/dynamic'
import { BASE_URL } from '../config/config'
// page Component
import React from 'react'
import HeadComp from '../components/page/HeadComp'
import Nav from '../components/page/Nav'
// Apple View component
const TopStories = dynamic(() =>
  import('../components/appleStructrue/TopStories')
)
const ForYou = dynamic(() => import('../components/appleStructrue/ForYou'))
const LocalNews = dynamic(() =>
  import('../components/appleStructrue/LocalNews')
)

// Get Server Side Function
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  // Get Country Code
  const country_code_url = 'https://geolocation-db.com/json/'
  const country_code_res = await fetch(country_code_url)
  const country_code = await country_code_res.json()
  const ready_country_code = country_code.country_code

  // Get All News
  const all_news_url = `${BASE_URL}/v1/Web/Sections?current_country=${ready_country_code}`
  const all_news_res = await fetch(all_news_url)
  const all_news = await all_news_res.json()

  // Convert API Data From (Object To Array)
  let keys = Object.keys(all_news.data)
  let custom_array = []
  keys.map((item) => {
    custom_array.push(all_news.data[item])
  })

  return {
    props: {
      all_news: custom_array,
    },
  }
}
const index = (props) => {
  return (
    <React.Fragment>
      <HeadComp />
      <div dir="rtl" className="">
        <Nav />
        <section className="from-white to-blue-100 grid bg-gradient-to-b pb-10">
          <TopStories
            title={'أهم الأخبار'}
            important_news={props.all_news[0]}
          />
        </section>
        <section className="grid">
          <ForYou
            for_you={props.all_news[2]}
            color={'green-600'}
            title={'مخصص لك'}
            description={'توصيات بناءً على الموضوعات والقنوات التي تقرأها'}
          />
        </section>
        <LocalNews
          important_news={props.all_news[5]}
          theme={'bg-BLUE'}
          color={'blue-800'}
          title={' يدور حولك'}
          description={'قصص رائعة من حولك'}
        />
        <ForYou
          for_you={props.all_news[4]}
          color={'purple-700'}
          title={'تكنولوجيا'}
          description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
        />
        <LocalNews
          important_news={props.all_news[3]}
          theme={'bg-green-700'}
          color={'green-700'}
          title={' أخبار الرياضه'}
          description={'جميع ما يخص عالم الرياضه'}
        />
        <div className="py-20"></div>
      </div>
    </React.Fragment>
  )
}

export default index
