import Image from 'next/image'
import appleStore from '../../public/assest/images/apple-xhdpi.png'
import googlePlay from '../../public/assest/images/google-xhdpi.png'
import facebook from '../../public/assest/images/facebook.jpg'
import twiter from '../../public/assest/images/twitter.jpg'
import youtube from '../../public/assest/images/youtube.jpg'
import instagram from '../../public/assest/images/instagram.jpg'
import linkedin from '../../public/assest/images/linkedin.jpg'
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
                  loading="eager"
                  priority
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
                  loading="eager"
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
            {/* instagram */}
            <div className=" mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
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
              />
            </div>
            {/* twitter */}
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src={twiter}
                alt="social media alzubda twitter"
                onClick={() => {
                  new_tab('https://twitter.com/alzubdaapp')
                }}
                width="35"
                priority
                layout="responsive"
                height="35"
              />
            </div>
            {/* facebook */}
            <div className="mx-auto mr-7 inline-block  h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src={facebook}
                alt="social media alzubda facebook"
                onClick={() => {
                  new_tab('https://www.facebook.com/alzubdaapp/')
                }}
                priority
                layout="responsive"
                width="35"
                height="35"
              />
            </div>
            {/* youtube */}
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
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
              />
            </div>
            {/* linkedin */}
            <div className="mx-auto mr-7 inline-block h-7 w-7 cursor-pointer md:h-8 md:w-8 lg:mr-10 lg:h-9 lg:w-9 lg:hover:scale-110">
              <Image
                src={linkedin}
                alt="social media alzubda linkedin"
                onClick={() => {
                  new_tab('https://www.linkedin.com/company/alzubda/')
                }}
                priority
                layout="responsive"
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
