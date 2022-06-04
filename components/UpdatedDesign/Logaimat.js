import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/ar'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'

const Logaimat = ({
  title,
  important_news,
  fill_color,
  title_color,
  theme,
  subs,
  desc_color,
  description,
}) => {
  SwiperCore.use([Autoplay])
  const test_text = [
    'جورج قرداحي',
    ' شيرين',
    'جورج قرداحي',
    ' شيرين',
    'جورج قرداحي',
    'جورج قرداحي',
    ' شيرين',
    'جورج قرداحي',
    ' شيرين',
    'جورج قرداحي',
    'جورج قرداحي',
    ' شيرين',
    'جورج قرداحي',
    ' شيرين',
    'جورج قرداحي',
  ]
  let counter = 1

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
  const [subscripe, setSubscripe] = useState(subs)

  const handleSubscripe = () => {
    setSubscripe(!subscripe)
  }
  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 lg:w-10/12">
        <>
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
              <p className="mt-5 font-TSbold text-lg lg:text-xl">عرض الجميع</p>
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
          {/**** Desktop View ****/}
          <section className="w-12/12 lg:w-12/12 mx-auto hidden lg:flex">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={4}
              spaceBetween={15}
              autoplay={true}
              loop={true}
              //   navigation={true}
              // autoplay={true}
              // install Swiper modules
              // loop={true}
              // thumbs={{
              //   swiper: thumbsSwiper,
              // }}
              // scrollbar={{
              //   draggable: true,
              //   dragSize: 'auto',
              //   hide: true,
              // }}
              // pagination={{
              //   type: 'fraction',
              // }}
            >
              {important_news.map((item) => {
                counter++

                return (
                  <SwiperSlide key={item._id}>
                    <section className="px-0">
                      <div className="relative mr-2 py-2 lg:mr-0 lg:h-96 lg:w-72 lg:py-0">
                        {item.screen_link &&
                          (item.screen_link.includes('youtube') ||
                          item.screen_link.includes('youtu.be') ? (
                            <img
                              loading="eager"
                              src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                item.screen_link
                              )}/0.jpg`}
                              alt="test"
                              className="
                                mx-auto
                                h-32 
                                w-40 md:h-full md:w-full lg:h-96 lg:w-72"
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
                              loading="eager"
                              src={item.screen_link}
                              alt="test"
                              className="mx-auto h-32 w-40 md:h-full md:w-full lg:h-96 lg:w-72"
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
                        <div class="bg-white absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden opacity-0 transition ease-in-out hover:opacity-70">
                          <p className="mx-auto w-8/12 text-center font-TSExtra text-2xl lg:pt-24">
                            اضغط هنا لمتابعة القرائة
                          </p>
                        </div>
                      </div>
                      <div className="pt-3 text-center font-TSExtra text-2xl lg:w-72">
                        {test_text[counter]}
                      </div>
                    </section>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </section>
          {<p className="hidden">{counter--}</p>}
          {/**** Mobile View ****/}
          {/**** Mobile View ****/}
          {/**** Mobile View ****/}
          <section className="w-12/12 lg:w-12/12 mx-auto flex lg:hidden">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={1.8}
              spaceBetween={10}
              autoplay={true}
              loop={true}
              //   navigation={true}
              // autoplay={true}
              // install Swiper modules
              // loop={true}
              // thumbs={{
              //   swiper: thumbsSwiper,
              // }}
              // scrollbar={{
              //   draggable: true,
              //   dragSize: 'auto',
              //   hide: true,
              // }}
              // pagination={{
              //   type: 'fraction',
              // }}
            >
              {important_news.map((item) => {
                counter--

                return (
                  <SwiperSlide key={item._id}>
                    <section className="px-0">
                      <div className="relative mr-2 h-72 w-40 lg:mr-0  lg:py-0">
                        {item.screen_link &&
                          (item.screen_link.includes('youtube') ||
                          item.screen_link.includes('youtu.be') ? (
                            <img
                              loading="eager"
                              src={item.screen_link}
                              alt="test"
                              className="
                                mx-auto
                                h-72 
                                w-40 md:h-full md:w-full"
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
                              loading="eager"
                              src={item.screen_link}
                              alt="test"
                              className="mx-auto h-72 w-40 md:h-full md:w-full"
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
                        <div class="bg-white absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden opacity-0 transition ease-in-out hover:opacity-70">
                          <p className="mx-auto w-8/12 pt-20 text-center font-TSExtra text-xl">
                            اضغط هنا لمتابعة القرائة
                          </p>
                        </div>
                      </div>
                      <div className="w-40 pt-3 text-center font-TSExtra text-xl">
                        {test_text[counter]}
                      </div>
                    </section>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </section>
        </>
      </section>
    </React.Fragment>
  )
}
export default Logaimat
/*
           {subscripe !== null &&
                (subscripe ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 mt-1 mb-5 h-10 w-10 hover:cursor-pointer lg:h-16 lg:w-16"
                    viewBox="0 0 20 20"
                    fill="#000000"
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
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ))}
*/
