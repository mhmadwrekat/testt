import React from 'react'
import FakeData from './FakeData.json'
import dynamic from 'next/dynamic'
import Like from '../components/appleTemplate/childComponent/Like'

const HeadComp = dynamic(() => import('../components/page/HeadComp'))
const Nav = dynamic(() => import('../components/page/Nav'))

const ViewAll = () => {
  let loading = 'eager'
  let title = 'أهم الأخبار'
  //   let category_news = all_news[0]
  //   let user_id = user_id
  let subs = !null
  let subscripe = true
  let bg_color = 'bg-BLUE'
  let title_color = 'text-BLUE'
  let description = 'جميع الأخبار المتعلقة في عالم الصحه من أهم المصادر'
  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <HeadComp />
        <Nav />
        <section className="bg-white text-black mx-auto w-11/12 lg:w-10/12 lg:pt-10">
          <div className="flex justify-between">
            <div className="my-3 mt-3 lg:mt-4">
              <div className="flex">
                {subs !== null &&
                  (subscripe ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                      viewBox="0 0 20 20"
                      fill="#32CD32"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-0.5 mt-3 h-10 w-10 hover:cursor-pointer lg:h-12 lg:w-12"
                      viewBox="0 0 20 20"
                      fill="#B0B0B0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
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
                  className={`hidden w-full px-1 pt-1 pb-5 font-TSmedium text-lg text-GRAY400 lg:grid lg:text-xl`}
                >
                  {description}
                </p>
              )}
            </div>
          </div>{' '}
          {description && (
            <p
              className={`text-black grid w-10/12 px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
            >
              {description}
            </p>
          )}
          {/* key={item?._id} */}
          <section className="grid grid-cols-3 gap-16">
            {FakeData.slice(0, 3).map((item) => {
              return (
                <section>
                  <div className=" rounded-lg bg-GRAY100 shadow-lg" id="card">
                    <div>
                      <p
                        className={`${bg_color} text-white rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base hover:underline lg:pr-5`}
                      >
                        {item.section}
                      </p>{' '}
                    </div>
                    <section className="flex bg-GRAY100 lg:grid ">
                      <div className="relative mr-2 w-72 py-2 lg:mr-0 lg:w-auto lg:py-0">
                        <img
                          loading="eager"
                          src={item.image}
                          alt={item.title}
                          className="mx-auto h-32 w-40 object-cover md:h-full md:w-full lg:h-72 lg:w-full"
                        />

                        <Like
                          user_id="62a0dd4b86fdbd34fc3bad58"
                          story_id="60d9d86c8eeb1109bd6f17ce"
                          isLoved={false}
                        />
                      </div>

                      <div className="hidden justify-between px-2.5 pt-2 font-TSlight text-xs lg:flex">
                        <p>
                          <b className=" text-red-800 font-TSExtra">
                            {item.logo}
                          </b>
                        </p>
                        <p className="font-TSExtra text-GRAY400">
                          {item.time}{' '}
                        </p>
                      </div>

                      <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2">
                        <div className="my-3 mb-2 font-TSExtra text-sm md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-14 lg:text-xl">
                          {item.title}
                        </div>
                        <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-24 lg:pt-1.5 lg:text-sm">
                          {item.desc}
                        </div>
                      </div>
                    </section>

                    <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                      <p>
                        <b className=" text-red-800 font-TSExtra">
                          {item.logo}
                        </b>
                      </p>
                      <p className="font-TSExtra text-GRAY300">{item.time} </p>
                    </div>
                    <div className=" mx-auto w-11/12 pt-1 opacity-60"></div>
                    <div className="mx-2.5 flex justify-between py-1.5 lg:pt-2">
                      <p
                        className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY400 hover:text-RED`}
                      >
                        اقرا المزيد
                      </p>{' '}
                      {/* <MenuThreeDot title_color={title_color} /> */}
                    </div>
                  </div>
                </section>
              )
            })}
          </section>
          <section className="grid grid-cols-3 gap-16 pt-10">
            {FakeData.map((item) => {
              return (
                <section>
                  <div className=" rounded-lg bg-GRAY100 shadow-lg" id="card">
                    <div>
                      <p
                        className={`${bg_color} text-white rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base hover:underline lg:pr-5`}
                      >
                        {item.section}
                      </p>{' '}
                    </div>
                    <section className="flex bg-GRAY100 lg:grid ">
                      <div className="relative mr-2 w-72 py-2 lg:mr-0 lg:w-auto lg:py-0">
                        <img
                          loading="eager"
                          src={item.image}
                          alt={item.title}
                          className="mx-auto h-32 w-40 object-cover md:h-full md:w-full lg:h-44 lg:w-full"
                        />

                        <Like
                          user_id="62a0dd4b86fdbd34fc3bad58"
                          story_id="60d9d86c8eeb1109bd6f17ce"
                          isLoved={true}
                        />
                      </div>

                      <div className="hidden justify-between px-2.5 pt-2 font-TSlight text-xs lg:flex">
                        <p>
                          <b className=" text-red-800 font-TSExtra">
                            {item.logo}
                          </b>
                        </p>
                        <p className="font-TSExtra text-GRAY400">
                          {item.time}{' '}
                        </p>
                      </div>

                      <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2">
                        <div className="my-3 mb-2 font-TSExtra text-sm md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-14 lg:text-xl">
                          {item.title}
                        </div>
                        <div className="my-3 mb-2 font-TSmedium text-xs md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-24 lg:pt-1.5 lg:text-sm">
                          {item.desc}
                        </div>
                      </div>
                    </section>

                    <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                      <p>
                        <b className=" text-red-800 font-TSExtra">
                          {item.logo}
                        </b>
                      </p>
                      <p className="font-TSExtra text-GRAY300">{item.time} </p>
                    </div>
                    <div className=" mx-auto w-11/12 pt-1 opacity-60"></div>
                    <div className="mx-2.5 flex justify-between py-1.5 lg:pt-2">
                      <p
                        className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY400 hover:text-RED`}
                      >
                        اقرا المزيد
                      </p>{' '}
                      {/* <MenuThreeDot title_color={title_color} /> */}
                    </div>
                  </div>
                </section>
              )
            })}
          </section>
        </section>
      </div>
      <div className="py-20"></div>
    </React.Fragment>
  )
}

export default ViewAll
