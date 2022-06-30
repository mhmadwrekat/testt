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
      keywords:
        'اخبار الصحة, الصحة الاخبار, اخبار صحة العرب, الصحة الاخبارية, اخبار عاجلة صحة , اخبار محلية صحة, اخبار حكومية صحة ,الصحة, اخبار صحية, اخبار كورونا, قرارات كورونا',
      description: 'تابع اخر أخبار الصحة المحلية والعالمية وتفاصيل كورونا',
      title: 'أخبار الصحة',
    },
    {
      name: 'أخبار_الفن',
      id: '618a4c3e1c504ea8f91aae2f',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
      fill: 'fill-BLUE',
      keywords:
        'اخبار الفن, الاخبار الفن, اخبار فنية, فن الاخبارية, اخبار عاجلة فنانين, اخبار محلية فنية, اخبار فن عربي, اخبار الفن العربية, اخبار الفنانين',
      description: 'تابع اهم اخبار الفن والمشاهير المحلية والعالمية',
      title: 'اخبار الفن والمشاهير',
    },
    {
      name: 'رياضة',
      id: '5e4e90ac52561e16596649f9',
      theme: 'bg-BLUE',
      text: 'text-BLUE',
      fill: 'fill-BLUE',
      keywords:
        'رياضة,sports news,اخبار رياضيه,football news,خبر رياضي,كرة قدم,اخبار كرة قدم,خبر كرة,الرياضه,الاخبار الرياضية',
      description: 'تابع اهم اخبار الرياضة والاندية المحلية والعالمية',
      title: 'اخبار الرياضة',
    },
    {
      name: 'لايف_ستايل',
      id: '5e523b5752561e1659664a0f',
      theme: 'bg-RED',
      text: 'text-RED',
      fill: 'fill-RED',
      keywords:
        'اخبار لايف ستايل, لايف ستايل الاخبار, اخبار لايف ستايل العرب, لايف ستيل يوميات, لايف ستايل الطعام, لايف ستايل الصباح,لايف ستايل, لايف ستايل مشاهير, فيديو لايف ستايل, معلومات لايف ستايل',
      description: 'تابع اخبار لايف ستايل وكل ما يخص حياتك اليومية',
      title: 'اخبار لايف ستايل',
    },
    {
      name: 'أهم_الأخبار',
      id: 'أهم الأخبار',
      theme: 'bg-RED',
      text: 'text-RED',
      fill: 'fill-RED',
      keywords: `
  اخبار,الزبده,Alzubda,عاجل,نبض,العربية, اخبار السعودية,الاخبار,اخبار العالم,اخبار24,الجزيرة,اخبار اليوم,كرة القدم
  الزبدة
  الزبده
  زبد
  الزبد
  سياسه
  سياسة
  اخبار السياسة
 
  اخبار الرياضة السعودية
  اخبار الرياضة الكويتية
  اخبار المغرب
  اخبار العراق
  دبي
  الامارات
  اخبار الامارات
  اخبار الخليج العربي
  صحيفة
  صحف اخبار
  صحيفة الاخبار
  سبق
  عكاظ
  توتر
  تويتر
  تحميل تويتر
  تحميل توتر
  هنجري شارك
  نبض
  مبض
  وظائف الامارات
  خبر عاجل
  خبر
  اخبار المطلاع
  المطلاع
  المعونات
  برنامج اخباري
  الترندات
  مصادر الاخبار
  موقع اخبار
  موقع اخباري
  زبدة الاخبار
  زبدة العالم
  ترند
  اخبار ترند
  الاخبار
  الرواتب
  اقتباسات
  البورصة الكويتية
  البورصة
  حول العالم
  اخبار العالم
  احداث العالم
  عاجل
  يحدث الآن
  الان
  اخبار الكويت
  اخبار السعودية
  اخبار مصر
  الجزيرة
  العربية
  ارقام
  وظيفة
  توظيف
  الاهلي السعودي
  النصر
  البورصة الامريكية
  العملات الرقمية
  عملات مشفرة
  بتكوين
  بتكون
  وفيات
  وفيات اليوم
  اموات اليوم
  موتى اليوم
  اخبار المغرب
  المغرب العربي
  انباء
  اخبار الأردن
  جرائد
  جريدة
  جريده
  جرائد الكويت
  جرائد السعودية
  جرائد السعوديه
  News
  News live
  Newspaper
  News tv
  News live
  Trending now
  Saudi new
  Saudia news
  Saudia new
  Saudia
  oil price
  news live
  World news
  Finance
  Kuwait tv
  Nabd
  New
  Anews
  Indian news
  India news
  Marketing
  Invest
  Investing
  Markets
  India new
  Gulf
  Arabia
  Gcc
  Gulf new
  Gulf news
  Arabia
  Arabia new
  Islam news
  Islam new
  Palestine news
  Olastine new
  Alzubda
  Zubda
  Alzubdah
  Zebda
  Alzebda
  Alzubdah
  Zobda
  alzobda
  `,
      description: 'تابع أهم الاخبار التي تدور حولك',
      title: 'أهم الأخبار',
    },
    {
      name: 'ترند',
      id: '5e52369452561e1659664a09',
      theme: 'bg-RED',
      text: 'text-RED',
      fill: 'fill-RED',
      keywords:
        'اخبار ترند, ترند الاخبار, اخبار ترند العرب, ترند الاخبارية, اخبار عاجلة ترند, اخبار محلية ترند, اخبار حكومية ترند,ترند, ترند مشاهير, فيديو ترند, صور ترند',
      description: 'تابع اخر اخبار الترندات',
      title: 'اخبار ترند',
    },
    {
      name: 'ألعاب',
      id: '620ba9f72429d569f754dc17',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
      fill: 'fill-GREEN',
      keywords:
        'اخبار التكنولوجيا والالعاب , الاخبار التكنولوجية, اخبار العاب, العاب الاخبارية, اخبار عاجلة العاب, اخبار محلية العاب, اخبار العاب عربي, اصدارات العاب, اخر اخبار الالعاب',
      description: 'تابع اخر اخبار الالعاب وكل ما هو جديد في عالم الألعاب',
      title: 'اخبار الالعاب',
    },
    {
      name: 'تكنولوجيا',
      id: '618a4c6d1c504ea8f91aae30',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
      fill: 'fill-GREEN',
      keywords:
        'اخبار التكنولوجيا , الاخبار التكنولوجية, اخبار تكنولوجية, تكنولوجيا الاخبارية, اخبار عاجلة تكنولوجية, اخبار محلية تكنولوجيا, اخبار تكنولوجيا عربي, اصدارات تكنولوجيا, اخر اخبار التكنولوجيا',
      description: 'تابع اهم اخبار التكنولوجيا المحلية والعالمية',
      title: 'اخبار التكنولوجيا',
    },
    {
      name: 'مال_وأعمال',
      id: '5e5239dd52561e1659664a0c',
      theme: 'bg-GREEN',
      text: 'text-GREEN',
      fill: 'fill-GREEN',
      keywords:
        'اخبار اقتصاد, مال وأعمال الاخبار, اخبار العملات الرقمية , اخبار تداول العملات الرقمية , اخبار عاجلة التداول, اخبار محلية اقتصادية, اخبار حكومية اقتصادية,العملات الرقمية, العملات الرقمية والتداول العالمي, اخبار التكنولوجيا, اخبار تكنولوجيا واقتصاد',
      description: 'تابع اخر اخبار الاقتصاد وتداول العملات الرقمية',
      title: 'اخبار مال وأعمال',
    },
    {
      name: 'غزو_أوكرانيا',
      id: '62177bdd42a1b268827e388b',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
      keywords:
        'اخبار سياسية, غزو أوكرانيا الاخبار, اخبار الحروب , اخبار الغزو الروسي , اخبار عاجلة غزو أوكرانيا, اخبار عالمية , اخبار حكومية سياسية,غزو أوكرانيا وامريكا, غزو أوكرانيا, روسيا, الحرب العالمية, اخبار غزو أوكرانيا وروسيا, اخبار غزو أوكرانيا ',
      description: 'تابع اخر اخبار غزو أوكرانيا',
      title: ' اخبار غزو أوكرانيا',
    },
    {
      name: 'الخليج_العربي',
      id: '5e4e770752561e16596649f6',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
      keywords:
        'اخبار الخليج العربي, الاخبار في الخليج العربي, اخبار العرب, الخليج العربي الاخبارية, اخبار عاجلة الخليج العربي, اخبار محلية في الخليج العربي, اخبار حكومية الخليج العربي, قرارات الحكومة في الخليج العربي, شروط السفر الى الخليج العربي',
      description: 'تابع اهم اخبار دول الخليج العربي',
      title: ' اخبار الخليج العربي',
    },
    {
      name: 'الشأن_الدولي',
      id: '5e5236c052561e1659664a0a',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
      keywords:
        'اخبار الشأن الدولي, الشأن الدولي الاخبار, اخبار الشأن الدولي,  الشأن الدولي الاخبارية, اخبار عاجلة  الشأن الدولي, اهم اخبار الشأن الدولي, اخبار حكومية  الشأن الدولي, الشأن الدولي, قرارات حكومية دولية',
      description: 'تابع اهم اخبار الشأن الدولي',
      title: 'اخبار الشأن الدولي',
    },
    {
      name: 'الشرق_الاوسط',
      id: '5e64ea3452561e1659664abb',
      theme: 'bg-YELLOW',
      text: 'text-YELLOW',
      fill: 'fill-YELLOW',
      keywords:
        'اخبار الشرق الأوسط, الشرق الأوسط الاخبار, اخبار الشرق الأوسط العرب,اخبار الشرق الأوسط عاجل, الشرق الأوسط الاخبارية, اخبار عاجلة الشرق الأوسط,الشرق الأوسط, الشرق الأوسط قرارات حكومية',
      description: 'تابع اخر اخبار الشرق الأوسط',
      title: 'اخبار الشرق الأوسط',
    },
    {
      name: 'مخصص_لك',
      id: 'مخصص لك',
      theme: 'bg-Purp200',
      text: 'text-Purp200',
      fill: 'fill-Purp200',
      keywords:
        'اخبار ترند, ترند الاخبار, اخبار ترند العرب, ترند الاخبارية, فن الاخبارية, اخبار عاجلة فنانين, اخبار محلية فنية, اخبار فن عربي,اخبار عاجلة ترند, اخبار محلية ترند, الحرب العالمية, اخبار غزو أوكرانيا وروسي, اهم اخبار الشأن الدولي, اخبار حكومية  الشأن الدولي,اخبار الشرق الأوسط, الشرق الأوسط الاخبار, اخبار الشرق الأوسط العرب,اخبار الشرق الأوسط عاجل,, اخبار محلية صحة, اخبار حكومية صحة ,الصحة, اخبار صحية, اخبار كورونا الشرق الأوسط الاخبارية, اخبار عاجلة الشرق الأوسط,الشرق الأوسط, الشرق الأوسط قرارات حكومية',
      description:
        'الأخبار المقترحه لك بناء على المواضيع او الفئات الاخبارية التي تم قرائتها',
      title: 'اخبار مخصصة لك',
    },

    {
      name: 'يدور_حولك',
      id: 'يدور حولك',
      theme: 'bg-Purp100',
      text: 'text-Purp100',
      fill: 'fill-Purp100',
      keywords:
        'اخبار ترند, ترند الاخبار, اخبار ترند العرب, ترند الاخبارية, فن الاخبارية, اخبار عاجلة فنانين, اخبار محلية فنية, اخبار فن عربي,اخبار عاجلة ترند, اخبار محلية ترند, الحرب العالمية, اخبار غزو أوكرانيا وروسي, اهم اخبار الشأن الدولي, اخبار حكومية  الشأن الدولي,اخبار الشرق الأوسط, الشرق الأوسط الاخبار, اخبار الشرق الأوسط العرب,اخبار الشرق الأوسط عاجل,, اخبار محلية صحة, اخبار حكومية صحة ,الصحة, اخبار صحية, اخبار كورونا الشرق الأوسط الاخبارية, اخبار عاجلة الشرق الأوسط,الشرق الأوسط, الشرق الأوسط قرارات حكومية',
      description:
        'تابع أهم الاخبار التي تدور حولك بناء على المنطقة المحيطة بك',
      title: 'اخبار تدور حولك',
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
  const category_keywords = (category) => {
    let keywords = ''
    categories.map((item) => {
      if (item.name === category) {
        keywords = item.keywords
      } else {
      }
    })
    return keywords
  }
  const category_description = (category) => {
    let description = ''
    categories.map((item) => {
      if (item.name === category) {
        description = item.description
      } else {
      }
    })
    return description
  }
  const category_title = (category) => {
    let title = ''
    categories.map((item) => {
      if (item.name === category) {
        title = item.title
      } else {
      }
    })
    return title
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

  // console.log(category_keywords('الصحة'))
  // console.log(category_description('الصحة'))
  // console.log(category_title('الصحة'))
  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <Nav setSearches={setSearches} searches={searches} />
        {searches ? null : valid_category ? (
          all_news ? (
            <section className="text-black mx-auto w-11/12 bg-white lg:w-10/12 lg:pt-10">
              <HeadComp
                headKeywords={category_keywords(router.query.category)}
                headDescription={category_description(router.query.category)}
                headTitle={category_title(router.query.category)}
              />
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
