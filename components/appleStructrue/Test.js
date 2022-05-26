import React from 'react'

// import Swiper core and required modules
import { thumbsSwiper, Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
const Test = ({ important_news, theme, title, description, color }) => {
  SwiperCore.use([Autoplay])

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
  window_width > 800 ? (slides_per_view = 4) : (slides_per_view = 2)
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
      <p className="py-8"></p>
      <section className="bg-blue-800 mx-auto w-11/12 rounded-lg pt-2 lg:w-9/12 lg:pt-2">
        <h1 className="text-white m-4 pr-3 font-TSExtra text-xl lg:text-4xl">
          الفيديوهات
        </h1>
        <h2 className="border-gray-400 m-6 border-b-2 font-TSbold text-sm lg:text-lg ">
          <p className="text-gray-200 hover-border-b-2 hover-scale-110 w-2/6 text-center lg:w-1/6">
            الاكثر مشاهده
          </p>
        </h2>
        {console.log(slides_per_view)}
        {slides_per_view && (
          <Swiper
            // install Swiper modules
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            slidesPerView={slides_per_view}
            centeredSlides={true}
            spaceBetween={20}
            navigation={true}
            // install Swiper modules
            loop={true}
            thumbs={{
              swiper: thumbsSwiper,
            }}
            autoplay={true}
            // scrollbar={{
            //   draggable: true,
            //   dragSize: 'auto',
            //   hide: true,
            // }}
            //    pagination={{
            //   type: 'fraction',
            // }}
          >
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="my-5 lg:my-10">
                <iframe
                  className=" block h-28 w-36 shadow-2xl lg:h-44 lg:w-72"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  frameBorder="1"
                ></iframe>
                <p className="text-white w-11/12 pt-2 font-TSbold text-xs lg:pt-5 lg:text-base">
                  شقة وزير سابق للبيع في مزاد علني: 66780 دينارا «مديون»
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
      </section>
    </React.Fragment>
  )
}

export default Test
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
