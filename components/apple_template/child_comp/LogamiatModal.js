import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function LoqaimaModal({ open, setOpen, loqaimatScreens }) {
  var isMobile =
    typeof window !== 'undefined'
      ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      : ''
  const [sum, set_num] = useState(0)

  const nextF = () => {
    set_num(sum + 1)
  }
  const prevF = () => {
    set_num(sum - 1)
  }

  // currentImageIndex
  return (
    <React.Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
        >
          <section className="bg-gray-500 relative">
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
                <div className="bg-white inline-block h-screen w-screen transform overflow-hidden text-left align-bottom transition-all lg:w-1/4">
                  {/* <button
                    className="gallery_previous"
                    onClick={prevF()}
                    type="button"
                  >
                    <i className="fa fa-chevron-left" />
                  </button> */}
                  <Carousel
                    selectedItem={sum}
                    // showArrows={isMobile ? false : true}
                    autoFocus={false}
                    showArrows={false}
                    showThumbs={false}
                    useKeyboardArrows
                  >
                    {loqaimatScreens.length > 0 ? (
                      loqaimatScreens.map((screen) => {
                        return (
                          <img
                            className="h-full w-60"
                            src={screen.screen_link}
                          />
                        )
                      })
                    ) : (
                      <div className="bg-white h-screen" />
                    )}
                  </Carousel>
                  {/* <button
                    className="gallery_next"
                    onClick={nextF()}
                    type="button"
                  >
                    <i className="fa fa-chevron-right" />
                  </button> */}
                  <div className=" fixed bottom-0 w-full"></div>
                </div>
              </Transition.Child>
            </div>
            {sum > 0 && (
              <div className="absolute z-20 p-3 lg:top-96 lg:left-96">
                <button
                  class="control-arrow control-next"
                  onClick={() => {
                    prevF()
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-11 w-11"
                    viewBox="0 0 20 20"
                    fill="#666666"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className="absolute z-20 p-3 lg:top-96 lg:right-96">
              <button
                class="control-arrow control-next"
                onClick={() => {
                  nextF()
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-11 w-11"
                  viewBox="0 0 20 20"
                  fill="#666666"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <span
              onClick={() => setOpen(false)}
              className="absolute top-0 right-2 z-20 p-3 lg:right-10"
            >
              <img
                src="./assest/images/close.svg"
                className="mx-auto w-10 cursor-pointer justify-center pt-4"
              />
            </span>
          </section>
        </Dialog>
      </Transition.Root>
    </React.Fragment>
  )
}
