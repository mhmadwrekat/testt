import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
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
import { PlayIcon } from '@heroicons/react/outline'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const Voice = ({ important_news, theme, title, description, color }) => {
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
  let space_between = 0
  window_width > 800
    ? ((slides_per_view = 4), (space_between = 15))
    : ((slides_per_view = 4), (space_between = 15))
  /**
let space_between = 0
  window_width > 800
    ? ((slides_per_view = 5), (space_between = 15))
    : ((slides_per_view = 2), (space_between = 1)) 
 
 */
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21]
  const play = (audio) => {
    audio = new Audio(audio)
    audio.pause()
  }
  return (
    <React.Fragment>
      <audio controls>
        <source
          src="https://cdn1.esm3.com/music/4558/m299431.mp3"
          type="audio/mpeg"
        />
      </audio>
      <section loading="lazy">
        {/* <link rel="stylesheet" href="./styles/global.css" /> */}

        <p className="py-8"></p>
        <section className=" mx-auto w-11/12 rounded-lg pt-2 lg:w-9/12 lg:pt-2">
          <h1 className=" m-4 pr-3 font-TSExtra text-xl lg:text-4xl">
            الصوتيات
          </h1>
          <h2 className="border-gray-400 m-6 border-b-2 font-TSbold text-sm lg:text-lg ">
            <p className=" hover-border-b-2 hover-scale-110 w-2/6 text-center lg:w-1/6">
              الاكثر أستماعا
            </p>
          </h2>

          {console.log(slides_per_view)}

          <section className="w-6/6 mx-auto">
            {slides_per_view && (
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                slidesPerView={slides_per_view}
                spaceBetween={10}
                navigation={true}
                autoplay={true}
                loop={true}
                // install Swiper modules
                // loop={true}
                // thumbs={{
                //   swiper: thumbsSwiper,
                // }}
                // autoplay={true}
                // scrollbar={{
                //   draggable: true,
                //   dragSize: 'auto',
                //   hide: true,
                // }}
                //    pagination={{
                //   type: 'fraction',
                // }}
              >
                {important_news.data.map((item) => {
                  return (
                    <SwiperSlide>
                      <div className="my-5 mx-auto lg:my-10" loading="lazy">
                        {item.stories_media_url[0] &&
                          (item.stories_media_url[0].includes('youtube') ||
                          item.stories_media_url[0].includes('youtu.be') ? (
                            <img
                              loading="lazy"
                              src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                item.stories_media_url[0]
                              )}/0.jpg`}
                              alt={item.stories_headlines}
                              className="mx-auto block h-28 w-36 rounded-t-xl shadow-2xl lg:h-60 lg:w-60"
                            />
                          ) : (
                            <img
                              loading="lazy"
                              src={item.stories_media_url[0]}
                              alt={item.stories_headlines}
                              className="mx-auto block h-28 w-36 rounded-t-xl shadow-2xl lg:h-60 lg:w-60"
                            />
                          ))}
                        <audio
                          loading="lazy"
                          controls
                          className="bg-gray-100 mx-auto w-36 rounded-b-xl font-TSbold text-xs lg:w-60 lg:text-base"
                        >
                          <source
                            loading="lazy"
                            src="https://cdn1.esm3.com/music/4558/m299431.mp3"
                            type="audio/mpeg"
                          />
                        </audio>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            )}
          </section>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Voice
/**
 *          <div className="my-5 mx-auto lg:my-10" loading="lazy">
                  <img
                    className="mx-auto block h-28 w-36 rounded-t-xl shadow-2xl lg:h-72 lg:w-72"
                    src="https://img.youtube.com/vi/jBJTaLZgYgc/0.jpg"
                    loading="lazy"
                  />
                  <ReactAudioPlayer
                    onPlay={() => {
                      play('https://cdn1.esm3.com/music/4558/m299431.mp3')
                    }}
                    className="bg-gray-100 mx-auto w-36 rounded-b-xl font-TSbold text-xs lg:w-72 lg:text-base"
                    src="https://cdn1.esm3.com/music/4558/m299431.mp3"
                    loading="lazy"
                    controls
                  />
                </div>
 * 
 * 
 * 
    <Swiper
                // install Swiper modules
                modules={[Navigation]}
                slidesPerView={slides_per_view}
                spaceBetween={30}
                navigation={true}
                // install Swiper modules
                // loop={true}
                // thumbs={{
                //   swiper: thumbsSwiper,
                // }}
                // autoplay={true}
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
                  <div className="my-5 mx-auto lg:my-10" loading="lazy">
                    <img
                      className="mx-auto block h-28 w-36 rounded-t-xl shadow-2xl lg:h-72 lg:w-72"
                      src="https://img.youtube.com/vi/jBJTaLZgYgc/0.jpg"
                      loading="lazy"
                    />
                    <ReactAudioPlayer
                      onPlay={() => {
                        play('https://cdn1.esm3.com/music/4558/m299431.mp3')
                      }}
                      className="bg-gray-100 mx-auto w-36 rounded-b-xl font-TSbold text-xs lg:w-72 lg:text-base"
                      src="https://cdn1.esm3.com/music/4558/m299431.mp3"
                      loading="lazy"
                      controls
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
 */
