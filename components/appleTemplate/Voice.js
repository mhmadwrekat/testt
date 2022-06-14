import React, { useState } from 'react'
import Like from './childComponent/Like'
import moment from 'moment'
import 'moment/locale/ar'
import WaveAudio from './childComponent/WaveAudio'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
const Voice = ({
  title,
  fill_color,
  title_color,
  theme,
  subs,
  desc_color,
  description,
  news_one,
  user_id,
}) => {
  const [subscripe, setSubscripe] = useState(subs)

  const handle_subscripe = () => {
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
  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 lg:w-10/12 lg:pt-10">
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
                      handle_subscripe()
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                    viewBox="0 0 20 20"
                    fill="#32CD32"
                    onClick={() => {
                      handle_subscripe()
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              <p
                className={`${title_color} mt-5 font-TSExtra text-2xl lg:text-4xl`}
              >
                {title}{' '}
              </p>
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
            <p className="mt-5 font-TSbold text-lg text-GRAY50 lg:text-xl">
              {' '}
              أستمع للمزيد
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${fill_color} mt-4 mr-2 h-9 w-9 font-TSbold text-4xl lg:mt-3 lg:h-11 lg:w-11 lg:text-xl`}
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
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
          <div className="w-6/6 mx-auto">
            {/**** SWIPER ONE DESKTOP ****/}
            <Swiper
              // install Swiper modules
              slidesPerView={2.8}
              spaceBetween={0}
              loop={true}
            >
              {news_one.data.slice(0, 7).map((item) => {
                // console.log(Object.values(item.voices)[1])
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
                                <p
                                  className={`${theme} rounded-t-md py-3 text-right font-TSbold text-base text-base text-white hover:underline`}
                                ></p>
                              </div>
                              <div className="relative h-40 w-60 lg:h-36 lg:w-60">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-full w-full rounded-b-md object-cover"
                                />
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />

                                {/* <div className="absolute bottom-1 left-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div> */}
                              </div>
                            </div>
                            <section>
                              <section>
                                <p className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </p>
                                <div className=" my-3 flex justify-between px-5 font-TSlight text-sm">
                                  <p className="">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="float-left mx-2 flex">
                                <WaveAudio
                                  url={Object.values(item.voices)[1]}
                                />
                              </section>
                            </section>
                          </section>
                        ) : (
                          <section className="flex">
                            <div>
                              {/* {console.log(item.stories_media_url[0])} */}
                              <div className="">
                                <p
                                  className={`${theme} rounded-t-md py-3 text-right font-TSbold text-base text-base text-white hover:underline`}
                                ></p>
                              </div>
                              <div className="relative h-40 w-60 lg:h-36 lg:w-60">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-full w-full rounded-b-md object-cover"
                                />
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />

                                {/* <div className="absolute bottom-1 left-1">
                                 <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-9 w-9 cursor-pointer "
                                   viewBox="0 0 20 20"
                                   fill="#FFFFFF"
                                 >
                                   <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                 </svg>
                               </div> */}
                              </div>
                            </div>
                            <section>
                              <section>
                                <p className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </p>
                                <div className=" my-3 flex justify-between px-5 font-TSlight text-sm">
                                  <p className="">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="float-left mx-2 flex">
                                <WaveAudio
                                  url={Object.values(item.voices)[1]}
                                />
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
              slidesPerView={2.8}
              spaceBetween={0}
              loop={true}
            >
              {news_one.data.slice(7, 15).map((item) => {
                // console.log(Object.values(item.voices)[1])
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
                                <p
                                  className={`${theme} rounded-t-md py-3 text-right font-TSbold text-base text-base text-white hover:underline`}
                                ></p>
                              </div>
                              <div className="relative h-40 w-60 lg:h-36 lg:w-60">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-full w-full rounded-b-md object-cover"
                                />
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />

                                {/* <div className="absolute bottom-1 left-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 cursor-pointer "
                                    viewBox="0 0 20 20"
                                    fill="#FFFFFF"
                                  >
                                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                  </svg>
                                </div> */}
                              </div>
                            </div>
                            <section>
                              <section>
                                <p className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </p>
                                <div className=" my-3 flex justify-between px-5 font-TSlight text-sm">
                                  <p className="">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="float-left mx-2 flex">
                                <WaveAudio
                                  url={Object.values(item.voices)[1]}
                                />
                              </section>
                            </section>
                          </section>
                        ) : (
                          <section className="flex">
                            <div>
                              {/* {console.log(item.stories_media_url[0])} */}
                              <div className="">
                                <p
                                  className={`${theme} rounded-t-md py-3 text-right font-TSbold text-base text-base text-white hover:underline`}
                                ></p>
                              </div>
                              <div className="relative h-40 w-60 lg:h-36 lg:w-60">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-full w-full rounded-b-md object-cover"
                                />
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />

                                {/* <div className="absolute bottom-1 left-1">
                                 <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   className="h-9 w-9 cursor-pointer "
                                   viewBox="0 0 20 20"
                                   fill="#FFFFFF"
                                 >
                                   <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                 </svg>
                               </div> */}
                              </div>
                            </div>
                            <section>
                              <section>
                                <p className="mx-3 pt-3 font-TSbold text-lg lg:text-xl">
                                  {item.stories_headlines}
                                </p>
                                <div className=" my-3 flex justify-between px-5 font-TSlight text-sm">
                                  <p className="">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                              <section className="float-left mx-2 flex">
                                <WaveAudio
                                  url={Object.values(item.voices)[1]}
                                />
                              </section>
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </section>
        {/**** Mobile View ****/}
        {/**** Mobile View ****/}
        <section className="block lg:hidden">
          <section className="w-6/6 mx-auto">
            <Swiper
              // install Swiper modules
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
            >
              {news_one.data.slice(0, 7).map((item) => {
                // console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mx-auto rounded-md " loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="grid grid-cols-2">
                            <div>
                              <p
                                className={`${theme} w-36 rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-white hover:underline md:w-96`}
                              >
                                {news_one.section_name}
                              </p>

                              <div className="relative h-36 w-36 md:h-72 md:w-96">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-60 rounded-b-md object-cover lg:h-36 lg:w-60"
                                />
                                {/* <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div> */}
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-0 mr-0 pt-3 font-TSbold text-lg md:text-2xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
                                  <p className="text-">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 ml-3 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                            </section>
                            <section className="float-left mx-5 flex">
                              <WaveAudio url={Object.values(item.voices)[1]} />
                            </section>
                          </section>
                        ) : (
                          <section className="grid grid-cols-2">
                            <div>
                              <div className="">
                                <p
                                  className={`${theme} w-36 rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-white hover:underline md:w-96`}
                                >
                                  {news_one.section_name}
                                </p>
                              </div>

                              <div className="relative h-36 w-36 md:h-72 md:w-96">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-60 rounded-b-md object-cover lg:h-36 lg:w-60"
                                />
                                {/* <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div> */}
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-1 mr-0 pt-3 font-TSbold text-lg md:text-2xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
                                  <p className="text-">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 ml-3 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                            </section>
                            <section className="float-left mx-5 flex">
                              <WaveAudio url={Object.values(item.voices)[1]} />
                            </section>
                          </section>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="w-6/6 mx-auto mb-3 border-b-2 border-YELLOW pt-1 opacity-80"></div>
            <Swiper
              // install Swiper modules
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
            >
              {news_one.data.slice(7, 15).map((item) => {
                // console.log(Object.values(item.voices)[1])
                return (
                  <SwiperSlide key={item._id}>
                    <div className="mx-auto rounded-md " loading="lazy">
                      {item.stories_media_url[0] &&
                        (item.stories_media_url[0].includes('youtube') ||
                        item.stories_media_url[0].includes('youtu.be') ? (
                          <section className="grid grid-cols-2">
                            <div>
                              <div className="">
                                <p
                                  className={`${theme} w-36 rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-white hover:underline md:w-96`}
                                >
                                  {news_one.section_name}
                                </p>
                              </div>

                              <div className="relative h-36 w-36 md:h-72 md:w-96">
                                <img
                                  loading="lazy"
                                  src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                    item.stories_media_url[0]
                                  )}/0.jpg`}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-60 rounded-b-md object-cover lg:h-36 lg:w-60"
                                />
                                {/* <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div> */}
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-1 mr-0 pt-3 font-TSbold text-lg md:text-2xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
                                  <p className="text-">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 ml-3 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                            </section>
                            <section className="float-left mx-5 flex">
                              <WaveAudio url={Object.values(item.voices)[1]} />
                            </section>
                          </section>
                        ) : (
                          <section className="grid grid-cols-2">
                            <div>
                              <div className="">
                                <p
                                  className={`${theme} w-36 rounded-t-md pt-1.5 pr-1 text-right font-TSbold text-base text-white hover:underline md:w-96`}
                                >
                                  {news_one.section_name}
                                </p>
                              </div>

                              <div className="relative h-36 w-36 md:h-72 md:w-96">
                                <img
                                  loading="lazy"
                                  src={item.stories_media_url[0]}
                                  alt={item.stories_headlines}
                                  className="mx-auto h-40 w-60 rounded-b-md object-cover lg:h-36 lg:w-60"
                                />
                                {/* <div className="bg-white absolute bottom-1 right-1 rounded-full p-1">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" h-7 w-7 cursor-pointer opacity-70"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                  </svg>
                                </div> */}
                                <Like
                                  user_id={user_id}
                                  story_id={item._id}
                                  isLoved={item.is_loved}
                                />
                              </div>
                            </div>
                            <section>
                              <section>
                                <h1 className="mx-1 mr-0 pt-3 font-TSbold text-lg md:text-2xl">
                                  {item.stories_headlines}
                                </h1>
                                <div className=" mx-1 mt-3 flex justify-between font-TSlight text-xs">
                                  <p className="text-">
                                    <b className="text-red-700 font-TSbold">
                                      {item.publisher_name}
                                    </b>
                                  </p>
                                  <p className="text-gray-500 ml-3 font-TSbold">
                                    قبل{' '}
                                    {moment(item.published_on).fromNow(true)}
                                  </p>
                                </div>
                              </section>
                            </section>
                            <section className="float-left mx-5 flex">
                              <WaveAudio url={Object.values(item.voices)[1]} />
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

export default Voice
