import { useEffect, Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'
import { MenuIcon, XIcon, ArrowLeftIcon } from '@heroicons/react/outline'
import axios from 'axios'
import { BASE_URL } from '../../config/config'
import SidebarDropDown from './Sidebar'
import React from 'react'

const MobileMenu = () => {
  const router = useRouter()
  const is_share =
    typeof window !== 'undefined' ? localStorage.getItem('is_share') : ''

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarItems, setSidebarItems] = useState([])
  const secondarySidebarItems = [
    {
      name: 'الاكثر قراءة',
      href: 'الاكثر_قراءة',
    },
    {
      name: 'اخبار مهمة',
      href: 'اخبار_مهمة',
    },
    {
      name: 'الرئيسية',
      href: '/home',
    },
    {
      name: 'المدونة',
      href: '/blogs',
    },
    {
      name: 'تواصل معنا',
      href: '/home/#ContactUs',
    },
  ]

  const [isKuwaitOpen, setIsKuwaitOpen] = useState(false)
  const [isSaudiOpen, setIsSaudiOpen] = useState(false)
  const [isEgyptOpen, setIsEgyptOpen] = useState(false)
  const [isJordanOpen, setIsJordanOpen] = useState(false)

  // GET: function to return all categories and countries and set them in sidebar
  function get_all_sidebar_items() {
    try {
      axios
        .get(`${BASE_URL}/v1/Web/CountryCategories`, {
          headers: {
            Authorization: `Basic ${localStorage.getItem('user_token')}`,
          },
        })
        .then(function (response) {
          setSidebarItems(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    get_all_sidebar_items()
  }, [])

  return (
    <React.Fragment>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}

        <Dialog
          as="div"
          className="fixed inset-0 z-40 mt-0 flex flex-row-reverse"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-gray-900 fixed inset-0 mt-14 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="-transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="bg-white relative h-screen w-3/5  overflow-auto pt-5 pb-28 lg:w-1/5 lg:px-10">
              <div className="text-gray-500 mb-3 text-center  font-TSSemi text-lg lg:text-right">
                إختر الدولة التي تفضل <br />
                متابعة اخبارها المحلية
              </div>

              {sidebarItems.map((item) => {
                return (
                  <div
                    key={item}
                    onClick={() =>
                      item.country.name == 'الكويت'
                        ? setIsKuwaitOpen(!isKuwaitOpen)
                        : item.country.name == 'السعودية'
                        ? setIsSaudiOpen(!isSaudiOpen)
                        : item.country.name == 'مصر'
                        ? setIsEgyptOpen(!isEgyptOpen)
                        : setIsJordanOpen(!isJordanOpen)
                    }
                    className="border-gray-100 text-gray-500 border py-3  text-right font-TSSemi text-lg lg:cursor-pointer lg:border-none "
                  >
                    {item.country.name == 'الكويت' ? (
                      <SidebarDropDown
                        isOpen={isKuwaitOpen}
                        country={item.country}
                        categories={item.categories}
                        setSidebarOpen={setSidebarOpen}
                      />
                    ) : item.country.name == 'السعودية' ? (
                      <SidebarDropDown
                        isOpen={isSaudiOpen}
                        country={item.country}
                        categories={item.categories}
                        setSidebarOpen={setSidebarOpen}
                      />
                    ) : item.country.name == 'مصر' ? (
                      <SidebarDropDown
                        isOpen={isEgyptOpen}
                        country={item.country}
                        categories={item.categories}
                        setSidebarOpen={setSidebarOpen}
                      />
                    ) : (
                      <SidebarDropDown
                        isOpen={isJordanOpen}
                        country={item.country}
                        categories={item.categories}
                        setSidebarOpen={setSidebarOpen}
                      />
                    )}
                  </div>
                )
              })}

              {secondarySidebarItems.map((item) => {
                return (
                  <div
                    key={item}
                    onClick={() => {
                      router.replace(`/${item.href}`)
                      // alert(item);
                      setSidebarOpen(false)
                    }}
                    className="text-purple-dark border-gray-100 lg:hover:bg-gray-100 border py-3 px-5  text-right font-TSSemi text-lg lg:cursor-pointer lg:border-none "
                  >
                    {item.name}
                  </div>
                )
              })}
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
        {/******************************************** */}
      </Transition.Root>
      {/* Static sidebar for desktop */}
      <div className="flex flex-1 flex-col ">
        <div className="bg-purple-dark sticky top-0 z-10 px-3 pt-1.5 pb-0 ">
          <div className="flex">
            <div className="inline-block" onClick={() => setSidebarOpen(true)}>
              {sidebarOpen ? (
                <XIcon className="text-purple-900 h-7 w-7 lg:cursor-pointer" />
              ) : (
                <MenuIcon className="text-purple-900 h-7 w-7 lg:cursor-pointer" />
              )}
            </div>
            <div className="mx-auto"></div>
            {router.pathname == '/' ? null : (
              <div
                onClick={() => {
                  if (is_share) {
                    router.push(`/`)
                    localStorage.removeItem('is_share')
                  } else {
                    router.back()
                  }
                }}
                className="float-left inline-block lg:cursor-pointer"
              >
                <ArrowLeftIcon className=" text-white h-6 w-6" />
              </div>
            )}
          </div>
        </div>
        <main></main>
      </div>
    </React.Fragment>
  )
}

export default MobileMenu
