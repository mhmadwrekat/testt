import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/ar'
import { BASE_URL } from '../../config/config'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
const MenuThreeDot = dynamic(() => import('./childComponent/MenuThreeDot'))
const Like = dynamic(() => import('./childComponent/Like'))
const ViewImpression = dynamic(() => import('./childComponent/ViewImpression'))
const ReadImpression = dynamic(() => import('./childComponent/ReadImpression'))
const Colored = ({
  title,
  important_news,
  desc_color,
  user_id,
  fill_color,
  text_color,
  card_color,
  theme,
  description,
}) => {
  const router = useRouter()

  const important_news_img =
    important_news?.data[0]?.stories_media_url.length > 0
      ? important_news.data[0].stories_media_url[0]
      : null

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

  // function to handle Love & Unlove for First News
  const [like, setLike] = useState(important_news?.data[0]?.is_loved)
  const handle_like = (story_id, is_loved) => {
    // console.log(story_id, is_loved)
    let config = {
      method: 'PUT',
      baseURL: `${BASE_URL}`,
      url: `/v1/Web/Story/Love`,
      data: {
        userId: user_id,
        story: story_id,
        isLove: !is_loved,
      },
    }
    axios(config).then((res) => {
      // console.log(res)
      setLike(!like)
    })
    // return !is_loved
  }
  // Function to handle specific Redirection
  const handle_news_redirection = (story) => {
    if (story.includes('%')) {
      let title = story.replace(/\s+/g, '_')
      // console.log(`/${title.replace('%', '_')}`)
      router.push(`/${title.replace('%', '_')}`)
    } else if (story.includes(' ')) {
      let title = story.replace(/\s+/g, '_')
      router.push(`/${title.replace(' ', '_')}`)
    } else {
      router.push(story)
    }
  }
  let stories = important_news && [important_news?.data[0]?._id]
  const handle_news_redirection_story = (category, titles) => {
    let ready_category = ''
    let ready_title = ''
    if (category.includes('%')) {
      let title = category.replace(/\s+/g, '_')
      // console.log(`/${title.replace('%', '_')}`)
      ready_category = `${title.replace('%', '_')}`
    } else if (category.includes(' ')) {
      let title = category.replace(/\s+/g, '_')
      ready_category = `${title.replace(' ', '_')}`
    } else {
      ready_category = category
    }
    if (titles.includes('%')) {
      let title = titles.replace(/\s+/g, '_')
      // console.log(`/${title.replace('%', '_')}`)
      ready_title = `${title.replace('%', '_')}`
    } else if (titles.includes(' ')) {
      let title = titles.replace(/\s+/g, '_')
      ready_title = `${title.replace(' ', '_')}`
    } else {
      ready_title = titles
    }
    if (titles.includes('?')) {
      let title = titles.replace(/\s+/g, '')
      ready_title = `${title.replace('?', '_')}`
    }

    router.push(`/${ready_title}/${ready_category}`)
    // console.log(ready_title)
  }
  return (
    <React.Fragment>
      <section className={`${text_color} mx-auto w-11/12 lg:w-10/12`}>
        <React.Fragment>
          <div className="flex justify-between">
            <div className="my-3 mt-1 lg:mt-2">
              <p
                className={`${text_color} mt-5 cursor-pointer font-TSExtra text-2xl hover:underline lg:text-4xl`}
                onClick={() => {
                  handle_news_redirection(title)
                }}
              >
                {title}
              </p>
              {description && (
                <p
                  className={`${desc_color} hidden w-full px-1 pb-5 font-TSmedium text-lg lg:grid lg:text-xl`}
                >
                  {description}
                </p>
              )}
            </div>
            <div
              className="my-1 mt-1 flex cursor-pointer lg:mt-5"
              onClick={() => {
                handle_news_redirection(title)
              }}
            >
              <p className="mt-5 font-TSbold text-lg lg:text-xl">عرض الجميع</p>
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
          </div>
          {description && (
            <p
              className={`${desc_color} grid w-full px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
            >
              {description}
            </p>
          )}
          <section className="w-12/12 lg:w-12/12 mx-auto">
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
              <section>
                <section
                  id="card"
                  className={`${card_color} rounded-lg border-2 border-Purp200 shadow-lg`}
                >
                  <div>
                    <p
                      className={`${theme} rounded-t-md pr-5 pt-1.5 pb-0.5 text-right font-TSbold text-base text-white lg:pr-8`}
                    >
                      {
                        important_news?.data[0]?.primary_category[0]
                          ?.category_name
                      }{' '}
                    </p>{' '}
                  </div>
                  <div
                    className="relative max-w-full cursor-pointer"
                    onClick={() => {
                      handle_news_redirection_story(
                        important_news?.data[0]?.primary_category[0]
                          ?.category_name,
                        important_news?.data[0]?.stories_headlines
                      )
                    }}
                  >
                    <ViewImpression stories={stories} user_id={user_id} /> <></>
                    <ReadImpression stories={stories[0]} user_id={user_id} />
                    {/* {console.log(important_news_img)} */}
                    {important_news_img &&
                      (important_news_img.includes('youtube') ||
                      important_news_img.includes('youtu.be') ? (
                        <img
                          loading="lazy"
                          src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                            important_news_img
                          )}/0.jpg`}
                          alt={important_news.data[0].stories_headlines}
                          className="relative h-56 w-full object-cover lg:h-80"
                        />
                      ) : (
                        <img
                          loading="lazy"
                          src={important_news_img}
                          alt={important_news.data[0].stories_headlines}
                          className=" h-56 w-full object-cover lg:h-80"
                        />
                      ))}
                    <div className="text-black absolute bottom-2 right-2 rounded-full bg-white p-1">
                      {like ? (
                        // <svg
                        //   xmlns="http://www.w3.org/2000/svg"
                        //   className=" h-7 w-7 cursor-pointer"
                        //   fill="#FF0000"
                        //   viewBox="0 0 24 24"
                        //   stroke="#FF0000"
                        //   strokeWidth="2"
                        //   onClick={() => {
                        //     handle_like(
                        //       important_news.data[0]._id,
                        //       important_news.data[0].is_loved
                        //     )
                        //   }}
                        // >
                        //   <path
                        //     strokeLinecap="round"
                        //     strokeLinejoin="round"
                        //     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        //   />
                        // </svg>
                        <img
                          src="./assest/like-animation.gif"
                          className=" h-7 w-7 cursor-pointer"
                          alt="Like | Love"
                          onClick={() => {
                            handle_like(
                              important_news.data[0]._id,
                              important_news.data[0].is_loved
                            )
                          }}
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=" h-7 w-7 cursor-pointer opacity-70"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          onClick={() => {
                            handle_like(
                              important_news?.data[0]?._id,
                              important_news?.data[0]?.is_loved
                            )
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div
                    className="my-2 flex cursor-pointer justify-between px-2.5 font-TSlight text-sm"
                    onClick={() => {
                      handle_news_redirection_story(
                        important_news?.data[0]?.primary_category[0]
                          ?.category_name,
                        important_news?.data[0]?.stories_headlines
                      )
                    }}
                  >
                    <p>
                      <b className="text-red-600 font-TSbold">
                        {important_news?.data[0]?.publisher_name}
                      </b>
                    </p>
                    <p className="font-TSbold">
                      قبل{' '}
                      {moment(important_news?.data[0]?.published_on).fromNow(
                        true
                      )}
                    </p>
                  </div>
                  <div className="px-2.5 pt-2 pb-0.5">
                    <div
                      className="mb-2 cursor-pointer font-TSExtra md:text-xl lg:h-20 lg:w-11/12 lg:text-2xl"
                      onClick={() => {
                        handle_news_redirection_story(
                          important_news?.data[0]?.primary_category[0]
                            ?.category_name,
                          important_news?.data[0]?.stories_headlines
                        )
                      }}
                    >
                      {important_news?.data[0]?.stories_headlines}
                    </div>
                    <p
                      className="hidden h-36 cursor-pointer font-TSmedium text-base lg:grid lg:h-32"
                      onClick={() => {
                        handle_news_redirection_story(
                          important_news?.data[0]?.primary_category[0]
                            ?.category_name,
                          important_news?.data[0]?.stories_headlines
                        )
                      }}
                    >
                      {important_news?.data[0]?.stories_content.slice(0, 335)}
                      ......
                    </p>
                    <p
                      className="grid h-24 cursor-pointer font-TSmedium text-base md:grid lg:hidden lg:h-32"
                      onClick={() => {
                        handle_news_redirection_story(
                          important_news?.data[0]?.primary_category[0]
                            ?.category_name,
                          important_news?.data[0]?.stories_headlines
                        )
                      }}
                    >
                      {important_news?.data[0]?.stories_content.slice(0, 170)}
                      .....
                    </p>
                    <div className="my-1 flex  justify-between pt-2.5">
                      <p
                        className={`cursor-pointer rounded-lg py-0.5 font-TSExtra text-GRAY200 hover:text-RED`}
                        onClick={() => {
                          handle_news_redirection_story(
                            important_news?.data[0]?.primary_category[0]
                              ?.category_name,
                            important_news?.data[0]?.stories_headlines
                          )
                        }}
                      >
                        اقرأ المزيد
                      </p>
                      <MenuThreeDot
                        title_color={text_color}
                        category={
                          important_news?.data[0]?.primary_category[0]
                            ?.category_name
                        }
                        story={important_news?.data[0]?.stories_headlines}
                        fill={fill_color}
                      />
                    </div>
                  </div>
                </section>
              </section>
              <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {important_news.data.slice(1, 5).map((item) => {
                  stories.push(item?._id)

                  return (
                    <section key={item?._id}>
                      <section
                        className={`${card_color} rounded-lg border-2 border-Purp200 shadow-lg`}
                        id="card"
                      >
                        <div>
                          {item?.primary_category[0]?.category_name ? (
                            <p
                              className={`${theme} rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base text-white lg:pr-5`}
                            >
                              {item?.primary_category[0]?.category_name}{' '}
                            </p>
                          ) : (
                            <p
                              className={`${theme} rounded-t-md py-3 text-right font-TSSemi text-base text-white lg:pr-5`}
                            ></p>
                          )}
                        </div>
                        <section
                          className={`${card_color} flex cursor-pointer lg:grid`}
                          onClick={() => {
                            handle_news_redirection_story(
                              item?.primary_category[0]?.category_name,
                              item?.stories_headlines
                            )
                          }}
                        >
                          <div className="relative mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-auto lg:py-0">
                            {item.stories_media_url[0] &&
                              (item.stories_media_url[0].includes('youtube') ||
                              item.stories_media_url[0].includes('youtu.be') ? (
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-32 w-40 rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"
                                />
                              ) : (
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-32 w-40 rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"
                                />
                              ))}
                            <div className="text-black rounded-full bg-white">
                              <Like
                                user_id={user_id}
                                story_id={item?._id}
                                isLoved={item?.is_loved}
                              />
                            </div>
                          </div>

                          <div className="hidden h-6 justify-between px-0 pt-1.5 font-TSlight text-xs lg:flex">
                            <p>
                              <b className="text-red-600 font-TSExtra">
                                {item.publisher_name}
                              </b>
                            </p>
                            <p className="font-TSExtra">
                              قبل {moment(item.published_on).fromNow(true)}
                            </p>
                          </div>

                          <div className="py-1.5 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2">
                            <div className="my-3 mb-2 font-TSExtra text-sm md:my-20 md:h-10 md:text-lg lg:my-0 lg:mb-0 lg:h-12 lg:text-sm">
                              {item.stories_headlines}
                            </div>
                            <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-12 lg:pt-1.5 lg:text-sm">
                              {item.stories_content.slice(0, 70)}....
                            </div>
                          </div>
                        </section>

                        <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                          <p>
                            <b
                              className="text-red-600 cursor-pointer font-TSExtra"
                              onClick={() => {
                                handle_news_redirection_story(
                                  item?.primary_category[0]?.category_name,
                                  item?.stories_headlines
                                )
                              }}
                            >
                              {item.publisher_name}
                            </b>
                          </p>
                          <p
                            className="cursor-pointer font-TSExtra"
                            onClick={() => {
                              handle_news_redirection_story(
                                item?.primary_category[0]?.category_name,
                                item?.stories_headlines
                              )
                            }}
                          >
                            قبل {moment(item.published_on).fromNow(true)}
                          </p>
                        </div>

                        <div className="mx-2.5 flex items-center justify-between">
                          <p
                            className={` cursor-pointer rounded-lg py-0.5 font-TSExtra text-sm text-GRAY200 hover:text-RED`}
                            onClick={() => {
                              handle_news_redirection_story(
                                item?.primary_category[0]?.category_name,
                                item?.stories_headlines
                              )
                            }}
                          >
                            اقرأ المزيد
                          </p>
                          <MenuThreeDot
                            title_color={text_color}
                            category={item?.primary_category[0]?.category_name}
                            story={item?.stories_headlines}
                            fill={fill_color}
                          />
                        </div>

                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-9 w-9 cursor-pointer "
                            viewBox="0 0 20 20"
                            fill="#7F7F7F"
                          >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                          </svg> */}
                      </section>
                    </section>
                  )
                })}
              </section>
            </section>
          </section>
        </React.Fragment>
      </section>
      <ReadImpression stories={stories.slice(1, 5)} user_id={user_id} />
    </React.Fragment>
  )
}
export default Colored
