import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../config/config'
import axios from 'axios'
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
//
// import Test from '..//components/appleStructrue/Test'
// Get Server Side Function
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )
  const test_url = 'https://api.ipregistry.co/?key=rxw4ldwhlsthgalj'
  const test_req = await fetch(test_url)
  const test = await test_req.json()
  const ready_test = test.location.country.code
  // Get Country Code

  const country_code_url = 'https://geolocation-db.com/json/'
  const country_code_res = await fetch(country_code_url)
  const country_code = await country_code_res.json()
  const ready_country_code = country_code.country_code

  // Get user token from Local Storage
  let user_token = ''
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    user_token = localStorage.getItem('user_token')
  }
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
      // all_news: custom_array,
      // big_news: all_news,
      loqaimat: loqaimat.data,
      ready_country_code: ready_country_code,
      ready_test: ready_test,
      // // test: ready_test,
    },
  }
}
// 1 -> مخصص لك
// 2 -> يدور حولك
// 6 -> الصوتيات
// 9 -> الفيديوهات
// 8 -> lifr_style
const index = (props) => {
  /*
  // GET: function to get the country code for the user
  function get_user_country_code() {
    axios
      .get("https://geolocation-db.com/json/")
      .then((res) => {
        //get sectioned news based on user country code
        get_all_news(res.data.country_code);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  */
  // props.user_id && console.log(props.user_id)
  const [all_news, setAll_news] = useState([])

  // const all_news_url = props.user_id
  //   ? `${BASE_URL}/v1/Web/Sections?current_country=${props.ready_country_code}&userId=${props.user_id}`
  //   : `${BASE_URL}/v1/Web/Sections?current_country=${props.ready_country_code}&userId=${props.user_id}`

  // Get All News
  const get_all_news = (url) => {
    axios.get(url).then((res) => {
      // console.log(res.data.data)
      let keys = Object.keys(res.data.data)
      let custom_array = []
      keys.map((item) => {
        custom_array.push(res.data.data[item])
      })
      setAll_news(custom_array)
    })
  }
  // let url = `${BASE_URL}/v1/Web/Sections?current_country=${props.ready_country_code}&userId=${props.userId}`
  // props?.userId &&
  //   // (url = `${BASE_URL}/v1/Web/Sections?current_country=JO&userId=${props.userId}`)
  //   (url = `${BASE_URL}/v1/Web/Sections?current_country=${props.ready_country_code}&userId=${props.userId}`)
  // setA(localStorage.getItem('userId'))
  // let as = '&userId=' + a
  props?.userId &&
    props.ready_test &&
    get_all_news(
      `${BASE_URL}/v1/Web/Sections?current_country=${props.ready_test}&userId=${props.userId}`
    )
  // props?.userId && console.log('1 - ', props?.userId)
  // props?.useri && console.log('2 - ', props?.useri)

  return (
    <React.Fragment>
      {console.log(props.ready_test)}
      <HeadComp />
      <div dir="rtl" id="project_body" className="bg-white text-black">
        <Nav />
        {/* {console.log(all_news[0])} */}
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
            <Logaimat
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
            />
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
