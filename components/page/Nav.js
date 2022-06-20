import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../config/config'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
const Search = dynamic(() => import('../appleTemplate/childComponent/Search'))
const Nav = ({
  showCategory,
  all_news,
  alternative_search,
  setSearches,
  searches,
}) => {
  const [active, setActive] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [token, setUserToken] =
    typeof window !== 'undefined'
      ? useState(localStorage.getItem('user_token'))
      : useState()
  const [search_key, setSearchKey] = useState('')
  const [search_data, setSearchData] = useState()
  const [loader, setLoader] = useState(null)
  const [svgnull, setSvgNull] = useState(false)

  let bg_color = 'bg-GREEN'

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

  const subscribe_item = []
  const unsubscribe_item = []
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
      width: 'w-16',
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
  //       // console.log('Y')

  //       if (item?.section_name === 'الشرق الاوسط') {
  //         subscribe_item.push({
  //           name: item?.section_name,
  //           link: `#${item?.section_name}`,
  //           id: count++,
  //           width: 'w-28',
  //         })
  //       } else if (item?.section_name.length >= 9) {
  //         subscribe_item.push({
  //           name: item?.section_name,
  //           link: `#${item?.section_name}`,
  //           id: count++,
  //           width: 'w-24',
  //         })
  //       } else {
  //         subscribe_item.push({
  //           name: item?.section_name,
  //           link: `#${item?.section_name}`,
  //           id: count++,
  //           width: 'w-12',
  //         })
  //       }
  //       // console.log('yes -> ', item?.section_name)
  //     }
  //     if (item?.is_subscribed === false) {
  //       if (item?.section_name === 'الشرق الاوسط') {
  //         unsubscribe_item.push({
  //           name: item?.section_name,
  //           link: `#${item?.section_name}`,
  //           id: count++,
  //           width: 'w-28',
  //         })
  //       } else if (item?.section_name.length >= 9) {
  //         unsubscribe_item.push({
  //           name: item?.section_name,
  //           link: `#${item?.section_name}`,
  //           id: count++,
  //           width: 'w-24',
  //         })
  //       } else {
  //         unsubscribe_item.push({
  //           name: item?.section_name,
  //           link: `#${item?.section_name}`,
  //           id: count++,
  //           width: 'w-12',
  //         })
  //       }
  //       // console.log('No -> ', item?.section_name)
  //     }
  //   })
  // }, [all_news])

  all_news?.map((item) => {
    // item?.is_subscribed !== null &&
    if (item?.is_subscribed === true) {
      // console.log('Y')

      if (item?.section_name === 'الشرق الاوسط') {
        subscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-32',
        })
      } else if (item?.section_name.length >= 9) {
        subscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-28',
        })
      } else {
        subscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-14',
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
          width: 'w-32',
        })
      } else if (item?.section_name.length >= 9) {
        unsubscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-28',
        })
      } else {
        unsubscribe_item.push({
          name: item?.section_name,
          link: `#${item?.section_name}`,
          id: count++,
          width: 'w-14',
        })
      }
      // console.log('No -> ', item?.section_name)
    }
  })
  const activate = () => {
    setActive(false)
    // console.log(active)
  }
  const handel_show = () => {
    setSearches(false)
    setShowSearch(false)
    document.getElementById('name').value = ''
  }

  const handel_search = () => {
    event.preventDefault()
    let kee = event.target.name.value
    setLoader(true)
    setSearches && setSearches(true)
    // setSearches(true)
    axios
      .get(
        `${BASE_URL}/v1/User/Stories/Search/Keywords?phrase=${event.target.name.value}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(function (response) {
        if (response.data.data.length > 0) {
          // console.log(kee)
          setSearchData(response.data.data)
          setLoader(false)
          setSearchKey(`نتائج بحث ${kee}`)
          setSvgNull(false)
        } else {
          setSearchData(alternative_search)
          setLoader(false)
          setSearchKey('لم يتم العثور على نتائج')
          setSvgNull(true)
        }
        // console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    // event.target.reset()
    // }
    // searches && event.target.reset()

    // setSearches(false)
    // setShowSearch(false)
    // // event.target.reset()
    // console.log(event.target.name.value)
  }
  let route_color = router.pathname === '/' && 'text-Purp100'
  let route_color_blogs = router?.pathname.includes('/blogs') && 'text-Purp100'
  return (
    <React.Fragment>
      <section className="z-50 w-full bg-white">
        <section className="mx-4 mb-2 flex justify-between lg:mx-10">
          <div className="flex">
            {/* Logo */}
            {/* Logo */}
            <div className=" mt-2 lg:mx-8 lg:mt-3 lg:mb-2">
              <svg
                viewBox="0 0 61 28"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-20 cursor-pointer fill-Purp100 hover:fill-SKY lg:h-12 lg:w-24"
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
            </div>
            {/* Nav Main Item */}
            {/* Nav Main Item */}
            <div className="mt-3 flex pr-3 font-TSbold text-base lg:flex lg:pt-0 lg:pr-20 lg:text-lg">
              <p
                className={`my-auto ml-3 lg:ml-10 lg:cursor-pointer`}
                onClick={() => {
                  router.push('/home')
                }}
              >
                الرئيسية
              </p>
              <p
                className={`${route_color_blogs} my-auto ml-3 lg:ml-10 lg:cursor-pointer`}
                onClick={() => {
                  router.push('/blogs')
                }}
              >
                المدونة{' '}
              </p>
              <p
                className={`${route_color} my-auto ml-3 lg:ml-10 lg:cursor-pointer`}
                onClick={() => {
                  router.push('/')
                }}
              >
                أخبار{' '}
              </p>
            </div>
          </div>
          {/* Desktop Search Form */}
          {/* Desktop Search Form */}
          <div
            className="mt-3 font-TSSemi lg:ml-5 lg:mt-4 lg:block lg:pl-3"
            // onClick={() => {
            //   router.push('/Search')
            // }}
          >
            <form
              className="hidden lg:flex"
              onSubmit={() => {
                handel_search()
              }}
            >
              <div className="pointer-events-auto absolute">
                {searches ? (
                  <svg
                    className="text-slate-400  mx-4 mt-2 h-7 w-7 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#FFFFFF"
                    // type="submit"
                    // onClick={
                    //   // () => {
                    //   // setSearches(false)
                    //   // setShowSearch(false)

                    //   (document.getElementById('name').value = 'hi')
                    //   // handel_search()
                    // }
                    onClick={() => {
                      handel_show()
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
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
                )}
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
                className="flex rounded-l-md bg-Purp500 py-2 px-8 font-TSbold text-base text-white lg:text-lg"
              >
                بحث
                {loader ? (
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
              </button>
            </form>
          </div>
          {/* mobile Search Img */}
          {/* mobile Search Img */}
          <div className="mt-4 flex h-6 w-6 text-left lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="#FFFFFF"
              viewBox="0 0 24 24"
              stroke="#B0B0B0"
              // stroke-width="2"
              onClick={() => {
                setShowSearch(true)
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </section>
      </section>
      {/* Nav Item */}
      {/* Nav Item */}
      {showCategory ? (
        <section className="sticky top-0 left-0 z-50 w-screen">
          <section className="flex w-screen justify-center bg-Purp100 py-0 text-center font-TSbold text-sm text-white lg:text-base">
            <section className="mx-auto my-1 mt-1.5 flex w-screen items-center justify-start overflow-x-auto lg:my-4 lg:mt-4 lg:justify-center">
              <section className="mx-2 flex justify-start rounded-full border-3 border-Purp200 pl-3">
                {/* <img
                  src="./assest/images/additional.jpg"
                  className="h-8 w-8 bg-Purp300"
                /> */}
                {/* <svg
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
                </svg> */}
                <svg
                  fill="#695CAD"
                  className="h-8 w-8 rounded-full bg-Purp300 lg:h-9 lg:w-9"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m10.5 1.5v5.25c-0.99456 0-1.9484 0.39509-2.6516 1.0984s-1.0984 1.6571-1.0984 2.6516c0 0.9946 0.39509 1.9484 1.0984 2.6517 0.70326 0.7032 1.6571 1.0983 2.6516 1.0983v5.25c4.9706 0 9-4.0294 9-9 0-4.9706-4.0294-9-9-9zm0 12.75v-7.5c0.9946 0 1.9484 0.39509 2.6517 1.0984 0.7032 0.70326 1.0983 1.6571 1.0983 2.6516 0 0.9946-0.3951 1.9484-1.0983 2.6517-0.7033 0.7032-1.6571 1.0983-2.6517 1.0983zm-10.5-3.75c0-5.799 4.701-10.5 10.5-10.5 5.799 0 10.5 4.701 10.5 10.5 0 5.799-4.701 10.5-10.5 10.5-5.799 0-10.5-4.701-10.5-10.5z"
                    clipRule="evenodd"
                    fill="#695CAD"
                    fillRule="evenodd"
                  />
                </svg>
                <section className="flex py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                  {media_item.map((item) => {
                    return (
                      <section
                        key={item.id}
                        className={`${item.width} mx-2 flex items-center justify-center gap-3`}
                      >
                        <a className={`rounded-full`} href={item.link}>
                          {item.name}
                        </a>
                      </section>
                    )
                  })}
                </section>
              </section>
              {subscribe_item?.length > 0 && (
                <section className="mx-2 flex justify-start rounded-full border-3 border-Purp200 pl-3">
                  {/* <img
              src="./assest/images/additional.jpg"
              className="h-8 w-8 bg-Purp300"
            /> */}
                  {/* <svg
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
                  </svg> */}
                  <svg
                    fill="#695CAD"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 rounded-full bg-Purp300 lg:h-9 lg:w-9"
                  >
                    <path
                      d="m11 0c-6.0653 0-11 4.9347-11 11 0 6.0653 4.9347 11 11 11 6.0653 0 11-4.9347 11-11 0-6.0653-4.9347-11-11-11zm5.7248 7.3134-7.1077 8.4616c-0.07797 0.0928-0.17498 0.1678-0.28448 0.2199-0.10949 0.0521-0.2289 0.0801-0.35014 0.082h-0.01428c-0.1186 0-0.23586-0.025-0.34419-0.0733s-0.20529-0.1188-0.2846-0.207l-3.0462-3.3846c-0.07736-0.082-0.13754-0.1787-0.177-0.2844-0.03946-0.1056-0.0574-0.2181-0.05278-0.3307 0.00463-0.1127 0.03173-0.2233 0.07971-0.3254 0.04799-0.102 0.11589-0.1935 0.19971-0.2689 0.08383-0.0754 0.18189-0.1334 0.28842-0.1704s0.21938-0.0523 0.33192-0.0451c0.11254 0.0073 0.22249 0.0369 0.3234 0.0873 0.10092 0.0503 0.19075 0.1203 0.26422 0.2059l2.3951 2.6611 6.4831-7.7164c0.1454-0.16813 0.3512-0.27228 0.5728-0.28994 0.2215-0.01766 0.4412 0.05259 0.6114 0.19557s0.2773 0.3472 0.2982 0.56852c0.0208 0.22132-0.0462 0.44195-0.1867 0.61421z"
                      fill="#695CAD"
                    />
                  </svg>

                  <section className="flex py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                    {subscribe_item?.map((item) => {
                      return (
                        <section
                          key={item.id}
                          className={`${item.width} flex items-center justify-center gap-0`}
                        >
                          <a className={`rounded-full`} href={item.link}>
                            {item.name}
                          </a>
                        </section>
                      )
                    })}
                  </section>
                </section>
              )}
              {unsubscribe_item?.length > 0 && (
                <section className="mx-2 flex h-10 justify-start rounded-full border-3 border-Purp200 px-3 lg:h-11">
                  <section className="flex w-full py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
                    {unsubscribe_item?.map((item) => {
                      return (
                        <section
                          key={item.id}
                          className={`${item.width} flex items-center justify-center gap-3`}
                        >
                          <a className={``} href={item.link}>
                            {item.name}
                          </a>
                        </section>
                      )
                    })}
                  </section>
                </section>
              )}
            </section>
          </section>
          {/* {subscribe_item.map((item) => {
            console.log(subscribe_item)
          })} */}
          {/* {subscribe_item.length > 0 && console.log(subscribe_item.length)} */}
        </section>
      ) : (
        <section className="mx-auto w-11/12 border-t-2 border-Purp100"></section>
      )}

      {/* Mobile Search Form */}
      {/* Mobile Search Form */}
      {showSearch ? (
        <form
          className="mt-5 flex justify-center lg:hidden"
          onSubmit={() => {
            handel_search()
          }}
        >
          <div className="pointer-events-auto">
            {searches ? (
              <svg
                className="text-slate-400 absolute mx-0 mt-2 h-7 w-7 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#FFFFFF"
                onClick={() => {
                  handel_show()
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="text-slate-400 absolute mx-0 mt-2 h-7 w-7"
                viewBox="0 0 20 20"
                fill="#FFFFFF"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            <input
              type="text"
              name="name"
              id="name"
              placeholder="محرك البحث"
              className="w-44 bg-GRAY200 py-2 pr-8 text-base placeholder-white lg:w-96 lg:text-lg"
            ></input>
          </div>
          <button
            type="submit"
            className="flex rounded-l-md bg-Purp500 py-2 px-8 font-TSbold text-base text-white lg:text-lg"
          >
            بحث
            {loader ? (
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : null}
          </button>
        </form>
      ) : null}

      {/* Search Data */}
      {/* Search Data */}
      <React.Fragment>
        <div dir="rtl" id="project_body" translate="no">
          <section className="text-black mx-auto grid w-11/12 bg-white lg:w-10/12">
            {searches
              ? search_data?.length > 0 && (
                  <section>
                    <div className="flex">
                      {svgnull && (
                        <svg
                          className="mt-3.5 h-12 w-12 lg:h-14 lg:w-14"
                          fill="none"
                          viewBox="0 0 74 74"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m64.904 57.68-24.632-45.744c-1.746-3.2433-6.397-3.2433-8.1444 0l-24.631 45.744c-0.37909 0.7041-0.56914 1.4945-0.55162 2.2939 0.01753 0.7995 0.24203 1.5808 0.65161 2.2676s0.99023 1.2556 1.6853 1.6511c0.69504 0.3954 1.4807 0.6038 2.2804 0.605h49.269c0.8003 1e-4 1.5869-0.2075 2.2829-0.6024 0.6961-0.3949 1.2778-0.9636 1.6882-1.6506s0.6355-1.4688 0.6534-2.2689c0.0178-0.8-0.1722-1.591-0.5516-2.2957zm-28.704-0.2645c-0.5717 0-1.1306-0.1695-1.6059-0.4871-0.4754-0.3176-0.8459-0.7691-1.0647-1.2973s-0.276-1.1094-0.1645-1.6701c0.1116-0.5607 0.3869-1.0758 0.7911-1.4801 0.4043-0.4042 0.9194-0.6795 1.4801-0.7911 0.5607-0.1115 1.1419-0.0543 1.6701 0.1645s0.9797 0.5893 1.2973 1.0647c0.3176 0.4753 0.4871 1.0342 0.4871 1.6059 0 0.3796-0.0747 0.7555-0.22 1.1062s-0.3582 0.6694-0.6266 0.9378-0.5871 0.4813-0.9378 0.6266-0.7266 0.22-1.1062 0.22zm3.1392-29.072-0.8296 17.633c0 0.6133-0.2436 1.2015-0.6773 1.6352s-1.0219 0.6773-1.6352 0.6773-1.2015-0.2436-1.6352-0.6773c-0.4336-0.4337-0.6773-1.0219-0.6773-1.6352l-0.8296-17.626c-0.0186-0.4212 0.0477-0.8418 0.1951-1.2368s0.3728-0.7563 0.6627-1.0623c0.29-0.306 0.6386-0.5505 1.0251-0.719 0.3865-0.1684 0.803-0.2573 1.2245-0.2613h0.0304c0.4244-2e-4 0.8445 0.0855 1.2349 0.2521s0.743 0.4106 1.0365 0.7172 0.5218 0.6695 0.6712 1.0668 0.2168 0.8207 0.1981 1.2447l0.0057-0.0086z"
                            fill="#ddd"
                          />
                        </svg>
                      )}

                      <p
                        className={`mt-8 font-TSExtra text-base text-GRAY400 lg:text-2xl`}
                      >
                        {search_key}
                      </p>
                    </div>
                    <Search data={search_data} bg_color={'bg-Purp100'} />
                  </section>
                )
              : null}
          </section>
        </div>
      </React.Fragment>
    </React.Fragment>
  )
}

export default Nav
