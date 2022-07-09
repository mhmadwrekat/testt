import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import moment from 'moment'
import { useRouter } from 'next/router'
import 'moment/locale/ar'
import MenuThreeDot from './MenuThreeDot'
// const Like = dynamic(() => import('./Like'))

const AllData = ({ data, bg_color, category, fill, user_id, replace }) => {
  const router = useRouter()
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
    replace && location.replace(`/${ready_title}`)
  }
  return (
    <React.Fragment>
      <section className="w-12/12 lg:w-12/12 mx-auto bg-white text-black">
        <div dir="rtl" id="project_body" translate="no">
          <section className="grid grid-cols-1 gap-5 pt-5 lg:grid-cols-3 lg:gap-16 lg:pt-10">
            {data?.slice(3, 50).map((item) => {
              // console.log(item?.primary_category[0]?.category_name)
              return (
                <section key={item?._id}>
                  <div className=" rounded-lg bg-GRAY100 shadow-lg" id="card">
                    <div>
                      <p
                        className={`${bg_color} rounded-t-md py-3 text-right font-TSSemi text-base text-white lg:pr-5`}
                      >
                        {/* {item?.primary_category[0]?.category_name} */}
                      </p>{' '}
                    </div>
                    <section
                      className="grid cursor-pointer bg-GRAY100"
                      onClick={() => {
                        handle_news_redirection_story(item?.stories_headlines)
                      }}
                      // onClick={() => {
                      //   router.push(`/${item._id}`)
                      // }}
                    >
                      <div className="relative w-full lg:w-auto">
                        {item?.stories_media_url[0] &&
                          (item?.stories_media_url[0].includes('youtube') ||
                          item?.stories_media_url[0].includes('youtu.be') ? (
                            <img
                              loading="eager"
                              src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                item.stories_media_url[0]
                              )}/0.jpg`}
                              alt={item.stories_headlines}
                              className="mx-auto h-32 w-full object-cover md:h-full md:w-full lg:h-44 lg:w-full"
                            />
                          ) : (
                            // <Image
                            //   src={`https://img.youtube.com/vi/${retrieve_youtube_code(
                            //     item.stories_media_url[0]
                            //   )}/0.jpg`}
                            //   className="mx-auto object-cover"
                            //   alt={item.stories_headlines}
                            //   quality={75}
                            //   layout="responsive"
                            //   objectFit="cover"
                            //   width={800}
                            //   height={350}
                            //   loading="eager"
                            //   priority
                            //   placeholder="blur"
                            //   blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                            //     item.stories_media_url[0]
                            //   )}/0.jpg`}
                            // />
                            // <Image
                            //   src={item?.stories_media_url[0]}
                            //   className="mx-auto object-cover"
                            //   alt={item.stories_headlines}
                            //   quality={75}
                            //   layout="responsive"
                            //   objectFit="cover"
                            //   width={800}
                            //   height={350}
                            //   loading="eager"
                            //   priority
                            //   placeholder="blur"
                            //   blurDataURL={item?.stories_media_url[0]}
                            // />
                            <img
                              loading="eager"
                              src={
                                item?.optimized_image ||
                                item?.stories_media_url[0]
                              }
                              alt={item.stories_headlines}
                              className="mx-auto h-32 w-full object-cover md:h-full md:w-full lg:h-44 lg:w-full"
                            />
                          ))}

                        <></>
                        {/* <Like
                          user_id="62a0dd4b86fdbd34fc3bad58"
                          story_id="60d9d86c8eeb1109bd6f17ce"
                          isLoved={true}
                        /> */}
                      </div>

                      <div className="hidden justify-between px-2.5 pt-2 font-TSlight text-xs lg:flex">
                        <p>
                          <b className=" font-TSExtra text-red-800">
                            {item.publisher_name}
                          </b>
                        </p>
                        <p className="font-TSExtra text-GRAY400">
                          قبل {moment(item.published_on).fromNow(true)}
                        </p>
                      </div>

                      <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2">
                        <div className="my-3 mb-2 font-TSExtra text-lg md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-20 lg:text-xl">
                          {item.stories_headlines}{' '}
                        </div>
                        <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-16 lg:pt-1.5 lg:text-sm">
                          {item.stories_content.slice(0, 125)}......
                        </div>
                      </div>
                    </section>

                    <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                      <p>
                        <b className=" font-TSExtra text-red-800">
                          {item.publisher_name}
                        </b>
                      </p>
                      <p className="font-TSExtra text-GRAY300">
                        قبل {moment(item.published_on).fromNow(true)}
                      </p>
                      {/* {console.log(item?.primary_category[0]?.category_name)} */}
                    </div>
                    {/* <div className=" mx-auto w-11/12 pt-1 opacity-60"></div> */}
                    <div className="mx-2.5 flex items-center justify-between pb-1.5">
                      {category ? (
                        <p
                          className={`${bg_color} cursor-pointer rounded-lg px-4 py-1 font-TSExtra text-sm text-white hover:scale-110`}
                          onClick={() => {
                            handle_news_redirection_story(
                              item?.stories_headlines
                            )
                          }}
                        >
                          اقرا المزيد
                        </p>
                      ) : (
                        <p
                          className={`${bg_color} cursor-pointer rounded-lg px-4 py-1 font-TSExtra text-sm text-white hover:scale-110`}
                          onClick={() => {
                            handle_news_redirection_story(
                              item?.stories_headlines
                            )
                          }}
                        >
                          اقرا المزيد
                        </p>
                      )}

                      <MenuThreeDot
                        id={item?._id}
                        title_color={'text-Purp100'}
                        category={category}
                        story={item?.stories_headlines}
                        fill={fill}
                        user_id={user_id}
                        story_id={item?._id}
                      />
                    </div>
                  </div>
                </section>
              )
            })}
          </section>
        </div>
      </section>
    </React.Fragment>
  )
}

export default AllData
