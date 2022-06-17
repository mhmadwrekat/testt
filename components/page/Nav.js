import React, { useEffect, useState } from 'react'
import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Refresh } from '@material-ui/icons'
import Image from 'next/image'

//import MobileMenu from './MobileMenu'
// import moment from 'moment'
// import 'moment/locale/ar'
const Nav = ({ showCategory, all_news }) => {
  const [active, setActive] = useState(true)

  const router = useRouter()

  const nav_items = [
    {
      name: 'الرئيسية',
      id: 1,
      link: '/home',
    },
    {
      name: 'المدونة',
      id: 2,
      link: '/blogs',
    },
    {
      name: 'أخبار',
      id: 3,
      link: '/',
    },
  ]

  const subscribe_item = [
    // {
    //   name: 'الصحه',
    //   link: '#الصحه',
    //   id: 1,
    // },
    // {
    //   name: 'الخليج العربي',
    //   link: '#الخليج العربي',
    //   id: 2,
    // },
    // {
    //   name: 'العاب',
    //   link: '#العاب',
    //   id: 3,
    // },
  ]
  const unsubscribe_item = [
    // {
    //   name: 'غزو اوكرانيا',
    //   link: '#اوكرانيا',
    //   id: 4,
    // },
    // {
    //   name: 'ترند',
    //   link: '#ترند',
    //   id: 5,
    // },
    // {
    //   name: 'رياضه',
    //   link: '#الرياضه',
    //   id: 6,
    // },
    // {
    //   name: 'لايف ستايل',
    //   link: '#لايف ستايل',
    //   id: 7,
    // },
    // {
    //   name: 'تكنولوجيا',
    //   link: '#تكنولوجيا',
    //   id: 8,
    // },
    // {
    //   name: 'الشأن الدولي',
    //   link: '#الشأن الدولي',
    //   id: 9,
    // },
    // {
    //   name: 'الشرق الاوسط',
    //   link: '#الشرق الاوسط',
    //   id: 10,
    // },
  ]
  let count = 0
  const media_item = [
    {
      name: 'الأكثر مشاهدة',
      link: '#الأكثر مشاهدة',
      id: 1,
      width: 'w-28',
    },
    {
      name: 'لقيمات',
      link: '#لقيمات',
      id: 2,
      width: 'w-12',
    },
    {
      name: 'الصوتيات',
      link: '#الصوتيات',
      id: 3,
      width: 'w-16',
    },
  ]
  // useEffect(() => {
  //   all_news?.map((item) => {
  //     // item?.is_subscribed !== null &&
  //     if (item?.is_subscribed === true) {
  //       subscribe_item.push({
  //         name: item?.section_name,
  //         link: `#${item?.section_name}`,
  //         id: count++,
  //       })
  //       // console.log('yes -> ', item?.section_name)
  //     }
  //     if (item?.is_subscribed === false) {
  //       unsubscribe_item.push({
  //         name: item?.section_name,
  //         link: `#${item?.section_name}`,
  //         id: count++,
  //       })
  //       // console.log('No -> ', item?.section_name)
  //     }
  //   })
  // }, [all_news])
  all_news?.map((item) => {
    // item?.is_subscribed !== null &&
    if (item?.is_subscribed === true) {
      if (item?.section_name === 'الشرق الاوسط') {
        subscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-28',
        })
      } else if (item?.section_name.length >= 9) {
        subscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-24',
        })
      } else {
        subscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-12',
        })
      }
      // console.log('yes -> ', item?.section_name)
    }
    if (item?.is_subscribed === false) {
      if (item?.section_name === 'الشرق الاوسط') {
        unsubscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-28',
        })
      } else if (item?.section_name.length >= 9) {
        unsubscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-24',
        })
      } else {
        unsubscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-12',
        })
      }
      // console.log('No -> ', item?.section_name)
    }
  })
  const activate = () => {
    setActive(false)
    // console.log(active)
  }

  let a = 'الاكثر مشاهدة'
  console.log(' --> ', a.length)

  // typeof window != 'undefined' && window.scroll && console.log(true)
  return (
    <React.Fragment>
      <section className="z-50 w-full bg-white">
        <section className="mx-4 mb-2 flex justify-between lg:mx-10">
          <div className="flex">
            <div className=" mt-2 lg:mx-8 lg:mt-3 lg:mb-2">
              {/* <Link href="/"> */}
              <svg
                // width="90"
                // height="50"
                viewBox="0 0 61 28"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-20 cursor-pointer fill-Purp100 hover:fill-SKY lg:h-12 lg:w-24"
                onClick={() => {
                  router.push('/')
                }}
              >
                <path
                  className="fill-Purp100 hover:fill-SKY"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.624423 4.91782L1.49478 -3.31256e-05L16.1399 2.42796L15.2695 7.34581L0.624423 4.91782ZM48.0658 14.5565L46.0197 12.5761L35.516 22.7449L39.1603 26.2722L46.5895 19.0817L48.0658 20.2848H53.2209V0.46032H48.0658V14.5565ZM61 0.46032H55.8449V20.2848H61V0.46032ZM31.3838 20.2848H36.539V10.3726H31.3838V16.0265L27.114 14.9875V10.3726H21.9589V16.4164L15.2427 18.0838L16.5255 22.9168L27.114 20.2848V19.3921L31.3838 20.2848ZM46.1946 8.43834C46.1946 10.0634 44.8335 11.3807 43.1546 11.3807C41.4756 11.3807 40.1145 10.0634 40.1145 8.43834C40.1145 6.81331 41.4756 5.49597 43.1546 5.49597C44.8335 5.49597 46.1946 6.81331 46.1946 8.43834ZM31.315 27.0033C32.9939 27.0033 34.355 25.6859 34.355 24.0609C34.355 22.4359 32.9939 21.1185 31.315 21.1185C29.636 21.1185 28.2749 22.4359 28.2749 24.0609C28.2749 25.6859 29.636 27.0033 31.315 27.0033ZM3.3706 9.33153C4.61702 8.52691 6.08204 8.09824 7.58027 8.09976C9.58628 8.1018 11.5095 8.87415 12.9277 10.2473C14.3459 11.6204 15.1432 13.4821 15.1446 15.4236C15.1457 16.8737 14.7023 18.2915 13.8705 19.4976C13.0387 20.7037 11.856 21.6439 10.472 22.1992C9.08792 22.7544 7.56481 22.8998 6.09536 22.617C4.6259 22.3342 3.27617 21.6358 2.21695 20.6102C1.15773 19.5847 0.436632 18.2781 0.144921 16.8557C-0.14679 15.4334 0.00399623 13.9593 0.57819 12.6199C1.15238 11.2806 2.12418 10.1362 3.3706 9.33153ZM6.40227 17.1377C6.75096 17.3632 7.1609 17.4836 7.58027 17.4836V17.4759C8.14125 17.4759 8.67937 17.2607 9.07678 16.8775C9.4742 16.4943 9.69852 15.9743 9.70062 15.4313C9.70062 15.0254 9.57627 14.6287 9.34328 14.2912C9.11029 13.9537 8.77914 13.6907 8.39169 13.5353C8.00425 13.38 7.57792 13.3394 7.16661 13.4185C6.75531 13.4977 6.37749 13.6932 6.08095 13.9802C5.78441 14.2672 5.58247 14.6329 5.50066 15.031C5.41884 15.4291 5.46084 15.8417 5.62132 16.2167C5.78181 16.5917 6.05358 16.9122 6.40227 17.1377Z"
                />
              </svg>
              {/* </Link> */}
            </div>
            {/* <p className="text-gray-400 mr-3.5 font-TSExtra text-xl  lg:mr-14">
            {moment().format('Do / MMM')}
          </p> */}

            {/* <div className="float-right my-5 mr-4 flex md:mr-20 lg:mr-24">
          <button className="js-change-theme text-3xl focus:outline-none">
            🌙
          </button>
        </div> */}
            {/* <section id="logoFooter" className="text-LogoPurp"> */}

            <div className="mt-3 flex pr-5 font-TSbold text-base lg:flex lg:pt-0 lg:pr-20 lg:text-lg">
              {nav_items.map((item) => {
                return (
                  <p
                    key={item.id}
                    className="my-auto ml-5 lg:ml-10 lg:cursor-pointer"
                    onClick={() => {
                      router.push(item.link)
                    }}
                  >
                    {item.name}
                  </p>
                )
              })}

              {/* <svg
                className="text-slate-400 mx-4 mt-2 h-7 w-7"
                viewBox="0 0 20 20"
                fill="#FF0000"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg> */}
              {/* <div className="my-auto ml-10 pt-3 lg:cursor-pointer "></div> */}
            </div>
          </div>
          {/* {active && ( */}

          <div
            className="mt-3 font-TSSemi lg:ml-5 lg:mt-4 lg:block lg:pl-3"
            // onClick={() => {
            //   router.push('/Search')
            // }}
          >
            <form
              className="hidden lg:flex"
              // onSubmit={() => {
              //   handelFeedback()
              // }}
            >
              <div className="pointer-events-auto absolute ">
                <svg
                  className="text-slate-400 absolute mx-4 mt-2 h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="#FFFFFF"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="محرك البحث"
                className="w-48 rounded-r-md bg-GRAY200 py-2 pr-12 text-base placeholder-white lg:w-96 lg:text-lg"
              />
              <button
                type="submit"
                className="rounded-l-md bg-Purp500 py-2 px-8 font-TSbold text-base text-white lg:text-lg"
              >
                بحث
              </button>
            </form>
            {/* <Link href="/Search">
              <div className="pointer-events-auto absolute ">
                <svg
                  className="text-slate-400 absolute mx-4 mt-2 h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="#FFFFFF"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </Link>
            <Link href="/Search">
              <input
                type="text"
                placeholder="محرك البحث"
                className="float-left w-40 rounded-md border-2 border-white bg-GRAY200 p-1 pt-2 pr-12 text-base placeholder-white lg:w-96 lg:text-lg"
              />
            </Link> */}
          </div>

          {/* )} */}
          {/* </section> */}
          <div className="mt-4 flex h-6 w-6 text-left lg:hidden">
            <img src="./assest/images/Union.jpg" className=" h-full w-full" />
          </div>
        </section>

        {/* <div className="w-6/6 border-gray-500 mx-4 border-b-2 pt-1 opacity-50 lg:mx-28"></div> */}
      </section>

      {showCategory ? (
        <section className="sticky top-0 left-0 z-50 w-screen">
          <section className="flex w-screen justify-center bg-Purp100 py-0 text-center font-TSbold text-sm text-white lg:text-base">
            <div className="mx-auto my-3 flex w-screen items-center justify-start overflow-x-auto lg:my-4 lg:mt-3 lg:justify-center">
              <div className="mx-2 flex justify-start rounded-full border-3 border-Purp200 pl-3">
                {/* <img
                  src="./assest/images/additional.jpg"
                  className="h-8 w-8 bg-Purp300"
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 rounded-full bg-Purp300 lg:h-10 lg:w-10"
                  viewBox="0 0 20 20"
                  fill="#695CAD"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                  {media_item.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`${item.width} mx-2 flex items-center justify-center gap-3`}
                      >
                        <a className={`rounded-full`} href={item.link}>
                          {item.name}
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
              {subscribe_item?.length > 0 && (
                <div className="mx-2 flex justify-start rounded-full border-3 border-Purp200 pl-3">
                  {/* <img
              src="./assest/images/additional.jpg"
              className="h-8 w-8 bg-Purp300"
            /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 rounded-full bg-Purp300 lg:h-10 lg:w-10"
                    viewBox="0 0 20 20"
                    fill="#695CAD"
                  >
                    <path
                      fillRule="evenodd"
                      className="rounded-full"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="flex py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                    {subscribe_item?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className={`${item.width} flex items-center justify-center gap-0`}
                        >
                          <a className={`rounded-full`} href={item.link}>
                            {item.name}
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              {unsubscribe_item?.length > 0 && (
                <div className="mx-2 flex h-10 justify-start rounded-full border-3 border-Purp200 px-3 lg:h-11">
                  <div className="flex w-full py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                    {unsubscribe_item?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className={`${item.width} flex items-center justify-center gap-3`}
                        >
                          <a className={``} href={item.link}>
                            {item.name}
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>
          {subscribe_item.map((item) => {
            console.log(subscribe_item)
          })}
          {subscribe_item.length > 0 && console.log(subscribe_item.length)}
        </section>
      ) : (
        <div className="mx-auto w-11/12 border-t-2 border-Purp100"></div>
      )}
    </React.Fragment>
  )
}

export default Nav
/*
  {showCategory ? (
        <section className="sticky top-0 left-0 z-50 w-screen">
          <section className="flex w-screen justify-start bg-Purp100 py-0 text-center font-TSbold text-base text-white lg:text-lg">
            <div className="mx-auto flex w-full items-center justify-start overflow-x-auto pb-1 pt-1.5 lg:pb-0 lg:pt-0">
              <div className="mx-2 my-2.5 ml-3 flex justify-start rounded-full border-3 border-Purp200">
      
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 rounded-full bg-Purp300 lg:h-10 lg:w-10"
                  viewBox="0 0 20 20"
                  fill="#695CAD"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="flex py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                  {media_item.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="flex w-fit items-center justify-center gap-0"
                      >
                        <a className={`mr-8 py-1 lg:w-full`} href={item.link}>
                          {item.name}
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>
              {subscribe_item?.length > 0 && (
                <div className="mx-2 flex justify-start rounded-full border-3 border-Purp200 pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 rounded-full bg-Purp300 lg:h-10 lg:w-10"
                    viewBox="0 0 20 20"
                    fill="#695CAD"
                  >
                    <path
                      fillRule="evenodd"
                      className="rounded-full"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                    {subscribe_item?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex w-fit items-center justify-center gap-3"
                        >
                          <a className={`mr-8 py-1 lg:w-full`} href={item.link}>
                            {item.name}
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              {unsubscribe_item?.length > 0 && (
                <div className="mx-2 flex justify-start rounded-full border-3 border-Purp200 px-3">
                  <div className="flex py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                    {unsubscribe_item?.map((item) => {
                      return (
                        <div
                          key={item.id}
                          className="flex w-fit items-center justify-center gap-0"
                        >
                          <a className={`mr-8 py-1 lg:w-full`} href={item.link}>
                            {item.name}
                          </a>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>
          {subscribe_item.map((item) => {
            console.log(subscribe_item)
          })}
          {subscribe_item.length > 0 && console.log(subscribe_item.length)}
        </section>
      ) : (
        <div className="mx-auto w-11/12 border-t-2 border-Purp100"></div>
      )}
*/
/*
            {/* {active ? (
                  <button
                    className="mobile-menu-button"
                    type="button"
                    onClick={() => {
                      activate()
                    }}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9 cursor-pointer "
                      viewBox="0 0 20 20"
                      fill="#686767"
                    >
                      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </button>
                ) : null}
            <React.Fragment>
                  <div className="w-10">
                    <Menu as="div" className="">
                      <Menu.Button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-9 w-9 cursor-pointer "
                          viewBox="0 0 20 20"
                          fill="#686767"
                        >
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </Menu.Button>

                      <Menu.Items>
                        <section className="">
                          <section className="top-18 fixed absolute right-0 flex w-full justify-center bg-Purp100 text-center font-TSbold text-lg text-white">
                            {secondary_nav_items.map((item) => {
                              return (
                                <Menu.Item key={item.id}>
                                  {({ active }) => (
                                    <a
                                      className={`${active && ''} ml-10 p-2`}
                                      href={item.link}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              )
                            })}
                          </section>
                        </section>
                      </Menu.Items>
                    </Menu>
                  </div>
                </React.Fragment> 
*/
