import React, { useState } from 'react'
import { BASE_URL } from '../../../config/config'
import axios from 'axios'

const LikeAudio = ({ user_id, isLoved, story_id }) => {
  const [like, setLike] = useState(isLoved)

  // function to handle Love & Unlove
  const handleLike = (story_id, isLoved) => {
    setLike(!like)
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
      // console.log(res)
    })
  }
  return (
    <React.Fragment>
      {/* {user_id && console.log('0', user_id, ' 0 ', isLoved)} */}
      <div className="absolute bottom-0 right-1 rounded-full bg-white p-1 lg:bottom-1">
        {like ? (
          <img
            src="./assest/like-animation.gif"
            className=" h-5 w-5 cursor-pointer"
            alt="Like | Love"
            onClick={() => {
              handleLike(story_id, isLoved)
            }}
          />
        ) : (
          // <svg
          //   xmlns="./assest/like-animation.gif"
          //   className=" h-5 w-5 cursor-pointer"
          //   fill="#FF0000"
          //   viewBox="0 0 24 24"
          //   stroke="#FF0000"
          //   strokeWidth="2"
          //   onClick={() => {
          //     handleLike(story_id, isLoved)
          //   }}
          // >
          //   <path
          //     strokeLinecap="round"
          //     strokeLinejoin="round"
          //     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          //   />
          // </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-5 w-5 cursor-pointer opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            onClick={() => {
              handleLike(story_id, isLoved)
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        )}
      </div>
    </React.Fragment>
  )
}

export default LikeAudio
