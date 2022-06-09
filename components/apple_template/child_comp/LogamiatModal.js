import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function LoqaimaModal({ open, setOpen, loqaimatScreens }) {
  var isMobile =
    typeof window !== 'undefined'
      ? /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      : ''
  return (
    <React.Fragment>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
        >
          <section className="bg-black relative">
            <div className=" min-h-xl flex items-end justify-center text-center sm:block sm:p-0 ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
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
                  <Carousel
                    showArrows={isMobile ? false : true}
                    autoFocus={false}
                    showThumbs={false}
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

                  <div className=" fixed bottom-0 w-full"></div>
                </div>
              </Transition.Child>
            </div>
            <span
              onClick={() => setOpen(false)}
              className="absolute top-0 right-2 z-20 p-3 lg:right-14"
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
