import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function LoqaimaModal({
  setShowCategory,
  open,
  setOpen,
  loqaimatScreens,
}) {
  var isMobile =
    typeof window !== 'undefined'
      ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      : ''
  const [sum, setNum] = useState(0)

  // setShowCategory(false)
  const next = () => {
    setNum(sum + 1)
  }
  const prev = () => {
    setNum(sum - 1)
  }

  const close_loqaima = () => {
    setOpen(false)
    setShowCategory(true)
    setNum(0)
  }
  // open === false && setNum(0)

  // currentImageIndex
  return (
    <React.Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {
            close_loqaima()
          }}
        >
          <section className="bg-black">
            <div className=" min-h-xl flex items-end justify-center text-center sm:block sm:p-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="bg-black fixed inset-0 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="bg-gray-800 inline-block h-screen w-screen transform overflow-hidden text-left align-bottom transition-all lg:w-1/4">
                  {/* <button
                    className="gallery_previous"
                    onClick={prevF()}
                    type="button"
                  >
                    <i className="fa fa-chevron-left" />
                  </button> */}
                  <section className="flex justify-center">
                    <Carousel
                      selectedItem={sum}
                      // showArrows={isMobile ? false : true}
                      autoFocus={false}
                      showArrows={false}
                      showThumbs={false}
                      useKeyboardArrows
                    >
                      {/* key={item._id} */}
                      {loqaimatScreens.length > 0 ? (
                        loqaimatScreens.map((item) => {
                          // console.log(item)
                          return (
                            <div key={item._id} className="relative h-screen">
                              <div
                                className="absolute top-96 right-0 z-50 hidden p-1 lg:flex"
                                onClick={() => {
                                  next()
                                }}
                              >
                                <div
                                  // className="control-arrow control-next cursor-pointer"
                                  className="cursor-pointer"
                                  onClick={() => {
                                    next()
                                  }}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-12 w-12"
                                    viewBox="0 0 20 20"
                                    loading="lazy"
                                    fill="#666666"
                                    onClick={() => {
                                      next()
                                    }}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <img
                                loading="eager"
                                className="h-screen"
                                src={item.screen_link}
                                alt={item.screen_link}
                              />
                              <div
                                className="absolute top-96 left-0 z-50 hidden p-1 lg:flex"
                                onClick={() => {
                                  prev()
                                }}
                              >
                                {sum > 0 && (
                                  <div
                                    className="cursor-pointer"
                                    aria-label="Left Align"
                                    onClick={() => {
                                      prev()
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-12 w-12"
                                      viewBox="0 0 20 20"
                                      fill="#666666"
                                      onClick={() => {
                                        prev()
                                      }}
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })
                      ) : (
                        <div className="h-screen bg-white" />
                      )}
                    </Carousel>
                    {/* {loqaimatScreens.length > 0 && (
                      <div className="bg-black">
                        <div className="relative hidden p-7 lg:flex">
                          <div
                            className="control-arrow control-next absolute top-96 right-0 z-50 cursor-pointer"
                            onClick={() => {
                              next()
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12"
                              viewBox="0 0 20 20"
                              loading="lazy"
                              fill="#666666"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )} */}
                  </section>

                  {/* <button
                    className="gallery_next"
                    onClick={nextF()}
                    type="button"
                  >
                    <i className="fa fa-chevron-right" />
                  </button> */}
                  {/* <div className="fixed bottom-0 w-full"></div> */}
                </div>
              </Transition.Child>
              {/* <div
                className="top-0 right-24 hidden h-screen w-96 p-3 opacity-70 lg:absolute lg:flex"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <div
                  className="top-0 right-28 hidden h-screen w-96 p-3 opacity-70 lg:absolute lg:flex"
                  onClick={() => {
                    setOpen(true)
                  }}
                ></div>
              </div>
              <div
                className="top-20 right-0 hidden h-screen w-96 p-3 opacity-70 lg:absolute lg:flex"
                onClick={() => {
                  setOpen(true)
                }}
              ></div>
              <div
                className="top-0 left-0 hidden h-screen w-96 p-3 opacity-70 lg:absolute lg:flex"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <div
                  className="top-0 left-52 hidden h-screen w-96 p-3 opacity-70 lg:absolute lg:flex"
                  onClick={() => {
                    setOpen(true)
                  }}
                ></div>
              </div> */}

              <span className="absolute top-0 right-2 p-3 lg:right-10">
                <img
                  src="./assest/images/close.svg"
                  className="mx-auto w-12 cursor-pointer cursor-pointer justify-center pt-4"
                  alt="close button"
                  onClick={() => close_loqaima()}
                />
              </span>
            </div>
          </section>
        </Dialog>
      </Transition.Root>
    </React.Fragment>
  )
}
/*
    <>
                            <section className="flex justify-center">
                              <div className="relative h-screen w-8 bg-white">
                                <div className=" z-50 hidden  lg:flex">
                                  <div className="absolute top-24 right-10 z-50 p-3">
                                    <div
                                      className="control-arrow control-next cursor-pointer"
                                      onClick={() => {
                                        next()
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12"
                                        viewBox="0 0 20 20"
                                        fill="#666666"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div key={item._id} className="">
                                <img
                                  className="h-screen"
                                  src={item.screen_link}
                                  alt={item.screen_link}
                                />
                              </div>
                              <div className="relative h-screen w-8 bg-white">
                                {sum > 0 && (
                                  <div className="absolute z-50 hidden p-3 lg:top-96 lg:left-48 lg:flex">
                                    <div className="absolute z-50 p-3 lg:bottom-0 lg:left-48">
                                      <div className="absolute z-50 p-3 lg:bottom-0 lg:left-48">
                                        <div
                                          className="control-arrow control-next cursor-pointer"
                                          aria-label="Left Align"
                                          onClick={() => {
                                            prev()
                                          }}
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-12 w-12"
                                            viewBox="0 0 20 20"
                                            fill="#666666"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </section>
                          </>
*/
