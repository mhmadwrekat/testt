import React from 'react'
// import FakeData from '../../../pages/FakeData.json'
import dynamic from 'next/dynamic'
// import MenuThreeDot from './child_comp/MenuThreeDot'
const Like = dynamic(() => import('./Like'))

const AllData = ({ data, bg_color }) => {
  return (
    <React.Fragment>
      <section className="text-black w-12/12 lg:w-12/12 mx-auto bg-white">
        <div dir="rtl" id="project_body" translate="no">
          <section className="grid grid-cols-1 gap-5 pt-5 lg:grid-cols-3 lg:gap-16 lg:pt-10">
            {data.map((item) => {
              return (
                <section>
                  <div className=" rounded-lg bg-GRAY100 shadow-lg" id="card">
                    <div>
                      <p
                        className={`${bg_color} rounded-t-md pr-3 pt-1.5 pb-0.5 text-right font-TSSemi text-base text-white hover:underline lg:pr-5`}
                      >
                        {item.section}
                      </p>{' '}
                    </div>
                    <section className="grid bg-GRAY100">
                      <div className="relative w-full lg:w-auto">
                        <img
                          loading="eager"
                          src={item.image}
                          alt={item.title}
                          className="mx-auto h-32 w-full object-cover md:h-full md:w-full lg:h-44 lg:w-full"
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
                        <div className="my-3 mb-2 font-TSExtra text-lg md:my-20 md:text-lg lg:my-0 lg:mb-0 lg:h-14 lg:text-xl">
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
        </div>
      </section>
    </React.Fragment>
  )
}

export default AllData
