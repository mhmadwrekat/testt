import React from 'react'

const CategorySkeleton = () => {
  const array = [1, 2, 3, 4, 5, 6]
  return (
    <React.Fragment>
      <div dir="rtl" translate="no">
        <section className="mx-auto w-11/12 animate-pulse bg-white text-black lg:w-10/12 lg:pt-10">
          <div className="flex justify-between">
            <div className="my-3 mt-3 w-6/12 lg:mt-4">
              <div className="flex">
                <div
                  className={`my-3 w-6/12 rounded-full bg-GRAY50 py-4 font-TSExtra text-2xl lg:text-xl`}
                ></div>
              </div>
            </div>
          </div>{' '}
          <section className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-16">
            {array.map((item) => {
              return (
                <section className="" key={item}>
                  <div className="rounded-lg bg-GRAY100 shadow-lg" id="card">
                    <div>
                      <p
                        className={`rounded-t-md py-3 text-right font-TSSemi text-base text-white hover:underline lg:pr-5`}
                      ></p>{' '}
                    </div>
                    <section className="grid bg-GRAY100 lg:grid ">
                      <div className="relative w-full lg:w-auto">
                        <div className="mx-auto h-32 w-full bg-GRAY50 md:h-full md:w-full lg:h-72 lg:w-full"></div>
                      </div>

                      <div className=" py-1.5 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2">
                        <div className="my-3 h-6 w-3/6 rounded-full bg-GRAY50 font-TSExtra"></div>
                        <div className="my-3 h-4 w-4/6 rounded-full bg-GRAY50 font-TSExtra"></div>
                        <div className="my-3 h-4 w-5/6 rounded-full bg-GRAY50 font-TSExtra"></div>
                      </div>
                    </section>

                    <div className="flex justify-between px-4 font-TSlight text-xs lg:hidden">
                      <p>
                        <b className=" font-TSExtra text-red-800"></b>
                      </p>
                    </div>
                    <div className="mx-2.5 flex justify-between py-1.5 lg:pt-2">
                      <p
                        className={`$rounded-lg py-0.5 font-TSExtra text-sm text-GRAY400 hover:text-RED`}
                      ></p>{' '}
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="https://www.w3.org/2000/svg"
                        className={`h-7 w-7 cursor-pointer rounded-full`}
                        fill="#B0B0B0"
                      >
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
                      </svg>
                    </div>
                  </div>
                </section>
              )
            })}
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default React.memo(CategorySkeleton)
