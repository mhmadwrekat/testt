import React from 'react'
import Image from 'next/image'
const IndexSkeleton = () => {
  const array = [1, 2, 3, 4]
  return (
    <React.Fragment>
      <section className="mx-auto w-11/12 animate-pulse lg:w-10/12 lg:pt-10">
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
          className={`grid w-10/12 px-1 pb-2 font-TSmedium text-lg text-black lg:hidden lg:text-xl`}
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

                  <div className="absolute bottom-2 right-2 rounded-full p-0">
                    <Image
                      src="/assest/reaction.jpg "
                      alt="emoji"
                      layout="fixed"
                      className="rounded-full"
                      width="25"
                      height="25"
                    />
                    {/* <svg
                        loading="eager"
                        fill="#B0B0B0"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-10 w-10 cursor-pointer opacity-50"
                      >
                        <g filter="url(#a)">
                          <circle
                            cx="20"
                            cy="16"
                            r="15.5"
                            fill="#fff"
                            stroke="#E9E9F2"
                          />
                          <g clipPath="url(#b)" fill="#000">
                            <path d="m30.079 7.996h-2.0798v-2.0735c0-0.2435-0.0966-0.47703-0.2686-0.64921-0.172-0.17219-0.4052-0.26891-0.6484-0.26891s-0.4765 0.09672-0.6485 0.26891c-0.172 0.17218-0.2686 0.40571-0.2686 0.64921v2.0735h-2.0798c-0.2443 0-0.4787 0.09718-0.6515 0.27019-0.1728 0.173-0.2699 0.40765-0.2699 0.65232s0.0971 0.47932 0.2699 0.65232c0.1728 0.17301 0.4072 0.27022 0.6515 0.27022h2.0798v2.0734c0 0.2435 0.0966 0.4771 0.2686 0.6492 0.172 0.1722 0.4053 0.269 0.6485 0.269s0.4764-0.0968 0.6484-0.269c0.172-0.1721 0.2686-0.4057 0.2686-0.6492v-2.1086h2.0798c0.2443 0 0.4787-0.09718 0.6515-0.27019s0.2699-0.40766 0.2699-0.65232c0-0.24467-0.0971-0.47932-0.2699-0.65233-0.1728-0.173-0.4072-0.27021-0.6515-0.27021v0.03515z" />
                            <path d="m26.709 17.432 0.0088-0.123-0.0088 0.0263v0.0967z" />
                            <path d="m18.75 9.2612-0.1229 0.00879h0.0966l0.0263-0.00879z" />
                            <path d="m27.63 16.422c-0.2363 0.0019-0.4631 0.0937-0.6342 0.2569s-0.2738 0.3855-0.2872 0.6217v0.123c-0.0502 1.5441-0.551 3.0397-1.4407 4.302s-2.1292 2.236-3.5655 2.8009c-1.4363 0.5648-3.0064 0.696-4.5163 0.3774s-2.8935-1.0731-3.9799-2.1702c-1.0864-1.0972-1.8281-2.4889-2.1332-4.0034-0.3052-1.5144-0.1605-3.0852 0.416-4.5182 0.5766-1.4331 1.5598-2.6657 2.8283-3.5455 1.2684-0.87977 2.7665-1.3683 4.3091-1.4051h0.1229c0.2444 0 0.4787-0.09721 0.6515-0.27022s0.2699-0.40765 0.2699-0.65232-0.0971-0.47932-0.2699-0.65232c-0.1728-0.17301-0.4071-0.27019-0.6515-0.27019-1.9278 0.00874-3.81 0.58798-5.4099 1.6649-1.5999 1.0769-2.8461 2.6034-3.5818 4.3874-0.73571 1.7841-0.9281 3.7461-0.55302 5.6394 0.37509 1.8933 1.3009 3.6333 2.661 5.0011 1.3602 1.3679 3.0939 2.3026 4.9832 2.6866 1.8894 0.3839 3.8499 0.2001 5.6351-0.5286 1.7852-0.7286 3.3154-1.9694 4.3981-3.5664s1.6697-3.4789 1.687-5.409c-9e-4 -0.12-0.0264-0.2385-0.0748-0.3483s-0.1188-0.2085-0.2067-0.29c-0.088-0.0815-0.1917-0.1441-0.3048-0.1839s-0.2331-0.056-0.3527-0.0476z" />
                            <path d="m17.354 14.761c0 0.3757-0.1114 0.7429-0.32 1.0552-0.2087 0.3123-0.5053 0.5555-0.8521 0.6989-0.3469 0.1433-0.7285 0.1804-1.0964 0.1065-0.3679-0.074-0.7057-0.2556-0.9704-0.5219-0.2647-0.2662-0.4446-0.6052-0.5167-0.9739-0.0722-0.3687-0.0334-0.7506 0.1115-1.0972 0.1448-0.3466 0.3891-0.6424 0.7019-0.8499 0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4946 0.0491 0.7241 0.1446 0.2294 0.0955 0.4378 0.2354 0.6131 0.4118 0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1423 0.4768 0.1411 0.7256z" />
                            <path d="m23.892 14.761c0 0.3757-0.1114 0.7429-0.3201 1.0552s-0.5052 0.5555-0.8521 0.6989c-0.3468 0.1433-0.7284 0.1804-1.0963 0.1065-0.368-0.074-0.7057-0.2556-0.9704-0.5219-0.2648-0.2662-0.4446-0.6052-0.5168-0.9739-0.0721-0.3687-0.0333-0.7506 0.1115-1.0972s0.3891-0.6424 0.702-0.8499c0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4945 0.0491 0.724 0.1446s0.4379 0.2354 0.6132 0.4118c0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1422 0.4768 0.1411 0.7256z" />
                            <path d="m19.276 23.863h-0.939c-0.6057 0-1.2055-0.1196-1.765-0.352-0.5596-0.2323-1.0679-0.5729-1.4958-1.0022-0.4279-0.4292-0.7671-0.9387-0.9981-1.4994-0.231-0.5606-0.3493-1.1614-0.3482-1.7679 0-0.1701 0.0675-0.3332 0.1877-0.4535 0.1201-0.1202 0.283-0.1878 0.4529-0.1878h8.872c0.1707 0 0.3346 0.0673 0.4561 0.1873s0.191 0.2831 0.1933 0.454c0 1.2257-0.4863 2.4012-1.352 3.2679-0.8656 0.8667-2.0397 1.3536-3.2639 1.3536z" />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="a"
                            x="0"
                            y="0"
                            width="40"
                            height="40"
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1222_1329"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1222_1329"
                              result="shape"
                            />
                          </filter>
                          <clipPath id="b">
                            <rect
                              transform="translate(9 5)"
                              width="22"
                              height="22"
                              fill="#ffffff"
                            />
                          </clipPath>
                        </defs>
                      </svg> */}
                  </div>
                </div>
                <div className="my-2 flex cursor-pointer justify-between px-2.5 font-TSlight text-sm">
                  <p>
                    <b className="font-TSbold text-red-800"></b>
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
                    <div className="rounded-lg bg-GRAY100 shadow-lg" id="card">
                      <div className="cursor-pointer">
                        <p
                          className={`rounded-t-md py-3 text-right font-TSSemi text-base text-white lg:pr-5`}
                        ></p>
                      </div>
                      <section className="flex bg-GRAY100 lg:grid">
                        <div className="relative mr-2 h-auto w-72 py-2 lg:mr-0 lg:h-auto lg:w-full lg:py-0">
                          <div className="mx-auto h-32 w-full cursor-pointer rounded-md bg-GRAY50 md:h-full md:w-full lg:h-28 lg:w-full lg:rounded-none lg:rounded-b-md"></div>
                          <div className="absolute bottom-5 right-1 rounded-full lg:bottom-1">
                            <Image
                              src="/assest/reaction.jpg "
                              alt="emoji"
                              layout="fixed"
                              className="rounded-full"
                              width="25"
                              height="25"
                            />
                            {/* <svg
                                loading="eager"
                                fill="#B0B0B0"
                                viewBox="0 0 40 40"
                                xmlns="http://www.w3.org/2000/svg"
                                className=" h-7 w-7 cursor-pointer opacity-50"
                              >
                                <g filter="url(#a)">
                                  <circle
                                    cx="20"
                                    cy="16"
                                    r="15.5"
                                    fill="#fff"
                                    stroke="#E9E9F2"
                                  />
                                  <g clipPath="url(#b)" fill="#000">
                                    <path d="m30.079 7.996h-2.0798v-2.0735c0-0.2435-0.0966-0.47703-0.2686-0.64921-0.172-0.17219-0.4052-0.26891-0.6484-0.26891s-0.4765 0.09672-0.6485 0.26891c-0.172 0.17218-0.2686 0.40571-0.2686 0.64921v2.0735h-2.0798c-0.2443 0-0.4787 0.09718-0.6515 0.27019-0.1728 0.173-0.2699 0.40765-0.2699 0.65232s0.0971 0.47932 0.2699 0.65232c0.1728 0.17301 0.4072 0.27022 0.6515 0.27022h2.0798v2.0734c0 0.2435 0.0966 0.4771 0.2686 0.6492 0.172 0.1722 0.4053 0.269 0.6485 0.269s0.4764-0.0968 0.6484-0.269c0.172-0.1721 0.2686-0.4057 0.2686-0.6492v-2.1086h2.0798c0.2443 0 0.4787-0.09718 0.6515-0.27019s0.2699-0.40766 0.2699-0.65232c0-0.24467-0.0971-0.47932-0.2699-0.65233-0.1728-0.173-0.4072-0.27021-0.6515-0.27021v0.03515z" />
                                    <path d="m26.709 17.432 0.0088-0.123-0.0088 0.0263v0.0967z" />
                                    <path d="m18.75 9.2612-0.1229 0.00879h0.0966l0.0263-0.00879z" />
                                    <path d="m27.63 16.422c-0.2363 0.0019-0.4631 0.0937-0.6342 0.2569s-0.2738 0.3855-0.2872 0.6217v0.123c-0.0502 1.5441-0.551 3.0397-1.4407 4.302s-2.1292 2.236-3.5655 2.8009c-1.4363 0.5648-3.0064 0.696-4.5163 0.3774s-2.8935-1.0731-3.9799-2.1702c-1.0864-1.0972-1.8281-2.4889-2.1332-4.0034-0.3052-1.5144-0.1605-3.0852 0.416-4.5182 0.5766-1.4331 1.5598-2.6657 2.8283-3.5455 1.2684-0.87977 2.7665-1.3683 4.3091-1.4051h0.1229c0.2444 0 0.4787-0.09721 0.6515-0.27022s0.2699-0.40765 0.2699-0.65232-0.0971-0.47932-0.2699-0.65232c-0.1728-0.17301-0.4071-0.27019-0.6515-0.27019-1.9278 0.00874-3.81 0.58798-5.4099 1.6649-1.5999 1.0769-2.8461 2.6034-3.5818 4.3874-0.73571 1.7841-0.9281 3.7461-0.55302 5.6394 0.37509 1.8933 1.3009 3.6333 2.661 5.0011 1.3602 1.3679 3.0939 2.3026 4.9832 2.6866 1.8894 0.3839 3.8499 0.2001 5.6351-0.5286 1.7852-0.7286 3.3154-1.9694 4.3981-3.5664s1.6697-3.4789 1.687-5.409c-9e-4 -0.12-0.0264-0.2385-0.0748-0.3483s-0.1188-0.2085-0.2067-0.29c-0.088-0.0815-0.1917-0.1441-0.3048-0.1839s-0.2331-0.056-0.3527-0.0476z" />
                                    <path d="m17.354 14.761c0 0.3757-0.1114 0.7429-0.32 1.0552-0.2087 0.3123-0.5053 0.5555-0.8521 0.6989-0.3469 0.1433-0.7285 0.1804-1.0964 0.1065-0.3679-0.074-0.7057-0.2556-0.9704-0.5219-0.2647-0.2662-0.4446-0.6052-0.5167-0.9739-0.0722-0.3687-0.0334-0.7506 0.1115-1.0972 0.1448-0.3466 0.3891-0.6424 0.7019-0.8499 0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4946 0.0491 0.7241 0.1446 0.2294 0.0955 0.4378 0.2354 0.6131 0.4118 0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1423 0.4768 0.1411 0.7256z" />
                                    <path d="m23.892 14.761c0 0.3757-0.1114 0.7429-0.3201 1.0552s-0.5052 0.5555-0.8521 0.6989c-0.3468 0.1433-0.7284 0.1804-1.0963 0.1065-0.368-0.074-0.7057-0.2556-0.9704-0.5219-0.2648-0.2662-0.4446-0.6052-0.5168-0.9739-0.0721-0.3687-0.0333-0.7506 0.1115-1.0972s0.3891-0.6424 0.702-0.8499c0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4945 0.0491 0.724 0.1446s0.4379 0.2354 0.6132 0.4118c0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1422 0.4768 0.1411 0.7256z" />
                                    <path d="m19.276 23.863h-0.939c-0.6057 0-1.2055-0.1196-1.765-0.352-0.5596-0.2323-1.0679-0.5729-1.4958-1.0022-0.4279-0.4292-0.7671-0.9387-0.9981-1.4994-0.231-0.5606-0.3493-1.1614-0.3482-1.7679 0-0.1701 0.0675-0.3332 0.1877-0.4535 0.1201-0.1202 0.283-0.1878 0.4529-0.1878h8.872c0.1707 0 0.3346 0.0673 0.4561 0.1873s0.191 0.2831 0.1933 0.454c0 1.2257-0.4863 2.4012-1.352 3.2679-0.8656 0.8667-2.0397 1.3536-3.2639 1.3536z" />
                                  </g>
                                </g>
                                <defs>
                                  <filter
                                    id="a"
                                    x="0"
                                    y="0"
                                    width="40"
                                    height="40"
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                  >
                                    <feFlood
                                      floodOpacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                      in="SourceAlpha"
                                      result="hardAlpha"
                                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite
                                      in2="hardAlpha"
                                      operator="out"
                                    />
                                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend
                                      in2="BackgroundImageFix"
                                      result="effect1_dropShadow_1222_1329"
                                    />
                                    <feBlend
                                      in="SourceGraphic"
                                      in2="effect1_dropShadow_1222_1329"
                                      result="shape"
                                    />
                                  </filter>
                                  <clipPath id="b">
                                    <rect
                                      transform="translate(9 5)"
                                      width="22"
                                      height="22"
                                      fill="#ffffff"
                                    />
                                  </clipPath>
                                </defs>
                              </svg> */}
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
      </section>
    </React.Fragment>
  )
}
export default React.memo(IndexSkeleton)
