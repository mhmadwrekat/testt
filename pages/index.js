import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../config/config'
import axios from 'axios'
import Cookies from 'cookies'

// Apple View component
const Category_news = dynamic(() =>
  import('../components/apple_template/Category_news')
)
const Colored = dynamic(() => import('../components/apple_template/Colored'))
const Voice = dynamic(() => import('../components/apple_template/Voice'), {
  ssr: false,
})
const Logaimat = dynamic(() => import('../components/apple_template/Logaimat'))

// page Component
const HeadComp = dynamic(() => import('../components/page/HeadComp'))
const Nav = dynamic(() => import('../components/page/Nav'))
const Footer = dynamic(() => import('../components/page/Footer'))
// import Test from '..//components/appleStructrue/Test'

// Get Server Side Function
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )

  // Create a cookies instance
  const cookies = new Cookies(req, res)

  let country_code = cookies.get('country_code')
  let user_id = cookies.get('user_id')
  let user_token = cookies.get('user_token')

  // Get All News
  const all_news_url = `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}`
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

  //return props
  return {
    props: {
      loqaimat: loqaimat.data,
      all_news: custom_array,
    },
  }
}

const index = ({ all_news }) => {
  return (
    <React.Fragment>
      <HeadComp />
      <div dir="rtl" id="project_body" className="bg-white text-black">
        <Nav />
        {all_news[0]?.data && (
          <>
            <Category_news
              loading="eager"
              title={'أهم الأخبار'}
              category_news={all_news[0]}
              subs={null}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />

            <Category_news
              loading="lazy"
              title={'  الشأن الدولي'}
              category_news={all_news[11]}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يحدث حول العالم '}
            />
            <Category_news
              loading="lazy"
              title={' الصحه'}
              category_news={all_news[4]}
              subs={true}
              bg_color={'bg-BLUE'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الصحه من أهم المصادر'}
            />
            <Voice
              loading="lazy"
              title={'الصوتيات '}
              news_one={all_news[6]}
              news_two={all_news[6]}
              subs={true}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              card_color={'bg-GRAY100'}
              desc_color={'text-GRAY400'}
              theme={'bg-YELLOW'}
              description={'استمع للاخبار الصوتيه الاكثر استماعا على الزبده'}
            />
            <Category_news
              loading="lazy"
              title={' تكنولوجيا'}
              category_news={all_news[12]}
              subs={true}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
            />
            <Category_news
              loading="lazy"
              title={' لايف ستايل'}
              category_news={all_news[16]}
              subs={true}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />
            <Category_news
              loading="lazy"
              title={' غزو أوكرانيا'}
              category_news={all_news[8]}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يخص أحداث غزو أوكرانيا'}
            />
            {/* <Logaimat
              loading="lazy"
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
            <Category_news
              loading="lazy"
              title={'اخبار الفن'}
              category_news={all_news[15]}
              subs={true}
              bg_color={'bg-BLUE'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الفن من أهم المصادر'}
            />
            <Category_news
              loading="lazy"
              title={' مال وأعمال'}
              category_news={all_news[7]}
              subs={true}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={
                'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
              }
            />
            <Category_news
              loading="lazy"
              title={' ترند'}
              category_news={all_news[5]}
              subs={true}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
              description={
                'جميع الأخبار المتعلقة في عالميات الترند من أهم المصادر'
              }
            />
            <Category_news
              loading="lazy"
              title={'  الشرق الأوسط'}
              category_news={all_news[14]}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يحدث حول العالم '}
            />
            <Category_news
              loading="lazy"
              title={' رياضه'}
              category_news={all_news[3]}
              subs={true}
              bg_color={'bg-BLUE'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الرياضه حول العالم'}
            />
            <Category_news
              loading="lazy"
              title={' العاب'}
              category_news={all_news[13]}
              subs={true}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={'جميع ما يخص عالم الالعاب بين يديك'}
            />
            <Category_news
              loading="lazy"
              title={' الخليج العربي '}
              category_news={all_news[10]}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يخص أحداث الخليج العربي'}
            />
            <Footer loading="lazy" />
          </>
        )}
      </div>
    </React.Fragment>
  )
}
export default index
/*
          <Colored
            loading="lazy"
            title={'يدور حولك'}
            important_news={props.all_news[2]}
            card_color={'bg-Purp100'}
            theme={'bg-Purp200'}
            text_color={'text-white'}
            fill_color={'fill-Purp200'}
            desc_color={'text-GRAY'}
            description={'الأخبار المقترحه لك بناء على المنطقه المحيطه بك    '}
          />
        <section className="mt-6 bg-Purp400 pb-8">
          <Colored
            loading="lazy"
            title={'مخصص لك'}
            important_news={props.all_news[2]}
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
*/
