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
    ? ((slides_per_view = 1), (space_between = 15))
    : ((slides_per_view = 1), (space_between = 15))
  /**
let space_between = 0
  window_width > 800
    ? ((slides_per_view = 5), (space_between = 15))
    : ((slides_per_view = 2), (space_between = 1)) 
 
 */
  const play = (audio) => {
    audio = new Audio(audio)
    audio.pause()
  }
  return (
    <React.Fragment>
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

          <section className="mx-auto w-3/6">
            {slides_per_view && (
              <Swiper
                // install Swiper modules
                modules={[Pagination, Navigation, Scrollbar, A11y]}
                slidesPerView={slides_per_view}
                centeredSlides={true}
                spaceBetween={space_between}
                navigation={true}
                // install Swiper modules
                loop={true}
                thumbs={{
                  swiper: thumbsSwiper,
                }}
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
            )}
          </section>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Voice
/**
    <React.Fragment>
      <section loading="lazy">

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
          {slides_per_view && (
            <Swiper
              // install Swiper modules
              modules={[Pagination, Navigation, Scrollbar, A11y]}
              slidesPerView={slides_per_view}
              centeredSlides={true}
              spaceBetween={space_between}
              navigation={true}
              // install Swiper modules
              loop={true}
              thumbs={{
                swiper: thumbsSwiper,
              }}
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
                <div className="my-5 lg:my-10">
                  <img
                    className=" block h-28 w-36 rounded-t-xl shadow-2xl lg:h-44 lg:w-60"
                    src="https://img.youtube.com/vi/jBJTaLZgYgc/0.jpg"
                  />
                  <ReactAudioPlayer
                    onPlay={() => {
                      play('https://cdn1.esm3.com/music/4558/m299431.mp3')
                    }}
                    className="bg-gray-100 w-36 rounded-b-xl font-TSbold text-xs lg:w-60 lg:text-base"
                    src="https://cdn1.esm3.com/music/4558/m299431.mp3"
                    controls
                  />{' '}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="my-5 lg:my-10">
                  <div class="w-full">
                    <div class="bg-red-light h-2"></div>
                    <div class="bg-red-lightest flex h-screen items-center justify-center">
                      <div
                        class="bg-white rounded-lg shadow-lg"
                        style={{ width: '45rem' }}
                      >
                        <div class="flex">
                          <div>
                            <img
                              class="hidden w-full rounded md:block"
                              src="https://tailwindcss.com/img/card-top.jpg"
                              alt="Album Pic"
                            />
                          </div>
                          <div class="w-full p-8">
                            <div class="flex justify-between">
                              <div>
                                <h3 class="text-grey-darkest text-2xl font-medium">
                                  A Sky Full of Stars
                                </h3>
                                <p class="text-grey mt-1 text-sm">
                                  Ghost Stories
                                </p>
                              </div>
                              <div class="text-red-lighter">
                                <svg
                                  class="h-6 w-6"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                                </svg>
                              </div>
                            </div>
                            <div class="mt-8 flex items-center justify-between">
                              <div class="text-grey-darker">
                                <svg
                                  class="h-8 w-8"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
                                </svg>
                              </div>
                              <div class="text-grey-darker">
                                <svg
                                  class="h-8 w-8"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
                                </svg>
                              </div>
                              <div class="text-white bg-red-light rounded-full p-8 shadow-lg">
                                <svg
                                  class="h-8 w-8"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                                </svg>
                              </div>
                              <div class="text-grey-darker">
                                <svg
                                  class="h-8 w-8"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
                                </svg>
                              </div>
                              <div class="text-grey-darker">
                                <svg
                                  class="h-8 w-8"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mx-8 py-4">
                          <div class="text-grey-darker flex justify-between text-sm">
                            <p>0:40</p>
                            <p>4:20</p>
                          </div>
                          <div class="mt-1">
                            <div class="bg-grey-dark h-1 rounded-full">
                              <div class="bg-red-light relative h-1 w-1/5 rounded-full">
                                <span class="bg-red pin-r pin-b absolute -mb-1 h-4 w-4 rounded-full shadow"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          )}
        </section>
      </section>
    </React.Fragment>
 */
