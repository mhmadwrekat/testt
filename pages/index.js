import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../config/config'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'cookies'
// Apple View component
const Category_news = dynamic(() =>
  import('../components/apple_template/Category_news')
)
const Colored = dynamic(() => import('../components/apple_template/Colored'))
const Video = dynamic(() => import('../components/apple_template/Video'))
const Voice = dynamic(() => import('../components/apple_template/Voice'), {
  ssr: false,
})
const Logaimat = dynamic(() => import('../components/apple_template/Logaimat'))
// page Component
const HeadComp = dynamic(() => import('../components/page/HeadComp'))
const Nav = dynamic(() => import('../components/page/Nav'))
const Footer = dynamic(() => import('../components/page/Footer'))
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'

// Get Server Side Function
// const [country, setCountry] = useState()
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )
  const cookies = new Cookies(req, res)
  let country = ''
  getCookie('country_code')
    ? (country = getCookie('country_code'))
    : axios.get('https://geolocation-db.com/json/').then((res) => {
        console.log('GETTTTTTTTTT')
        setCookies('country_code', res.data.country_code)
        country = res.data.country_code
      })

  // typeof window !== 'undefined' &&
  // console.log('hhhhhhhhhhhhhhhhh')
  // if (localStorage !== undefined) {
  //   const token = localStorage.getItem('token')
  //   localStorage.setItem('test', '123')
  // }
  // // Get Country Code
  // const country_code_url = 'https://api.ipregistry.co/?key=rxw4ldwhlsthgalj'
  // const country_code_res = await fetch(country_code_url)
  // const country_code = await country_code_res.json()
  // const ready_country_code = country_code.country_code

  // setCookies('country_code', ready_country_code)

  // fetch('https://geolocation-db.com/json/').then((data) => {
  //   console.log(data.country_code)
  //   setCookies('country_code', data.country_code)
  // })

  // function get_country_code() {
  //   console.log('777777777777777777777')
  //   fetch('https://geolocation-db.com/json/')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('88888888888888888888888')
  //       setCookies('country_code', data.country_code)
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error)
  //     })
  // }
  // let option = 'testtttt'
  // setCookies('key', 'value', option)
  // console.log(setCookies(option))
  // Create a cookies instance
  // const id = ''
  // getCookie('user_id', id) // => 'value'
  function get_country_code() {
    fetch('https://geolocation-db.com/json/')
      .then((response) => response.json())
      .then((data) => {
        console.log('SETS')
        setCookies('country', '1')
      })
      .catch((error) => {
        console.log('ERROR')
        console.error('Error:', error)
      })
  }
  get_country_code()

  let user_token = cookies.get('user_token')

  // Get All News
  let all_news_url = `${BASE_URL}/v1/Web/Sections?current_country=JO`
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
  // let user_id = cookies.get('user_id')

  return {
    props: {
      all: '',
      // country_code: country_code?.location?.country.code,
      loqaimat: loqaimat.data,
      all_news: custom_array,
      // userid: user_id,
      country: country,
    },
  }
}
/*
  useEffect(() => {
    getCookie('country_code')
      ? setCountry(getCookie('country_code'))
      : axios.get('https://geolocation-db.com/json/').then((res) => {
          console.log('GETTTTTTTTTT')
          setCookies('country_code', res.data.country_code)
          setCountry(res.data.country_code)
        })
  }, [country])
*/
// typeof window !== 'undefined' &&
//   console.log(window.localStorage.getItem('user_id'))
const index = (props) => {
  console.log('YEE-> ', props.country)

  // const cookies = new Cookies(req, res)
  // let user_id = cookies.get('user_id')
  // console.log(user_id)
  // let country_code = cookies.get('country_code')
  // let country_code = getCookie('country_code')
  // let user_id = getCookie('user_id')

  // function get_all() {
  //   let all_news_url = `${BASE_URL}/v1/Web/Sections?current_country=${get_country_code()}&userId=${user_id}`
  //   axios.get(all_news_url).then((res) => {
  //     // setAll_news(res.data.data)
  //     // Convert API Data From (Object To Array)
  //     let keys = Object.keys(res.data.data)
  //     let custom_array = []
  //     keys.map((item) => {
  //       custom_array.push(res.data.data[item])
  //     })
  //     setAll_news(custom_array)
  //   })
  // }
  // get_all()
  // useEffect(() => {

  // }, [country_code])
  // console.log(all_news)
  // all_news.map((item) => {
  //   item.is_subscribed !== null &&
  //     item.is_subscribed == true &&
  //     console.log(item.is_subscribed)
  // })

  // console.log('C.C -> ', getCookie('country'))
  // console.log('U.ID -> ', user_id)

  // Function Returned Background Image Based on Country Code
  // let bg_image = 'bg-kuwait'
  // const get_bg_image = () => {
  //   if (country_code?.includes('JO')) {
  //     return (bg_image = 'bg-jordan')
  //   } else if (country_code?.includes('SA')) {
  //     return (bg_image = 'bg-saudi')
  //   } else if (country_code?.includes('EG')) {
  //     return (bg_image = 'bg-egypt')
  //   } else {
  //     return (bg_image = 'bg-kuwait')
  //   }
  // }
  // get_bg_image()

  return <>{/* <p>hello</p> */}</>
}
export default index
/*
         <>
            <Category_news
              loading="eager"
              title={'أهم الأخبار'}
              category_news={props.all_news[0]}
              user_id={' '}
              subs={null}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />
            <Category_news
              loading="lazy"
              title={'  الشأن الدولي'}
              category_news={props.all_news[11]}
              user_id={' '}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يحدث حول العالم '}
            />
            <Category_news
              loading="lazy"
              title={' الصحه'}
              category_news={props.all_news[4]}
              user_id={' '}
              subs={true}
              bg_color={'bg-BLUE'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الصحه من أهم المصادر'}
            />
            <Voice
              loading="lazy"
              title={'الصوتيات '}
              news_one={props.all_news[6]}
              news_two={props.all_news[6]}
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
              category_news={props.all_news[12]}
              user_id={' '}
              subs={true}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
            />
            <Category_news
              loading="lazy"
              title={' لايف ستايل'}
              category_news={props.all_news[16]}
              user_id={' '}
              subs={true}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />
            <Category_news
              loading="lazy"
              title={' غزو أوكرانيا'}
              category_news={props.all_news[8]}
              user_id={' '}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يخص أحداث غزو أوكرانيا'}
            />

            <Category_news
              loading="lazy"
              title={'اخبار الفن'}
              category_news={props.all_news[15]}
              user_id={' '}
              subs={true}
              bg_color={'bg-BLUE'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الفن من أهم المصادر'}
            />
            <Category_news
              loading="lazy"
              title={' مال وأعمال'}
              category_news={props.all_news[7]}
              user_id={' '}
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
              category_news={props.all_news[5]}
              user_id={' '}
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
              category_news={props.all_news[14]}
              user_id={' '}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يحدث حول العالم '}
            />
            <Category_news
              loading="lazy"
              title={' رياضه'}
              category_news={props.all_news[3]}
              user_id={' '}
              subs={true}
              bg_color={'bg-BLUE'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الرياضه حول العالم'}
            />
            <Category_news
              loading="lazy"
              title={' العاب'}
              category_news={props.all_news[13]}
              user_id={' '}
              subs={true}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={'جميع ما يخص عالم الالعاب بين يديك'}
            />
            <Category_news
              loading="lazy"
              title={' الخليج العربي '}
              category_news={props.all_news[10]}
              user_id={' '}
              subs={true}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يخص أحداث الخليج العربي'}
            />
            <Footer loading="lazy" />
          </>

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
