// Import Libraries
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'

// component imports
import LogaimaModal from './childComponent/LogamiatModal'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'

const Logaimat = ({
  setShowCategory,
  title,
  important_news,
  // fill_color,
  title_color,
  subs,
  desc_color,
  description,
}) => {
  // SwiperCore.use([Autoplay])
  const [openLoqaima, setOpenLoqaima] = useState(false)
  const [loqaimatScreens, setLoqaimatScreens] = useState([])

  let isMobile =
    typeof window !== 'undefined'
      ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      : ''

  let slides_per_view = isMobile ? 2 : 4.5
  let space_between = isMobile ? 5 : 50

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

  const handle_subscripe = () => {
    setSubscripe(!subscripe)
  }

  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 lg:w-10/12 lg:pt-10">
        <React.Fragment>
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
                  {title}
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

            {/* <div className="my-1 mt-4 flex lg:mt-5">
              <p className="mt-5 font-TSbold text-lg text-GRAY50 lg:text-xl">
                عرض الجميع
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
            </div> */}
          </div>
          {description && (
            <p
              className={`${desc_color} grid w-10/12 px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
            >
              {description}
            </p>
          )}
          <section className="w-12/12 lg:w-12/12 mx-auto">
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              slidesPerView={slides_per_view}
              spaceBetween={space_between}
              // autoplay={true}
              loop={true}
            >
              {important_news.map((item) => {
                // console.log('Item -> ', item)
                return (
                  <SwiperSlide key={item._id}>
                    <section
                      className=""
                      onClick={() => {
                        setOpenLoqaima(true)
                        setLoqaimatScreens(item.screens)
                        setShowCategory(false)
                      }}
                    >
                      <div className="relative mr-2 py-2 lg:mr-0 lg:h-96 lg:w-60 lg:py-0">
                        {item.cover_photo &&
                          (item.cover_photo.includes('youtube') ||
                          item.cover_photo.includes('youtu.be') ? (
                            <img
                              loading="eager"
                              src={` https://img.youtube.com/vi/${retrieve_youtube_code(
                                item.cover_photo
                              )}/0.jpg`}
                              alt={item.topic_name}
                              className="mx-auto
                                h-72 w-44 cursor-pointer rounded-md object-cover object-top md:h-full md:w-full lg:h-96 lg:w-72"
                            />
                          ) : (
                            <Image
                              src={item.cover_photo}
                              alt={item.topic_name}
                              className="mx-auto h-72 w-44 cursor-pointer rounded-md object-cover object-top md:h-full md:w-full lg:h-96 lg:w-72"
                              quality={70}
                              layout="fill"
                              objectFit="cover"
                              // width={800}
                              // height={350}
                              // priority
                              loading="eager"
                              placeholder="blur"
                              blurDataURL={item.cover_photo}
                            />
                            // <img
                            //   loading="eager"
                            //   src={item.cover_photo}
                            //   alt={item.topic_name}
                            //   className="mx-auto h-72 w-44 cursor-pointer rounded-md object-cover object-top md:h-full md:w-full lg:h-96 lg:w-72"
                            // />
                          ))}
                        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full cursor-pointer overflow-hidden bg-white opacity-0 transition ease-in-out hover:opacity-80">
                          <p className="mx-auto w-8/12 pt-10 text-center font-TSExtra text-2xl lg:pt-24">
                            اضغط هنا لمتابعة القراءة
                          </p>

                          <img
                            src="./assest/images/LogaimatHand.svg"
                            className="mx-auto w-4/12 justify-center pt-4"
                            width="100"
                            height="100"
                            alt="hand click"
                          />
                        </div>
                      </div>
                      <div className="pt-3 text-center font-TSExtra text-2xl lg:w-60">
                        {item.topic_name}{' '}
                      </div>
                    </section>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </section>
        </React.Fragment>
      </section>
      <LogaimaModal
        open={openLoqaima}
        setOpen={setOpenLoqaima}
        loqaimatScreens={loqaimatScreens}
        setShowCategory={setShowCategory}
      />
    </React.Fragment>
  )
}
export default Logaimat
