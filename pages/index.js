import React from 'react'
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
const Logaimat = dynamic(() => import('../components/appleStructrue/Logaimat'))
const Video = dynamic(() => import('../components/appleStructrue/Video'))
const Voice = dynamic(() => import('../components/appleStructrue/Voice'))

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
    },
  }
}

// Dark & Light Mode
if (typeof window !== 'undefined') {
  //Toggle mode
  const toggle = document.querySelector('.js-change-theme')
  const project_body = document.getElementById('project_body')
  toggle.addEventListener('click', () => {
    if (project_body.classList.contains('text-white')) {
      toggle.innerHTML = '🌙'
      project_body.classList.remove('bg-gray-900')
      project_body.classList.remove('text-white')
      project_body.classList.add('bg-white')
      project_body.classList.add('text-black')
    } else {
      toggle.innerHTML = '☀️'
      project_body.classList.remove('bg-white')
      project_body.classList.remove('text-black')
      project_body.classList.add('bg-gray-900')
      project_body.classList.add('text-white')
    }
  })
}

const index = (props) => {
  return (
    <React.Fragment>
      {/* {console.log(props.country, props.country_code)} */}
      <HeadComp />
      <div dir="rtl" id="project_body" className="bg-white text-black">
        <Nav />
        <section className="pb-10">
          <ImportantNews
            title={'أهم الأخبار'}
            important_news={props.all_news[0]}
            color={'red-600'}
            theme={'bg-red-500'}
          />
        </section>
        <section>
          <ColoredSection
            important_news={props.all_news[1]}
            theme={'bg-yellow-400'}
            color={'yellow-400'}
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
          {/* <Logaimat
            important_news={props.all_news[1]}
            theme={'bg-gray-600'}
            color={'gray-600'}
            title={'مال و أعمال'}
            description={
              'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
            }
          /> */}
          <ForYou
            for_you={props.all_news[4]}
            color={'purple-700'}
            title={'تكنولوجيا'}
            description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
          />
          <ColoredSection
            important_news={props.all_news[5]}
            theme={'bg-blue-700'}
            color={'blue-700'}
            title={' يدور حولك'}
            description={'قصص رائعة من حولك'}
          />

          {/* <Voice
            important_news={props.all_news[1]}
            theme={'bg-gray-600'}
            color={'gray-600'}
            title={'مال و أعمال'}
            description={
              'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
            }
          /> */}
          <ColoredSection
            important_news={props.all_news[3]}
            theme={'bg-green-700'}
            color={'green-700'}
            title={' أخبار الرياضه'}
            description={'جميع ما يخص عالم الرياضه'}
          />
          <ForYou
            for_you={props.all_news[2]}
            color={'pink-700'}
            title={'الصحه'}
            description={'جميع ما هو جديد في ابحاث الصحه بين يديك'}
          />
        </section>
        <section className="to-gray-900 from-gray-500 bg-gradient-to-b  pt-1 pb-10">
          <Video
            important_news={props.all_news[1]}
            title={'الفيديوهات'}
            color={'yellow-400'}
            theme={'bg-yellow-500'}
            description={'أكثر ما تم مشاهدته في اللحظات السابقة'}
          />
        </section>
        <div className="py-20"></div>
      </div>
    </React.Fragment>
  )
}

export default index
