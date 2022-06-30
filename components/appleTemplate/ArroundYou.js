// Library imports
import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/ar'
import { BASE_URL } from '../../config/config'
import axios from 'axios'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

// component imports
const MenuThreeDot = dynamic(() => import('./childComponent/MenuThreeDot'))
const Like = dynamic(() => import('./childComponent/Like'))
const MostEmoji = dynamic(() => import('./childComponent/MostEmoji'))
const ViewImpression = dynamic(() => import('./childComponent/ViewImpression'))
const ReadImpression = dynamic(() => import('./childComponent/ReadImpression'))
const Arround_you = ({
  title,
  important_news,
  user_id,
  fill_color,
  text_color,
  userToken,
  card_color,
  theme,
  bg_image,
  description,
}) => {
  const router = useRouter()
  const important_news_img =
    important_news?.data[0]?.stories_media_url.length > 0
      ? important_news.data[0].stories_media_url[0]
      : null

  const [like, setLike] = useState(important_news?.data[0]?.is_loved)

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
  const handle_like = (story_id, is_loved) => {
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
    axios(config)
      .then((res) => {
        setLike(!like)
      })
      .catch((err) => {})
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

  const handle_news_redirection_story = (titles) => {
    let ready_title = ''
    if (titles.includes('%')) {
      let title = titles.replace(/\s+/g, '-')
      // console.log(`/${title.replace('%', '_')}`)
      ready_title = `${title.replace('%', '-')}`
    } else if (titles.includes(' ')) {
      let title = titles.replace(/\s+/g, '-')
      ready_title = `${title.replace(' ', '-')}`
    } else {
      ready_title = titles
    }
    if (titles.includes('?')) {
      let title = titles.replace(/\s+/g, '')
      ready_title = `${title.replace('?', '-')}`
    }

    router.push(`/${ready_title}`)
    // console.log(ready_title)
  }
  return (
    <React.Fragment>
      <section className={`${bg_image} mt-6	bg-no-repeat pb-8 lg:bg-contain`}>
        <section className={` ${text_color} mx-auto w-11/12 lg:w-10/12`}>
          <React.Fragment>
            <div className="flex justify-between ">
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
                    className={`hidden w-full px-1 pb-5 font-TSmedium text-lg text-white lg:grid lg:text-xl`}
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
                <p className="mt-5 font-TSbold text-lg lg:text-xl">
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
            </div>
            {description && (
              <p
                className={`grid w-full px-1 pb-2 font-TSmedium text-lg text-white lg:hidden lg:text-xl`}
              >
                {description}
              </p>
            )}
            <section className="w-12/12 lg:w-12/12 mx-auto ">
              <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                <section>
                  <div
                    id="card"
                    className={`text-black ${card_color} rounded-lg shadow-lg`}
                  >
                    <div>
                      <p
                        className={`${theme} rounded-t-md pr-5 pt-1.5 pb-0.5 text-right font-TSbold text-base text-white lg:pr-8`}
                      >
                        {
                          important_news?.data[0]?.primary_category[0]
                            ?.category_name
                        }
                      </p>{' '}
                    </div>
                    <div className="relative max-w-full">
                      <ViewImpression stories={stories} user_id={user_id} />{' '}
                      <></>
                      <ReadImpression stories={stories[0]} user_id={user_id} />
                      {important_news_img &&
                        (important_news_img.includes('youtube') ||
                        important_news_img.includes('youtu.be') ? (
                          <img
                            loading="lazy"
                            src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                              important_news_img
                            )}/0.jpg`}
                            alt={important_news.data[0].stories_headlines}
                            className="relative h-56 w-full cursor-pointer rounded-b-md object-cover lg:h-80"
                            // onClick={() => {
                            //   router.push(`/${important_news?.data[0]?._id}`)
                            // }}
                            onClick={() => {
                              handle_news_redirection_story(
                                important_news?.data[0]?.stories_headlines
                              )
                            }}
                          />
                        ) : (
                          <img
                            loading="lazy"
                            src={important_news_img}
                            alt={important_news.data[0].stories_headlines}
                            className="h-56 w-full cursor-pointer rounded-b-md object-cover lg:h-80"
                            onClick={() => {
                              handle_news_redirection_story(
                                important_news?.data[0]?.stories_headlines
                              )
                            }}
                          />
                        ))}
                      <Like
                        user_id={user_id}
                        story_id={important_news.data[0]?._id}
                        isLoved={important_news.data[0]?.is_loved}
                        userToken={userToken}
                        reactions={important_news.data[0]?.reactions}
                      />
                      <MostEmoji
                        userToken={userToken}
                        reactions={important_news.data[0]?.reactions}
                        user_id={user_id}
                        story_id={important_news.data[0]?.reactions_id}
                        isLoved={important_news.data[0]?.reactionsis_loved}
                      />
                    </div>
                    <div
                      className="my-2  flex cursor-pointer justify-between px-2.5 font-TSlight text-sm"
                      onClick={() => {
                        handle_news_redirection_story(
                          important_news?.data[0]?.stories_headlines
                        )
                      }}
                    >
                      <p>
                        <b className="font-TSbold text-red-600">
                          {important_news?.data[0]?.publisher_name}
                        </b>
                      </p>
                      <p className="font-TSbold text-GRAY400">
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
                            important_news?.data[0]?.stories_headlines
                          )
                        }}
                      >
                        {important_news?.data[0]?.stories_headlines}
                      </div>
                      <p
                        className="hidden  h-36 cursor-pointer font-TSmedium text-base lg:grid lg:h-32"
                        onClick={() => {
                          handle_news_redirection_story(
                            important_news?.data[0]?.stories_headlines
                          )
                        }}
                      >
                        {important_news?.data[0]?.stories_content.slice(0, 335)}
                        ......
                      </p>
                      <p
                        className="grid  h-24 cursor-pointer font-TSmedium text-base md:grid lg:hidden lg:h-32"
                        onClick={() => {
                          handle_news_redirection_story(
                            important_news?.data[0]?.stories_headlines
                          )
                        }}
                      >
                        {important_news?.data[0]?.stories_content.slice(0, 170)}
                        .....
                      </p>
                      <div className="my-2 flex justify-between">
                        <p
                          className={`${theme} cursor-pointer rounded-lg py-1.5 px-5 font-TSExtra text-white hover:scale-110`}
                          onClick={() => {
                            handle_news_redirection_story(
                              important_news?.data[0]?.stories_headlines
                            )
                          }}
                        >
                          اقرأ المزيد
                        </p>
                        <MenuThreeDot
                          id={important_news?.data[0]?._id}
                          title_color={text_color}
                          category={
                            important_news?.data[0]?.primary_category[0]
                              ?.category_name
                          }
                          story={important_news?.data[0]?.stories_headlines}
                          fill={fill_color}
                          user_id={user_id}
                          story_id={important_news?.data[0]?._id}
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {important_news?.data?.slice(1, 5).map((item) => {
                    stories.push(item?._id)
                    return (
                      <section key={item?._id}>
                        <div
                          className={`${card_color} rounded-lg text-black shadow-lg`}
                          id="card"
                        >
                          <div>
                            {/* <p
                            className={`${theme} rounded-t-md py-3 text-right font-TSSemi text-base text-white hover:underline`}
                          > */}

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
                          <section className={`${card_color} flex lg:grid`}>
                            <div className="relative mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-auto lg:py-0">
                              {item.stories_media_url[0] &&
                                (item.stories_media_url[0].includes(
                                  'youtube'
                                ) ||
                                item.stories_media_url[0].includes(
                                  'youtu.be'
                                ) ? (
                                  <img
                                    loading="lazy"
                                    src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                      item.stories_media_url[0]
                                    )}/0.jpg`}
                                    alt={item.stories_headlines}
                                    className="mx-auto h-32 w-40 cursor-pointer rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"
                                    // onClick={() => {
                                    //   router.push(`/${item?._id}`)
                                    // }}
                                    onClick={() => {
                                      handle_news_redirection_story(
                                        item?.stories_headlines
                                      )
                                    }}
                                  />
                                ) : (
                                  <img
                                    loading="lazy"
                                    src={item.stories_media_url[0]}
                                    alt={item.stories_headlines}
                                    className="mx-auto h-32 w-40 cursor-pointer rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"
                                    onClick={() => {
                                      handle_news_redirection_story(
                                        item?.stories_headlines
                                      )
                                    }}
                                  />
                                ))}
                              <div className="rounded-full bg-white text-black">
                                <Like
                                  user_id={user_id}
                                  story_id={item?._id}
                                  isLoved={item?.is_loved}
                                  userToken={userToken}
                                  reactions={item?.reactions}
                                />
                                <MostEmoji
                                  userToken={userToken}
                                  reactions={item?.reactions}
                                  user_id={user_id}
                                  story_id={item?._id}
                                  isLoved={item?.is_loved}
                                />
                              </div>
                            </div>

                            <div className="hidden justify-between px-2.5 pt-1.5 font-TSlight text-xs lg:flex">
                              <p>
                                <b className="font-TSExtra text-red-800">
                                  {item.publisher_name}
                                </b>
                              </p>
                              <p className="font-TSExtra text-GRAY400">
                                قبل {moment(item.published_on).fromNow(true)}
                              </p>
                            </div>

                            <div
                              className="cursor-pointer py-1.5 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2"
                              onClick={() => {
                                handle_news_redirection_story(
                                  item?.stories_headlines
                                )
                              }}
                            >
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
                              <b className=" font-TSExtra text-red-600">
                                {item.publisher_name}
                              </b>
                            </p>
                            <p className="font-TSExtra text-GRAY300">
                              قبل {moment(item.published_on).fromNow(true)}
                            </p>
                          </div>
                          <div className="mx-2.5 flex items-center justify-between py-1">
                            <p
                              className={`${theme} cursor-pointer rounded-lg py-1 px-4 font-TSExtra text-sm text-white hover:scale-110`}
                              onClick={() => {
                                handle_news_redirection_story(
                                  item?.stories_headlines
                                )
                              }}
                            >
                              اقرأ المزيد
                            </p>
                            <MenuThreeDot
                              id={item?._id}
                              title_color={text_color}
                              category={
                                item?.primary_category[0]?.category_name
                              }
                              story={item?.stories_headlines}
                              fill={fill_color}
                              user_id={user_id}
                              story_id={item?._id}
                            />
                          </div>
                        </div>
                      </section>
                    )
                  })}
                </section>
              </section>
            </section>
          </React.Fragment>
        </section>
        <ReadImpression stories={stories.slice(1, 5)} user_id={user_id} />
      </section>
    </React.Fragment>
  )
}
export default Arround_you
