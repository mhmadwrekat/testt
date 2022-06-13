import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

//mobile
// import phoneNews from '../../public/assest/images/images/mobile/firstSection/phoneNews.png'

//shared
// import logo from '../../public/assest/images/images/shared/alzubda-logo.png'

//laptop
// import mobile from '../../public/asset/images/images/web/introSection/mobile-circle.png'
// import appleStore from '../../public/asset/images/images/shared/apple-xhdpi.png'
// import googlePlay from '../../public/asset/images/images/shared/google-xhdpi.png'
// import phoneNewsWeb from '../../public/asset/images/images/web/introSection/phoneNewsWeb.png'

export default function IntroSection() {
  const router = useRouter()
  function new_tab(url) {
    window.open(url, '_blank')
  }
  const navigation = [
    {
      name: 'الأخبار',
      href: '/',
      id: 1,
    },
    {
      name: 'المدونة',
      href: '/blogs',
      id: 2,
    },
    {
      name: 'تواصل معنا',
      href: '/home/#ContactUs',
      id: 3,
    },
  ]

  return (
    <>
      {/* ------------------- LAPTOP VIEW ----------------------- */}
      {/* ------------------- LAPTOP VIEW ----------------------- */}
      <div className="sr-only lg:not-sr-only">
        <div className="fixed z-20 block w-full cursor-pointer pb-5 pl-5 pr-2 pt-10 backdrop-blur-2xl backdrop-filter">
          <div className="mx-auto max-w-7xl">
            <svg
              width="15"
              height="23"
              viewBox="0 0 15 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-7 w-7"
            >
              <g clipPath="url(#clip0_301_41)">
                <path
                  d="M14.9993 11.7422L11.1349 7.83685L-0.00275994 19.0927L3.86161 22.9981L14.9993 11.7422Z"
                  fill="#FFFFFF"
                />
                <path
                  d="M8.09943 6.51555C9.87975 6.51555 11.323 5.05699 11.323 3.25777C11.323 1.45856 9.87975 0 8.09943 0C6.3191 0 4.87585 1.45856 4.87585 3.25777C4.87585 5.05699 6.3191 6.51555 8.09943 6.51555Z"
                  fill="#FFFFFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_301_41">
                  <rect width="15" height="23" fill="#FFFFFF" />
                </clipPath>
              </defs>
            </svg>
            {navigation.map((item) => {
              return (
                <div
                  key={item.id}
                  className="py-1/2 text-blue-default float-right ml-3 inline-block rounded-xl border border-white bg-white px-5 font-TSSemi "
                >
                  <div
                    onClick={() => {
                      // setIsDesktop(false);
                      router.push(item.href)
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative hidden h-full grid-cols-1 bg-BLUE100 bg-branding-outlines bg-cover bg-no-repeat pt-24 lg:grid lg:grid-cols-6">
        <div className="absolute -bottom-10 z-10  w-full">
          <img
            src="./assest/images/images/web/introSection/phoneNewsWeb.png"
            alt="logo"
            loading="eager"
          />
        </div>
        <div className="hidden  lg:col-span-3 lg:col-end-7 lg:block  lg:flex lg:flex-row-reverse ">
          <div className=" mx-auto mt-10 grid  grid-flow-col grid-rows-2 ">
            <div className="m-20">
              <img
                src="./assest/images/images/shared/alzubda-logo.png"
                alt="logo"
                className="float-right mx-2 my-4 "
                width="450"
                height="300"
                loading="eager"
              />

              <div className="text-center font-TSbold text-5xl text-white  ">
                <h1>أخبار العالم ب60 كلمة</h1>
                <h1>من مصادرها الموثوقة</h1>
              </div>
            </div>
            <div className="mt-60 block">
              <span className="mx-2 inline-block h-10 cursor-pointer lg:h-auto">
                <img
                  src="./assest/images/images/shared/apple-xhdpi.png"
                  alt="apple Store"
                  onClick={() => {
                    new_tab(
                      'https://apps.apple.com/us/app/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-alzubda-%D8%A7%D9%84%D8%B2%D8%A8%D8%AF%D8%A9/id1440466617'
                    )
                  }}
                  loading="eager"
                />
              </span>
              <span className="inline-block h-10 cursor-pointer lg:h-auto">
                <img
                  src="./assest/images/images/shared/google-xhdpi.png"
                  alt="google Play"
                  onClick={() => {
                    new_tab(
                      'https://play.google.com/store/apps/details?id=com.live.alzubda.newsapp&hl=ar&gl=US'
                    )
                  }}
                  loading="eager"
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- MOBILE VIEW ----------------------- */}
      {/* ------------------- MOBILE VIEW ----------------------- */}
      <>
        <div className="w-3/3 not-sr-only fixed z-20 block w-full pb-5 pl-5 pr-2 pt-10   backdrop-blur-2xl backdrop-filter lg:sr-only">
          <div>
            <svg
              width="15"
              height="23"
              viewBox="0 0 15 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-7 w-7"
            >
              <g clipPath="url(#clip0_301_41)">
                <path
                  d="M14.9993 11.7422L11.1349 7.83685L-0.00275994 19.0927L3.86161 22.9981L14.9993 11.7422Z"
                  fill="white"
                />
                <path
                  d="M8.09943 6.51555C9.87975 6.51555 11.323 5.05699 11.323 3.25777C11.323 1.45856 9.87975 0 8.09943 0C6.3191 0 4.87585 1.45856 4.87585 3.25777C4.87585 5.05699 6.3191 6.51555 8.09943 6.51555Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_301_41">
                  <rect width="15" height="23" fill="white" />
                </clipPath>
              </defs>
            </svg>
            {navigation.map((item) => {
              return (
                <div
                  key={item.id}
                  className="py-1/2 text-blue-default float-right ml-1 inline-block rounded-xl border border-white bg-white px-3 font-TSSemi "
                >
                  <Link href={item.href}>{item.name}</Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className="h-120 relative bg-BLUE100 bg-branding-outlines lg:hidden">
          <div className=" pt-20 text-center ">
            <div className=" mx-auto w-32 pt-10 md:w-auto">
              <img
                src="./assest/images/images/shared/alzubda-logo.png"
                alt="logo"
                loading="eager"
              />
            </div>

            <div className="font-TSbold text-xl text-white">
              <h1>أخبار العالم ب60 كلمة</h1>
            </div>
          </div>
          <div className="py-44"></div>
          <div className="absolute -bottom-10 z-10 w-full">
            <img
              src="./assest/images/images/mobile/firstSection/phoneNews.png"
              alt="logo"
              loading="eager"
            />
          </div>
        </div>
      </>
    </>
  )
}
