import React from 'react'
const ColoredSection = ({
  important_news,
  theme,
  title,
  description,
  color,
  temp,
  subscripe,
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
      <section className="mx-auto w-11/12 pt-5 lg:w-9/12 lg:pt-2">
        <div>
          <div className="float-left flex font-TSSemi text-xl lg:text-2xl">
            <h1 className="mt-2 ml-3">{temp ? temp : null}</h1>
          </div>
          <div className="mt-4 flex lg:mt-10">
            <h1
              className={` px-1 font-TSExtra text-3xl text-${color}  lg:text-4xl`}
            >
              {title}
            </h1>
            {subscripe !== null &&
              (subscripe ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 mt-1 h-7 w-7 hover:cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2 mt-1 h-7 w-7 hover:cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ))}
          </div>

          <p className="text-gray-400 px-1 pb-5 font-TSmedium text-base">
            {description}
          </p>
        </div>

        <section className=" grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10 ">
          <div className="rounded-lg">
            {important_news_img &&
              (important_news_img.includes('youtube') ||
              important_news_img.includes('youtu.be') ? (
                <img
                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                    important_news_img
                  )}/0.jpg`}
                  alt={important_news.important_data.stories_headlines}
                  className="h-60 w-full rounded-t-lg  lg:h-96"
                  // layout="responsive"
                  // width={300}
                  // height={200}
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
                  src={important_news_img}
                  alt={important_news.important_data.stories_headlines}
                  className="h-60 w-full rounded-t-lg lg:h-96"
                  // layout="responsive"
                  // quality={50}
                  // width={300}
                  // height={200}
                  // priority
                  // loading="eager"
                  // placeholder="blur"
                  // blurDataURL={important_news_img}
                />
              ))}

            <div className={`to-white from-${color} bg-gradient-to-r p-1.5`}>
              <h3 className="text-red-500 px-2 text-right font-TSbold text-base hover:underline">
                الزبده
              </h3>{' '}
            </div>
            <div className={`text-white rounded-b-lg ${theme} p-2 px-4`}>
              <h3 className="pb-2 text-right font-TSmedium text-base">
                {important_news.section_name}
              </h3>{' '}
              <h5 className="mb-1 font-TSbold text-2xl lg:h-14">
                {important_news.important_data.stories_headlines}
              </h5>
              <p className="text-gray-200 mb-3 h-28 font-TSmedium text-base lg:h-20">
                {important_news.important_data.stories_content.slice(0, 150)}{' '}
                .....
              </p>
              <div className="border-gray-400 w-6/6 mx-auto border-b-2 pt-0 opacity-80"></div>
              <button className="bg-gray-600 mt-1.5 rounded-full px-5 py-1 font-TSmedium text-sm">
                {' '}
                متابعه المزيد من {important_news.section_name}
              </button>
            </div>
          </div>
          {/**************************************************************** */}
          <section className="mx-auto grid grid-cols-1 gap-6">
            {important_news.data.slice(0, 3).map((item) => {
              return (
                <section
                  className={`${theme} to-white grid rounded-lg`}
                  key={item._id}
                >
                  <div className={` flex `}>
                    <div className="grid h-10 w-full">
                      <h3
                        className={`
                    from-${color} text-red-500 bg-gradient-to-r
                    p-2 px-2 text-right font-TSbold text-base hover:underline`}
                      >
                        الزبده
                      </h3>{' '}
                      <section
                        className={`text-white rounded-b-lg p-1.5 px-3 pl-2.5 lg:p-2 lg:px-4`}
                      >
                        <h3 className="pb-2 text-right font-TSmedium text-sm">
                          {important_news.section_name}
                        </h3>{' '}
                        <h5 className="mb-1 h-20 font-TSbold text-sm lg:h-16 lg:text-lg">
                          {item.stories_headlines}
                        </h5>
                        <button className="bg-gray-600 rounded-full px-2 py-1.5 font-TSmedium text-xs lg:px-5 ">
                          {' '}
                          المزيد من {important_news.section_name}
                        </button>
                      </section>
                    </div>

                    <div className="m-4 h-44 w-52 lg:h-24 lg:w-44">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <img
                            src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                              item.stories_media_url[0]
                            )}/0.jpg`}
                            alt={item.stories_headlines}
                            className="h-36 w-48 rounded-lg "
                            // quality={25}
                            // layout="responsive"
                            // width={250}
                            // height={280}
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
                            className="h-36 w-48 rounded-lg"

                            // quality={25}
                            // layout="responsive"
                            // width={250}
                            // height={280}
                            // className="rounded-lg"
                            // priority
                            // loading="eager"
                            // placeholder="blur"
                            // blurDataURL={item.stories_media_url[0]}
                          />
                        ))}
                    </div>
                  </div>
                </section>
              )
            })}
          </section>
        </section>
      </section>
    </React.Fragment>
  )
}

export default ColoredSection
