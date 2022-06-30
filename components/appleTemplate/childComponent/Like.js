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

const Like = ({
  user_id,
  isLoved,
  story_id,
  bottom,
  reactions,
  userToken,
  lgBottom,
}) => {
  const [openLike, setOpenLike] = useState(false)
  const [myEmoji, setMyEmoji] = useState(reactions?.my_selected_emoji)
  const [openMyEmoji, setOpenMyEmoji] = reactions?.my_selected_emoji
    ? useState(true)
    : useState(false)

  const [like, setLike] = useState(isLoved)
  const [show, setShow] = useState(isLoved)

  const options = {
    animationData: like_json,
    loop: false,
  }

  console.log(reactions?.my_selected_emoji)

  const handle_open = () => {
    setOpenLike(!openLike)
  }
  // function to handle Love & Unlove
  const handleLike = (story_id, emojiSelect) => {
    setLike(!like)
    setShow(!show)
    setMyEmoji(`${emojiSelect}`)
    console.log(story_id)
    axios
      .put(
        `${BASE_URL}/v1/Users/Stories/${story_id}/Emoji`,
        { emoji: `${emojiSelect}` },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res)
        setOpenMyEmoji(!openMyEmoji)
        // console.log('OUTSIDE')
      })
    // let config = {
    //   method: 'PUT',
    //   baseURL: `${BASE_URL}`,
    //   url: `/v1/Web/Story/Love`,
    //   data: {
    //     userId: user_id,
    //     story: story_id,
    //     isLove: !isLoved,
    //   },
    // }
    // axios(config).then((res) => {
    //   console.log(res)
    // })
    setOpenLike(false)
  }
  bottom ? bottom : (bottom = 'bottom-3')
  lgBottom ? lgBottom : (lgBottom = 'lg:bottom-0')
  return (
    <React.Fragment>
      <div
        className={`${bottom} absolute right-1 rounded-full ${lgBottom}`}
        loading="eager"
      >
        {
          openMyEmoji ? (
            <React.Fragment>
              {myEmoji === 'haha' && (
                <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white">
                  {/* <Lottie
                    animationData={haha_json}
                    loop={false}
                    loading="eager"
                  /> */}
                  <img
                    src="./assest/haha.jpg"
                    className="mx-auto h-5 w-5 rounded-full"
                    alt="sad"
                  />
                </div>
              )}
              {myEmoji === 'like' && (
                <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white">
                  {/* <Lottie
                    animationData={like_json}
                    loop={false}
                    loading="eager"
                  /> */}
                  <img
                    src="./assest/like.jpg"
                    className="mx-auto h-5 w-5 rounded-full"
                    alt="sad"
                  />
                </div>
              )}
              {myEmoji === 'sad' && (
                <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white">
                  {/* <Lottie
                    animationData={sad_json}
                    loop={false}
                    loading="eager"
                  /> */}
                  <img
                    src="./assest/sad.jpg"
                    className="mx-auto h-5 w-5 rounded-full"
                    alt="sad"
                  />
                </div>
              )}
              {myEmoji === 'wow' && (
                <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white">
                  {/* <Lottie
                    animationData={wow_json}
                    loop={false}
                    loading="eager"
                  /> */}
                  <img
                    src="./assest/wow.jpg"
                    className="mx-auto h-5 w-5 rounded-full"
                    alt="sad"
                  />
                </div>
              )}
              {myEmoji === 'angry' && (
                <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white">
                  {/* <Lottie
                    animationData={angry_json}
                    loop={false}
                    loading="eager"
                  /> */}
                  <img
                    src="./assest/angry.jpg"
                    className="mx-auto h-5 w-5 rounded-full"
                    alt="sad"
                  />
                </div>
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <svg
                loading="eager"
                fill="none"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  handle_open()
                }}
                className={`${lgBottom} absolute right-1 bottom-0 m-0 h-10 w-10 cursor-pointer`}
              >
                <g filter="url(#a)">
                  <circle
                    cx="20"
                    cy="16"
                    r="15.5"
                    fill="#fff"
                    stroke="#E9E9F2"
                  />
                  <g clipPath="url(#b)" fill="#000">
                    <path d="m30.079 7.996h-2.0798v-2.0735c0-0.2435-0.0966-0.47703-0.2686-0.64921-0.172-0.17219-0.4052-0.26891-0.6484-0.26891s-0.4765 0.09672-0.6485 0.26891c-0.172 0.17218-0.2686 0.40571-0.2686 0.64921v2.0735h-2.0798c-0.2443 0-0.4787 0.09718-0.6515 0.27019-0.1728 0.173-0.2699 0.40765-0.2699 0.65232s0.0971 0.47932 0.2699 0.65232c0.1728 0.17301 0.4072 0.27022 0.6515 0.27022h2.0798v2.0734c0 0.2435 0.0966 0.4771 0.2686 0.6492 0.172 0.1722 0.4053 0.269 0.6485 0.269s0.4764-0.0968 0.6484-0.269c0.172-0.1721 0.2686-0.4057 0.2686-0.6492v-2.1086h2.0798c0.2443 0 0.4787-0.09718 0.6515-0.27019s0.2699-0.40766 0.2699-0.65232c0-0.24467-0.0971-0.47932-0.2699-0.65233-0.1728-0.173-0.4072-0.27021-0.6515-0.27021v0.03515z" />
                    <path d="m26.709 17.432 0.0088-0.123-0.0088 0.0263v0.0967z" />
                    <path d="m18.75 9.2612-0.1229 0.00879h0.0966l0.0263-0.00879z" />
                    <path d="m27.63 16.422c-0.2363 0.0019-0.4631 0.0937-0.6342 0.2569s-0.2738 0.3855-0.2872 0.6217v0.123c-0.0502 1.5441-0.551 3.0397-1.4407 4.302s-2.1292 2.236-3.5655 2.8009c-1.4363 0.5648-3.0064 0.696-4.5163 0.3774s-2.8935-1.0731-3.9799-2.1702c-1.0864-1.0972-1.8281-2.4889-2.1332-4.0034-0.3052-1.5144-0.1605-3.0852 0.416-4.5182 0.5766-1.4331 1.5598-2.6657 2.8283-3.5455 1.2684-0.87977 2.7665-1.3683 4.3091-1.4051h0.1229c0.2444 0 0.4787-0.09721 0.6515-0.27022s0.2699-0.40765 0.2699-0.65232-0.0971-0.47932-0.2699-0.65232c-0.1728-0.17301-0.4071-0.27019-0.6515-0.27019-1.9278 0.00874-3.81 0.58798-5.4099 1.6649-1.5999 1.0769-2.8461 2.6034-3.5818 4.3874-0.73571 1.7841-0.9281 3.7461-0.55302 5.6394 0.37509 1.8933 1.3009 3.6333 2.661 5.0011 1.3602 1.3679 3.0939 2.3026 4.9832 2.6866 1.8894 0.3839 3.8499 0.2001 5.6351-0.5286 1.7852-0.7286 3.3154-1.9694 4.3981-3.5664s1.6697-3.4789 1.687-5.409c-9e-4 -0.12-0.0264-0.2385-0.0748-0.3483s-0.1188-0.2085-0.2067-0.29c-0.088-0.0815-0.1917-0.1441-0.3048-0.1839s-0.2331-0.056-0.3527-0.0476z" />
                    <path d="m17.354 14.761c0 0.3757-0.1114 0.7429-0.32 1.0552-0.2087 0.3123-0.5053 0.5555-0.8521 0.6989-0.3469 0.1433-0.7285 0.1804-1.0964 0.1065-0.3679-0.074-0.7057-0.2556-0.9704-0.5219-0.2647-0.2662-0.4446-0.6052-0.5167-0.9739-0.0722-0.3687-0.0334-0.7506 0.1115-1.0972 0.1448-0.3466 0.3891-0.6424 0.7019-0.8499 0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4946 0.0491 0.7241 0.1446 0.2294 0.0955 0.4378 0.2354 0.6131 0.4118 0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1423 0.4768 0.1411 0.7256z" />
                    <path d="m23.892 14.761c0 0.3757-0.1114 0.7429-0.3201 1.0552s-0.5052 0.5555-0.8521 0.6989c-0.3468 0.1433-0.7284 0.1804-1.0963 0.1065-0.368-0.074-0.7057-0.2556-0.9704-0.5219-0.2648-0.2662-0.4446-0.6052-0.5168-0.9739-0.0721-0.3687-0.0333-0.7506 0.1115-1.0972s0.3891-0.6424 0.702-0.8499c0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4945 0.0491 0.724 0.1446s0.4379 0.2354 0.6132 0.4118c0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1422 0.4768 0.1411 0.7256z" />
                    <path d="m19.276 23.863h-0.939c-0.6057 0-1.2055-0.1196-1.765-0.352-0.5596-0.2323-1.0679-0.5729-1.4958-1.0022-0.4279-0.4292-0.7671-0.9387-0.9981-1.4994-0.231-0.5606-0.3493-1.1614-0.3482-1.7679 0-0.1701 0.0675-0.3332 0.1877-0.4535 0.1201-0.1202 0.283-0.1878 0.4529-0.1878h8.872c0.1707 0 0.3346 0.0673 0.4561 0.1873s0.191 0.2831 0.1933 0.454c0 1.2257-0.4863 2.4012-1.352 3.2679-0.8656 0.8667-2.0397 1.3536-3.2639 1.3536z" />
                  </g>
                </g>
                <defs>
                  <filter
                    id="a"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1222_1329"
                    />
                    <feBlend
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1222_1329"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="b">
                    <rect
                      transform="translate(9 5)"
                      width="22"
                      height="22"
                      fill="#ffffff"
                    />
                  </clipPath>
                </defs>
              </svg>
              {openLike && (
                <Fade>
                  <div
                    className="mb-2 flex rounded-full bg-white"
                    loading="eager"
                  >
                    <div
                      loading="eager"
                      className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white"
                      onClick={() => {
                        handleLike(story_id, 'like')
                      }}
                    >
                      {/* <Lottie
                        animationData={like_json}
                        loop={false}
                        loading="eager"
                      /> */}
                      <img
                        src="./assest/like.jpg"
                        className="mx-auto h-5 w-5 rounded-full"
                        alt="sad"
                      />
                    </div>
                    {/* <Fade delay={200}> */}
                    <div
                      className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white"
                      onClick={() => {
                        handleLike(story_id, 'angry')
                      }}
                    >
                      {/* <Lottie
                        animationData={angry_json}
                        loop={false}
                        loading="eager"
                      /> */}
                      <img
                        src="./assest/angry.jpg"
                        className="mx-auto h-5 w-5 rounded-full"
                        alt="sad"
                      />
                    </div>
                    {/* </Fade> */}
                    {/* <Fade delay={300}> */}
                    <div
                      className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white"
                      onClick={() => {
                        handleLike(story_id, 'haha')
                      }}
                    >
                      {/* <Lottie
                        animationData={haha_json}
                        loop={false}
                        loading="eager"
                      /> */}
                      <img
                        src="./assest/haha.jpg"
                        className="mx-auto h-5 w-5 rounded-full"
                        alt="sad"
                      />
                    </div>
                    {/* </Fade> */}
                    {/* <Fade delay={400}> */}
                    <div
                      className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white"
                      onClick={() => {
                        handleLike(story_id, 'wow')
                      }}
                    >
                      {/* <Lottie
                        animationData={wow_json}
                        loop={false}
                        loading="eager"
                      /> */}
                      <img
                        src="./assest/wow.jpg"
                        className="mx-auto h-5 w-5 rounded-full"
                        alt="sad"
                      />
                    </div>
                    {/* </Fade> */}
                    {/* <Fade delay={500}> */}
                    <div
                      className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white"
                      onClick={() => {
                        handleLike(story_id, 'sad')
                      }}
                    >
                      {/* <Lottie
                        animationData={sad_json}
                        loop={false}
                        loading="eager"
                      /> */}
                      <img
                        src="./assest/sad.jpg"
                        className="mx-auto h-5 w-5 rounded-full"
                        alt="sad"
                      />
                    </div>
                    {/* </Fade> */}
                  </div>
                </Fade>
              )}
            </React.Fragment>
          )

          // reactions?.my_selected_emoji
        }
      </div>
    </React.Fragment>
  )
}

export default Like
/*
 {like ? (
          <div className="flex">
            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                handleLike(story_id, isLoved)
              }}
            >
              <Lottie animationData={like_json} loop={false} />
            </div>
            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                handleLike(story_id, isLoved)
              }}
            >
              <Lottie animationData={angry_json} loop={false} />
            </div>
            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                handleLike(story_id, isLoved)
              }}
            >
              <Lottie animationData={haha_json} loop={false} />
            </div>
            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                handleLike(story_id, isLoved)
              }}
            >
              <Lottie animationData={wow_json} loop={false} />
            </div>
            <div
              className="h-8 w-8 cursor-pointer"
              onClick={() => {
                handleLike(story_id, isLoved)
              }}
            >
              <Lottie animationData={sad_json} loop={false} />
            </div>
          </div>
        ) : (
          <svg
            fill="none"
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              handleLike(story_id, isLoved)
            }}
            className=" m-0 h-7 w-7 cursor-pointer"
          >
            <g filter="url(#a)">
              <circle cx="20" cy="16" r="15.5" fill="#fff" stroke="#E9E9F2" />
              <g clipPath="url(#b)" fill="#000">
                <path d="m30.079 7.996h-2.0798v-2.0735c0-0.2435-0.0966-0.47703-0.2686-0.64921-0.172-0.17219-0.4052-0.26891-0.6484-0.26891s-0.4765 0.09672-0.6485 0.26891c-0.172 0.17218-0.2686 0.40571-0.2686 0.64921v2.0735h-2.0798c-0.2443 0-0.4787 0.09718-0.6515 0.27019-0.1728 0.173-0.2699 0.40765-0.2699 0.65232s0.0971 0.47932 0.2699 0.65232c0.1728 0.17301 0.4072 0.27022 0.6515 0.27022h2.0798v2.0734c0 0.2435 0.0966 0.4771 0.2686 0.6492 0.172 0.1722 0.4053 0.269 0.6485 0.269s0.4764-0.0968 0.6484-0.269c0.172-0.1721 0.2686-0.4057 0.2686-0.6492v-2.1086h2.0798c0.2443 0 0.4787-0.09718 0.6515-0.27019s0.2699-0.40766 0.2699-0.65232c0-0.24467-0.0971-0.47932-0.2699-0.65233-0.1728-0.173-0.4072-0.27021-0.6515-0.27021v0.03515z" />
                <path d="m26.709 17.432 0.0088-0.123-0.0088 0.0263v0.0967z" />
                <path d="m18.75 9.2612-0.1229 0.00879h0.0966l0.0263-0.00879z" />
                <path d="m27.63 16.422c-0.2363 0.0019-0.4631 0.0937-0.6342 0.2569s-0.2738 0.3855-0.2872 0.6217v0.123c-0.0502 1.5441-0.551 3.0397-1.4407 4.302s-2.1292 2.236-3.5655 2.8009c-1.4363 0.5648-3.0064 0.696-4.5163 0.3774s-2.8935-1.0731-3.9799-2.1702c-1.0864-1.0972-1.8281-2.4889-2.1332-4.0034-0.3052-1.5144-0.1605-3.0852 0.416-4.5182 0.5766-1.4331 1.5598-2.6657 2.8283-3.5455 1.2684-0.87977 2.7665-1.3683 4.3091-1.4051h0.1229c0.2444 0 0.4787-0.09721 0.6515-0.27022s0.2699-0.40765 0.2699-0.65232-0.0971-0.47932-0.2699-0.65232c-0.1728-0.17301-0.4071-0.27019-0.6515-0.27019-1.9278 0.00874-3.81 0.58798-5.4099 1.6649-1.5999 1.0769-2.8461 2.6034-3.5818 4.3874-0.73571 1.7841-0.9281 3.7461-0.55302 5.6394 0.37509 1.8933 1.3009 3.6333 2.661 5.0011 1.3602 1.3679 3.0939 2.3026 4.9832 2.6866 1.8894 0.3839 3.8499 0.2001 5.6351-0.5286 1.7852-0.7286 3.3154-1.9694 4.3981-3.5664s1.6697-3.4789 1.687-5.409c-9e-4 -0.12-0.0264-0.2385-0.0748-0.3483s-0.1188-0.2085-0.2067-0.29c-0.088-0.0815-0.1917-0.1441-0.3048-0.1839s-0.2331-0.056-0.3527-0.0476z" />
                <path d="m17.354 14.761c0 0.3757-0.1114 0.7429-0.32 1.0552-0.2087 0.3123-0.5053 0.5555-0.8521 0.6989-0.3469 0.1433-0.7285 0.1804-1.0964 0.1065-0.3679-0.074-0.7057-0.2556-0.9704-0.5219-0.2647-0.2662-0.4446-0.6052-0.5167-0.9739-0.0722-0.3687-0.0334-0.7506 0.1115-1.0972 0.1448-0.3466 0.3891-0.6424 0.7019-0.8499 0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4946 0.0491 0.7241 0.1446 0.2294 0.0955 0.4378 0.2354 0.6131 0.4118 0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1423 0.4768 0.1411 0.7256z" />
                <path d="m23.892 14.761c0 0.3757-0.1114 0.7429-0.3201 1.0552s-0.5052 0.5555-0.8521 0.6989c-0.3468 0.1433-0.7284 0.1804-1.0963 0.1065-0.368-0.074-0.7057-0.2556-0.9704-0.5219-0.2648-0.2662-0.4446-0.6052-0.5168-0.9739-0.0721-0.3687-0.0333-0.7506 0.1115-1.0972s0.3891-0.6424 0.702-0.8499c0.3129-0.2074 0.6802-0.3172 1.0555-0.3155 0.2485 0 0.4945 0.0491 0.724 0.1446s0.4379 0.2354 0.6132 0.4118c0.1753 0.1763 0.3141 0.3856 0.4084 0.6158s0.1422 0.4768 0.1411 0.7256z" />
                <path d="m19.276 23.863h-0.939c-0.6057 0-1.2055-0.1196-1.765-0.352-0.5596-0.2323-1.0679-0.5729-1.4958-1.0022-0.4279-0.4292-0.7671-0.9387-0.9981-1.4994-0.231-0.5606-0.3493-1.1614-0.3482-1.7679 0-0.1701 0.0675-0.3332 0.1877-0.4535 0.1201-0.1202 0.283-0.1878 0.4529-0.1878h8.872c0.1707 0 0.3346 0.0673 0.4561 0.1873s0.191 0.2831 0.1933 0.454c0 1.2257-0.4863 2.4012-1.352 3.2679-0.8656 0.8667-2.0397 1.3536-3.2639 1.3536z" />
              </g>
            </g>
            <defs>
              <filter
                id="a"
                x="0"
                y="0"
                width="40"
                height="40"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1222_1329"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1222_1329"
                  result="shape"
                />
              </filter>
              <clipPath id="b">
                <rect
                  transform="translate(9 5)"
                  width="22"
                  height="22"
                  fill="#fff"
                />
              </clipPath>
            </defs>
          </svg>
        )}
*/
