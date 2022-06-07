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
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )
  const cookies = new Cookies(req, res)
  // let user_id = cookies.get('user_id')
  const register_user = async () => {
    console.log('111111111111')
    try {
      let device_id = null
      console.log('2222222222222222')
      if ('device_id' in localStorage) {
        device_id = localStorage.getItem('device_id')
        console.log('33333333333333')
      } else {
        device_id = uuidv4()
        console.log('44444444444444444444')
      }
      axios
        .post(`${BASE_URL}/v1/Users/`, {
          device_id: device_id,
          device_model_type: '2022',
          device_operating_system: 'web',
          current_version_app: '1.0.0',
          device_type: 'WEB',
        })
        .then(function (response) {
          console.log('5555555555555555555')
          localStorage.setItem('device_id', device_id)
          setCookies('device_id', device_id)
          setCookies('user_token', response.data.data.user_token)
          setCookies('user_id', response.data.data._id)
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  }

  // Get Country Code
  const country_code_url = 'https://api.ipregistry.co/?key=rxw4ldwhlsthgalj'
  const country_code_res = await fetch(country_code_url)
  const country_code = await country_code_res.json()
  // const ready_country_code = country_code.country_code
  console.log(country_code.location.country.code)
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

  // let user_token = cookies.get('user_token')

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
  // console.log('=== ', all_news_url)
  // // Get Logaimat API
  // const LoqaimatDataReq = axios({
  //   method: 'GET',
  //   url: `${BASE_URL}/v1/Web/Loqaimat`,
  //   headers: {
  //     Authorization: `Basic ${user_token}`,
  //   },
  // })

  // const loqaimat = await LoqaimatDataReq
  //return props
  // let user_id = cookies.get('user_id')

  return {
    props: {
      all: '',
      country_code: country_code?.location?.country.code,
      // loqaimat: loqaimat.data,
      all_news: custom_array,
      // userid: user_id,
    },
  }
}
// typeof window !== 'undefined' &&
//   console.log(window.localStorage.getItem('user_id'))
const index = (props) => {
  const [all_news, setAll_news] = useState([])
  // const cookies = new Cookies(req, res)
  // let user_id = cookies.get('user_id')
  // console.log(user_id)
  // let country_code = cookies.get('country_code')
  let country_code = getCookie('country_code')
  let user_id = getCookie('user_id')

  useEffect(() => {
    let all_news_url = `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}`
    axios.get(all_news_url).then((res) => {
      // setAll_news(res.data.data)
      // Convert API Data From (Object To Array)
      let keys = Object.keys(res.data.data)
      let custom_array = []
      keys.map((item) => {
        custom_array.push(res.data.data[item])
      })
      setAll_news(custom_array)
    })
  }, [user_id])
  // console.log(all_news[0])
  return (
    <React.Fragment>
      {console.log(props.country_code)}
      {/* {console.log(props.all_news)} */}
      <HeadComp />
      <div dir="rtl" id="project_body" className="bg-white text-black">
        <Nav />
        {/* {console.log(user_id)} */}
        {all_news[0]?.data && (
          <>
            <Category_news
              loading="eager"
              title={'أهم الأخبار'}
              category_news={all_news[0]}
              user_id={user_id}
              subs={null}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />

            {all_news[1].data.length > 4 ? (
              <section className="mt-6 bg-Purp400 pb-8">
                <Colored
                  loading="lazy"
                  title={'مخصص لك'}
                  important_news={all_news[1]}
                  user_id={user_id}
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
            ) : null}

            <Category_news
              loading="lazy"
              title={'  الشأن الدولي'}
              category_news={all_news[11]}
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
              subs={true}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />
            <Category_news
              loading="lazy"
              title={' غزو أوكرانيا'}
              category_news={all_news[8]}
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
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
              user_id={user_id}
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
