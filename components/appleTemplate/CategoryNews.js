// Import Libraries
import React, { useState } from 'react'
import { BASE_URL } from '../../config/config'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/ar'
// import MenuThreeDot from './child_comp/MenuThreeDot'
import Like from './childComponent/Like'
import { useInView, InView } from 'react-cool-inview'
import View from './childComponent/View'
import Read from './childComponent/Read'

const Category_news = ({
  title,
  title_color,
  category_news,
  bg_color,
  subs,
  description,
  fill_color,
  user_id,
}) => {
  const important_news_img =
    category_news?.data[0]?.stories_media_url.length > 0
      ? category_news.data[0].stories_media_url[0]
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

  // function to handle Subscribe Category & Unsubscribe
  const [subscripe, setSubscripe] = useState(category_news?.is_subscribed)
  const handle_subscripe = (category_id, is_subscribed) => {
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

  // function to handle Love & Unlove for First News
  const [like, setLike] = useState(category_news?.data[0]?.is_loved)
  const handle_like = (story_id, is_loved) => {
    // console.log(user_id, story_id, is_loved)
    setLike(!like)
    let url = `${BASE_URL}/v1/Web/Story/Love`
    let data = {
      userId: `${user_id}`,
      story: `${story_id}`,
      isLove: !is_loved,
    }
    axios.put(url, data).then((res) => {
      // console.log(res)
    })
  }
  // const HelloText = ({ observed }) => {
  //   const { observed, inView } = useInView({
  //     trackVisibility: false,
  //     unobserveOnEnter: true,
  //     // For performance perspective, use the largest tolerable value as much as possible // (ms)
  //     delay: 4000,
  //     onEnter: () => {
  //       console.log('INNNNNNNN')
  //     },
  //   })
  //   return <div ref={observed}></div>
  // }
  // Call the View/Impression API

  let stories = category_news && [category_news?.data[0]?._id]

  // => {

  //   return (
  //   <div ref={observe}>
  //     {inView ? console.log('IIIIIIIIIIN') : console.log('OOUUUUUUT')}
  //   </div>
  //   )
  // }
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
                        handle_subscripe(
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
                        handle_subscripe(
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
                <p
                  className={`${title_color} mt-5 font-TSExtra text-2xl lg:text-4xl`}
                >
                  {title}
                </p>
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
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
              <section>
                <div className="rounded-lg bg-GRAY100 shadow-lg" id="card">
                  <div className="">
                    <p
                      className={`${bg_color} text-white rounded-t-md pr-5 pt-1.5 pb-0.5 text-right font-TSbold text-base hover:underline lg:pr-8`}
                    >
                      {category_news?.section_name}
                    </p>{' '}
                  </div>
                  <div className=" relative h-56 w-full lg:h-80">
                    {/* Desktop View */}
                    <View stories={stories} user_id={user_id} />{' '}
                    <Read stories={stories} user_id={user_id} />{' '}
                    {/* <div ref={entry}></div> */}
                    {important_news_img &&
                      (important_news_img.includes('youtube') ||
                      important_news_img.includes('youtu.be') ? (
                        <img
                          loading="eager"
                          src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                            important_news_img
                          )}/0.jpg`}
                          alt={category_news.data[0].stories_headlines}
                          className="relative h-56 w-full object-cover lg:h-80"
                        />
                      ) : (
                        <img
                          src={important_news_img}
                          alt={category_news.data[0].stories_headlines}
                          className="relative h-56 w-full object-cover lg:h-80"
                          // className="relative h-56 w-full lg:h-80"
                          // layout="fill"
                          // quality={50}
                          // className="object-cover"
                          // loading="eager"
                          // placeholder="blur"
                          // blurDataURL={important_news_img}
                        />
                      ))}
                    <div className="bg-white absolute bottom-2 right-2 rounded-full p-1">
                      {/* {console.log(category_news.data[0]._id)} */}
                      {like ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className=" h-7 w-7 cursor-pointer"
                          fill="#FF0000"
                          viewBox="0 0 24 24"
                          stroke="#FF0000"
                          strokeWidth="2"
                          onClick={() => {
                            handle_like(
                              category_news?.data[0]?._id,
                              category_news?.data[0]?.is_loved
                            )
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
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
                              category_news?.data[0]?._id,
                              category_news?.data[0]?.is_loved
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
                  <div className=" my-2 flex justify-between px-2.5 font-TSlight text-sm">
                    <p>
                      <b className="text-red-800 font-TSbold">
                        {category_news?.data[0]?.publisher_name}
                      </b>
                    </p>
                    <p className="font-TSbold text-GRAY300">
                      قبل{' '}
                      {moment(category_news?.data[0]?.published_on).fromNow(
                        true
                      )}
                    </p>
                  </div>
                  <div className="px-2.5 pt-2 pb-0.5">
                    <div className="mb-2 font-TSExtra md:text-xl lg:h-16 lg:w-9/12 lg:text-2xl">
                      {category_news?.data[0]?.stories_headlines}
                    </div>
                    <p className=" hidden h-36 font-TSmedium text-base lg:grid lg:h-28">
                      {category_news?.data[0]?.stories_content.slice(0, 300)}
                      .......
                    </p>
                    <p className="grid h-24 font-TSmedium text-base md:grid lg:hidden lg:h-28">
                      {category_news?.data[0]?.stories_content.slice(0, 170)}
                      .....
                    </p>
                    <div className="my-1 flex  justify-between pt-2.5">
                      <p
                        className={`rounded-lg py-0.5 font-TSExtra text-GRAY400 hover:text-RED`}
                      >
                        اقرأ المزيد
                      </p>
                      {/* <MenuThreeDot title_color={title_color} /> */}
                    </div>
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {category_news?.data?.slice(1, 5).map((item, key) => {
                  // console.log(arr)
                  // {
                  stories.push(item?._id)
                  // }
                  return (
                    <section key={item?._id}>
                      {/* <InView unobserveOnEnter>
                        <HelloText />
                      </InView> */}
                      <div
                        className=" rounded-lg bg-GRAY100 shadow-lg"
                        id="card"
                      >
                        <div>
                          <p
                            className={`${bg_color} text-white rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base hover:underline lg:pr-5`}
                          >
                            {category_news.section_name}
                          </p>{' '}
                        </div>
                        <section className="flex bg-GRAY100 lg:grid ">
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
                                  className="
                                mx-auto
                                h-32 
                                w-40 object-cover md:h-full md:w-full lg:h-28 lg:w-full                                "
                                />
                              ) : (
                                <img
                                  loading="eager"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-32 w-40 object-cover md:h-full md:w-full lg:h-28 lg:w-full"
                                />
                              ))}
                            <Like
                              user_id={user_id}
                              story_id={item?._id}
                              isLoved={item?.is_loved}
                            />
                            {/* {item.is_loved ? (
                              <div className="bg-white absolute bottom-5 left-1 rounded-full p-1 lg:bottom-1">
                                {arr[key].status ? (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-4 w-4 cursor-pointer"
                                    fill="#FF0000"
                                    viewBox="0 0 24 24"
                                    stroke="#FF0000"
                                    strokeWidth="2"
                                    onClick={() => {
                                      handleLike(item._id, item.is_loved)
                                    }}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-4 w-4 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    onClick={() => {
                                      handleLike(item._id, item.is_loved)
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
                            ) : (
                              <div className="bg-white absolute bottom-5 left-1 rounded-full p-1 lg:bottom-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className=" h-4 w-4 cursor-pointer opacity-70"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  onClick={() => {
                                    handleLiked(arr[key])
                                  }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                  />
                                </svg>
                              </div>
                            )} */}
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

                          <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:h-20 lg:px-2 lg:py-2">
                            <div className="my-3 mb-2 font-TSbold text-sm md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-9 lg:text-sm">
                              {item.stories_headlines}
                            </div>
                            <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-20 lg:pt-1.5 lg:text-sm">
                              {item.stories_content.slice(0, 80)}....
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
                        <div className="mx-2.5 flex justify-between py-1.5 lg:pt-2">
                          <p
                            className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY400 hover:text-RED`}
                          >
                            اقرا المزيد
                          </p>{' '}
                          {/* <MenuThreeDot title_color={title_color} /> */}
                        </div>
                      </div>
                    </section>
                  )
                })}
              </section>
            </section>
          </section>
        </>
      </section>
      {/* {console.log('Stories', stories)} */}
    </React.Fragment>
  )
}
export default Category_news