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
const Arround_you = dynamic(() =>
  import('../components/apple_template/Arround_you')
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
// const One = dynamic(() => import('../components/1'))

import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'
// Get Server Side Function
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )
  // Get Logaimat API
  const cookies = new Cookies(req, res)
  let user_token = cookies.get('user_token')
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
      loqaimat: loqaimat.data,
    },
  }
}

const index = (props) => {
  // Declare State
  const [country_code, set_country_code] = useState()
  const [user_id, set_user_id] = useState()
  const [all_news, setAll_news] = useState()
  const [bg_image, setBg_image] = useState('bg-kuwait')

  // Function Get User Info From LocalStorage else From API
  const register_user = async () => {
    try {
      let device_id = null
      if ('device_id' in localStorage) {
        // console.log('Not Get User ID')
        device_id = localStorage.getItem('device_id')
        set_user_id(localStorage.getItem('user_id'))
      } else {
        device_id = uuidv4()
        axios
          .post(`${BASE_URL}/v1/Users/`, {
            device_id: device_id,
            device_model_type: '2022',
            device_operating_system: 'web',
            current_version_app: '1.0.0',
            device_type: 'WEB',
          })
          .then(function (response) {
            // console.log('Get User Id')
            localStorage.setItem('device_id', device_id)
            localStorage.setItem('user_token', response.data.data.user_token)
            localStorage.setItem('user_id', response.data.data._id)
            setCookies('device_id', device_id)
            setCookies('user_token', response.data.data.user_token)
            setCookies('user_id', response.data.data._id)
            set_user_id(response.data.data._id)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Function Get Country Code From LocalStorage else From API
  const get_country = async () => {
    getCookie('country_code')
      ? set_country_code(getCookie('country_code'))
      : axios.get('https://geolocation-db.com/json/').then((res) => {
          // console.log('Get Country Code')
          setCookies('country_code', res.data.country_code)
          localStorage.setItem('country_code', res.data.country_code)
          set_country_code(res.data.country_code)
        })
  }

  // Function Get all News
  const get_all = async () => {
    axios
      .get(
        `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}`
      )
      .then((res) => {
        // Convert API Data From (Object To Array)
        let keys = Object.keys(res.data.data)
        let custom_array = []
        keys.map((item) => {
          custom_array.push(res.data.data[item])
        })
        setAll_news(custom_array)
      })
  }

  // Function Returns Background Image Based on Country Code
  const get_bg_image = async () => {
    if (country_code?.includes('JO')) {
      setBg_image('bg-jordan')
    } else if (country_code?.includes('SA')) {
      setBg_image('bg-saudi')
    } else if (country_code?.includes('EG')) {
      setBg_image('bg-egypt')
    }
  }
  // Call All Functions
  useEffect(() => {
    register_user()
    get_country()
    get_all()
    get_bg_image()
  }, [country_code, user_id])

  return (
    <React.Fragment>
      <HeadComp />
      <div
        dir="rtl"
        id="project_body"
        className="bg-white text-black"
        translate="no"
      >
        <Nav />

        {all_news && (
          <React.Fragment>
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
            {all_news[1]?.data?.length > 4 ? (
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
              subs={all_news[11]?.is_subscribed}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يحدث حول العالم '}
            />
            <div id="الصحه">
              <Category_news
                loading="lazy"
                title={'الصحه'}
                category_news={all_news[4]}
                user_id={user_id}
                subs={all_news[4]?.is_subscribed}
                bg_color={'bg-BLUE'}
                title_color={'text-BLUE'}
                fill_color={'fill-BLUE'}
                description={
                  'جميع الأخبار المتعلقة في عالم الصحه من أهم المصادر'
                }
              />
            </div>

            <section
              className={`${bg_image} mt-6	bg-no-repeat pb-8 lg:bg-contain`}
            >
              {/* bg-auto bg-top */}
              <Arround_you
                loading="lazy"
                title={'يدور حولك'}
                important_news={all_news[0]}
                user_id={user_id}
                card_color={'bg-GRAY100'}
                theme={'bg-Purp100'}
                text_color={'text-GRAY100'}
                fill_color={'fill-Purp100'}
                description={' جميع ما يدور من حولك من أخبار و مواضيع'}
              />
            </section>
            {all_news[9]?.data?.length > 3 && (
              <Video
                title={'الأكثر مشاهدة'}
                category_news={all_news[9]}
                user_id={user_id}
                subs={null}
                bg_color={'bg-Purp300'}
                title_color={'text-Purp300'}
                fill_color={'fill-Purp300'}
                description={'بطريقة جميلة يمكنك مشاهدة الأخبار'}
              />
            )}
            <Category_news
              loading="lazy"
              title={'اخبار الفن'}
              category_news={all_news[15]}
              user_id={user_id}
              subs={all_news[15]?.is_subscribed}
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
              subs={all_news[7]?.is_subscribed}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={
                'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
              }
            />
            <div id="اوكرانيا">
              <Category_news
                loading="lazy"
                title={' غزو أوكرانيا'}
                category_news={all_news[8]}
                user_id={user_id}
                subs={all_news[8]?.is_subscribed}
                bg_color={'bg-YELLOW'}
                title_color={'text-YELLOW'}
                fill_color={'fill-YELLOW'}
                description={'جميع ما يخص أحداث غزو أوكرانيا'}
              />
            </div>
            <div id="لقيمات">
              <Logaimat
                loading="lazy"
                title={'لقيمات'}
                important_news={props?.loqaimat?.data}
                subs={null}
                title_color={'text-SKY'}
                theme={'bg-SKY'}
                card_color={'bg-GRAY100'}
                fill_color={'fill-SKY'}
                desc_color={'text-GRAY400'}
                text_color={'text-black'}
                description={'بطريقة جميلة يمكنك قرائه المواضيع'}
              />
            </div>

            <div id="ترند">
              <Category_news
                loading="lazy"
                title={' ترند'}
                category_news={all_news[5]}
                user_id={user_id}
                subs={all_news[5]?.is_subscribed}
                bg_color={'bg-RED'}
                title_color={'text-RED'}
                fill_color={'fill-RED'}
                description={
                  'جميع الأخبار المتعلقة في عالميات الترند من أهم المصادر'
                }
              />
            </div>
            <Voice
              loading="lazy"
              title={'الصوتيات'}
              news_one={all_news[6]}
              user_id={user_id}
              subs={null}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              card_color={'bg-GRAY100'}
              desc_color={'text-GRAY400'}
              theme={'bg-YELLOW'}
              description={'استمع للاخبار الصوتيه الاكثر استماعا على الزبده'}
            />
            <Category_news
              loading="lazy"
              title={'العاب'}
              category_news={all_news[13]}
              user_id={user_id}
              subs={all_news[13]?.is_subscribed}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={'جميع ما يخص عالم الالعاب بين يديك'}
            />
            <div id="الخليج العربي">
              <Category_news
                loading="lazy"
                title={' الخليج العربي '}
                category_news={all_news[10]}
                user_id={user_id}
                subs={all_news[10]?.is_subscribed}
                bg_color={'bg-YELLOW'}
                title_color={'text-YELLOW'}
                fill_color={'fill-YELLOW'}
                description={'جميع ما يخص أحداث الخليج العربي'}
              />
            </div>

            <div id="الرياضه">
              <Category_news
                loading="lazy"
                title={' رياضه'}
                category_news={all_news[3]}
                user_id={user_id}
                subs={all_news[3]?.is_subscribed}
                bg_color={'bg-BLUE'}
                title_color={'text-BLUE'}
                fill_color={'fill-BLUE'}
                description={'جميع الأخبار المتعلقة في عالم الرياضه حول العالم'}
              />
            </div>
            <Category_news
              loading="lazy"
              title={' لايف ستايل'}
              category_news={all_news[16]}
              user_id={user_id}
              subs={all_news[16]?.is_subscribed}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />
            <Category_news
              loading="lazy"
              title={'  الشرق الأوسط'}
              category_news={all_news[14]}
              user_id={user_id}
              subs={all_news[14]?.is_subscribed}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يحدث حول العالم '}
            />
            <Category_news
              loading="lazy"
              title={' تكنولوجيا'}
              category_news={all_news[12]}
              user_id={user_id}
              subs={all_news[12]?.is_subscribed}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
            />
            <Footer loading="lazy" />
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  )
}
export default index
