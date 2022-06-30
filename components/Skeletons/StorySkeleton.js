import React from 'react'
import CategorySkeleton from './CategorySkeleton'
const StorySkeleton = () => {
  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <section className="text-black mx-auto grid w-11/12 animate-pulse pt-10 lg:w-10/12">
          <section
            className="grid grid-cols-1 gap-0 bg-GRAY100 shadow-md lg:grid-cols-2 lg:gap-8"
            id="card"
          >
            <section className="">
              <div className="">
                <p
                  className={`rounded-t-md bg-GRAY100 py-4 text-right font-TSbold text-base text-white hover:underline lg:pr-8`}
                ></p>{' '}
              </div>
              <div className="relative mx-auto h-72 w-full shadow-md lg:h-96">
                <div className="relative h-72 w-full bg-GRAY50 lg:h-full"></div>
              </div>
            </section>
            <section className="">
              <div className="px-2.5 pt-2">
                <div className="my-8 rounded-full bg-GRAY50 font-TSExtra text-lg md:text-xl lg:h-9 lg:w-5/12 lg:text-3xl"></div>
                <div className="my-5 rounded-full font-TSExtra text-lg md:text-xl lg:h-6 lg:w-11/12 lg:text-3xl"></div>
                <div className="my-5 rounded-full bg-GRAY50 font-TSExtra text-lg md:text-xl lg:h-6 lg:w-11/12 lg:text-3xl"></div>
                <div className="my-5 rounded-full bg-GRAY50 font-TSExtra text-lg md:text-xl lg:h-6 lg:w-11/12 lg:text-3xl"></div>
                <div className="my-5 rounded-full bg-GRAY50 font-TSExtra text-lg md:text-xl lg:h-6 lg:w-11/12 lg:text-3xl"></div>
                <div className="my-5 rounded-full font-TSExtra text-lg md:text-xl lg:h-6 lg:w-11/12 lg:text-3xl"></div>
                <div className="my-5 rounded-full font-TSExtra text-lg md:text-xl lg:h-3 lg:w-11/12 lg:text-3xl"></div>
              </div>
              <div className=" my-2 flex justify-between px-2.5 font-TSlight text-sm">
                <div className="my-5 rounded-full bg-GRAY50 font-TSExtra text-lg md:text-xl lg:h-6 lg:w-1/12 lg:text-3xl"></div>
                <div className="flex px-2.5 pl-24 pt-5">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-7 w-7 cursor-pointer rounded-full`}
                    fill="#B0B0B0"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
                  </svg>
                </div>
              </div>
            </section>
          </section>
        </section>
        <CategorySkeleton />

        {/* {console.log(related_news)} */}
      </div>
      <div className="py-4"></div>
    </React.Fragment>
  )
}

export default StorySkeleton
