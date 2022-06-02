// import Styles from '../../styles/Audio.css'
import React, { useState, useRef, useEffect } from 'react'
// import ReactAudioPlayer from 'react-audio-player'
// import Swiper core and required modules
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import moment from 'moment'
import 'moment/locale/ar'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
// import { PlayIcon } from '@heroicons/react/outline'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
const Test = ({
  title,
  news_one,
  news_two,
  color,
  theme,
  subscripe,
  description,
}) => {
  const news_one_img =
    news_one?.important_data.stories_media_url.length > 0
      ? news_two.important_data.stories_media_url[0]
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
  if (window_width > 900) {
    ;(slides_per_view = 3), (space_between = 15)
  } else if (window_width < 900 && window_width > 400) {
    ;(slides_per_view = 2), (space_between = 15)
  } else if (window_width < 400) {
    ;(slides_per_view = 1), (space_between = 15)
  }
  /********************************************************************************************************/
  /********************************************************************************************************/
  /********************************************************************************************************/
  /********************************************************************************************************/
  /********************************************************************************************************/
  /********************************************************************************************************/
  /********************************************************************************************************/
  const [isPlaying, setisPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioPlayer = useRef()
  const progressBar = useRef()
  const animationRef = useRef()

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration)
    setDuration(seconds)
    progressBar.current.max = seconds
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const playPause = () => {
    setisPlaying(!isPlaying)
    if (!isPlaying) {
      audioPlayer.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }
  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime
    setCurrentTime(progressBar.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)
  }
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value
    setCurrentTime(progressBar.current.value)
  }

  const calculateTime = (seco) => {
    const minutes = Math.floor(seco / 60)
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(seco % 60)
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnMinutes}:${returnSeconds}`
  }

  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 lg:w-11/12">
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
                  fill="#A0A0A0"
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
                  stroke="#A0A0A0"
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

        <section className="w-6/6 bg-red mx-auto">
          {slides_per_view && (
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={slides_per_view}
              spaceBetween={0}
              //   navigation={true}
              // autoplay={true}
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
              {news_one.data.map((item) => {
                // console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className=" my-5 mx-auto rounded-md " loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="flex">
                            <div>
                              <img
                                loading="lazy"
                                src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                  item.stories_media_url[0]
                                )}/0.jpg`}
                                alt={item.stories_headlines}
                                className="mx-auto h-28 w-36 lg:h-40 lg:w-40"
                              />
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" my-3 flex justify-between px-5 font-TSlight text-sm">
                                  <p className="">
                                    <b className="text-red-700 font-TSbold">
                                      {news_one.important_data.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 font-TSbold">
                                    قبل{' '}
                                    {moment(
                                      news_one.important_data.published_on
                                    ).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="mx-5 flex justify-between">
                                <p className="texl-2xl mt-2">. . .</p>
                                {/* <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
                                  <select class="bg-white appearance-none border-none">
                                    <option className="text-3xl">. . . </option>
                                    <option>No</option>
                                    <option>Maybe</option>
                                  </select>
                                </buttons> */}
                                <section>
                                  <audio
                                    hidden="true"
                                    ref={audioPlayer}
                                    preload="metadata"
                                    controlsList="nodownload noplaybackrate "
                                    loading="lazy"
                                    controls
                                    className=" mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                            lg:w-52 lg:text-base"
                                    src={Object.values(item.voices)[1]}
                                  ></audio>

                                  <div className="my-3 flex">
                                    <div>{calculateTime(currentTime)}</div>
                                    <input
                                      dir="ltr"
                                      onChange={changeRange}
                                      type="range"
                                      defaultValue="0"
                                      ref={progressBar}
                                    ></input>
                                    <div>
                                      {duration &&
                                        !isNaN(duration) &&
                                        calculateTime(duration)}
                                    </div>
                                  </div>
                                </section>

                                <button onClick={playPause}>
                                  {isPlaying ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-14 w-14"
                                      fill="#ffab00"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-14 w-14"
                                      fill="#ffab00"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </section>
                            </section>
                          </section>
                        ) : (
                          <section className="flex">
                            <div>
                              <img
                                loading="lazy"
                                src={item.stories_media_url[0]}
                                alt={item.stories_headlines}
                                className="mx-auto h-36 w-40 lg:h-40 lg:w-40"
                              />
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" my-3 mx-3 flex justify-between font-TSlight text-xs">
                                  <p className="text-">
                                    <b className="text-red-700 font-TSbold">
                                      {news_one.important_data.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 ml-3 font-TSbold">
                                    قبل{' '}
                                    {moment(
                                      news_one.important_data.published_on
                                    ).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="mx-5 flex justify-between">
                                <p className="texl-2xl mt-2">. . .</p>
                                {/* <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
                                  <select class="bg-white appearance-none border-none">
                                    <option className="text-3xl">. . . </option>
                                    <option>No</option>
                                    <option>Maybe</option>
                                  </select>
                                </buttons> */}
                                <section>
                                  <audio
                                    hidden="true"
                                    ref={audioPlayer}
                                    preload="metadata"
                                    controlsList="nodownload noplaybackrate "
                                    loading="lazy"
                                    controls
                                    className=" mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                            lg:w-52 lg:text-base"
                                    src={Object.values(item.voices)[1]}
                                  ></audio>

                                  <div className="my-3 flex">
                                    <div className="hidden lg:grid">
                                      {calculateTime(currentTime)}
                                    </div>
                                    <input
                                      dir="ltr"
                                      onChange={changeRange}
                                      type="range"
                                      defaultValue="0"
                                      ref={progressBar}
                                    ></input>
                                    <div className="hidden lg:grid">
                                      {duration &&
                                        !isNaN(duration) &&
                                        calculateTime(duration)}
                                    </div>
                                  </div>
                                </section>

                                <button onClick={playPause}>
                                  {isPlaying ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-12 lg:h-14 lg:w-14"
                                      fill="#ffab00"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-12 lg:h-14 lg:w-14"
                                      viewBox="0 0 20 20"
                                      fill="#ffab00"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </section>
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}
          {/******************************* */}
          {/******************************* */}
          {/******************************* */}
          {/******************************* */}
          <div className="w-6/6 border-b-2 border-YELLOW pt-1 opacity-80"></div>
          {/******************************* */}
          {/******************************* */}
          {/******************************* */}
          {/******************************* */}
          {slides_per_view && (
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={slides_per_view}
              spaceBetween={0}
              //   navigation={true}
              // autoplay={true}
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
              {news_two.data.map((item) => {
                // console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className=" my-5 mx-auto rounded-md" loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="flex">
                            <div>
                              <img
                                loading="lazy"
                                src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                  item.stories_media_url[0]
                                )}/0.jpg`}
                                alt={item.stories_headlines}
                                className="mx-auto h-28 w-36 lg:h-40 lg:w-40"
                              />
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" my-3 flex justify-between px-5 font-TSlight text-sm">
                                  <p className="">
                                    <b className="text-red-700 font-TSbold">
                                      {news_two.important_data.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 font-TSbold">
                                    قبل{' '}
                                    {moment(
                                      news_two.important_data.published_on
                                    ).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="mx-5 flex justify-between">
                                <p className="texl-2xl mt-2">. . .</p>
                                {/* <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
                                  <select class="bg-white appearance-none border-none">
                                    <option className="text-3xl">. . . </option>
                                    <option>No</option>
                                    <option>Maybe</option>
                                  </select>
                                </buttons> */}
                                <section>
                                  <audio
                                    hidden="true"
                                    ref={audioPlayer}
                                    preload="metadata"
                                    controlsList="nodownload noplaybackrate "
                                    loading="lazy"
                                    controls
                                    className=" mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                            lg:w-52 lg:text-base"
                                    src={Object.values(item.voices)[1]}
                                  ></audio>

                                  <div className="my-3 flex">
                                    <div className="hidden lg:grid">
                                      {calculateTime(currentTime)}
                                    </div>
                                    <input
                                      dir="ltr"
                                      onChange={changeRange}
                                      type="range"
                                      defaultValue="0"
                                      ref={progressBar}
                                    ></input>
                                    <div className="hidden lg:grid">
                                      {duration &&
                                        !isNaN(duration) &&
                                        calculateTime(duration)}
                                    </div>
                                  </div>
                                </section>

                                <button onClick={playPause}>
                                  {isPlaying ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-14 w-14"
                                      fill="#ffab00"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-14 w-14"
                                      fill="#ffab00"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </section>
                            </section>
                          </section>
                        ) : (
                          <section className="flex">
                            <div>
                              <img
                                loading="lazy"
                                src={item.stories_media_url[0]}
                                alt={item.stories_headlines}
                                className="mx-auto h-36 w-40 lg:h-40 lg:w-40"
                              />
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" my-3 mx-3 flex justify-between font-TSlight text-xs">
                                  <p className="text-">
                                    <b className="text-red-700 font-TSbold">
                                      {news_two.important_data.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 ml-3 font-TSbold">
                                    قبل{' '}
                                    {moment(
                                      news_two.important_data.published_on
                                    ).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="mx-5 flex justify-between">
                                <p className="texl-2xl mt-2">. . .</p>
                                {/* <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
                                  <select class="bg-white appearance-none border-none">
                                    <option className="text-3xl">. . . </option>
                                    <option>No</option>
                                    <option>Maybe</option>
                                  </select>
                                </buttons> */}
                                <section>
                                  <audio
                                    hidden="true"
                                    ref={audioPlayer}
                                    preload="metadata"
                                    controlsList="nodownload noplaybackrate "
                                    loading="lazy"
                                    controls
                                    className=" mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                            lg:w-52 lg:text-base"
                                    src={Object.values(item.voices)[1]}
                                  ></audio>

                                  <div className="my-3 flex">
                                    <div className="hidden lg:grid">
                                      {calculateTime(currentTime)}
                                    </div>
                                    <input
                                      dir="ltr"
                                      onChange={changeRange}
                                      type="range"
                                      defaultValue="0"
                                      ref={progressBar}
                                    ></input>
                                    <div className="hidden lg:grid">
                                      {duration &&
                                        !isNaN(duration) &&
                                        calculateTime(duration)}
                                    </div>
                                  </div>
                                </section>

                                <button onClick={playPause}>
                                  {isPlaying ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-12 lg:h-14 lg:w-14"
                                      fill="#ffab00"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-12 lg:h-14 lg:w-14"
                                      viewBox="0 0 20 20"
                                      fill="#ffab00"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </button>
                              </section>
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          )}
        </section>
      </section>
    </React.Fragment>
  )
}

export default Test
