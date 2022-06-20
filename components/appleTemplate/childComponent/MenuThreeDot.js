import React, { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import facebook from '../../../public/assest/images/facebook.jpg'
import twiter from '../../../public/assest/images/twitter.jpg'
import watsapp from '../../../public/assest/images/youtube.jpg'
import { Fade } from 'react-awesome-reveal'
import { BASE_URL } from '../../../config/config'
import axios from 'axios'
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share'
import Swal from 'sweetalert2'

/*
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
*/
const Test = ({ title_color, category, story, fill, story_id, user_id }) => {
  const [share_link, setShareLink] = useState('')

  user_id && console.log('User --> ', user_id)
  story_id && console.log('Story --> ', story_id)
  const [open_item, setOpenItem] = useState(false)
  /*
              
  */
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  const copyy = (category, story) => {
    setOpenItem(!open_item)
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
    setShareLink(ready_url)
  }

  const copy_clip = () => {
    Toast.fire({
      icon: 'success',
      title: 'تم نسخ الرابط بنجاح',
    })
    navigator.clipboard.writeText(share_link)
  }
  /*
 let url = `https://sjffdhemsj.execute-api.us-east-2.amazonaws.com/prod`
    //   let data = {
    //     body: {
    //       user: user_id,
    //       stories: stories,
    //     },
    //   }
    //   axios.post(url, data).then((res) => {
    //     // console.log(data)
    //     // console.log(res)
    //     // console.log(data)
    //     // console.log('Vieww')
    //   })
    //   // console.log(Data)



    {
    “user”: “5e500d8b52561e16596649fe”,
    “stories”: [
      “5e4e7a8f52561e16596649f8"
    ],
    “source_type”:“default”
  }
  */
  const share_api = () => {
    let url = `https://d1i218h7fe.execute-api.us-east-2.amazonaws.com/production/`
    let data = {
      user: '62aee7e4467dcb73be8438b0',
      stories: ['62afae8f4a9866d5b5767a72'],
      source_type: 'default',
    }

    let axiosConfig = {
      headers: {
        'x-api-key': 'RMLn73bLqH6OOPZOxX6RL8dJc8ET6NfAaIIV1ztm',
      },
    }
    axios.post(url, data, axiosConfig).then((res) => {
      // console.log(data)
      console.log(res)
      // console.log(data)
      // console.log('Vieww')
    })
    // console.log(Data)

    // const ss = axios({
    //   method: 'GET',
    //   url: `${BASE_URL}/v1/Web/Loqaimat`,
    //   headers: {
    //     "x-api-key": `RMLn73bLqH6OOPZOxX6RL8dJc8ET6NfAaIIV1ztm`,
    //   },
    // })
    // const loqaimat = await ss
    console.log('Called')
  }
  return (
    <React.Fragment>
      <div className="relative pb-1">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`${fill} h-7 w-7 cursor-pointer rounded-full `}
          onClick={() => {
            copyy(category, story)
          }}
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
        </svg>
        {open_item ? (
          <>
            <div className="absolute top-0 left-12 w-32 border-0 lg:left-12">
              <div
                className="text-black flex w-48 border-0 pb-1 text-center font-TSbold text-xs lg:w-56"
                onClick={() => {
                  setOpenItem(!open_item)
                }}
              >
                <Fade delay={400}>
                  <div
                    className="ml-1.5 rounded-full"
                    onClick={() => {
                      copy_clip()
                    }}
                  >
                    <Image
                      src="http://cdn.onlinewebfonts.com/svg/img_211187.png"
                      alt="copy link"
                      width={30}
                      height={30}
                      className="cursor-pointer rounded-full"
                      onClick={() => {
                        share_api()
                      }}
                    />
                  </div>
                </Fade>
                <Fade delay={300}>
                  <TwitterShareButton
                    url={`/${share_link}`}
                    title={
                      '\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n'
                    }
                  >
                    <TwitterIcon
                      size={30}
                      round
                      className="ml-1.5"
                      onClick={() => {
                        share_api()
                      }}
                    />
                  </TwitterShareButton>
                </Fade>
                <Fade delay={200}>
                  <WhatsappShareButton
                    url={`${share_link}`}
                    title={
                      '\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n'
                    }
                  >
                    <WhatsappIcon
                      size={30}
                      round
                      className="ml-1.5"
                      onClick={() => {
                        share_api()
                      }}
                    />
                  </WhatsappShareButton>
                </Fade>
                {/* https://cdn-icons-png.flaticon.com/512/7304/7304848.png */}
                <Fade delay={100}>
                  <FacebookShareButton
                    url={`${share_link}`}
                    quote={
                      '\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n'
                    }
                    hashtag={'#الزبدة'}
                  >
                    <FacebookIcon
                      size={30}
                      round
                      className="ml-1.5"
                      onClick={() => {
                        share_api()
                      }}
                    />
                  </FacebookShareButton>
                </Fade>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </React.Fragment>
  )
}

export default Test
/*
        <Menu as="div" className="border-0 text-left	">
          {({ open }) => (
            <>
              <Menu.Button>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${fill} h-7 w-7 cursor-pointer rounded-full `}
                  onClick={() => {
                    copyy(category, story)
                  }}
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
                </svg>
              </Menu.Button>

              <Menu.Items>
                <div className="absolute top-0 left-12 w-32 border-0 lg:left-12">
                  <div className="text-black flex w-48 border-0 pb-1 text-center font-TSbold text-xs lg:w-56">
                    <Menu.Item>
                      {({ active }) => (
                        <Fade delay={400}>
                          <div
                            className="ml-1.5 rounded-full"
                            onClick={() => {
                              copy_clip()
                            }}
                          >
                            <Image
                              src="http://cdn.onlinewebfonts.com/svg/img_211187.png"
                              alt="copy link"
                              width={30}
                              height={30}
                              className="cursor-pointer rounded-full "
                            />
                          </div>
                        </Fade>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Fade delay={300}>
                          <TwitterShareButton
                            url={`/${share_link}`}
                            title={
                              '\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n'
                            }
                          >
                            <TwitterIcon size={30} round className="ml-1.5" />
                          </TwitterShareButton>
                        </Fade>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Fade delay={200}>
                          <WhatsappShareButton
                            url={`${share_link}`}
                            title={
                              '\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n'
                            }
                          >
                            <WhatsappIcon size={30} round className="ml-1.5" />
                          </WhatsappShareButton>
                        </Fade>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Fade delay={100}>
                          <FacebookShareButton
                            url={`${share_link}`}
                            quote={
                              '\nوفر وقتك. حمل تطبيق الزبدة الإخباري، لقراءة الأخبار في 60 كلمة من مصادرها الأصلية.\n'
                            }
                            hashtag={'#الزبدة'}
                          >
                            <FacebookIcon size={30} round className="ml-1.5" />
                          </FacebookShareButton>
                        </Fade>
                      )}
                    </Menu.Item>
                 
                  </div>
                </div>
              </Menu.Items>
            </>
          )}
        </Menu>
*/
