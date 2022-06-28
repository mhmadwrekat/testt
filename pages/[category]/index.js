// Library imports
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../../config/config'
import moment from 'moment'
import 'moment/locale/ar'
import axios from 'axios'

// component imports
const StoryShow = dynamic(() =>
  import('../../components/appleTemplate/childComponent/StoryShow')
)
const MenuThreeDot = dynamic(() =>
  import('../../components/appleTemplate/childComponent/MenuThreeDot')
)
const HeadComp = dynamic(() => import('../../components/page/HeadComp'))
const Nav = dynamic(() => import('../../components/page/Nav'))
const Footer = dynamic(() => import('../../components/page/Footer'))
const AllData = dynamic(() =>
  import('../../components/appleTemplate/childComponent/AllData')
)
const CategorySkeleton = dynamic(() =>
  import('../../components/Skeletons/CategorySkeleton')
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
  const [searches, setSearches] = useState(false)
  const [valid_category, setValidCategory] = useState(false)
  const [valid_story, setValidStory] = useState(false)

  const categories = [
    {
      name: 'الصحة',
      id: '5e5239f352561e1659664a0d',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
      fill: 'fill-BLUE',
    },
    {
      name: 'أخبار_الفن',
      id: '618a4c3e1c504ea8f91aae2f',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
      fill: 'fill-BLUE',
    },
    {
      name: 'رياضة',
      id: '5e4e90ac52561e16596649f9',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
      fill: 'fill-BLUE',
    },
    {
      name: 'لايف_ستايل',
      id: '5e523b5752561e1659664a0f',
      theme: 'bg-RED',
      text: 'text-RED',
      fill: 'fill-RED',
    },
    {
      name: 'أهم_الأخبار',
      id: 'أهم الأخبار',
      theme: 'bg-RED',
      text: 'text-RED',
      fill: 'fill-RED',
    },
    {
      name: 'ترند',
      id: '5e52369452561e1659664a09',
      theme: 'bg-RED',
      text: 'text-RED',
      fill: 'fill-RED',
    },
    {
      name: 'ألعاب',
      id: '620ba9f72429d569f754dc17',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
      fill: 'fill-GREEN',
    },
    {
      name: 'تكنولوجيا',
      id: '618a4c6d1c504ea8f91aae30',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
      fill: 'fill-GREEN',
    },
    {
      name: 'مال_وأعمال',
      id: '5e5239dd52561e1659664a0c',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
      fill: 'fill-GREEN',
    },
    {
      name: 'غزو_أوكرانيا',
      id: '62177bdd42a1b268827e388b',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
    },
    {
      name: 'الخليج_العربي',
      id: '5e4e770752561e16596649f6',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
    },
    {
      name: 'الشأن_الدولي',
      id: '5e5236c052561e1659664a0a',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
    },
    {
      name: 'الشرق_الاوسط',
      id: '5e64ea3452561e1659664abb',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
    },
    {
      name: 'مخصص_لك',
      id: 'مخصص لك',
      theme: 'bg-Purp200',
      text: 'text-Purp200',
      fill: 'fill-Purp200',
    },

    {
      name: 'يدور_حولك',
      id: 'يدور حولك',
      theme: 'bg-Purp100',
      text: 'text-Purp100',
      fill: 'fill-Purp100',
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
  const category_id = (category) => {
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
  const category_fill = (category) => {
    let ready = 'fill-Purp300'
    categories.map((item) => {
      if (item.name === category) {
        ready = item.fill
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
  const is_valid_category = (category) => {
    let custom = null
    categories.map((item) => {
      if (item.name === category) {
        custom == false
        setValidCategory(true)
        setValidStory(false)
      }
    })
    if (custom === false) {
      setValidStory(true)
    }
    if (category.length > 15) {
      setValidStory(true)
    }
  }

  // Function Get all News
  const get_all_news_category = async () => {
    router.query.category &&
      axios
        .get(
          `${BASE_URL}/v1/Web/Section?current_country=${country_code}&userId=${user_id}&category_id=${category_id(
            router.query.category
          )}`
        )
        .then((res) => {
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
    router.query.category && is_valid_category(router.query.category)
    typeof window !== 'undefined'
      ? setUserId(localStorage.getItem('user_id'))
      : ''
    typeof window !== 'undefined'
      ? setCountryCode(localStorage.getItem('country_code'))
      : ''

    valid_category ? get_all_news_category() : null
  }, [valid_category, valid_story, router.query.category])

  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <HeadComp />
        <Nav setSearches={setSearches} searches={searches} />
        {searches ? null : valid_category ? (
          all_news ? (
            <section className="text-black mx-auto w-11/12 bg-white lg:w-10/12 lg:pt-10">
              <div className="flex justify-between">
                <div className="my-3 mt-3 lg:mt-4">
                  <div className="flex">
                    <p
                      className={`${category_text(
                        router.query.category
                      )} mt-5 font-TSExtra text-2xl lg:text-4xl`}
                    >
                      {title}{' '}
                    </p>
                  </div>
                </div>
              </div>{' '}
              <section className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-16">
                {all_news?.slice(0, 3).map((item) => {
                  return (
                    <section className="" key={item?._id}>
                      <div
                        className="rounded-lg bg-GRAY100 shadow-lg"
                        id="card"
                      >
                        <div>
                          <p
                            className={`${category_theme(
                              router.query.category
                            )} rounded-t-md py-3 text-right font-TSSemi text-base text-white hover:underline lg:pr-5`}
                          ></p>{' '}
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
                            <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-28 lg:pt-1.5 lg:text-sm">
                              {item.stories_content}
                            </div>
                          </div>
                        </section>

                        <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                          <p>
                            <b className=" text-red-800 font-TSExtra"></b>
                          </p>
                        </div>
                        <div className="mx-2.5 flex justify-between py-1.5 lg:pt-2">
                          <p
                            className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY400 hover:text-RED`}
                          ></p>{' '}
                          <MenuThreeDot
                            id={item?._id}
                            title_color={'text-Purp100'}
                            category={item?.primary_category[0]?.category_name}
                            story={item?.stories_headlines}
                            fill={category_fill(router.query.category)}
                            user_id={user_id}
                            story_id={item?._id}
                          />
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
                fill={category_fill(router.query.category)}
                user_id={user_id}
                replace={true}
              />
            </section>
          ) : (
            <CategorySkeleton />
          )
        ) : (
          <StoryShow />
        )}
      </div>
      <div className="py-4"></div>
      <Footer />
    </React.Fragment>
  )
}

export default index
