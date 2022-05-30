import Image from 'next/image'
import appleStore from '../../public/assest/images/apple-xhdpi.png'
import googlePlay from '../../public/assest/images/google-xhdpi.png'
// import instagram from '../../public/assest/images/instagram.png'
import React from 'react'
const Footer = () => {
  const NewTab = (url) => {
    window.open(url, '_blank')
  }
  return (
    <React.Fragment>
      <div className="pt-2">
        <footer className="py-2">
          <div className="border-gray-400 text-white mx-auto overflow-hidden border-t-2 bg-LogoPurp py-5">
            <h1 className="text-md my-3 mr-1 text-center font-TSbold">
              إستخدم التطبيق لتجربة أفضل
            </h1>
            <div className="mx-auto block flex  w-full justify-center">
              <span className="relative ml-2 inline-block w-32 cursor-pointer ">
                <Image
                  src={appleStore}
                  alt="apple Store"
                  onClick={() => {
                    NewTab(
                      'https://apps.apple.com/us/app/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-alzubda-%D8%A7%D9%84%D8%B2%D8%A8%D8%AF%D8%A9/id1440466617'
                    )
                  }}
                  priority
                />
              </span>
              <span className="relative mr-2 inline-block w-32 cursor-pointer">
                <Image
                  src={googlePlay}
                  alt="google Play"
                  onClick={() => {
                    NewTab(
                      'https://play.google.com/store/apps/details?id=com.live.alzubda.newsapp&hl=ar&gl=US'
                    )
                  }}
                  priority
                />
              </span>
            </div>
          </div>
        </footer>
        <div className=" text-center">
          <p className="mt-4 font-TSSemi text-sm lg:text-lg">
            تابع الزبده على :
          </p>
          <div className="my-1 mt-4">
            {/* instagram */}
            <img
              onClick={() => {
                NewTab('https://instagram.com/alzubdaapp?utm_medium=copy_link')
              }}
              src="./assest/images/instagram.jpg"
              className="mx-auto inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:h-9 lg:w-9 lg:hover:scale-110"
              alt="social media alzubda instagram"
              loading="lazy"
            />
            {/* <svg
              className="mx-auto inline-block h-8 w-8 cursor-pointer md:h-9 md:w-9 lg:h-11 lg:w-11 lg:hover:scale-110"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.0055 56.9859C26.2405 56.9859 25.443 56.9507 22.803 56.837C20.7443 56.7703 18.7122 56.3581 16.7942 55.6182C13.4758 54.3464 10.8519 51.7612 9.56174 48.4926C8.83934 46.5969 8.44969 44.5939 8.40949 42.5695C8.25549 39.9749 8.25549 39.1245 8.25549 32.5134C8.25549 25.832 8.29124 25.052 8.40949 22.4655C8.45057 20.4438 8.8402 18.4437 9.56174 16.5505C10.8505 13.2776 13.4787 10.6901 16.8025 9.42218C18.7238 8.70773 20.7552 8.32299 22.8085 8.28468C25.4347 8.13843 26.2982 8.13843 33.0055 8.13843C39.8255 8.13843 40.6092 8.17364 43.208 8.28468C45.2666 8.32332 47.3034 8.70802 49.2305 9.42218C52.5533 10.6916 55.181 13.2785 56.4712 16.5505C57.2058 18.4712 57.5975 20.5027 57.629 22.5549C57.783 25.1495 57.783 25.9972 57.783 32.6055C57.783 39.2138 57.7445 40.0805 57.629 42.6453C57.5881 44.6717 57.1975 46.6764 56.474 48.5738C55.1806 51.8447 52.5527 54.4308 49.2305 55.7022C47.3062 56.4123 45.2735 56.796 43.219 56.837C40.5927 56.9859 39.732 56.9859 33.0055 56.9859ZM32.912 12.4257C26.1855 12.4257 25.487 12.4582 22.8607 12.5747C21.2932 12.5951 19.7408 12.88 18.271 13.417C16.1006 14.2349 14.3831 15.9194 13.5437 18.0536C12.9943 19.5169 12.705 21.0625 12.6885 22.6226C12.5427 25.247 12.5427 25.9349 12.5427 32.5134C12.5427 39.0134 12.5675 39.8016 12.6885 42.4097C12.7131 43.954 13.0023 45.4831 13.5437 46.9326C14.3844 49.0654 16.1015 50.7486 18.271 51.5666C19.7398 52.1071 21.2928 52.3921 22.8607 52.4088C25.5227 52.5605 26.224 52.5605 32.912 52.5605C39.6577 52.5605 40.3562 52.528 42.9605 52.4088C44.5291 52.39 46.0827 52.1051 47.553 51.5666C49.7103 50.7416 51.4165 49.0621 52.2555 46.938C52.8038 45.4735 53.0931 43.9272 53.1107 42.3663H53.141C53.2592 39.7772 53.2592 39.0866 53.2592 32.4701C53.2592 25.8536 53.229 25.1576 53.1107 22.5711C53.0861 21.0286 52.7969 19.5013 52.2555 18.0536C51.4185 15.9264 49.7119 14.2438 47.553 13.417C46.083 12.8773 44.5292 12.5923 42.9605 12.5747C40.3012 12.4257 39.6055 12.4257 32.912 12.4257ZM33.0055 45.0232C27.863 45.0265 23.2249 41.9783 21.2544 37.3003C19.2838 32.6222 20.369 27.2358 24.0037 23.653C27.6385 20.0702 33.1069 18.9969 37.8586 20.9335C42.6103 22.8701 45.7094 27.4353 45.7105 32.4999C45.7029 39.409 40.0209 45.0098 33.0055 45.0232ZM33.0055 24.3695C28.4491 24.3695 24.7555 28.0072 24.7555 32.4945C24.7555 36.9818 28.4491 40.6195 33.0055 40.6195C37.5618 40.6195 41.2555 36.9818 41.2555 32.4945C41.2449 28.0115 37.5575 24.3799 33.0055 24.3695ZM46.2055 22.4384C44.5704 22.4325 43.249 21.1238 43.252 19.5135C43.255 17.9031 44.5814 16.5993 46.2165 16.5993C47.8516 16.5993 49.1779 17.9031 49.181 19.5134C49.1817 20.2903 48.8683 21.0356 48.31 21.5844C47.7516 22.1333 46.9944 22.4406 46.2055 22.4384Z"
                fill="#453087"
              />
            </svg> */}

            {/* twitter */}
            <img
              onClick={() => {
                NewTab('https://twitter.com/alzubdaapp')
              }}
              src="./assest/images/twitter.jpg"
              className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110"
              alt="social media alzubda twitter"
              loading="lazy"
            />
            {/* <svg
              onClick={() => {
                NewTab('https://twitter.com/alzubdaapp')
              }}
              className="mx-auto mr-7 inline-block h-8 w-8 cursor-pointer md:h-9 md:w-9 lg:mr-10 lg:h-11 lg:w-11 lg:hover:scale-110"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.1531 18.1133C56.581 16.6619 58.3976 14.3765 59.2637 11.6838C56.9824 13.0374 54.4863 13.9909 51.8835 14.5031C48.2749 10.6858 42.5574 9.75685 37.9259 12.2353C33.2943 14.7138 30.8953 19.9861 32.0694 25.1063C22.7246 24.6371 14.0182 20.2229 8.11686 12.9621C5.03706 18.2743 6.6109 25.065 11.7135 28.4808C9.86837 28.4215 8.06413 27.9219 6.45124 27.0238C6.45124 27.0725 6.45124 27.1213 6.45124 27.17C6.45231 32.7036 10.3522 37.47 15.776 38.5667C14.0645 39.0323 12.2693 39.1009 10.5273 38.7671C12.0526 43.4993 16.414 46.7412 21.385 46.8379C17.2679 50.0693 12.1834 51.8217 6.94957 51.8131C6.02189 51.8145 5.09493 51.7611 4.17353 51.6533C9.48834 55.0686 15.6741 56.8814 21.9917 56.875C30.7809 56.9354 39.2276 53.4704 45.4424 47.2551C51.6572 41.0397 55.1215 32.5928 55.0604 23.8036C55.0604 23.2998 55.0487 22.7988 55.0252 22.3004C57.3014 20.6554 59.2659 18.6175 60.8265 16.2825C58.7059 17.2225 56.4565 17.8396 54.1531 18.1133Z"
                fill="#453087"
              />
            </svg> */}

            {/* facebook */}
            <img
              onClick={() => {
                NewTab('https://www.facebook.com/alzubdaapp/')
              }}
              src="./assest/images/facebook.jpg"
              className="mx-auto mr-7 inline-block  h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110"
              alt="social media alzubda facebook"
              loading="lazy"
            />
            {/* <svg
              onClick={() => {
                NewTab('https://www.facebook.com/alzubdaapp/')
              }}
              className="mx-auto mr-7 inline-block h-8 w-8 cursor-pointer md:h-9 md:w-9 lg:mr-10 lg:h-11 lg:w-11 lg:hover:scale-110"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.42209 32.5054C5.42524 45.8287 15.1136 57.173 28.2723 59.261V40.3325H21.4013V32.5054H28.2804V26.5471C27.9729 23.7237 28.9373 20.9099 30.9119 18.8687C32.8866 16.8276 35.667 15.7706 38.499 15.9846C40.5317 16.0174 42.5593 16.1984 44.5656 16.5262V23.186H41.1423C39.9638 23.0317 38.7789 23.4209 37.9215 24.2441C37.0641 25.0673 36.6269 26.2353 36.7331 27.4191V32.5054H44.2379L43.0381 40.3352H36.7331V59.261C50.964 57.012 60.9432 44.0152 59.4412 29.6862C57.9392 15.3572 45.4818 4.71229 31.0939 5.46317C16.706 6.21405 5.42438 18.0979 5.42209 32.5054Z"
                fill="#453087"
              />
            </svg> */}

            {/* youtube */}
            <img
              onClick={() => {
                NewTab(
                  'https://www.youtube.com/channel/UC-0-lhAWZAg3MJcFgC-daVg'
                )
              }}
              src="./assest/images/youtube.jpg"
              className="mx-auto mr-7 inline-block  h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110"
              alt="social media alzubda youtube"
              loading="lazy"
            />
            {/* <svg
              onClick={() => {
                NewTab(
                  'https://www.youtube.com/channel/UC-0-lhAWZAg3MJcFgC-daVg'
                )
              }}
              className="mx-auto mr-7 inline-block h-8 w-8 cursor-pointer md:h-9 md:w-9 lg:mr-10 lg:h-11 lg:w-11 lg:hover:scale-110"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.5163 51.4909H32.4621C32.2942 51.4909 15.4944 51.4584 11.2558 50.3074C8.9251 49.6795 7.10491 47.8583 6.47834 45.5272C5.71615 41.2273 5.3481 36.8669 5.37875 32.5001C5.35906 28.1262 5.73707 23.7595 6.50813 19.454C7.15192 17.1208 8.96412 15.2912 11.291 14.6251C15.4131 13.5417 31.7498 13.5417 32.4431 13.5417H32.5C32.6706 13.5417 49.5138 13.5742 53.709 14.7253C56.0348 15.3564 57.8513 17.1739 58.481 19.5001C59.2675 23.8159 59.6366 28.1975 59.5833 32.584C59.6023 36.9527 59.2234 41.3139 58.4513 45.6138C57.8166 47.942 55.9953 49.7592 53.6656 50.3886C49.549 51.4801 33.2096 51.4909 32.5163 51.4909ZM27.0996 24.3886L27.086 40.6386L41.2019 32.5136L27.0996 24.3886Z"
                fill="#453087"
              />
            </svg> */}

            {/* linkedin */}
            <img
              onClick={() => {
                NewTab('https://www.linkedin.com/company/alzubda/')
              }}
              src="./assest/images/linkedin.jpg"
              className="mx-auto mr-7 inline-block  h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110"
              alt="social media alzubda linkedin"
              loading="lazy"
            />
            {/* <svg
              onClick={() => {
                NewTab('https://www.linkedin.com/company/alzubda/')
              }}
              //   width="45"
              //   height="45"
              className="mx-auto mr-7 inline-block h-8 w-8 cursor-pointer md:h-9 md:w-9 lg:mr-10 lg:h-11 lg:w-11 lg:hover:scale-110"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.2083 56.875H24.375V24.375H35.2083V29.7917C37.5175 26.8538 41.0194 25.1024 44.7552 25.0169C51.4735 25.0542 56.8945 30.5212 56.875 37.2396V56.875H46.0417V38.5938C45.6084 35.5675 43.0131 33.3222 39.956 33.3287C38.6189 33.371 37.3567 33.9565 36.4608 34.95C35.5648 35.9436 35.1126 37.2593 35.2083 38.5938V56.875ZM18.9583 56.875H8.125V24.375H18.9583V56.875ZM13.5417 18.9583C10.5501 18.9583 8.125 16.5332 8.125 13.5417C8.125 10.5501 10.5501 8.125 13.5417 8.125C16.5332 8.125 18.9583 10.5501 18.9583 13.5417C18.9583 14.9783 18.3877 16.356 17.3718 17.3718C16.356 18.3877 14.9783 18.9583 13.5417 18.9583Z"
                // fill="#453783"
                fill="#453087"
              />
            </svg> */}
          </div>
        </div>
        <div className="mx-5 text-center text-sm ">
          {/* <label className="text-center text-xs "> Alzubda App</label>
        <br />
        <label className="text-xs"> Privacy Policy</label>
        <span className="mx-14" />
        <label className="text-xs"> Terms of Service</label> */}
          <div className="mt-1 mr-5 py-5 text-center font-TSmedium text-sm lg:mr-10">
            Copyright &#169; {new Date().getFullYear()}{' '}
            <b className="px-1">|</b> Alzubda App
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer
