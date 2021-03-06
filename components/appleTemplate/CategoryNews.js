// Import Libraries
import React, { useState } from 'react'
import { BASE_URL } from '../../config/config'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/ar'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// component imports
import Like from './childComponent/Like'
import MenuThreeDot from './childComponent/MenuThreeDot'
import MostEmoji from './childComponent/MostEmoji'

// const Like = dynamic(() => import('./childComponent/Like'))
// const MenuThreeDot = dynamic(() => import('./childComponent/MenuThreeDot'))
// const MostEmoji = dynamic(() => import('./childComponent/MostEmoji'))
const ViewImpression = dynamic(() => import('./childComponent/ViewImpression'))
const ReadImpression = dynamic(() => import('./childComponent/ReadImpression'))

const Category_news = ({
  title,
  title_color,
  load,
  category_news,
  bg_color,
  subs,
  description,
  bg_image,
  userToken,
  fill_color,
  descriptionColor,
  user_id,
  setClickSubscribe,
  click_subscribe,
}) => {
  const router = useRouter()
  const important_news_img = category_news?.data[0]?.optimized_image
    ? category_news?.data[0]?.optimized_image
    : category_news?.data[0]?.stories_media_url[0]

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
  const [subscripe, setSubscripe] = useState(subs)
  const handle_subscripe = async (category_id, is_subscribed) => {
    setClickSubscribe(!click_subscribe)
    let url = `${BASE_URL}/v1/Web/Category/Subscribe`
    let data = {
      userId: `${user_id}`,
      category: `${category_id}`,
      isSubscribe: !is_subscribed,
    }
    axios.post(url, data).then((res) => {
      setSubscripe(!subscripe)
      setClickSubscribe(!click_subscribe)
    })
  }

  // function to handle Love & Unlove for First News
  let stories = category_news && [category_news?.data[0]?._id]

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
  const handle_news_redirection_story = (titles) => {
    // let ready_category = ''
    let ready_title = ''
    // if (category.includes('%')) {
    //   let title = category.replace(/\s+/g, '_')
    //   // console.log(`/${title.replace('%', '_')}`)
    //   ready_category = `${title.replace('%', '_')}`
    // } else if (category.includes(' ')) {
    //   let title = category.replace(/\s+/g, '_')
    //   ready_category = `${title.replace(' ', '_')}`
    // } else {
    //   ready_category = category
    // }
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
    // typeof window !== 'undefined' &&
    //   analytics.page('Internal Story Page', {
    //     title: 'Story Page',
    //     url: `https://alzubda.com/${ready_title}`,
    //   })
    router.push(`/${ready_title}`)
    // console.log(ready_title)
  }
  bg_image = bg_image ? bg_image : ''
  let mt = bg_image ? 'mt-10' : 'mt-0'

  return (
    <React.Fragment>
      <section className={`${bg_image} bg-no-repeat ${mt} lg:bg-contain`}>
        <section className="mx-auto w-11/12 lg:w-10/12 lg:pt-10">
          <React.Fragment>
            <div className="flex justify-between">
              <div className="my-3 mt-3 lg:mt-4">
                <div className="flex">
                  {subs !== null &&
                    (subscripe ? (
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                        viewBox="0 0 20 20"
                        fill="#32CD32"
                        onClick={() => {
                          handle_subscripe(category_news?.category_id, subs)
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
                        xmlns="https://www.w3.org/2000/svg"
                        className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                        viewBox="0 0 20 20"
                        fill="#B0B0B0"
                        onClick={() => {
                          handle_subscripe(category_news?.category_id, subs)
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
                    className={`${title_color} mt-5 cursor-pointer font-TSExtra text-2xl hover:underline lg:text-4xl`}
                    onClick={() => {
                      handle_news_redirection(title)
                    }}
                  >
                    {title}
                  </p>
                </div>
                {description && (
                  <p
                    className={`${descriptionColor} hidden w-full px-1 pt-1 pb-5 font-TSmedium text-lg lg:grid lg:text-xl`}
                  >
                    {description}
                  </p>
                )}
              </div>
              <div
                className="my-1 mt-4 flex cursor-pointer lg:mt-5"
                onClick={() => {
                  handle_news_redirection(title)
                }}
              >
                <p className="mt-5 font-TSbold text-lg text-GRAY50 lg:text-xl">
                  ?????? ????????????
                </p>
                <svg
                  xmlns="https://www.w3.org/2000/svg"
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
                className={`${descriptionColor} grid w-10/12 px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
              >
                {description}
              </p>
            )}
            {/* {console.log(category_news.data[0])} */}

            <section className="w-12/12 lg:w-12/12 mx-auto">
              <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
                <div className="rounded-lg bg-GRAY100 shadow-lg" id="card">
                  <div
                    className={`${bg_color} hover:underlin rounded-t-md py-3.5 text-right font-TSbold text-base text-white`}
                  ></div>
                  <div className="relative h-56 w-full lg:h-80">
                    {/* Desktop View */}
                    <ViewImpression stories={stories} user_id={user_id} />
                    <></>
                    <ReadImpression stories={stories[0]} user_id={user_id} />
                    {/* <div ref={entry}></div> */}
                    {/* {console.log(category_news.data[0])} */}
                    {/* {console.log(
                        category_news.data[0].stories_headlines,
                        ' --> ',
                        important_news_img
                      )} */}
                    {important_news_img &&
                      (important_news_img.includes('youtube') ||
                      important_news_img.includes('youtu.be') ? (
                        // <img
                        //   loading={`${load}`}
                        //   src={`https://img.youtube.com/vi/${retrieve_youtube_code(
                        //     category_news.data[0].stories_media_url[0]
                        //   )}/0.jpg`}
                        //   alt={category_news.data[0].stories_headlines}
                        //   className=" relative h-56 w-full cursor-pointer rounded-b-md object-cover lg:h-80"
                        //   onClick={() => {
                        //     handle_news_redirection_story(
                        //       category_news?.data[0]?.stories_headlines
                        //     )
                        //   }}
                        // />
                        <Image
                          src={`https://img.youtube.com/vi/${retrieve_youtube_code(
                            category_news.data[0].stories_media_url[0]
                          )}/0.jpg`}
                          alt={category_news.data[0].stories_headlines}
                          className=" relative h-56 w-full cursor-pointer rounded-b-md object-cover lg:h-80"
                          // quality={50}
                          layout="fill"
                          objectFit="cover"
                          loading="lazy"
                          // priority
                          placeholder="blur"
                          blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                            category_news.data[0].stories_media_url[0]
                          )}/0.jpg`}
                          onClick={() => {
                            handle_news_redirection_story(
                              category_news?.data[0]?.stories_headlines
                            )
                          }}
                        />
                      ) : (
                        // <img
                        //   loading={`${load}`}
                        //   src={`https://netaq.s3.ap-south-1.amazonaws.com/rshnfo64wgg.jpeg`}
                        //   alt={category_news.data[0].stories_headlines}
                        //   className=" relative h-56 w-full cursor-pointer rounded-b-md object-cover lg:h-80"
                        //   // onClick={() => {
                        //   //   router.push(`/${category_news?.data[0]?._id}`)
                        //   // }}
                        //   onClick={() => {
                        //     handle_news_redirection_story(
                        //       category_news?.data[0]?.stories_headlines
                        //     )
                        //   }}
                        // />
                        <Image
                          src={important_news_img}
                          alt={category_news.data[0].stories_headlines}
                          className="relative h-56 w-full cursor-pointer rounded-b-md object-cover lg:h-80"
                          // quality={50}
                          layout="fill"
                          objectFit="cover"
                          loading={`${load}`}
                          // priority
                          placeholder="blur"
                          blurDataURL={important_news_img}
                          onClick={() => {
                            handle_news_redirection_story(
                              category_news?.data[0]?.stories_headlines
                            )
                          }}
                        />

                        // <img
                        //   loading={`${load}`}
                        //   src={important_news_img}
                        //   alt={category_news.data[0].stories_headlines}
                        //   className=" relative h-56 w-full cursor-pointer rounded-b-md object-cover lg:h-80"
                        //   onClick={() => {
                        //     handle_news_redirection_story(
                        //       category_news?.data[0]?.stories_headlines
                        //     )
                        //   }}
                        // />
                      ))}
                    {/* {console.log(category_news.data[0]._id)} */}
                    <Like
                      lgBottom={'lg:-bottom-1'}
                      bottom={'bottom-1'}
                      user_id={user_id}
                      story_id={category_news.data[0]?._id}
                      isLoved={category_news.data[0]?.is_loved}
                      userToken={userToken}
                      reactions={category_news.data[0]?.reactions}
                    />
                    {/* {console.log(category_news.data[0]?.reactions)} */}
                    <MostEmoji
                      bottom={'bottom-3'}
                      userToken={userToken}
                      reactions={category_news.data[0]?.reactions}
                      user_id={user_id}
                      story_id={category_news.data[0]?._id}
                      isLoved={category_news.data[0]?.is_loved}
                    />
                  </div>
                  <div
                    className="my-2 flex cursor-pointer justify-between px-2.5 font-TSlight text-sm"
                    onClick={() => {
                      handle_news_redirection_story(
                        category_news?.data[0]?.stories_headlines
                      )
                    }}
                  >
                    <p className="font-TSbold text-red-800">
                      {category_news?.data[0]?.publisher_name}
                    </p>
                    <p className="font-TSbold text-GRAY300">
                      ??????{' '}
                      {moment(category_news?.data[0]?.published_on).fromNow(
                        true
                      )}
                    </p>
                  </div>

                  <div className="px-2.5 pt-2 pb-0.5">
                    <div
                      className="mb-2 cursor-pointer font-TSExtra md:text-xl lg:h-20 lg:w-11/12 lg:text-2xl"
                      onClick={() => {
                        handle_news_redirection_story(
                          category_news?.data[0]?.stories_headlines
                        )
                      }}
                    >
                      {category_news?.data[0]?.stories_headlines}
                    </div>
                    <p
                      className="hidden h-36 cursor-pointer font-TSmedium text-base lg:grid lg:h-32"
                      onClick={() => {
                        handle_news_redirection_story(
                          category_news?.data[0]?.stories_headlines
                        )
                      }}
                    >
                      {category_news?.data[0]?.stories_content.slice(0, 335)}
                      ......
                    </p>
                    <p
                      className="grid h-24 cursor-pointer font-TSmedium text-base md:grid lg:hidden lg:h-32"
                      onClick={() => {
                        handle_news_redirection_story(
                          category_news?.data[0]?.stories_headlines
                        )
                      }}
                    >
                      {category_news?.data[0]?.stories_content.slice(0, 170)}
                      .....
                    </p>
                    <div className="my-5 flex items-center justify-between">
                      <p
                        className={`${bg_color} cursor-pointer rounded-lg px-5 py-1.5 font-TSExtra text-white hover:scale-110`}
                        onClick={() => {
                          handle_news_redirection_story(
                            category_news?.data[0]?.stories_headlines
                          )
                        }}
                      >
                        ???????? ????????????
                      </p>
                      <MenuThreeDot
                        id={category_news?.data[0]?._id}
                        title_color={title_color}
                        category={title}
                        story={category_news?.data[0]?.stories_headlines}
                        fill={fill_color}
                        user_id={user_id}
                        story_id={category_news?.data[0]?._id}
                      />
                    </div>
                  </div>
                </div>
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {category_news?.data?.slice(1, 5).map((item, key) => {
                    // console.log(item)
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
                          <div
                            className={`${bg_color} rounded-t-md py-3 text-right font-TSSemi text-base text-white`}
                          ></div>
                          <section className="flex bg-GRAY100 lg:grid">
                            {/* <div className="relative mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-auto lg:py-0"> */}
                            <div className="mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-auto lg:py-0">
                              {item.stories_media_url[0] &&
                                (item.stories_media_url[0].includes(
                                  'youtube'
                                ) ||
                                item.stories_media_url[0].includes(
                                  'youtu.be'
                                ) ? (
                                  <div className="relative h-28">
                                    {/* <img
                                      loading={`${load}`}
                                      src={`https://img.youtube.com/vi/${retrieve_youtube_code(
                                        item.stories_media_url[0]
                                      )}/0.jpg`}
                                      alt={item.stories_headlines}
                                      className="mx-auto h-32 w-40 cursor-pointer rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full  lg:rounded-none lg:rounded-b-md"
                                      // onClick={() => {
                                      //   router.push(`/${item?._id}`)
                                      // }}
                                      onClick={() => {
                                        handle_news_redirection_story(
                                          item?.stories_headlines
                                        )
                                      }}
                                    /> */}
                                    <Image
                                      src={`https://img.youtube.com/vi/${retrieve_youtube_code(
                                        item.stories_media_url[0]
                                      )}/0.jpg`}
                                      alt={item.stories_headlines}
                                      className="mx-auto h-32 w-40 cursor-pointer rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full  lg:rounded-none lg:rounded-b-md"
                                      // quality={75}
                                      layout="fill"
                                      objectFit="cover"
                                      // width={800}
                                      // height={300}
                                      loading="lazy"
                                      // priority
                                      placeholder="blur"
                                      blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                                        item.stories_media_url[0]
                                      )}/0.jpg`}
                                      onClick={() => {
                                        handle_news_redirection_story(
                                          item?.stories_headlines
                                        )
                                      }}
                                    />

                                    <Like
                                      lgBottom={'lg:-bottom-1'}
                                      right={'right-2'}
                                      bottom={'bottom-0'}
                                      user_id={user_id}
                                      story_id={item?._id}
                                      isLoved={item?.is_loved}
                                      userToken={userToken}
                                      reactions={item?.reactions}
                                    />
                                    <MostEmoji
                                      bottom={'bottom-1'}
                                      left={'left-1'}
                                      userToken={userToken}
                                      reactions={item?.reactions}
                                      user_id={user_id}
                                      story_id={item?._id}
                                      isLoved={item?.is_loved}
                                    />
                                  </div>
                                ) : (
                                  <div className="relative h-28">
                                    <Image
                                      loading={`${load}`}
                                      src={
                                        item?.optimized_image ||
                                        item.stories_media_url[0]
                                      }
                                      alt={item.stories_headlines}
                                      className=" mx-auto h-32 w-40 cursor-pointer rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"
                                      // quality={75}
                                      layout="fill"
                                      objectFit="cover"
                                      // width={800}
                                      // height={300}
                                      // priority
                                      placeholder="blur"
                                      blurDataURL={
                                        item?.optimized_image ||
                                        item.stories_media_url[0]
                                      }
                                      onClick={() => {
                                        handle_news_redirection_story(
                                          item?.stories_headlines
                                        )
                                      }}
                                    />
                                    {/* <img
                                    loading={`${load}`}
                                    src={
                                      item?.optimized_image ||
                                      item.stories_media_url[0]
                                    }
                                    alt={item.stories_headlines}
                                    className=" mx-auto h-32 w-40 cursor-pointer rounded-md object-cover md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"
                                    onClick={() => {
                                      handle_news_redirection_story(
                                        item?.stories_headlines
                                      )
                                    }}
                                  />
                            */}
                                    <Like
                                      lgBottom={'lg:-bottom-1'}
                                      right={'right-2'}
                                      bottom={'bottom-0'}
                                      user_id={user_id}
                                      story_id={item?._id}
                                      isLoved={item?.is_loved}
                                      userToken={userToken}
                                      reactions={item?.reactions}
                                    />
                                    <MostEmoji
                                      bottom={'bottom-1'}
                                      left={'left-1'}
                                      userToken={userToken}
                                      reactions={item?.reactions}
                                      user_id={user_id}
                                      story_id={item?._id}
                                      isLoved={item?.is_loved}
                                    />
                                  </div>
                                ))}
                            </div>

                            <div className="hidden justify-between px-2.5 pt-1.5 font-TSlight text-xs lg:flex">
                              <p className="font-TSExtra text-red-800">
                                {item.publisher_name}
                              </p>
                              <p className="font-TSExtra text-GRAY400">
                                ?????? {moment(item.published_on).fromNow(true)}
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

                          <div
                            className="flex cursor-pointer justify-between px-4 font-TSlight text-xs lg:hidden"
                            onClick={() => {
                              handle_news_redirection_story(
                                item?.stories_headlines
                              )
                            }}
                          >
                            <p className=" font-TSExtra text-red-800">
                              {item.publisher_name}
                            </p>
                            <p className="font-TSExtra text-GRAY300">
                              ?????? {moment(item.published_on).fromNow(true)}
                            </p>
                          </div>
                          {/* <div className=" mx-auto w-11/12 pt-1 opacity-60"></div> */}
                          <div className="mx-2.5 flex items-center justify-between py-2.5">
                            <p
                              className={`${bg_color} cursor-pointer rounded-lg px-4 py-1 font-TSExtra text-sm text-white hover:scale-110`}
                              onClick={() => {
                                handle_news_redirection_story(
                                  item?.stories_headlines
                                )
                              }}
                            >
                              ???????? ????????????
                            </p>

                            <MenuThreeDot
                              id={item?._id}
                              title_color={title_color}
                              category={title}
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
        {/* {console.log('Stories', stories)} */}
        <ReadImpression stories={stories.slice(1, 5)} user_id={user_id} />
      </section>
    </React.Fragment>
  )
}
export default React.memo(Category_news)
