import React from 'react'
import moment from 'moment'
import 'moment/locale/ar'

const Technology = ({
  title,
  important_news,
  color,
  theme,
  subscripe,
  description,
}) => {
  const important_news_img =
    important_news?.important_data.stories_media_url.length > 0
      ? important_news.important_data.stories_media_url[0]
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

  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 lg:w-11/12">
        <>
          <div className="my-4 flex justify-between lg:my-5">
            <div className="pr-10">
              <h1 className={`${color} mt-5 font-TSExtra text-4xl lg:text-4xl`}>
                {title}{' '}
              </h1>
              <p className="text-gray-400 w-full px-1 pb-5 font-TSmedium text-lg lg:text-xl">
                {description}
              </p>
            </div>
            <div className="pt-3 pl-5">
              {subscripe !== null &&
                (subscripe ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 mt-1 mb-5 h-10 w-10 hover:cursor-pointer lg:h-16 lg:w-16"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 mt-1 h-16 w-16 hover:cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ))}
            </div>
          </div>

          <section className="mx-auto w-11/12 lg:w-11/12">
            <section className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
              <section>
                <div className="bg-gray-100 rounded-lg shadow-xl" id="card">
                  <div className="">
                    <h3
                      className={`${theme} text-white rounded-t-md pr-5 pt-1.5 pb-0.5 text-right font-TSSemi text-base hover:underline lg:pr-8`}
                    >
                      {important_news.section_name}
                    </h3>{' '}
                  </div>
                  <div className=" max-w-full">
                    {/* {console.log(important_news_img)} */}
                    {important_news_img &&
                      (important_news_img.includes('youtube') ||
                      important_news_img.includes('youtu.be') ? (
                        <img
                          loading="eager"
                          src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                            important_news_img
                          )}/0.jpg`}
                          alt={important_news.important_data.stories_headlines}
                          className="relative h-56 w-full lg:h-96"
                          // layout="responsive"
                          // width={600}
                          // height={400}
                          // quality={50}
                          // priority
                          // loading="eager"
                          // placeholder="blur"
                          // blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                          //   important_news_img
                          // )}/0.jpg`}
                        />
                      ) : (
                        <img
                          loading="eager"
                          src={important_news_img}
                          alt={important_news.important_data.stories_headlines}
                          className=" h-56 w-full lg:h-96"
                          // layout="responsive"
                          // width={600}
                          // quality={50}
                          // height={400}
                          // priority
                          // loading="eager"
                          // placeholder="blur"
                          // blurDataURL={important_news_img}
                        />
                      ))}
                  </div>
                  <div
                    className=" my-3 flex justify-between px-5
                  font-TSlight text-sm
                  "
                  >
                    <p className="">
                      <b className="text-red-700 font-TSbold">
                        {important_news.important_data.publisher_name}
                      </b>
                    </p>
                    <p className="text-gray-400 font-TSbold">
                      قبل{' '}
                      {moment(
                        important_news.important_data.published_on
                      ).fromNow(true)}
                    </p>
                  </div>
                  <div className="px-3 py-2">
                    <div className="mb-2 font-TSExtra text-xl">
                      {important_news.important_data.stories_headlines}
                    </div>
                    <p className="hidden h-36 font-TSmedium text-base lg:grid lg:h-28">
                      {important_news.important_data.stories_content.slice(
                        0,
                        310
                      )}
                    </p>
                    <p className="grid h-24 font-TSmedium text-base lg:hidden lg:h-28">
                      {important_news.important_data.stories_content.slice(
                        0,
                        120
                      )}
                      .....
                    </p>
                    <div className="w-6/6 border-gray-400 border-b-2 pt-1 opacity-70"></div>
                    <div className="my-1 mt-2.5  flex justify-between">
                      <button
                        className={`${theme} text-white rounded-lg px-10 py-0.5 font-TSSemi`}
                      >
                        اقرا المزيد
                      </button>
                      <button className="pl-4 font-TSExtra text-2xl">
                        . . .
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {important_news.data.slice(0, 4).map((item) => {
                  return (
                    <section key={item._id}>
                      <div
                        className=" bg-gray-100 rounded-lg shadow-xl"
                        id="card"
                      >
                        <div className="">
                          <h3
                            className={`${theme} text-white rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base hover:underline lg:pr-5`}
                          >
                            {important_news.category_name}
                          </h3>{' '}
                        </div>
                        <section className="bg-gray-100 flex lg:grid ">
                          <div className="mr-2 h-auto w-72 py-5 lg:mr-0 lg:h-auto lg:w-auto lg:py-0 ">
                            {item.stories_media_url[0] &&
                              (item.stories_media_url[0].includes('youtube') ||
                              item.stories_media_url[0].includes('youtu.be') ? (
                                <img
                                  loading="eager"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className="
                                mx-auto
                                h-28 
                                w-40 lg:h-32 lg:w-full"
                                  // quality={25}
                                  // layout="responsive"
                                  // width={80}
                                  // height={40}
                                  // priority
                                  // loading="eager"
                                  // placeholder="blur"
                                  // blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                                  //   item.stories_media_url[0]
                                  // )}/0.jpg`}
                                />
                              ) : (
                                <img
                                  loading="eager"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="
                                mx-auto
                                h-28 
                                w-40 lg:h-32 lg:w-full"
                                  // quality={25}
                                  // layout="responsive"
                                  // width={80}
                                  // className="rounded-md"
                                  // height={40}
                                  // priority
                                  // loading="eager"
                                  // placeholder="blur"
                                  // blurDataURL={item.stories_media_url[0]}
                                />
                              ))}
                          </div>

                          <div className="hidden justify-between px-2 pt-2 font-TSlight text-xs lg:flex">
                            <p className="">
                              <b className=" text-red-700 font-TSExtra">
                                {item.publisher_name}
                              </b>
                            </p>
                            <p className="text-gray-400 font-TSExtra">
                              قبل {moment(item.published_on).fromNow(true)}
                            </p>
                          </div>

                          <div className=" py-3 px-3 sm:mb-0 lg:mb-1 lg:h-20 lg:px-2 lg:py-2">
                            <div className="my-3 mb-2 font-TSbold text-sm md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-11 lg:text-sm">
                              {item.stories_headlines}
                            </div>
                            <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-20 lg:text-sm">
                              {item.stories_content.slice(0, 45)}...
                            </div>
                          </div>
                        </section>

                        <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                          <p className="">
                            <b className=" text-red-700 font-TSExtra">
                              {item.publisher_name}
                            </b>
                          </p>
                          <p className="text-gray-400 font-TSExtra">
                            قبل {moment(item.published_on).fromNow(true)}
                          </p>
                        </div>

                        <div className="border-gray-400 mx-auto w-11/12 border-b-2 pt-1 opacity-60"></div>
                        <div className="mx-4 flex justify-between  py-2">
                          <button
                            className={`${theme} text-white rounded-lg px-5 font-TSSemi text-sm md:px-7`}
                          >
                            اقرا المزيد
                          </button>
                          <button className="pl-2 font-TSExtra text-lg">
                            {' '}
                            . . .
                          </button>
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
    </React.Fragment>
  )
}
export default Technology
