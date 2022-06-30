import React from 'react'

const IndexSkeleton = () => {
  const array = [1, 2, 3, 4]
  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 animate-pulse lg:w-10/12 lg:pt-10">
        <React.Fragment>
          <div className="flex justify-between">
            <div className="my-3 mt-3 w-5/12 lg:mt-4">
              <div className="flex w-full">
                <div className="ml-2 w-1/12 pb-3.5">
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
                </div>

                <p
                  className={`my-6 mr-7 w-6/12 rounded-full bg-GRAY50 text-right  font-TSbold text-base text-white lg:mr-0 lg:pr-8`}
                ></p>
              </div>
            </div>
            <div className="my-1 mt-3 flex cursor-pointer lg:mt-3 lg:mb-2">
              <div className="my-7 w-20 rounded-full bg-GRAY50 font-TSbold text-lg lg:text-xl"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`mt-4 mr-2 h-9 w-9 font-TSbold text-4xl lg:mt-4 lg:h-11 lg:w-11 lg:text-xl`}
                viewBox="0 0 20 20"
                fill="#B0B0B0"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <p
            className={`text-black grid w-10/12 px-1 pb-2 font-TSmedium text-lg lg:hidden lg:text-xl`}
          ></p>
          <section className="w-12/12 lg:w-12/12 mx-auto">
            <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
              <section>
                <div className=" rounded-lg bg-GRAY100  shadow-lg" id="card">
                  <div className="">
                    <p
                      className={`rounded-t-md py-4 text-right font-TSbold text-base text-white lg:pr-8`}
                    ></p>
                  </div>
                  <div className=" relative h-56 w-full lg:h-80">
                    <div className="relative h-56 w-full cursor-pointer rounded-b-md bg-GRAY50 lg:h-80"></div>

                    <div className="absolute bottom-2 right-2 rounded-full bg-white p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-7 w-7 cursor-pointer opacity-70"
                        fill="#B0B0B0"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="my-2 flex cursor-pointer justify-between px-2.5 font-TSlight text-sm">
                    <p>
                      <b className="text-red-800 font-TSbold"></b>
                    </p>
                    <p className="font-TSbold text-GRAY50"></p>
                  </div>
                  <div className="px-2.5 pb-0.5">
                    <div className="my-5 hidden h-10 w-3/6 cursor-pointer rounded-full bg-GRAY50 font-TSmedium lg:grid lg:h-6"></div>
                    <div className="my-6 hidden h-10 w-5/6 cursor-pointer rounded-full bg-GRAY50 font-TSmedium lg:grid lg:h-5"></div>
                    <div className="my-2 flex items-center justify-between">
                      <div
                        className={`h-3 w-20 cursor-pointer rounded-full rounded-lg bg-GRAY50 py-0.5 font-TSExtra`}
                      ></div>

                      <div className="relative pb-1">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-7 w-7 cursor-pointer rounded-full `}
                          fill="#B0B0B0"
                        >
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {array.map((item) => {
                  return (
                    <section key={item}>
                      <div
                        className="rounded-lg bg-GRAY100 shadow-lg"
                        id="card"
                      >
                        <div className="cursor-pointer">
                          <p
                            className={`rounded-t-md py-3 text-right font-TSSemi text-base text-white lg:pr-5`}
                          ></p>
                        </div>
                        <section className="flex bg-GRAY100 lg:grid">
                          <div className="relative mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-full lg:py-0">
                            <div className="mx-auto h-32 w-40 cursor-pointer rounded-md bg-GRAY50 md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"></div>
                            <div className="absolute bottom-5 right-1 rounded-full bg-white p-1 lg:bottom-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" h-5 w-5 cursor-pointer opacity-70"
                                fill="#B0B0B0"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                              </svg>
                            </div>
                          </div>

                          <div className="hidden cursor-pointer justify-between px-2.5 pt-1.5 font-TSlight text-xs lg:flex"></div>

                          <div className="cursor-pointer py-2 px-3 sm:mb-0 lg:mb-1 lg:px-2 lg:py-2">
                            <div className="my-2 h-3 w-3/6 rounded-full bg-GRAY50 py-1.5 font-TSExtra text-sm md:text-lg "></div>
                            <div className="my-2 h-2 w-5/6 rounded-full bg-GRAY50 py-1.5 font-TSExtra text-sm md:text-lg "></div>
                          </div>
                        </section>
                        <div className="mx-2.5 flex items-center justify-between">
                          <div
                            className={`w-1/6 cursor-pointer rounded-lg rounded-full bg-GRAY50 py-1 font-TSExtra text-sm`}
                          ></div>
                          <div className="relative pb-1">
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-7 w-7 cursor-pointer rounded-full `}
                              fill="#B0B0B0"
                            >
                              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </section>
                  )
                })}
              </section>
            </section>
          </section>
        </React.Fragment>
      </section>
    </React.Fragment>
  )
}
export default IndexSkeleton
