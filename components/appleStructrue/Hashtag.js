import React from 'react'
function Hashtag({ theme, color, important_news, title, other_news }) {
  const other_news_img =
    other_news?.important_data.stories_media_url.length > 0
      ? other_news.important_data.stories_media_url[0]
      : null

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
        <div className="mb-5 flex lg:mx-5 lg:mt-10">
          <h1
            className={`text-${color} px-1 font-TSExtra text-3xl lg:text-4xl`}
          >
            {title}{' '}
          </h1>
        </div>
        <section className="grid lg:flex">
          <section className="mx-auto grid w-full lg:w-6/12">
            <section>
              {important_news_img &&
                (important_news_img.includes('youtube') ||
                important_news_img.includes('youtu.be') ? (
                  <img
                    src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                      important_news_img
                    )}/0.jpg`}
                    alt={important_news.important_data.stories_headlines}
                    className="h-56 w-full rounded-lg lg:h-96"
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
                    src={important_news_img}
                    alt={important_news.important_data.stories_headlines}
                    className="h-56 w-full rounded-lg lg:h-80"
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
              <div className="mt-1.5 font-TSExtra text-xl">
                {important_news.important_data.stories_headlines}
              </div>
            </section>
          </section>

          <section className="mx-auto w-full lg:w-5/12 lg:pt-0">
            <section className="grid h-72 grid-cols-2 gap-4 md:h-52 lg:grid lg:h-80 lg:grid-cols-1 lg:gap-0">
              {/* overflow-y-scroll */}
              {important_news.data.slice(0, 2).map((item) => {
                return (
                  <div
                    className="grid pt-2 md:flex md:pt-0 lg:flex lg:py-2"
                    key={item._id}
                  >
                    {item.stories_media_url[0] &&
                      (item.stories_media_url[0].includes('youtube') ||
                      item.stories_media_url[0].includes('youtu.be') ? (
                        <img
                          src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                            item.stories_media_url[0]
                          )}/0.jpg`}
                          alt={item.stories_headlines}
                          className="my-auto h-40 w-40 rounded-lg lg:h-36 lg:w-40"

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
                          className="my-auto h-40 w-40 rounded-lg lg:h-36 lg:w-40"
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

                    <div className="mx-auto my-auto w-full md:w-4/6 lg:w-4/6">
                      <br className="hidden md:hidden lg:flex"></br>
                      <h3
                        className={`md:mx-2 text-${color} py-0 text-right font-TSmedium text-base tracking-tight hover:underline lg:py-1 lg:px-2`}
                      >
                        {important_news.section_name}
                      </h3>
                      {/* <br className="hidden lg:flex"></br> */}
                      <h1 className="mb-2 font-TSbold text-sm md:mx-2 md:text-lg lg:my-3 lg:my-0 lg:mb-0 lg:h-11 lg:px-2 lg:text-base">
                        {item.stories_headlines}
                      </h1>
                    </div>
                  </div>
                )
              })}
            </section>
          </section>
        </section>
        <section className="grid grid-cols-2 gap-5 lg:mx-5 lg:grid-cols-4 lg:pt-5">
          {other_news.data.map((item) => {
            return (
              <div key={item._id}>
                {item.stories_media_url[0] &&
                  (item.stories_media_url[0].includes('youtube') ||
                  item.stories_media_url[0].includes('youtu.be') ? (
                    <img
                      src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                        item.stories_media_url[0]
                      )}/0.jpg`}
                      alt={item.stories_headlines}
                      className="h-32 w-full rounded-lg lg:h-40"
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
                      className="h-32 w-full rounded-lg lg:h-40"

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
                <div className="my-3 px-2 ">
                  <h3
                    className={`text-${color} py-0 text-right font-TSmedium text-base tracking-tight hover:underline lg:py-1 lg:px-2`}
                  >
                    {other_news.section_name}
                  </h3>
                  <h1 className="mb-2 pt-2 font-TSbold text-sm md:my-0 md:text-lg lg:my-0 lg:mb-0 lg:h-11 lg:text-base">
                    {item.stories_headlines}{' '}
                  </h1>
                </div>
              </div>
            )
          })}
        </section>
      </section>
    </React.Fragment>
  )
}

export default Hashtag
