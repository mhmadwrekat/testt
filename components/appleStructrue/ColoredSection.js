import React from 'react'
const ColoredSection = ({
  important_news,
  theme,
  title,
  description,
  color,
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
        <h1
          className={`mt-4 px-1 font-TSExtra text-3xl text-${color} lg:mt-10 lg:text-4xl`}
        >
          {title}
        </h1>
        <p className="text-gray-400 px-1 pb-5 font-TSmedium text-base">
          {description}
        </p>
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
                <section className={`${theme} to-white grid rounded-lg`}>
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
