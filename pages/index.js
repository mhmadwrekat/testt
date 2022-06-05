import React from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../config/config'
import axios from 'axios'

// page Component
import HeadComp from '../components/page/HeadComp'
import Nav from '../components/page/Nav'
import Footer from '../components/page/Footer'
// Apple View component
const ForYou = dynamic(() => import('../components/appleStructrue/ForYou'))
const ColoredSection = dynamic(() =>
  import('../components/appleStructrue/ColoredSection')
)

const Wave = dynamic(() => import('../components/appleStructrue/Wave'), {
  ssr: false,
})
const Logaimat = dynamic(() => import('../components/UpdatedDesign/Logaimat'))
const Video = dynamic(() => import('../components/appleStructrue/Video'))
const Voice = dynamic(() => import('../components/appleStructrue/Voice'))
const Hashtag = dynamic(() => import('../components/appleStructrue/Hashtag'))
const Test = dynamic(() => import('../components/appleStructrue/Test'), {
  ssr: false,
})
const Test4 = dynamic(() => import('../components/appleStructrue/Test4'), {
  ssr: false,
})

const Import_news = dynamic(() =>
  import('../components/UpdatedDesign/Import_news')
)
const Colored = dynamic(() => import('../components/UpdatedDesign/Colored'))

// Get Server Side Function
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )

  // Get Country Code
  const country_code_url = 'https://geolocation-db.com/json/'
  const country_code_res = await fetch(country_code_url)
  const country_code = await country_code_res.json()
  const ready_country_code = country_code.country_code

  let user_token = ''
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    user_token = localStorage.getItem('user_token')
  }

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

  // Get Logaimat API
  const LoqaimatDataReq = axios({
    method: 'GET',
    url: `${BASE_URL}/v1/Web/Loqaimat`,
    headers: {
      Authorization: `Basic ${user_token}`,
    },
  })
  const loqaimat = await LoqaimatDataReq

  return {
    props: {
      all_news: custom_array,
      loqaimat: loqaimat.data,
    },
  }
}

// // Dark & Light Mode
// if (typeof window !== 'undefined') {
//   darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
// }
//   if (darkThemeMq.matches) {
//     // Theme set to dark.
//     console.log('LIGHT')
//     backGround = 'bg-white'
//     textColor = 'black'
//   } else {
//     // Theme set to light.
//     console.log('DARK')
//     backGround = 'bg-gray-900'
//     textColor = 'white'
//   }
// }

// // Dark & Light Mode
// if (typeof window !== 'undefined') {
//   //Toggle mode
//   const toggle = document.querySelector('.js-change-theme')
//   const project_body = document.getElementById('project_body')
//   // const logoFooter = document.getElementById('logoFooter')
//   toggle.addEventListener('click', () => {
//     if (project_body.classList.contains('text-white')) {
//       toggle.innerHTML = '🌙'
//       project_body.classList.remove('bg-gray-900')
//       project_body.classList.remove('text-white')
//       project_body.classList.add('bg-white')
//       project_body.classList.add('text-black')
//       // logoFooter.classList.remove('text-white')
//       // logoFooter.classList.add('text-LogoPurp')
//     } else {
//       toggle.innerHTML = '☀️'
//       project_body.classList.remove('bg-white')
//       project_body.classList.remove('text-black')
//       project_body.classList.add('bg-gray-900')
//       project_body.classList.add('text-white')
//       // logoFooter.classList.remove('text-LogoPurp')
//       // logoFooter.classList.add('text-white')
//     }
//   })
// }

const index = (props) => {
  return (
    <React.Fragment>
      {/* {console.log(props.loqaimat.data[0].screens)} */}
      <HeadComp />
      <div dir="rtl" id="project_body" className="bg-white text-black">
        <Nav />

        {/* <Wave url="https://testin-bucket2021.s3.us-east-2.amazonaws.com/filejhnxwnrais.mp3" /> */}
        {/* <Test4 important_news={props.all_news[0]} /> */}
        <Import_news
          title={'أهم الأخبار'}
          important_news={props.all_news[0]}
          subs={null}
          title_color={'text-RED'}
          theme={'bg-RED'}
          card_color={'bg-GRAY100'}
          fill_color={'fill-RED'}
          text_color={'text-black'}
        />
        <section className="mt-6 bg-Purp400 pb-8">
          <Colored
            title={'مخصص لك'}
            important_news={props.all_news[1]}
            subscripe={true}
            title_color={'text-white'}
            card_color={'bg-Purp100'}
            theme={'bg-Purp200'}
            text_color={'text-white'}
            fill_color={'fill-Purp200'}
            desc_color={'text-GRAY'}
            description={
              'الأخبار المقترحه لك بناء على المواضيع او الفئات الاخبارية التي تم قرائتها'
            }
          />
        </section>

        <Import_news
          title={' الصحه'}
          important_news={props.all_news[2]}
          title_color={'text-BLUE'}
          subs={true}
          theme={'bg-BLUE'}
          card_color={'bg-GRAY100'}
          fill_color={'fill-BLUE'}
          desc_color={'text-GRAY400'}
          description={'جميع الأخبار المتعلقة في عالم الصحه من أهم المصادر'}
        />
        <Test
          title={'الصوتيات '}
          news_one={props.all_news[1]}
          news_two={props.all_news[3]}
          subs={true}
          title_color={'text-YELLOW'}
          fill_color={'fill-YELLOW'}
          card_color={'bg-GRAY100'}
          desc_color={'text-GRAY400'}
          theme={'bg-YELLOW'}
          description={'استمع للاخبار الصوتيه الاكثر استماعا على الزبده'}
        />
        <Import_news
          title={' تكنولوجيا'}
          important_news={props.all_news[4]}
          title_color={'text-GREEN'}
          subs={true}
          theme={'bg-GREEN'}
          card_color={'bg-GRAY100'}
          fill_color={'fill-GREEN'}
          desc_color={'text-GRAY400'}
          description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
        />
        {/* <Logaimat
          title={'لقيمات'}
          important_news={props.loqaimat.data[0].screens}
          subs={true}
          title_color={'text-SKY'}
          theme={'bg-SKY'}
          card_color={'bg-GRAY100'}
          fill_color={'fill-SKY'}
          desc_color={'text-GRAY400'}
          text_color={'text-black'}
          description={'بطريقة جميلة يمكنك قرائه المواضيع'}
        /> */}
        <Import_news
          title={' غزو أوكرانيا'}
          important_news={props.all_news[5]}
          title_color={'text-YELLOW'}
          subs={true}
          theme={'bg-YELLOW'}
          card_color={'bg-GRAY100'}
          fill_color={'fill-YELLOW'}
          desc_color={'text-GRAY400'}
          description={'جميع ما يخص أحداث غزو أوكرانيا'}
        />
        <Import_news
          title={' رياضه'}
          important_news={props.all_news[3]}
          title_color={'text-BLUE'}
          subs={true}
          theme={'bg-BLUE'}
          card_color={'bg-GRAY100'}
          fill_color={'fill-BLUE'}
          desc_color={'text-GRAY400'}
          description={'جميع الأخبار المتعلقة في عالم الرياضه حول العالم'}
        />
        <Import_news
          title={' مال وأعمال'}
          important_news={props.all_news[1]}
          title_color={'text-GREEN'}
          subs={false}
          theme={'bg-GREEN'}
          card_color={'bg-GRAY100'}
          fill_color={'fill-GREEN'}
          desc_color={'text-GRAY400'}
          description={
            'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
          }
        />
        {/* <Voice
          important_news={props.all_news[4]}
          theme={'bg-gray-600'}
          color={'gray-600'}
          title={'مال و أعمال'}
          description={
            'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
          }
        /> */}

        {/**********************************************************************/}
        {/**********************************************************************/}
        {/**********************************************************************/}
        {/**********************************************************************/}
        {/**********************************************************************/}

        <Footer />
      </div>
    </React.Fragment>
  )
}
export default index

/*

      {typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: light)') ? (
        <h1>LIGHT</h1>
      ) : (
        <h1>Dark</h1>
      )}
      temp={'61°F 🌥'}





        <section className="pb-10">
          <Test
            title={'الصوتيات '}
            news_one={props.all_news[1]}
            news_two={props.all_news[2]}
            subscripe={true}
            color={'text-YELLOW'}
            theme={'bg-YELLOW'}
            description={'استمع للاخبار الصوتيه الاكثر استماعا على الزبده'}
          />
          <section></section>
          <Hashtag
            title={'# هاشتاج الاسبوع'}
            important_news={props.all_news[1]}
            other_news={props.all_news[4]}
            color={'purple-500'}
            theme={'bg-purple-500'}
          />
          <ColoredSection
            important_news={props.all_news[5]}
            subscripe={null}
            theme={'bg-blue-700'}
            color={'blue-700'}
            temp={'61°F  🌥'}
            title={' يدور حولك'}
            description={'قصص رائعة من حولك'}
          />
        </section>
        <section>
          <ForYou
            for_you={props.all_news[2]}
            color={'green-600'}
            title={'مخصص لك'}
            subscripe={null}
            description={'توصيات بناءً على الموضوعات والقنوات التي تقرأها'}
          />

          <Voice
            important_news={props.all_news[4]}
            theme={'bg-gray-600'}
            color={'gray-600'}
            title={'مال و أعمال'}
            description={
              'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
            }
          />
          <ColoredSection
            important_news={props.all_news[1]}
            theme={'bg-yellow-400'}
            color={'yellow-400'}
            subscripe={false}
            title={'مال و أعمال'}
            temp={''}
            description={
              'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
            }
          />
          <ForYou
            for_you={props.all_news[4]}
            subscripe={false}
            color={'pink-700'}
            title={'تكنولوجيا'}
            description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
          />
          <Logaimat
            important_news={props.all_news[0]}
            theme={''}
            color={''}
            title={'مال و أعمال'}
            description={
              'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
            }
          />
        </section>
        <div className="py-4"></div>
        <section className="to-gray-800 from-gray-600 bg-gradient-to-b pt-1 pb-10">
          <Video
            important_news={props.all_news[1]}
            title={'الفيديوهات'}
            color={'yellow-400'}
            theme={'bg-yellow-400'}
            description={'أكثر ما تم مشاهدته في اللحظات السابقة'}
          />
        </section>

        <ForYou
          for_you={props.all_news[5]}
          color={'red-400'}
          title={'الاكثر بحثا'}
          subscripe={null}
          description={'توصيات بناءً على الموضوعات التي يتم البحث عنها'}
        />
        <ColoredSection
          important_news={props.all_news[3]}
          theme={'bg-green-500'}
          color={'green-500'}
          subscripe={true}
          temp={''}
          title={' أخبار الرياضه'}
          description={'جميع ما يخص عالم الرياضه'}
        />
        <ForYou
          subscripe={true}
          for_you={props.all_news[2]}
          color={'purple-600'}
          title={'الصحه'}
          description={'جميع ما هو جديد في ابحاث الصحه بين يديك'}
        />










*/
