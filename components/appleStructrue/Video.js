import React from 'react'
import moment from 'moment'
import 'moment/locale/ar'
// import Swiper core and required modules
// import { thumbsSwiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore, { Autoplay } from 'swiper'
// Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/effect-fade'
// import 'swiper/css/scrollbar'

const Video = ({ title, important_news, color, theme, description }) => {
  // SwiperCore.use([Autoplay])

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
  let window_width = 0
  if (typeof window !== 'undefined') {
    window_width = window.innerWidth
  }
  let slides_per_view = 0
  let space_between = 0
  window_width > 800
    ? ((slides_per_view = 5), (space_between = 15))
    : ((slides_per_view = 2), (space_between = 1))
  //(function(){
  //  var ww = $(window).width()
  //  if (ww>1000) mySwiper.params.slidesPerView = 5;
  //  if (ww>468 && ww<=1000) mySwiper.params.slidesPerView = 3;
  //  if (ww<=468) mySwiper.params.slidesPerView = 1;
  // mySwiper.reInit()
  // })
  // $(window).trigger('resize')

  return (
    <React.Fragment>
      <section className="text-white mx-auto w-11/12 lg:w-9/12">
        <>
          <h1
            className={`text-${color} mt-10 font-TSExtra text-3xl lg:mt-12 lg:text-4xl`}
          >
            {title}{' '}
          </h1>
          <p className="text-gray-400 px-1 pb-5 font-TSmedium text-base">
            {description}
          </p>
          <section className="grid grid-cols-1 gap-4 lg:gap-7 lg:grid-cols-2">
            <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
              {important_news.data.slice(0, 4).map((item) => {
                return (
                  <section key={item._id}>
                    <div className=" rounded-lg shadow-xl" id="card">
                      <div className="p-1.5 px-3 pb-0 lg:p-2.5 lg:pb-2 ">
                        <h3 className="text-right font-TSSemi text-base hover:underline lg:text-lg">
                          {important_news.category_name}
                        </h3>{' '}
                        <div
                          className={`w-6/6 border-${color} border-b-2 pt-1 opacity-80`}
                        ></div>
                      </div>
                      <section className="flex lg:grid ">
                        <div className=" mr-2 h-auto w-72 py-5 lg:mr-0 lg:h-auto lg:w-auto lg:py-0 ">
                          <iframe
                            className="mx-auto h-24 w-40 rounded-md lg:h-36 lg:w-60"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            loading="lazy"
                          ></iframe>
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
                    </div>
                  </section>
                )
              })}
            </section>
            <section className="grid grid-cols-1 gap-4 lg:gap-7 md:grid-cols-2 lg:grid-cols-2">
              {important_news.data.slice(0, 4).map((item) => {
                return (
                  <section key={item._id}>
                    <div className=" rounded-lg shadow-xl" id="card">
                      <div className="p-1.5 px-3 pb-0 lg:p-2.5 lg:pb-2 ">
                        <h3 className="text-right font-TSSemi text-base hover:underline lg:text-lg">
                          {important_news.category_name}
                        </h3>{' '}
                        <div
                          className={`w-6/6 border-${color} border-b-2 pt-1 opacity-80`}
                        ></div>
                      </div>
                      <section className="flex lg:grid ">
                        <div className="relative mr-2 h-auto w-72 py-5 lg:mr-0 lg:h-auto lg:w-auto lg:py-0 ">
                          <iframe
                            className="mx-auto h-24 w-40 rounded-md lg:h-36 lg:w-60"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            loading="lazy"
                          ></iframe>
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

export default Video
/**
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
          {important_news.data.map((item) => {
            return (
              <section className="mx-auto grid grid-cols-1 gap-6">
                <section className={`${theme} to-white grid h-44 w-96 `}>
                  {item.stories_media_url[0] &&
                    (item.stories_media_url[0].includes('youtube') ||
                    item.stories_media_url[0].includes('youtu.be') ? (
                      <img
                        src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                          item.stories_media_url[0]
                        )}/0.jpg`}
                        alt={item.stories_headlines}
                        className="w-full rounded-lg"
                        // quality={25}
                        // layout="responsive"
                        // width={250}
                        // height={280}
                        // className="rounded-lg"
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
                        className="w-full rounded-lg"
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
                  <div>
                    <p>45645</p>
                  </div>
                </section>
              </section>
            )
          })}
          </section>
          </section>
          <p className="p-20"></p>
        </React.Fragment>
 */
