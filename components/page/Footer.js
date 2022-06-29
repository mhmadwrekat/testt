import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const new_tab = (url) => {
    window.open(url, '_blank')
  }
  return (
    <React.Fragment>
      <div className="pt-6" loading="lazy">
        <footer className="pb-2">
          <div className=" mx-auto bg-Purp100 py-5 text-white">
            <p className="text-md my-3 mr-1 text-center font-TSbold">
              إستخدم التطبيق لتجربة أفضل
            </p>
            <div className="mx-auto block flex w-full justify-center">
              <div className="relative inline-block w-32 cursor-pointer ">
                <Image
                  src="/../public/assest/images/apple-xhdpi.png"
                  alt="apple Store"
                  layout="fixed"
                  width="130"
                  priority
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
                  src="/../public/assest/images/google-xhdpi.png"
                  alt="google Play"
                  layout="responsive"
                  width="130"
                  priority
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
            <div className=" mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src="/../public/assest/images/instagram.jpg"
                alt="social media alzubda instagram"
                onClick={() => {
                  new_tab(
                    'https://instagram.com/alzubdaapp?utm_medium=copy_link'
                  )
                }}
                layout="responsive"
                priority
                width="35"
                height="35"
              />
            </div>
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src="/../public/assest/images/twitter.jpg"
                alt="social media alzubda twitter"
                onClick={() => {
                  new_tab('https://twitter.com/alzubdaapp')
                }}
                priority
                layout="responsive"
                width="35"
                height="35"
              />
            </div>
            <div className="mx-auto mr-7 inline-block  h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src="/../public/assest/images/facebook.jpg"
                alt="social media alzubda facebook"
                onClick={() => {
                  new_tab('https://www.facebook.com/alzubdaapp/')
                }}
                priority
                width="35"
                layout="responsive"
                height="35"
              />
            </div>
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src="/../public/assest/images/youtube.jpg"
                layout="responsive"
                alt="social media alzubda youtube"
                onClick={() => {
                  new_tab(
                    'https://www.youtube.com/channel/UC-0-lhAWZAg3MJcFgC-daVg'
                  )
                }}
                priority
                width="35"
                height="35"
              />
            </div>
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src="/../public/assest/images/linkedin.jpg"
                alt="social media alzubda linkedin"
                onClick={() => {
                  new_tab('https://www.linkedin.com/company/alzubda/')
                }}
                layout="responsive"
                priority
                width="35"
                height="35"
              />
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

export default Footer
