import Image from 'next/image'
import appleStore from '../../public/assest/images/apple-xhdpi.png'
import googlePlay from '../../public/assest/images/google-xhdpi.png'

import React from 'react'

const Footer = () => {
  const new_tab = (url) => {
    window.open(url, '_blank')
  }
  return (
    <React.Fragment>
      <div className="pt-6" loading="lazy">
        <footer className="pb-2">
          <div className="border-gray-400 mx-auto overflow-hidden border-t-2 bg-Purp100 py-5 text-white">
            <p className="text-md my-3 mr-1 text-center font-TSbold">
              إستخدم التطبيق لتجربة أفضل
            </p>
            <div className="mx-auto block flex w-full justify-center">
              <div className="relative inline-block w-32 cursor-pointer ">
                <Image
                  src={appleStore}
                  alt="apple Store"
                  layout="fixed"
                  width="130"
                  height="40"
                  onClick={() => {
                    new_tab(
                      'https://apps.apple.com/us/app/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-alzubda-%D8%A7%D9%84%D8%B2%D8%A8%D8%AF%D8%A9/id1440466617'
                    )
                  }}
                />
              </div>
              <div className="w-10"></div>
              <div className="relative inline-block w-32 cursor-pointer">
                <Image
                  src={googlePlay}
                  alt="google Play"
                  layout="responsive"
                  width="130"
                  height="40"
                  onClick={() => {
                    new_tab(
                      'https://play.google.com/store/apps/details?id=com.live.alzubda.newsapp&hl=ar&gl=US'
                    )
                  }}
                />
              </div>
            </div>
          </div>
        </footer>
        <div className=" text-center">
          <p className="mt-4 font-TSSemi text-sm lg:text-lg">تابع الزبده على</p>
          <div className="my-1 mt-4">
            {/* instagram */}
            <div className="inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:h-10 lg:w-10 lg:hover:scale-110">
              <svg
                fill="#45378B"
                viewBox="0 0 66 65"
                xmlns="https://www.w3.org/2000/svg"
                onClick={() => {
                  new_tab(
                    'https://instagram.com/alzubdaapp?utm_medium=copy_link'
                  )
                }}
              >
                <path
                  d="m33.006 56.986c-6.765 0-7.5625-0.0352-10.202-0.149-2.0587-0.0667-4.0908-0.4788-6.0087-1.2187-3.3184-1.2719-5.9424-3.8571-7.2325-7.1257-0.72241-1.8957-1.1121-3.8986-1.1522-5.9231-0.154-2.5946-0.154-3.445-0.154-10.056 0-6.6815 0.03575-7.4615 0.154-10.048 0.04107-2.0218 0.4307-4.0219 1.1522-5.915 1.2887-3.273 3.9169-5.8604 7.2407-7.1284 1.9213-0.71445 3.9527-1.0992 6.006-1.1375 2.6263-0.14625 3.4898-0.14625 10.197-0.14625 6.82 0 7.6038 0.03521 10.202 0.14625 2.0586 0.03864 4.0954 0.42334 6.0225 1.1375 3.3228 1.2694 5.9506 3.8564 7.2408 7.1284 0.7346 1.9207 1.1263 3.9521 1.1577 6.0043 0.154 2.5946 0.154 3.4423 0.154 10.051 0 6.6083-0.0385 7.475-0.154 10.04-0.0409 2.0264-0.4315 4.0312-1.155 5.9286-1.2934 3.2709-3.9213 5.857-7.2435 7.1283-1.9243 0.7101-3.9569 1.0938-6.0115 1.1348-2.6262 0.149-3.487 0.149-10.214 0.149zm-0.0935-44.56c-6.7265 0-7.425 0.0325-10.051 0.1489-1.5676 0.0205-3.12 0.3054-4.5898 0.8423-2.1704 0.818-3.8879 2.5025-4.7272 4.6367-0.5494 1.4633-0.8388 3.0089-0.8553 4.5689-0.1457 2.6244-0.1457 3.3123-0.1457 9.8909 0 6.5 0.0247 7.2881 0.1457 9.8962 0.0246 1.5443 0.3138 3.0734 0.8553 4.5229 0.8406 2.1328 2.5577 3.8161 4.7272 4.634 1.4688 0.5405 3.0219 0.8255 4.5898 0.8423 2.662 0.1517 3.3632 0.1517 10.051 0.1517 6.7458 0 7.4443-0.0325 10.048-0.1517 1.5686-0.0188 3.1222-0.3037 4.5925-0.8423 2.1573-0.825 3.8636-2.5044 4.7025-4.6285 0.5484-1.4646 0.8376-3.0109 0.8553-4.5717h0.0302c0.1183-2.5892 0.1183-3.2798 0.1183-9.8963 0-6.6164-0.0303-7.3125-0.1485-9.8989-0.0247-1.5425-0.3138-3.0699-0.8553-4.5175-0.837-2.1272-2.5435-3.8099-4.7025-4.6367-1.47-0.5396-3.0238-0.8246-4.5925-0.8423-2.6592-0.1489-3.355-0.1489-10.048-0.1489zm0.0935 32.598c-5.1425 0.0033-9.7806-3.0449-11.751-7.723-1.9705-4.678-0.8854-10.064 2.7494-13.647 3.6347-3.5828 9.1031-4.6562 13.855-2.7196 4.7517 1.9367 7.8508 6.5018 7.8519 11.566-0.0076 6.9092-5.6896 12.51-12.705 12.523zm0-20.654c-4.5563 0-8.25 3.6377-8.25 8.125s3.6937 8.125 8.25 8.125c4.5564 0 8.25-3.6377 8.25-8.125-0.0106-4.483-3.698-8.1146-8.25-8.125zm13.2-1.931c-1.6351-6e-3 -2.9565-1.3147-2.9535-2.925 0.0031-1.6103 1.3294-2.9142 2.9645-2.9142s2.9615 1.3039 2.9645 2.9142c8e-4 0.7769-0.3127 1.5221-0.871 2.071-0.5583 0.5488-1.3156 0.8561-2.1045 0.854z"
                  fill="#45378B"
                />
              </svg>

              {/* <Image
                src={instagram}
                layout="responsive"
                alt="social media alzubda instagram"
                onClick={() => {
                  new_tab(
                    'https://instagram.com/alzubdaapp?utm_medium=copy_link'
                  )
                }}
                priority
                width="35"
                height="35"
              /> */}
            </div>
            {/* twitter */}
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-10 lg:w-10 lg:hover:scale-110">
              <svg
                fill="#45378B"
                viewBox="0 0 65 65"
                xmlns="https://www.w3.org/2000/svg"
                onClick={() => {
                  new_tab('https://twitter.com/alzubdaapp')
                }}
              >
                <path
                  d="m54.153 18.114c2.4278-1.4514 4.2444-3.7369 5.1106-6.4296-2.2814 1.3536-4.7774 2.3072-7.3802 2.8194-3.6086-3.8173-9.3261-4.7463-13.958-2.2678-4.6315 2.4784-7.0305 7.7508-5.8565 12.871-9.3448-0.4692-18.051-4.8833-23.952-12.144-3.0798 5.3122-1.506 12.103 3.5967 15.519-1.8452-0.0593-3.6494-0.5589-5.2623-1.4571v0.1463c0.00107 5.5335 3.901 10.3 9.3248 11.397-1.7115 0.4657-3.5067 0.5342-5.2488 0.2004 1.5254 4.7322 5.8867 7.9742 10.858 8.0709-4.1171 3.2314-9.2016 4.9838-14.435 4.9752-0.92769 0.0013-1.8546-0.052-2.776-0.1598 5.3148 3.4153 11.501 5.228 17.818 5.2217 8.7892 0.0603 17.236-3.4047 23.451-9.62s9.6791-14.662 9.6181-23.452c0-0.5038-0.0118-1.0048-0.0352-1.5031 2.2762-1.6451 4.2407-3.683 5.8012-6.0179-2.1206 0.9399-4.37 1.557-6.6733 1.8308z"
                  fill="#45378B"
                />
              </svg>

              {/* <Image
                src={twiter}
                alt="social media alzubda twitter"
                onClick={() => {
                  new_tab('https://twitter.com/alzubdaapp')
                }}
                width="35"
                priority
                layout="responsive"
                height="35"
              /> */}
            </div>
            {/* facebook */}
            <div className="mx-auto mr-7 inline-block  h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-10 lg:w-10 lg:hover:scale-110">
              <svg
                fill="#45378B"
                viewBox="0 0 65 65"
                xmlns="https://www.w3.org/2000/svg"
                onClick={() => {
                  new_tab('https://www.facebook.com/alzubdaapp/')
                }}
              >
                <path
                  d="m5.4221 32.505c0.00315 13.323 9.6915 24.668 22.85 26.756v-18.928h-6.871v-7.8271h6.8792v-5.9583c-0.3076-2.8234 0.6568-5.6372 2.6315-7.6784 1.9747-2.0411 4.755-3.0981 7.587-2.8841 2.0327 0.0328 4.0603 0.2138 6.0667 0.5416v6.6598h-3.4234c-1.1785-0.1543-2.3634 0.2349-3.2208 1.0581s-1.2946 1.9912-1.1883 3.175v5.0863h7.5047l-1.1997 7.8298h-6.305v18.926c14.231-2.249 24.21-15.246 22.708-29.575s-13.959-24.974-28.347-24.223-25.669 12.635-25.672 27.042z"
                  fill="#45378B"
                />
              </svg>

              {/* <Image
                src={facebook}
                alt="social media alzubda facebook"
                onClick={() => {
                  new_tab('https://www.facebook.com/alzubdaapp/')
                }}
                priority
                layout="responsive"
                width="35"
                height="35"
              /> */}
            </div>
            {/* youtube */}
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer pt-0.5 md:h-8 md:w-8 lg:mr-10 lg:h-10 lg:w-10 lg:hover:scale-110">
              <svg
                fill="#45378B"
                viewBox="0 0 65 65"
                xmlns="https://www.w3.org/2000/svg"
                onClick={() => {
                  new_tab(
                    'https://www.youtube.com/channel/UC-0-lhAWZAg3MJcFgC-daVg'
                  )
                }}
              >
                <path
                  d="m32.516 51.491h-0.0541c-0.168 0-16.968-0.0325-21.206-1.1836-2.3307-0.6279-4.1509-2.4491-4.7775-4.7802-0.76218-4.2998-1.1302-8.6603-1.0996-13.027-0.01969-4.3739 0.35832-8.7405 1.1294-13.046 0.64379-2.3332 2.456-4.1629 4.7829-4.829 4.1221-1.0833 20.459-1.0833 21.152-1.0833h0.0569c0.1706 0 17.014 0.0325 21.209 1.1835 2.3259 0.6311 4.1424 2.4486 4.7721 4.7748 0.7865 4.3159 1.1556 8.6974 1.1023 13.084 0.019 4.3686-0.3599 8.7299-1.1321 13.03-0.6346 2.3282-2.456 4.1454-4.7856 4.7748-4.1167 1.0914-20.456 1.1023-21.149 1.1023zm-5.4166-27.102-0.0136 16.25 14.116-8.125-14.102-8.125z"
                  fill="#45378B"
                />
              </svg>

              {/* <Image
                src={youtube}
                alt="social media alzubda youtube"
                onClick={() => {
                  new_tab(
                    'https://www.youtube.com/channel/UC-0-lhAWZAg3MJcFgC-daVg'
                  )
                }}
                priority
                layout="responsive"
                width="35"
                height="35"
              /> */}
            </div>
            {/* linkedin */}
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-10 lg:w-10 lg:hover:scale-110">
              <svg
                fill="#45378B"
                viewBox="0 0 65 65"
                xmlns="https://www.w3.org/2000/svg"
                onClick={() => {
                  new_tab('https://www.linkedin.com/company/alzubda/')
                }}
              >
                <path
                  d="m35.208 56.875h-10.833v-32.5h10.833v5.4167c2.3092-2.9379 5.8111-4.6893 9.5469-4.7748 6.7183 0.0373 12.139 5.5043 12.12 12.223v19.635h-10.833v-18.281c-0.4333-3.0263-3.0286-5.2716-6.0857-5.2651-1.3371 0.0423-2.5993 0.6278-3.4952 1.6213-0.896 0.9936-1.3482 2.3093-1.2525 3.6438v18.281zm-16.25 0h-10.833v-32.5h10.833v32.5zm-5.4166-37.917c-2.9916 0-5.4167-2.4251-5.4167-5.4166 0-2.9916 2.4251-5.4167 5.4167-5.4167 2.9915 0 5.4166 2.4251 5.4166 5.4167 0 1.4366-0.5706 2.8143-1.5865 3.8301-1.0158 1.0159-2.3935 1.5865-3.8301 1.5865z"
                  fill="#45378B"
                />
              </svg>

              {/* <Image
                src={linkedin}
                alt="social media alzubda linkedin"
                onClick={() => {
                  new_tab('https://www.linkedin.com/company/alzubda/')
                }}
                priority
                layout="responsive"
                width="35"
                height="35"
              /> */}
            </div>
          </div>
        </div>
        <div className="mx-5 text-center text-sm ">
          <div className="mt-1 mr-5 py-5 text-center font-TSmedium text-sm lg:mr-10">
            Copyright &#169; {new Date().getFullYear()}{' '}
            <b className="px-1">|</b> Alzubda App
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(Footer)
