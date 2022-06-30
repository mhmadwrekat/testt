import React, { useState } from 'react'
import { BASE_URL } from '../../../config/config'
import axios from 'axios'
import Lottie from 'lottie-react'
import { Fade } from 'react-awesome-reveal'

import like_json from '../../../public/assest/emoji/like.json'
import angry_json from '../../../public/assest/emoji/angry.json'
import haha_json from '../../../public/assest/emoji/haha.json'
import sad_json from '../../../public/assest/emoji/sad.json'
import wow_json from '../../../public/assest/emoji/wow.json'
const MostEmoji = ({ user_id, isLoved, story_id, bottom, reactions }) => {
  const [openLike, setOpenLike] = useState(false)

  const [like, setLike] = useState(isLoved)
  const [show, setShow] = useState(isLoved)

  const options = {
    animationData: like_json,
    loop: false,
  }

  const handle_open = () => {
    setOpenLike(!openLike)
  }
  // function to handle Love & Unlove
  const handleLike = (story_id, isLoved) => {
    setLike(!like)
    setShow(!show)
    let config = {
      method: 'PUT',
      baseURL: `${BASE_URL}`,
      url: `/v1/Web/Story/Love`,
      data: {
        userId: user_id,
        story: story_id,
        isLove: !isLoved,
      },
    }
    axios(config).then((res) => {
      console.log(res)
    })
    setOpenLike(false)
  }
  bottom ? bottom : (bottom = 'bottom-2')

  return (
    <React.Fragment>
      <div
        className={`${bottom} absolute left-2 rounded-full lg:bottom-1`}
        loading="eager"
      >
        <div className="absolute left-0 bottom-6 w-8 rounded-full bg-white text-center font-TSExtra text-xs text-black">
          {Math.floor(Math.random() * 100)}
        </div>
        <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white">
          <img
            src="./assest/sad.jpg"
            className="mx-auto h-5 w-5 rounded-full"
            alt="sad"
          />
          {/* <Lottie animationData={sad_json} loop={false} loading="eager" /> */}
        </div>
      </div>
    </React.Fragment>
  )
}

export default MostEmoji
