import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import 'moment/locale/ar'

const TopStories = ({ title, important_news }) => {
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
      <section className="mx-auto w-11/12 lg:w-9/12">
        <>
          <h1 className="text-red-600 mb-4 mt-10 font-TSExtra text-3xl lg:mt-12 lg:text-4xl">
            {title}{' '}
          </h1>
          <section className="grid gap-5  sm:grid-cols-1 lg:grid-cols-2">
            <section>
              <div className="rounded-lg shadow-xl " id="card">
                <div className="p-1 px-4 pb-2 lg:p-3">
                  <h3 className="text-right font-TSSemi text-xl hover:underline">
                    {important_news.section_name}
                  </h3>{' '}
                  <div className="w-6/6 border-blue-400 border-b-2 pt-1 opacity-80"></div>
                </div>
                <div className="max-w-full">
                  {/* {console.log(important_news_img)} */}
                  {important_news_img &&
                    (important_news_img.includes('youtube') ||
                    important_news_img.includes('youtu.be') ? (
                      <Image
                        src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                          important_news_img
                        )}/0.jpg`}
                        alt={important_news.important_data.stories_headlines}
                        layout="responsive"
                        width={600}
                        height={400}
                        quality={50}
                        priority
                        loading="eager"
                        placeholder="blur"
                        blurDataURL={`https://img.youtube.com/vi/${retrieve_youtube_code(
                          important_news_img
                        )}/0.jpg`}
                      />
                    ) : (
                      <Image
                        src={important_news_img}
                        alt={important_news.important_data.stories_headlines}
                        layout="responsive"
                        width={600}
                        quality={50}
                        height={400}
                        priority
                        loading="eager"
                        placeholder="blur"
                        blurDataURL={important_news_img}
                      />
                    ))}
                </div>
                <div className="px-3 py-2">
                  <div className="mb-2 font-TSExtra text-xl">
                    {important_news.important_data.stories_headlines}
                  </div>
                  <p className="h-28 font-TSlight text-base lg:h-24">
                    {important_news.important_data.stories_content.slice(
                      0,
                      180
                    )}
                    ..........
                  </p>
                  <div
                    className="text-gray-400 my-3 flex justify-between font-TSlight
                  text-xs
                  "
                  >
                    <p className="">
                      <b className="font-TSmedium">
                        {important_news.important_data.publisher_name}
                      </b>
                    </p>
                    <p className="font-TSSemi">
                      منذ{' '}
                      {moment(
                        important_news.important_data.published_on
                      ).fromNow(true)}
                    </p>
                  </div>

                  <div className="w-6/6 border-gray-400 border-b-2 pt-1 opacity-60"></div>
                  <button className="bg-red-500 text-white my-1 mt-2.5 rounded-lg px-10 py-0.5 font-TSmedium">
                    لقرائه المزيد
                  </button>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {important_news.data.slice(0, 4).map((item) => {
                return (
                  <section key={item._id}>
                    <div className=" rounded-lg shadow-xl" id="card">
                      <div className="p-1.5 px-3 pb-0 lg:p-2.5 lg:pb-2 ">
                        <h3 className="text-right font-TSSemi text-base hover:underline lg:text-lg">
                          {important_news.category_name}
                        </h3>{' '}
                        <div className="w-6/6 border-blue-400 border-b-2 pt-1 opacity-80 "></div>
                      </div>
                      <section className="flex lg:grid ">
                        <div className="mr-2 h-auto w-72 py-5 lg:mr-0 lg:h-auto lg:w-auto lg:py-0 ">
                          {item.stories_media_url[0] &&
                            (item.stories_media_url[0].includes('youtube') ||
                            item.stories_media_url[0].includes('youtu.be') ? (
                              <img
                                src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                  item.stories_media_url[0]
                                )}/0.jpg`}
                                alt={item.stories_headlines}
                                className="
                                mx-auto
                                h-24 
                                w-40 rounded-md lg:h-36 lg:w-60"
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
                                src={item.stories_media_url[0]}
                                alt={item.stories_headlines}
                                className="
                                mx-auto
                                h-24 
                                w-40 rounded-md lg:h-36 lg:w-60"
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
                        <div
                          className="py-3 px-3 sm:mb-0 lg:mb-1 lg:h-20 lg:px-2
                        lg:py-2
                        "
                        >
                          <div
                            className="
                          my-3 mb-2 font-TSbold text-sm
                          md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-11
                          lg:text-base"
                          >
                            {item.stories_headlines}
                          </div>
                        </div>
                      </section>
                      <div
                        className=" text-gray-400 flex justify-between
                  px-2 font-TSlight text-xs
                  "
                      >
                        <p className="">
                          <b className=" font-TSmedium">
                            {item.publisher_name}
                          </b>
                        </p>
                        <p className="font-TSSemi">
                          منذ {moment(item.published_on).fromNow(true)}
                        </p>
                      </div>

                      <div className="border-gray-400 mx-auto w-11/12 border-b-2 pt-1 opacity-60"></div>
                      <button className="bg-red-500 text-white m-2 mx-4 rounded-lg px-5 py-0.5 font-TSmedium text-sm md:px-7">
                        لقرائه المزيد
                      </button>
                    </div>
                  </section>
                )
              })}
            </section>
          </section>
        </>
      </section>
    </React.Fragment>
  )
}
export default TopStories
