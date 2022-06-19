import React from 'react'
import { Menu } from '@headlessui/react'
import Image from 'next/image'
import facebook from '../../../public/assest/images/facebook.jpg'
import twiter from '../../../public/assest/images/twitter.jpg'
import watsapp from '../../../public/assest/images/youtube.jpg'
import { Fade } from 'react-awesome-reveal'

const Test = ({ title_color, category, story, fill }) => {
  // console.log(url)
  // console.log(handle_news_url(category, story))
  const copyy = (category, story) => {
    let ready_category = ''
    let ready_title = ''
    if (category.includes('%')) {
      let title = category.replace(/\s+/g, '_')
      // console.log(`/${title.replace('%', '_')}`)
      ready_category = `${title.replace('%', '_')}`
    } else if (category.includes(' ')) {
      let title = category.replace(/\s+/g, '_')
      ready_category = `${title.replace(' ', '_')}`
    } else {
      ready_category = category
    }
    if (story.includes('%')) {
      let title = story.replace(/\s+/g, '_')
      // console.log(`/${title.replace('%', '_')}`)
      ready_title = `${title.replace('%', '_')}`
    } else if (story.includes(' ')) {
      let title = story.replace(/\s+/g, '_')
      ready_title = `${title.replace(' ', '_')}`
    } else {
      ready_title = story
    }
    if (story.includes('?')) {
      let title = story.replace(/\s+/g, '')
      ready_title = `${title.replace('?', '_')}`
    }

    let ready_url = `https://alzubda.com/${ready_title}/${ready_category}`
    // console.log(ready_url)
    navigator.clipboard.writeText(ready_url)
  }

  /*
  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" class="w-5 h-5 mr-4 text-blue-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg>

  */
  console.log(fill)
  return (
    <React.Fragment>
      <div className="relative">
        {/* <div
          className="absolute top-44 z-50 flex w-44 items-center justify-center rounded-full bg-Purp100 px-3 py-1 text-center text-sm font-bold text-white"
          role="alert"
        >
          <p className="font-TSbold">تم النسخ</p>
        </div> */}
        <Menu as="div" className="inline-block text-left">
          <Menu.Button aria-expanded="false">
            {/* <div className="flex justify-between"> */}
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`${fill} h-8 w-8 rounded-full`}
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
            </svg>

            {/* </div> */}
            {/* <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              // fill="#FFFFFF"
              className="stroke-current		 h-8 w-8 rounded-full bg-GRAY400"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
            </svg> */}
          </Menu.Button>
          <Menu.Items>
            <section className="absolute bottom-1 left-10 w-32 lg:left-12">
              <section className="text-black flex w-48 rounded p-1 text-center font-TSbold text-xs lg:w-56 ">
                <Menu.Item>
                  {({ active }) => (
                    <Fade delay={400}>
                      <img
                        src=" https://cdn-icons-png.flaticon.com/512/7304/7304848.png "
                        className="ml-1.5 h-6 cursor-pointer rounded-full lg:h-7"
                        alt="social media alzubda copy link"
                        onClick={() => {
                          copyy(category, story)
                        }}
                      />
                    </Fade>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Fade delay={300}>
                      <img
                        src="./assest/images/twitter.jpg"
                        className="ml-1.5 h-6 rounded-full lg:h-7"
                        alt="social media alzubda twitter"
                      />
                    </Fade>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Fade delay={200}>
                      <img
                        src="./assest/images/whatsapp.WebP"
                        className="ml-1.5 h-6 rounded-full lg:h-7"
                        alt="social media alzubda whatsapp"
                      />
                    </Fade>
                  )}
                  {/* https://cdn-icons-png.flaticon.com/512/7304/7304848.png */}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Fade delay={100}>
                      <img
                        src="./assest/images/facebook.jpg"
                        className="h-6 rounded-full lg:h-7"
                        alt="social media alzubda facebook"
                      />
                    </Fade>
                  )}
                </Menu.Item>
                {/* <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`cursor-pointer border-b-1 border-GRAY200 pt-2 text-GRAY400 ${
                        active && `${title_color}`
                      }`}
                      href=""
                    >
                      مشاركه
                    </p>
                  )}
                </Menu.Item> */}
                {/* <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`mt-1 cursor-pointer text-GRAY400 hover:${title_color} ${
                        active && `${title_color}`
                      }`}
                    >
                      مشاركة
                    </p>
                  )}
                </Menu.Item> */}
                {/* <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`mt-1 cursor-pointer text-GRAY400  ${
                        active && `${title_color}`
                      }`}
                      href=""
                    >
                      أبلاغ
                    </p>
                  )}
                </Menu.Item> */}
              </section>
            </section>
          </Menu.Items>
        </Menu>
      </div>
    </React.Fragment>
  )
}

export default Test
