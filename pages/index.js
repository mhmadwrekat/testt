import axios from 'axios'
import React, { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../config/config'
// page Component
import HeadComp from '../components/page/HeadComp'
import Nav from '../components/page/Nav'
// Apple View component
const ImportantNews = dynamic(() =>
  import('../components/appleStructrue/ImportantNews')
)
const ForYou = dynamic(() => import('../components/appleStructrue/ForYou'))
const ColoredSection = dynamic(() =>
  import('../components/appleStructrue/ColoredSection')
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
  const all_news_url = `${BASE_URL}/v1/Web/Sections?current_country=JO`
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
      country_code: ready_country_code,
      country: country_code,
    },
  }
}

// Dark Or Light Mode
if (typeof window !== 'undefined') {
  //Toggle mode
  const toggle = document.querySelector('.js-change-theme')
  const projectfoot = document.getElementById('projectfoot')
  toggle.addEventListener('click', () => {
    if (projectfoot.classList.contains('text-white')) {
      toggle.innerHTML = '🌙'
      projectfoot.classList.remove('bg-gray-900')
      projectfoot.classList.remove('text-white')
      projectfoot.classList.add('bg-white')
      projectfoot.classList.add('text-black')
    } else {
      toggle.innerHTML = '🌞'
      projectfoot.classList.remove('bg-white')
      projectfoot.classList.remove('text-black')
      projectfoot.classList.add('bg-gray-900')
      projectfoot.classList.add('text-white')
    }
  })
}

const index = (props) => {
  // const [weather, setWeather] = useState([])
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/v1/Web/Sections?current_country=${props.country_code}`)
  //     .then((res) => {
  //       setWeather(res.data)
  //     })
  // }, [])
  console.log('WEATHER : ', weather)
  return (
    <React.Fragment>
      {console.log(props.country, props.country_code)}
      <HeadComp />
      <div
        dir="rtl"
        id="projectfoot"
        className="
      bg-white text-black
      "
      >
        <Nav />

        <section
          className="
       pb-10"
        >
          <ImportantNews
            title={'أهم الأخبار'}
            important_news={props.all_news[0]}
          />
        </section>
        <section className="grid">
          <ColoredSection
            important_news={props.all_news[1]}
            theme={'bg-yellow-600'}
            color={'yellow-600'}
            title={'مال و أعمال'}
            description={
              'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
            }
          />
          <ForYou
            for_you={props.all_news[2]}
            color={'green-600'}
            title={'مخصص لك'}
            description={'توصيات بناءً على الموضوعات والقنوات التي تقرأها'}
          />
          <ColoredSection
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
          <ColoredSection
            important_news={props.all_news[3]}
            theme={'bg-green-700'}
            color={'green-700'}
            title={' أخبار الرياضه'}
            description={'جميع ما يخص عالم الرياضه'}
          />
        </section>

        {/* <ForYou
          for_you={props.all_news[5]}
          color={'pink-600'}
          title={'منوعات'}
          description={'منوعات حول العالم'}
        /> */}

        <div className="py-20"></div>
      </div>
    </React.Fragment>
  )
}

export default index
