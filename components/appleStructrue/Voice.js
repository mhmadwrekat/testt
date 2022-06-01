import React, { useState, useRef, useEffect } from 'react'
// import ReactAudioPlayer from 'react-audio-player'
// import Swiper core and required modules
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
// import { PlayIcon } from '@heroicons/react/outline'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
// import { Carousel } from 'react-responsive-carousel'

// import { PauseCircleFilled, PlayCircleFilled } from '@material-ui/icons'

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
  if (window_width > 900) {
    ;(slides_per_view = 4.5), (space_between = 15)
  } else if (window_width < 900 && window_width > 400) {
    ;(slides_per_view = 3), (space_between = 15)
  } else if (window_width < 400) {
    ;(slides_per_view = 1), (space_between = 15)
  }
  /**
let space_between = 0
  window_width > 800
    ? ((slides_per_view = 5), (space_between = 15))
    : ((slides_per_view = 2), (space_between = 1)) 
 
 */
  // const [showMe, setShowMe] = useState(false)

  // const playy = (audio) => {
  //   let audioo = new Audio(audio)
  //   if (showMe) {
  //     audioo.pause()
  //     // console.log('from if', showMe)
  //   } else {
  //     audioo.play()
  //     // console.log('from else', showMe)
  //   }
  //   setShowMe(!showMe)
  // }

  // const pausee = (audio) => {
  //   let audioo = new Audio(audio)

  //   setShowMe(!showMe)
  // }

  // const [isPlaying, setisPlaying] = useState(false)
  // const [duration, setDuration] = useState(0)
  // const [currentTime, setCurrentTime] = useState(0)

  // const audioPlayer = useRef()
  // const progressBar = useRef()
  // const animationRef = useRef()

  // useEffect(() => {
  //   const seconds = Math.floor(audioPlayer.current.duration)
  //   setDuration(seconds)
  //   // progressBar.current.max = seconds
  // }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  // const playPause = () => {
  //   setisPlaying(!isPlaying)
  //   if (!isPlaying) {
  //     audioPlayer.current.play()
  //     // animationRef.current = requestAnimationFrame(whilePlaying)
  //   } else {
  //     audioPlayer.current.pause()
  //     // cancelAnimationFrame(animationRef.current)
  //   }
  // }
  // const whilePlaying = () => {
  //   progressBar.current.value = audioPlayer.current.currentTime
  //   setCurrentTime(progressBar.current.value)
  //   animationRef.current = requestAnimationFrame(whilePlaying)
  // }
  // const changeRange = () => {
  //   audioPlayer.current.currentTime = progressBar.current.value
  //   setCurrentTime(progressBar.current.value)
  // }

  // const calculateTime = (seco) => {
  //   const minutes = Math.floor(seco / 60)
  //   const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
  //   const seconds = Math.floor(seco % 60)
  //   const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  //   return `${returnMinutes}:${returnSeconds}`
  // }

  return (
    <React.Fragment>
      <section loading="lazy">
        {/* <link rel="stylesheet" href="./styles/global.css" /> */}

        <p className="py-8"></p>
        <section className=" mx-auto w-11/12 rounded-lg pt-2 lg:w-9/12 lg:pt-2">
          <h1 className=" text-blue-400 font-TSExtra text-xl lg:text-4xl">
            الصوتيات
          </h1>
          <h2 className="border-gray-400 border-b-2 font-TSbold text-sm lg:text-lg">
            <p className="text-gray-400 hover-border-b-2 hover-scale-110 w-2/6 pt-2 text-right lg:w-1/6">
              الاكثر أستماعا
            </p>
          </h2>

          {/* {console.log(slides_per_view)} */}

          <section className="w-6/6 bg-red mx-auto">
            {slides_per_view && (
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                slidesPerView={slides_per_view}
                spaceBetween={0}
                navigation={true}
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
                {important_news.data.map((item) => {
                  // console.log(Object.values(item.voices)[1])
                  return (
                    <SwiperSlide key={item._id}>
                      <div
                        className="my-5 mx-auto w-60 rounded-md shadow-2xl
                        lg:my-10 "
                        loading="lazy"
                      >
                        <p className=" py-2"></p>
                        {item.stories_media_url[0] &&
                          (item.stories_media_url[0].includes('youtube') ||
                          item.stories_media_url[0].includes('youtu.be') ? (
                            <div className="relative">
                              <img
                                loading="lazy"
                                src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                  item.stories_media_url[0]
                                )}/0.jpg`}
                                alt={item.stories_headlines}
                                className="mx-auto h-28 w-36 rounded-t-xl lg:h-56 lg:w-52"
                              />
                              {/* <img
                                style={{ display: showMe ? 'none' : 'block' }}
                                src="https://png.vector.me/files/images/6/7/678531/windows_media_player_play_button_updated_preview"
                                className=" absolute bottom-2 right-6 h-11 w-11"
                                onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              />
                              <img
                                style={{ display: showMe ? 'block' : 'none' }}
                                src="https://png.vector.me/files/images/6/7/678557/windows_media_player_pause_button_preview"
                                className=" absolute bottom-2 right-6 h-11 w-11"
                                onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              /> */}
                              {/* <audio
                                ref={audioPlayer}
                                controlsList="nodownload noplaybackrate "
                                loading="lazy"
                                className=" mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                            lg:w-52 lg:text-base"
                                src={Object.values(item.voices)}
                              ></audio>

                              <button
                                onClick={playPause(Object.values(item.voices))}
                              >
                                {isPlaying ? (
                                  <img
                                    src="https://png.vector.me/files/images/6/7/678557/windows_media_player_pause_button_preview"
                                    className="  right-6 h-11 w-11"
                                  />
                                ) : (
                                  <img
                                    src="https://png.vector.me/files/images/6/7/678531/windows_media_player_play_button_updated_preview"
                                    className="  right-6 h-11 w-11"
                                  />
                                )}
                              </button> */}
                              {/* <button
                                style={{ display: showMe ? 'none' : 'block' }}
                                className=" absolute bottom-16 right-6 h-11 w-11"
                                onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              >
                                <PlayCircleFilled />
                              </button>
                              <button
                                style={{ display: showMe ? 'block' : 'none' }}
                                className=" absolute bottom-16 right-6 h-11 w-11"
                                onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              >
                                <PauseCircleFilled />
                              </button> */}

                              {/* <button
                                style={{ display: showMe ? 'none' : 'block' }}
                                className=" absolute bottom-16 right-6 h-16 w-16"
                                onClick={() => {
                                  playy(
                                    'https://cdn1.esm3.com/music/4558/m299431.mp3'
                                  )
                                }}
                              >
                                <PlayCircleFilled />
                              </button>
                              <button
                                style={{ display: showMe ? 'block' : 'none' }}
                                className=" absolute bottom-16 right-6 h-16 w-16"
                                onClick={() => {
                                  pausee(
                                    'https://cdn1.esm3.com/music/4558/m299431.mp3'
                                  )
                                }}
                              >
                                <PauseCircleFilled />
                              </button> */}
                              {/* <ReactAudioPlayer
                                controlsList="nodownload noplaybackrate "
                                loading="lazy"
                                controls
                                className="absolute bottom-0 right-10 mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                   lg:w-52 lg:text-base"
                                src={Object.values(item.voices)[1]}
                              /> */}
                              <audio
                                controlsList="nodownload noplaybackrate"
                                loading="lazy"
                                controls
                                className=" mx-auto w-40 font-TSbold text-xs lg:right-4 lg:w-52 lg:text-base"
                                src="https://cdn1.esm3.com/music/4558/m299431.mp3"
                              ></audio>
                            </div>
                          ) : (
                            <div className="relative">
                              <img
                                loading="lazy"
                                src={item.stories_media_url[0]}
                                alt={item.stories_headlines}
                                className="mx-auto h-36 w-40 rounded-t-xl lg:h-56 lg:w-52"
                              />
                              {/* <img
                                style={{ display: showMe ? 'none' : 'block' }}
                                src="https://png.vector.me/files/images/6/7/678531/windows_media_player_play_button_updated_preview"
                                className=" absolute bottom-2 right-6 h-11 w-11"
                                onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              />
                              <img
                                style={{ display: showMe ? 'block' : 'none' }}
                                src="https://png.vector.me/files/images/6/7/678557/windows_media_player_pause_button_preview"
                                className=" absolute bottom-2 right-6 h-11 w-11"
                                onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              /> */}
                              {/* <audio
                                ref={audioPlayer}
                                controlsList="nodownload noplaybackrate "
                                loading="lazy"
                                className=" mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                            lg:w-52 lg:text-base"
                                src={Object.values(item.voices)[1]}
                              ></audio>
                              <button onClick={playPause}>
                                {isPlaying ? (
                                  <img
                                    src="https://png.vector.me/files/images/6/7/678557/windows_media_player_pause_button_preview"
                                    className=" absolute bottom-7 right-6 h-11 w-11"
                                  />
                                ) : (
                                  <img
                                    src="https://png.vector.me/files/images/6/7/678531/windows_media_player_play_button_updated_preview"
                                    className="  absolute bottom-7 right-6 h-11 w-11"
                                  />
                                )}
                              </button> */}
                              {/* <button
                                style={{ display: showMe ? 'none' : 'block' }}
                                className=" absolute bottom-16 right-6 h-16 w-16"
                                onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              >
                                <PlayCircleFilled />
                              </button>
                              <button
                                style={{ display: showMe ? 'block' : 'none' }}
                                className=" absolute bottom-16 right-6 h-16 w-16"
                               onClick={() => {
                                  playy(Object.values(item.voices)[1])
                                }}
                              >
                                <PauseCircleFilled />
                              </button> */}
                              {/* <ReactAudioPlayer
                                controlsList="nodownload noplaybackrate "
                                loading="lazy"
                                controls
                                className="absolute bottom-0 right-10 mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                   lg:w-52 lg:text-base"
                                src={Object.values(item.voices)[1]}
                              /> */}
                              <audio
                                controlsList="nodownload noplaybackrate "
                                loading="lazy"
                                controls
                                className=" mx-auto w-40 font-TSbold text-xs lg:right-4 lg:w-52 lg:text-base"
                                src={Object.values(item.voices)[1]}
                              ></audio>
                            </div>
                          ))}

                        <h1 className="mx-auto w-8/12 pt-3 font-TSbold text-base">
                          {item.stories_headlines.slice(0, 14)}
                        </h1>
                        <h1 className="mx-auto h-20 w-8/12 pb-3 pt-1 font-TSlight text-sm">
                          {item.stories_headlines}
                        </h1>
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
 * 
 * 
 * 
   <audio
                                controlsList="nodownload noplaybackrate "
                                loading="lazy"
                                controls
                                className="absolute bottom-0 right-10 mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
                                  lg:w-52 lg:text-base"
                                src="https://testin-bucket2021.s3.us-east-2.amazonaws.com/filemjmjihkvwt.mp3"
                              ></audio> 
 * 
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
