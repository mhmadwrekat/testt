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
const Footer = dynamic(() => import('../../components/page/Footer'))
const AllData = dynamic(() =>
  import('../../components/appleTemplate/childComponent/AllData')
)
const indexx = () => {
  const router = useRouter()
  const [head_news, setHeadNews] = useState()
  const [related_news, setRelatedNews] = useState()
  let title_color = 'text-RED'
  let bg_color = 'bg-YELLOW'
  // Function Get all News
  const get_all_news = async () => {
    // console.log(
    //   `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}&category_id=5e4e90ac52561e16596649f9`
    // )
    router.query.category &&
      axios
        .get(`${BASE_URL}/v1/Web/Story?title=${router.query.category}`)
        .then((res) => {
          // console.log(res.data.data)
          setHeadNews(res?.data?.data?.story)
          let keys =
            res?.data?.data?.story &&
            Object.keys(res?.data?.data?.relevant_stories)
          let custom_array = []
          keys.map((item) => {
            custom_array.push(res?.data?.data?.relevant_stories[item])
          })
          setRelatedNews(custom_array)
        })
  }
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
  // Call All Functions
  useEffect(() => {
    get_all_news()
  }, [router.query.category])

  // console.log('------1---->>>> ', head_news)

  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <HeadComp />
        <Nav />
        <section className="text-black mx-auto grid w-11/12 pt-10 lg:w-10/12 ">
          <section
            className="grid grid-cols-1 gap-0 bg-GRAY100 shadow-md lg:grid-cols-2 lg:gap-8"
            id="card"
          >
            <section className="">
              <div className="">
                <p
                  className={`rounded-t-md bg-Purp300 py-3 text-right font-TSbold text-base text-white hover:underline lg:pr-8`}
                ></p>{' '}
              </div>
              <div className="relative mx-auto h-72 w-full shadow-md lg:h-96 ">
                {head_news?.stories_media_url[0] &&
                  (head_news?.stories_media_url[0].includes('youtube') ||
                  head_news?.stories_media_url[0].includes('youtu.be') ? (
                    // <iframe
                    //   loading="eager"
                    //   src={`https://www.youtube.com/embed/${retrieve_youtube_code(
                    //     head_news?.stories_media_url[0]
                    //   )}`}
                    //   alt={head_news?.stories_headlines}
                    //   className="relative h-72 w-full object-cover lg:h-full"
                    // />
                    <iframe
                      className="aspect-video h-full w-full rounded-lg shadow-lg"
                      src={`https://www.youtube.com/embed/${retrieve_youtube_code(
                        head_news?.stories_media_url[0]
                      )}`}
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                      loading="eager"
                    ></iframe>
                  ) : (
                    // <iframe
                    //   width="100%"
                    //   className="relative mr-auto h-72 w-full object-cover text-right lg:h-full"
                    //   src={`https://www.youtube.com/embed/${retrieve_youtube_code(
                    //     head_news?.stories_media_url[0]
                    //   )}`}
                    //   alt={head_news?.stories_headlines}
                    //   frameborder="0"
                    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    //   allowfullscreen=""
                    //   loading="eager"
                    // ></iframe>
                    <img
                      loading="eager"
                      src={head_news?.stories_media_url[0]}
                      alt={head_news?.stories_headlines}
                      className="relative h-72 w-full object-cover lg:h-full"
                    />
                  ))}
                {/* <div className="absolute bottom-2 right-2 rounded-full bg-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" h-7 w-7 cursor-pointer"
                    fill="#FF0000"
                    viewBox="0 0 24 24"
                    stroke="#FF0000"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div> */}
              </div>
            </section>
            <section className="">
              <div className="px-2.5 pt-2">
                <div className="mt-3 font-TSExtra text-lg md:text-xl lg:h-28 lg:w-11/12 lg:text-3xl">
                  {head_news?.stories_headlines}
                </div>
                <p className="pt-4 font-TSmedium text-lg lg:grid lg:h-64 lg:pt-0 ">
                  {head_news?.stories_content}
                </p>
              </div>
              <div className=" my-2 flex justify-between px-2.5 font-TSlight text-sm">
                <p>
                  <b className="text-red-800 font-TSbold">
                    {head_news?.publisher_name}
                  </b>
                </p>
                <p className="font-TSbold text-GRAY300">
                  قبل {moment(head_news?.published_on).fromNow(true)}
                </p>
              </div>
              <div className="float-left px-2.5">
                {/* <MenuThreeDot title_color={title_color} /> */}
              </div>
            </section>
          </section>
          <p
            className={`mt-12 mb-3 font-TSExtra text-2xl text-Purp300 lg:text-4xl`}
          >
            أخبار ذات صلة
          </p>
          <AllData
            data={related_news}
            bg_color={'bg-Purp300'}
            category={router.query.news}
          />
        </section>
        {console.log(related_news)}
      </div>
      <div className="py-4"></div>
      <Footer />
    </React.Fragment>
  )
}

export default indexx
