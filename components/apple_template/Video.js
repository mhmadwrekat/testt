import React, { useState } from 'react'
import { BASE_URL } from '../../config/config'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/ar'
import Menu_three_dot from './child_comp/Menu_three_dot'
import Like from '../apple_template/child_comp/Like'

const Video = ({
  title,
  title_color,
  category_news,
  bg_color,
  subs,
  description,
  fill_color,
  user_id,
}) => {
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

  // function to handle Subscribe Category & Unsubscribe
  const [subscripe, setSubscripe] = useState(category_news?.is_subscribed)
  const handleSubscripe = (category_id, is_subscribed) => {
    setSubscripe(!subscripe)
    // console.log(category_id, is_subscribed, user_id)
    let url = `${BASE_URL}/v1/Web/Category/Subscribe`
    let data = {
      userId: `${user_id}`,
      category: `${category_id}`,
      isSubscribe: !is_subscribed,
    }
    axios.post(url, data).then((res) => {
      // console.log(res)
    })
  }
  return (
    <React.Fragment>
      {/* {console.log('User_ID = ', user_id)} */}
      <section className="mx-auto w-11/12 lg:w-10/12 lg:pt-10">
        <>
          <div className="flex justify-between">
            <div className="my-3 mt-3 lg:mt-4">
              <div className="flex">
                {subs !== null &&
                  (subscripe ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                      viewBox="0 0 20 20"
                      fill="#32CD32"
                      onClick={() => {
                        handleSubscripe(
                          category_news?.category_id,
                          category_news?.is_subscribed
                        )
                      }}
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
                      onClick={() => {
                        handleSubscripe(
                          category_news?.category_id,
                          category_news?.is_subscribed
                        )
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                <h1
                  className={`${title_color} mt-5 font-TSExtra text-2xl lg:text-4xl`}
                >
                  {title}{' '}
                </h1>
              </div>
              {description && (
                <p
                  className={`hidden w-full px-1 pt-1 pb-5 font-TSmedium text-lg text-GRAY400 lg:grid lg:text-xl`}
                >
                  {description}
                </p>
              )}
            </div>

            <div className="my-1 mt-4 flex lg:mt-5">
              <p className="mt-5 font-TSbold text-lg text-GRAY50 lg:text-xl">
                عرض الجميع
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${fill_color} mt-4 mr-2 h-9 w-9 font-TSbold text-4xl lg:mt-3 lg:h-11 lg:w-11 lg:text-xl`}
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>{' '}
          {description && (
            <p
              className={`text-black grid w-10/12 px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
            >
              {description}
            </p>
          )}
          <section className="w-12/12 lg:w-12/12 mx-auto">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
              {category_news?.data?.slice(0, 4).map((item, key) => {
                return (
                  <section key={item._id}>
                    <div className=" rounded-lg bg-GRAY100 shadow-lg" id="card">
                      <div>
                        <h3
                          className={`${bg_color} text-white rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base hover:underline lg:pr-5`}
                        >
                          {/* {category_news.section_name} */}
                          الفيديوهات
                        </h3>{' '}
                      </div>
                      <section className="flex bg-GRAY100 lg:grid ">
                        <div className="relative mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-auto lg:py-0">
                          {item.stories_media_url[0] &&
                            (item.stories_media_url[0].includes('youtube') ||
                            item.stories_media_url[0].includes('youtu.be') ? (
                              <iframe
                                loading="lazy"
                                src={`https://www.youtube.com/embed/${retrieve_youtube_code(
                                  item.stories_media_url[0]
                                )}`}
                                alt={item.stories_headlines}
                                className="mx-auto h-32 w-40 object-cover md:h-full md:w-full lg:h-60 lg:w-full                                "
                              />
                            ) : (
                              <iframe
                                loading="lazy"
                                src="https://www.youtube.com/embed/65416"
                                alt={item.stories_headlines}
                                className="mx-auto h-32 w-40 object-cover md:h-full md:w-full lg:h-60 lg:w-full"
                              />
                            ))}
                          {/* <Like
                            user_id={user_id}
                            story_id={item._id}
                            isLoved={item.is_loved}
                          /> */}
                        </div>

                        <div className="hidden justify-between px-2.5 pt-2 font-TSlight text-xs lg:flex lg:h-8">
                          <p>
                            <b className=" text-red-800 font-TSExtra">
                              {item.publisher_name}
                            </b>
                          </p>
                          <p className="font-TSExtra text-GRAY400">
                            قبل {moment(item.published_on).fromNow(true)}
                          </p>
                        </div>

                        <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:h-20 lg:px-2 lg:py-2">
                          <div className="my-3 mb-2 font-TSExtra text-sm md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-9 lg:text-lg">
                            {item.stories_headlines}
                          </div>
                        </div>
                      </section>

                      <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                        <p>
                          <b className=" text-red-800 font-TSExtra">
                            {item.publisher_name}
                          </b>
                        </p>
                        <p className="font-TSExtra text-GRAY300">
                          قبل {moment(item.published_on).fromNow(true)}
                        </p>
                      </div>

                      <div className=" mx-auto w-11/12 pt-1 opacity-60"></div>
                      <div className="mx-2.5 flex justify-between pt-1 lg:pt-2">
                        <button
                          className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY400 hover:text-RED`}
                        >
                          اقرا المزيد
                        </button>{' '}
                        {/* <Menu_three_dot title_color={title_color} /> */}
                      </div>
                    </div>
                  </section>
                )
              })}
            </div>
          </section>
        </>
      </section>
    </React.Fragment>
  )
}
export default Video