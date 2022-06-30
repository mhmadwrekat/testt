import React, { useState } from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import axios from 'axios'
const x_key = process.env.NEXT_PUBLIC_X_API_KEY
const x_key_event = process.env.NEXT_PUBLIC_X_API_KEY_EVENT
import copyImage from '../../../public/assest/images/share.png'

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'next-share'
import Swal from 'sweetalert2'

const Test = ({
  title_color,
  category,
  story,
  fill,
  story_id,
  user_id,
  id,
}) => {
  const [share_link, setShareLink] = useState('')
  // console.log(x_key)
  const [open_item, setOpenItem] = useState(false)

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

  const share_event = () => {
    let data = {
      user: user_id,
      stories: [story_id],
      source_type: 'default',
    }
    const config = {
      headers: {
        'x-api-key': x_key,
      },
    }
    axios
      .post(
        `https://d1i218h7fe.execute-api.us-east-2.amazonaws.com/production/`,
        data,
        config
      )
      .then((res) => {
        // console.log(res)
        // console.log('OUTSIDE')
      })
  }
  const share_button = (story) => {
    setOpenItem(!open_item)
    share_event()
    let ready_title = ''
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

    let ready_url = `https://alzubda.com/${ready_title}`
    setShareLink(ready_url)
  }

  const copy_clip = () => {
    Toast.fire({
      icon: 'success',
      title: 'تم نسخ الرابط بنجاح',
    })
    navigator.clipboard.writeText(share_link)
  }
  const share_api = () => {
    let data = {
      user: user_id,
      stories: [story_id],
      source_type: 'default',
    }
    const config = {
      headers: {
        'x-api-key': x_key_event,
      },
    }
    axios
      .post(
        `https://b0l6mu9l13.execute-api.us-east-2.amazonaws.com/production/`,
        data,
        config
      )
      .then((res) => {
        // console.log(res)
        // console.log('INSIDE')
      })
  }
  return (
    <React.Fragment>
      <div className="relative pb-1">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 cursor-pointer rounded-full `}
          fill="#686767"
          onClick={() => {
            share_button(story)
          }}
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 15.889v-2.223s-3.78-.114-7 3.333c1.513-6.587 7-7.778 7-7.778v-2.221l5 4.425-5 4.464z" />
        </svg>
        {open_item ? (
          <>
            <div className="absolute top-0 left-9 w-32 border-0 lg:left-9">
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
                      src={copyImage}
                      alt="copy link"
                      width={28}
                      layout="fixed"
                      height={28}
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
                      size={28}
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
                      size={28}
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
                      size={28}
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
