import React from 'react'
//import Router from 'next/router'
import { useRouter } from 'next/router'

import Select from 'react-select'

//import MobileMenu from './MobileMenu'
// import moment from 'moment'
// import 'moment/locale/ar'
const Nav = () => {
  const router = useRouter()
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <section className="border-purple-800 mx-4 flex justify-between border-b-4 lg:mx-12">
        <div className="flex">
          <div className=" mt-2 lg:mx-2 lg:mt-5 lg:mb-2">
            <svg
              width="66"
              height="35"
              viewBox="0 0 61 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={'cursor-pointer lg:hover:scale-125'}
              onClick={() => router.replace('/')}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.624423 4.91782L1.49478 -3.31256e-05L16.1399 2.42796L15.2695 7.34581L0.624423 4.91782ZM48.0658 14.5565L46.0197 12.5761L35.516 22.7449L39.1603 26.2722L46.5895 19.0817L48.0658 20.2848H53.2209V0.46032H48.0658V14.5565ZM61 0.46032H55.8449V20.2848H61V0.46032ZM31.3838 20.2848H36.539V10.3726H31.3838V16.0265L27.114 14.9875V10.3726H21.9589V16.4164L15.2427 18.0838L16.5255 22.9168L27.114 20.2848V19.3921L31.3838 20.2848ZM46.1946 8.43834C46.1946 10.0634 44.8335 11.3807 43.1546 11.3807C41.4756 11.3807 40.1145 10.0634 40.1145 8.43834C40.1145 6.81331 41.4756 5.49597 43.1546 5.49597C44.8335 5.49597 46.1946 6.81331 46.1946 8.43834ZM31.315 27.0033C32.9939 27.0033 34.355 25.6859 34.355 24.0609C34.355 22.4359 32.9939 21.1185 31.315 21.1185C29.636 21.1185 28.2749 22.4359 28.2749 24.0609C28.2749 25.6859 29.636 27.0033 31.315 27.0033ZM3.3706 9.33153C4.61702 8.52691 6.08204 8.09824 7.58027 8.09976C9.58628 8.1018 11.5095 8.87415 12.9277 10.2473C14.3459 11.6204 15.1432 13.4821 15.1446 15.4236C15.1457 16.8737 14.7023 18.2915 13.8705 19.4976C13.0387 20.7037 11.856 21.6439 10.472 22.1992C9.08792 22.7544 7.56481 22.8998 6.09536 22.617C4.6259 22.3342 3.27617 21.6358 2.21695 20.6102C1.15773 19.5847 0.436632 18.2781 0.144921 16.8557C-0.14679 15.4334 0.00399623 13.9593 0.57819 12.6199C1.15238 11.2806 2.12418 10.1362 3.3706 9.33153ZM6.40227 17.1377C6.75096 17.3632 7.1609 17.4836 7.58027 17.4836V17.4759C8.14125 17.4759 8.67937 17.2607 9.07678 16.8775C9.4742 16.4943 9.69852 15.9743 9.70062 15.4313C9.70062 15.0254 9.57627 14.6287 9.34328 14.2912C9.11029 13.9537 8.77914 13.6907 8.39169 13.5353C8.00425 13.38 7.57792 13.3394 7.16661 13.4185C6.75531 13.4977 6.37749 13.6932 6.08095 13.9802C5.78441 14.2672 5.58247 14.6329 5.50066 15.031C5.41884 15.4291 5.46084 15.8417 5.62132 16.2167C5.78181 16.5917 6.05358 16.9122 6.40227 17.1377Z"
                fill="#000000"
              />
            </svg>
          </div>
          {/* <p className="text-gray-400 mr-3.5 font-TSExtra text-xl  lg:mr-14">
            {moment().format('Do / MMM')}
          </p> */}
          {/*         
        <div className="float-right my-5 mr-4 sm:flex md:mr-20 lg:mr-24 lg:hidden">
          <MobileMenu />
        </div> */}

          {/* <div className="float-right my-5 mr-4 flex md:mr-20 lg:mr-24">
          <button className="js-change-theme text-3xl focus:outline-none">
            🌙
          </button>
        </div> */}
          {/* <section id="logoFooter" className="text-LogoPurp"> */}
          <div className=" hidden pr-20 font-TSSemi text-base lg:mt-3 lg:flex">
            <button className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
              الرئيسية
            </button>
            <button className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
              المدونة
            </button>
            <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
              أخبار
            </buttons>
            <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
              رياضه
            </buttons>
            <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
              الخليج العربي
            </buttons>
            <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
              اقتصاد
            </buttons>
            <buttons className="my-auto ml-10 lg:cursor-pointer lg:hover:underline">
              <select class="bg-white appearance-none border-none">
                <option className="text-xl">. . . </option>
                <option>No</option>
                <option>Maybe</option>
              </select>
            </buttons>
          </div>
        </div>
        <div className="relative mt-2 pl-1 font-TSSemi lg:ml-5 lg:mt-5">
          <div class="... pointer-events-auto absolute">
            <svg
              class="text-slate-400 absolute mx-2 mt-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="#FFFFFF"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="محرك البحث"
            class="bg-gray-300 border-white placeholder-white float-left w-32 rounded-md border-2 p-1 pr-8 lg:w-auto"
          />
        </div>

        {/* </section> */}
      </section>

      {/* <div className="w-6/6 border-gray-500 mx-4 border-b-2 pt-1 opacity-50 lg:mx-28"></div> */}
    </React.Fragment>
  )
}

export default Nav
