import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import FakeData from '../FakeData.json'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../../config/config'
import moment from 'moment'
import 'moment/locale/ar'
import axios from 'axios'
import Like from '../../components/appleTemplate/childComponent/Like'
const HeadComp = dynamic(() => import('../../components/page/HeadComp'))
const Nav = dynamic(() => import('../../components/page/Nav'))
const AllData = dynamic(() =>
  import('../../components/appleTemplate/childComponent/AllData')
)
const index = () => {
  const router = useRouter()
  // Declare State
  const [country_code, setCountryCode] =
    typeof window !== 'undefined'
      ? useState(localStorage.getItem('country_code'))
      : useState()
  const [user_id, setUserId] =
    typeof window !== 'undefined'
      ? useState(localStorage.getItem('user_id'))
      : useState()
  const [all_news, setAllNews] = useState()

  //   let category_news = all_news[0]
  //   let user_id = user_id
  let subs = !null
  let subscripe = true
  const categories = [
    {
      name: 'الصحه',
      id: '5e5239f352561e1659664a0d',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
    },
    {
      name: 'اخبار_الفن',
      id: '618a4c3e1c504ea8f91aae2f',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
    },
    {
      name: 'رياضة',
      id: '5e4e90ac52561e16596649f9',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
    },
    {
      name: 'لايف_ستايل',
      id: '5e523b5752561e1659664a0f',
      theme: 'bg-RED',
      text: 'text-RED',
    },
    {
      name: 'أهم_الأخبار',
      id: 'أهم الأخبار',
      theme: 'bg-RED',
      text: 'text-RED',
    },
    {
      name: 'ترند',
      id: '5e52369452561e1659664a09',
      theme: 'bg-RED',
      text: 'text-RED',
    },
    {
      name: 'العاب',
      id: '620ba9f72429d569f754dc17',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
    },
    {
      name: 'تكنولوجيا',
      id: '618a4c6d1c504ea8f91aae30',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
    },
    {
      name: 'مال_وأعمال',
      id: '5e5239dd52561e1659664a0c',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
    },
    {
      name: 'غزو_أوكرانيا',
      id: '62177bdd42a1b268827e388b',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
    },
    {
      name: 'الخليج_العربي',
      id: '5e4e770752561e16596649f6',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
    },
    {
      name: 'الشأن_الدولي',
      id: '5e5236c052561e1659664a0a',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
    },
    {
      name: 'الشرق_الاوسط',
      id: '5e64ea3452561e1659664abb',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
    },
    {
      name: 'مخصص_لك',
      id: 'مخصص لك',
      theme: 'bg-Purp200',
      text: 'text-Purp200',
    },

    {
      name: 'يدور_حولك',
      id: 'يدور حولك',
      theme: 'bg-Purp100',
      text: 'text-Purp100',
    },
  ]
  const handle_title_name = (story) => {
    let ready = ''
    if (story.includes('_')) {
      let title = story.replace(/\s+/g, '_')
      ready = `${title.replace('_', ' ')}`
    } else {
      ready = story
    }
    return ready
  }

  let title = router.query.category && handle_title_name(router.query.category)
  // let title = router.query.category

  const valid_category = (category) => {
    let ready = null
    categories.map((item) => {
      if (item.name === category) {
        ready = item.id
      } else {
      }
    })
    return ready
  }
  const category_theme = (category) => {
    let ready = 'bg-Purp300'
    categories.map((item) => {
      if (item.name === category) {
        ready = item.theme
      } else {
      }
    })
    return ready
  }
  const category_text = (category) => {
    let ready = 'text-Purp300'
    categories.map((item) => {
      if (item.name === category) {
        ready = item.text
      } else {
      }
    })
    return ready
  }
  // Function Get all News
  const get_all_news = async () => {
    // console.log(
    //   `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}&category_id=5e4e90ac52561e16596649f9`
    // )
    router.query.category &&
      axios
        .get(
          `${BASE_URL}/v1/Web/Section?current_country=${country_code}&userId=${user_id}&category_id=${valid_category(
            router.query.category
          )}`
        )
        .then((res) => {
          // console.log(res.data)
          // setAllNews(res.data.data)
          // console.log(
          //   `${BASE_URL}/v1/Web/Section?current_country=${country_code}&userId=${user_id}&category_id=${valid_category(
          //     router.query.category
          //   )}`
          // )
          let keys = Object.keys(res.data.data)
          let custom_array = []
          keys.map((item) => {
            custom_array.push(res.data.data[item])
          })
          setAllNews(custom_array)
        })
  }

  // Call All Functions
  useEffect(() => {
    // console.log(valid_category('صحة'))
    typeof window !== 'undefined'
      ? setUserId(localStorage.getItem('user_id'))
      : ''
    typeof window !== 'undefined'
      ? setCountryCode(localStorage.getItem('country_code'))
      : ''
    // get_country()
    // get_background_image()
    get_all_news()
  }, [router.query.category])

  // function to return the youtube code to show the thumbnail
  function retrieve_youtube_code(link) {
    let code = ''
    // check for watch videos
    if (link.includes('watch/')) {
      code = link.split('watch/')[1]
      return code
    } else if (link.includes('watch?')) {
      // check for regular youtube videos
      code = link.split('watch?')[1]
      const youtube_code_for_thumbnail = code?.split('v=')[1]
      return youtube_code_for_thumbnail?.split('&')[0]
    }
    // (link.includes('youtu.be'))
    else {
      // check for Link without watch
      code = link.split('youtu.be/')[1]
      return code
    }
  }

  // console.log('All ->>>>>>>>>>>> ', all_news)
  // console.log('All ->> ', category_theme(router.query.category))
  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <HeadComp />
        <Nav />
        <section className="text-black mx-auto w-11/12 bg-white lg:w-10/12 lg:pt-10">
          <div className="flex justify-between">
            <div className="my-3 mt-3 lg:mt-4">
              <div className="flex">
                {/* {subs !== null &&
                  (subscripe ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                      viewBox="0 0 20 20"
                      fill="#32CD32"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                      viewBox="0 0 20 20"
                      fill="#B0B0B0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))} */}
                <p
                  className={`${category_text(
                    router.query.category
                  )} mt-5 font-TSExtra text-2xl lg:text-4xl`}
                >
                  {title}{' '}
                </p>
              </div>
              {/* {description && (
                <p
                  className={`hidden w-full px-1 pt-1 pb-5 font-TSmedium text-lg text-GRAY400 lg:grid lg:text-xl`}
                >
                </p>
              )} */}
            </div>
          </div>{' '}
          {/* {description && (
            <p
              className={`text-black grid w-10/12 px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
            >
              {description}
            </p>
          )} */}
          {/* key={item?._id} */}
          <section className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-16">
            {all_news?.slice(0, 3).map((item) => {
              return (
                <section className="" key={item?._id}>
                  <div className=" rounded-lg bg-GRAY100 shadow-lg" id="card">
                    <div>
                      <p
                        className={`${category_theme(
                          router.query.category
                        )} rounded-t-md py-3 text-right font-TSSemi text-base text-white hover:underline lg:pr-5`}
                      >
                        {/* {item.section} */}
                      </p>{' '}
                    </div>
                    <section className="grid bg-GRAY100 lg:grid ">
                      <div className="relative w-full lg:w-auto">
                        {item.stories_media_url[0] &&
                          (item.stories_media_url[0].includes('youtube') ||
                          item.stories_media_url[0].includes('youtu.be') ? (
                            <img
                              loading="eager"
                              src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                item.stories_media_url[0]
                              )}/0.jpg`}
                              alt={item.stories_headlines}
                              className="mx-auto h-32 w-full object-cover md:h-full md:w-full lg:h-72 lg:w-full"
                            />
                          ) : (
                            <img
                              loading="eager"
                              src={item.stories_media_url[0]}
                              alt={item.stories_headlines}
                              className="mx-auto h-32 w-full object-cover md:h-full md:w-full lg:h-72 lg:w-full"
                            />
                          ))}

                        {/* <Like
                          user_id="62a0dd4b86fdbd34fc3bad58"
                          story_id="60d9d86c8eeb1109bd6f17ce"
                          isLoved={false}
                        /> */}
                      </div>

                      <div className="hidden justify-between px-2.5 pt-2 font-TSlight text-xs lg:flex">
                        <p>
                          <b className=" text-red-800 font-TSExtra">
                            {item.publisher_name}
                          </b>
                        </p>
                        <p className="font-TSExtra text-GRAY400">
                          قبل {moment(item.published_on).fromNow(true)}
                        </p>
                      </div>

                      <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2">
                        <div className="my-3 mb-2 font-TSExtra text-sm md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-20 lg:text-xl">
                          {item.stories_headlines}
                        </div>
                        <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-36 lg:pt-1.5 lg:text-sm">
                          {item.stories_content}
                        </div>
                      </div>
                    </section>

                    <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                      <p>
                        <b className=" text-red-800 font-TSExtra">
                          {/* {item.logo} */}
                        </b>
                      </p>
                      {/* <p className="font-TSExtra text-GRAY300">{item.time} </p> */}
                    </div>
                    <div className=" mx-auto w-11/12 pt-1 opacity-60"></div>
                    <div className="mx-2.5 flex justify-between py-1.5 lg:pt-2">
                      <p
                        className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY400 hover:text-RED`}
                      ></p>{' '}
                      {/* <MenuThreeDot title_color={title_color} /> */}
                    </div>
                  </div>
                </section>
              )
            })}
          </section>
          <AllData
            data={all_news}
            bg_color={category_theme(router.query.category)}
            category={router.query.category}
          />
        </section>
      </div>
      <div className="py-20"></div>
    </React.Fragment>
  )
}

export default index
/* 
  <div>Category --- {router.query.category}</div>
*/
