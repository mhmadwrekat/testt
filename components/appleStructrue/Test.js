// import Styles from '../../styles/Audio.css'
// import ReactAudioPlayer from 'react-audio-player'
// import Swiper core and required modules
// import { PlayIcon } from '@heroicons/react/outline'
// import Wavesurfer from 'react-wavesurfer.js'
import { Navigation } from 'swiper'
import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'
import 'moment/locale/ar'
import Wave from '../appleStructrue/Wave'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
const Test = ({
  title,
  fill_color,
  title_color,
  theme,
  subs,
  desc_color,
  description,
  news_one,
  news_two,
}) => {
  const [subscripe, setSubscripe] = useState(subs)
  // const [position, setPosition] = useState(0)
  // const [muted, setMuted] = useState(false)
  // const onReadyHandler = () => console.log('done loading!')
  // const handlePositionChange = (position) => {
  //   console.log('done handlePositionChange!')
  // }
  const handleSubscripe = () => {
    setSubscripe(!subscripe)
  }
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

  let audioPlayer = useRef()
  const progressBar = useRef()
  const animationRef = useRef()
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
  let window_width = 0
  if (typeof window !== 'undefined') {
    window_width = window.innerWidth
  }
  let slides_per_view = 0
  let space_between = 0
  if (window_width > 900) {
    ;(slides_per_view = 2.8), (space_between = 15)
  } else if (window_width < 900 && window_width > 400) {
    ;(slides_per_view = 2), (space_between = 15)
  } else if (window_width < 400) {
    ;(slides_per_view = 1), (space_between = 15)
  }
  // useEffect(() => {
  //   const seconds = Math.floor(audioPlayer.current.duration)
  //   setDuration(seconds)
  //   progressBar.current.max = seconds
  // }, [audioPlayer.current.loadedmetadata, audioPlayer.current.readyState])
  return (
    <React.Fragment>
      {/* <Wavesurfer
        src="https://freesound.org/data/previews/462/462807_8386274-lq.mp3"
        position={position}
        onPositionChange={handlePositionChange}
        onReady={onReadyHandler}
        muted={muted}
      /> */}
      <section className="mx-auto w-11/12 lg:w-10/12">
        <div className="flex justify-between">
          <div className="my-3 mt-3 lg:mt-4">
            <div className="flex">
              {subscripe !== null &&
                (subscripe ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                    viewBox="0 0 20 20"
                    fill="#B0B0B0"
                    onClick={() => {
                      handleSubscripe()
                    }}
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
                    className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                    viewBox="0 0 20 20"
                    fill="#32CD32"
                    onClick={() => {
                      handleSubscripe()
                    }}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ))}
              <h1
                className={`${title_color} mt-5 font-TSExtra text-2xl lg:text-4xl`}
              >
                {title}{' '}
              </h1>
            </div>
            {description && (
              <p
                className={`${desc_color} hidden w-full px-1 pt-1 pb-5 font-TSmedium text-lg lg:grid lg:text-xl`}
              >
                {description}
              </p>
            )}
          </div>

          <div className="my-1 mt-4 flex lg:mt-5">
            <p className="mt-5 font-TSbold text-lg lg:text-xl"> أستمع للمزيد</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${fill_color} mt-4 mr-2 h-9 w-9 font-TSbold text-4xl lg:mt-3 lg:h-11 lg:w-11 lg:text-xl`}
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>{' '}
        {description && (
          <p
            className={`${desc_color} grid w-10/12 px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
          >
            {description}
          </p>
        )}
        {/**** Desktop View ****/}
        {/**** Desktop View ****/}
        <section className="hidden lg:block">
          <section className="w-6/6 mx-auto">
            {/**** SWIPER ONE DESKTOP ****/}
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={2.8}
              spaceBetween={0}
              //   navigation={true}
              // autoplay={true}
              // loop={true}
              // install Swiper modules
              loop={true}
              // thumbs={{
              //   swiper: thumbsSwiper,
              // }}
              // autoplay={true}
              // scrollbar={{
              //   draggable: true,
              //   dragSize: 'auto',
              //   hide: true,
              // }}
              // pagination={{
              //   type: 'fraction',
              // }}
            >
              {news_one.data.map((item) => {
                console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mx-auto rounded-md " loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="flex">
                            <div>
                              {/* {console.log(item.stories_media_url[0])} */}
                              <div className="">
                                <h3
                                  className={`${theme} text-white rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_one.category_name}
                                </h3>{' '}
                              </div>
                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className=" mx-auto h-40 w-60 rounded-b-md lg:h-36 lg:w-60"
                                />
                                <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
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
                              <section className="float-left mx-2 flex">
                                <Wave url={Object.values(item.voices)[1]} />
                              </section>
                            </section>
                          </section>
                        ) : (
                          <section className="flex">
                            <div>
                              <div className="">
                                <h3
                                  className={`${theme} text-white rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_one.category_name}
                                </h3>{' '}
                              </div>

                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-60 rounded-b-md lg:h-36 lg:w-60"
                                />
                                <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
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
                              <section className="float-left mx-2 flex">
                                <Wave url={Object.values(item.voices)[1]} />
                              </section>
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="w-6/6 my-3 mx-auto border-b-2 border-YELLOW pt-1 opacity-80"></div>
            {/**** SWIPER TWO DESKTOP ****/}
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={2.8}
              spaceBetween={0}
              loop={true}
            >
              {news_two.data.map((item) => {
                console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mx-auto rounded-md " loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="flex">
                            <div>
                              {/* {console.log(item.stories_media_url[0])} */}
                              <div className="">
                                <h3
                                  className={`text-white rounded-t-md bg-SKY pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_two.category_name}
                                </h3>{' '}
                              </div>
                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className=" mx-auto h-40 w-60 rounded-b-md lg:h-36 lg:w-60"
                                />
                                <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
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
                              <section className="float-left mx-2 flex">
                                <Wave url={Object.values(item.voices)[1]} />
                              </section>
                            </section>
                          </section>
                        ) : (
                          <section className="flex">
                            <div>
                              <div className="">
                                <h3
                                  className={`text-white rounded-t-md bg-SKY pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_two.category_name}
                                </h3>{' '}
                              </div>

                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-60 rounded-b-md lg:h-36 lg:w-60"
                                />
                                <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
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
                              <section className="float-left mx-2 flex">
                                <Wave url={Object.values(item.voices)[1]} />
                              </section>
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </section>
        </section>
        {/**** Mobile View ****/}
        {/**** Mobile View ****/}
        <section className="block lg:hidden">
          <section className="w-6/6 mx-auto">
            {/**** SWIPER ONE Mobile ****/}
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              //   navigation={true}
              // autoplay={true}
              // loop={true}
              // install Swiper modules
              loop={true}
              // thumbs={{
              //   swiper: thumbsSwiper,
              // }}
              // autoplay={true}
              // scrollbar={{
              //   draggable: true,
              //   dragSize: 'auto',
              //   hide: true,
              // }}
              // pagination={{
              //   type: 'fraction',
              // }}
            >
              {news_one.data.map((item) => {
                console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mx-auto rounded-md " loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="grid grid-cols-2">
                            <div>
                              <div className="">
                                <h3
                                  className={`${theme} text-white mx-auto w-40 rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_one.category_name}
                                </h3>{' '}
                              </div>

                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className=" mx-auto h-40 w-40 rounded-b-md "
                                />
                                <div className="bg-white absolute bottom-1 right-3 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-1 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
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
                            </section>
                            <section className="float-left mx-2 flex">
                              <Wave url={Object.values(item.voices)[1]} />
                            </section>
                          </section>
                        ) : (
                          <section className="grid grid-cols-2">
                            <div>
                              <div className="">
                                <h3
                                  className={`${theme} text-white mx-auto w-40 rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_one.category_name}
                                </h3>{' '}
                              </div>

                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-40 rounded-b-md"
                                />
                                <div className="bg-white absolute bottom-1 right-3 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-1 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
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
                            </section>
                            <section className="float-left mx-2 flex">
                              <Wave url={Object.values(item.voices)[1]} />
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="w-6/6 mx-auto mb-3 border-b-2 border-YELLOW pt-1 opacity-80"></div>
            {/**** SWIPER TWO Mobile ****/}
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
            >
              {news_two.data.map((item) => {
                console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mx-auto rounded-md " loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="grid grid-cols-2">
                            <div>
                              <div className="">
                                <h3
                                  className={`text-white mx-auto w-40 rounded-t-md bg-SKY pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_two.category_name}
                                </h3>{' '}
                              </div>

                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className=" mx-auto h-40 w-40 rounded-b-md "
                                />
                                <div className="bg-white absolute bottom-1 right-3 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-1 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
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
                            </section>
                            <section className="float-left mx-2 flex">
                              <Wave url={Object.values(item.voices)[1]} />
                            </section>
                          </section>
                        ) : (
                          <section className="grid grid-cols-2">
                            <div>
                              <div className="">
                                <h3
                                  className={`text-white mx-auto w-40 rounded-t-md bg-SKY pt-1.5 pr-1 text-right font-TSbold text-base text-base hover:underline`}
                                >
                                  {news_one.category_name}
                                </h3>{' '}
                              </div>

                              <div className="relative">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-40 rounded-b-md"
                                />
                                <div className="bg-white absolute bottom-1 right-3 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div>
                                <div className="absolute bottom-1 left-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-1 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
                                  <p className="">
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
                            </section>
                            <section className="float-left mx-2 flex">
                              <Wave url={Object.values(item.voices)[1]} />
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </section>
        </section>
      </section>
    </React.Fragment>
  )
}

export default Test
