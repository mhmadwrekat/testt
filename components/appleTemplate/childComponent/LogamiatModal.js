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
  const [sum, setNum] = useState(0)

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
  return (
    <React.Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => {
            close_loqaima()
          }}
        >
          <section className="bg-black">
            <div className="min-h-sm flex items-end justify-center text-center sm:block sm:p-0">
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
                className="hidden sm:inline-block sm:h-full sm:align-middle"
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
                <div className="bg-gray-800 inline-block h-full w-screen transform overflow-hidden text-left align-bottom transition-all lg:w-1/4">
                  {/* <button
                    className="gallery_previous"
                    onClick={prevF()}
                    type="button"
                  >
                    <i className="fa fa-chevron-left" />
                  </button> */}
                  <section className="z-50 flex justify-center">
                    <Carousel
                      selectedItem={sum}
                      // showArrows={isMobile ? false : true}
                      autoFocus={false}
                      showArrows={false}
                      // showIndicators={false}
                      // renderBottomCenterControls={false}
                      showThumbs={false}
                      // useKeyboardArrows
                    >
                      {/* key={item._id} */}
                      {loqaimatScreens.length > 0 ? (
                        loqaimatScreens.map((item) => {
                          // console.log(item)
                          return (
                            <div
                              key={item._id}
                              className="relative z-50 h-full"
                            >
                              <div
                                className="absolute top-96 right-0 z-50 hidden p-1 lg:flex"
                                onClick={() => {
                                  next()
                                }}
                              >
                                {sum < loqaimatScreens.length - 1 && (
                                  <div
                                    // className="control-arrow control-next cursor-pointer"
                                    className="cursor-pointer"
                                    onClick={() => {
                                      next()
                                    }}
                                  >
                                    <svg
                                      xmlns="https://www.w3.org/2000/svg"
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
                                )}
                              </div>
                              <img
                                loading="eager"
                                className="h-full"
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
                                      xmlns="https://www.w3.org/2000/svg"
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
                        <div className="h-full bg-white" />
                      )}
                    </Carousel>
                  </section>
                </div>
              </Transition.Child>
              <div
                className="top-0 right-24 z-10 hidden h-full w-96 p-3 opacity-70 lg:absolute lg:flex"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <div
                  className="top-0 right-36 z-20 hidden h-full w-96 p-3 opacity-70 lg:absolute lg:flex"
                  onClick={() => {
                    setOpen(true)
                  }}
                ></div>
              </div>
              <div
                className=" bottom-0 right-0 z-30 hidden h-full w-96 p-3 opacity-70 lg:absolute lg:flex"
                onClick={() => {
                  setOpen(true)
                }}
              ></div>
              <div
                className="top-0 left-0 z-10 hidden h-full w-96 p-3 opacity-70 lg:absolute lg:flex"
                onClick={() => {
                  setOpen(true)
                }}
              >
                <div
                  className="top-0 left-56 z-20 hidden h-full w-96 p-3 opacity-70 lg:absolute lg:flex"
                  onClick={() => {
                    setOpen(true)
                  }}
                ></div>
              </div>
              <span className="absolute top-0 right-2 z-50 p-3 lg:right-10">
                <img
                  src="./assest/images/close.svg"
                  className="z-50 mx-auto w-12 cursor-pointer cursor-pointer justify-center pt-4"
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
