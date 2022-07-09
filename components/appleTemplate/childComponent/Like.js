import React, { useState } from 'react'
import { BASE_URL } from '../../../config/config'
import axios from 'axios'
// import Lottie from 'lottie-react'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'
// import like_json from '../../../public/assest/emoji/like.json'
// import angry_json from '../../../public/assest/emoji/angry.json'
// import haha_json from '../../../public/assest/emoji/haha.json'
// import sad_json from '../../../public/assest/emoji/sad.json'
// import wow_json from '../../../public/assest/emoji/wow.json'

const Like = ({
  user_id,
  isLoved,
  story_id,
  bottom,
  reactions,
  userToken,
  lgBottom,
  lgRight,
  right,
}) => {
  const [openLike, setOpenLike] = useState(false)
  const [changeLike, setChangeLike] = useState(false)
  const [myEmoji, setMyEmoji] = useState(reactions?.my_selected_emoji)
  const [openMyEmoji, setOpenMyEmoji] = reactions?.my_selected_emoji
    ? useState(true)
    : useState(false)

  const [like, setLike] = useState(isLoved)
  const [show, setShow] = useState(isLoved)

  // console.log(reactions?.my_selected_emoji)

  const handle_open = () => {
    setOpenLike(!openLike)
    analytics.track('add_reaction', [null], [null], [null])
  }
  const handle_change = () => {
    setChangeLike(!changeLike)
  }
  // function to handle Love & Unlove
  const handleLike = (story_id, emojiSelect) => {
    setLike(!like)
    setShow(!show)
    setMyEmoji(`${emojiSelect}`)
    // console.log(story_id)
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
        // console.log(res)
        // console.log('OUTSIDE')
      })
    setOpenMyEmoji(true)
    setChangeLike(false)
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
  }
  bottom ? bottom : (bottom = 'bottom-0')
  lgBottom ? lgBottom : (lgBottom = 'lg:bottom-1')
  right ? right : (right = 'right-3')
  lgRight ? lgRight : (lgRight = 'lg:right-0.5')
  return (
    <React.Fragment>
      <div
        className={`${bottom} ${lgRight} absolute ${right} rounded-full ${lgBottom}`}
        loading="eager"
      >
        {
          openMyEmoji ? (
            <React.Fragment>
              <div className="mb-1 flex rounded-full bg-white lg:mb-1.5 lg:mr-1.5">
                {myEmoji === 'haha' && (
                  <div
                    className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                    onClick={() => {
                      handle_change()
                    }}
                  >
                    {/* <Lottie
                    animationData={haha_json}
                    loop={false}
                    loading="eager"
                  /> */}
                    <Image
                      src="/assest/haha.svg"
                      alt="sad emoji"
                      layout="fixed"
                      width="25"
                      height="25"
                    />
                  </div>
                )}
                {myEmoji === 'like' && (
                  <div
                    className=" mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                    onClick={() => {
                      handle_change()
                    }}
                  >
                    {/* <Lottie
                    animationData={like_json}
                    loop={false}
                    loading="eager"
                  /> */}
                    <Image
                      src="/assest/like.svg"
                      alt="sad emoji"
                      layout="fixed"
                      width="25"
                      height="25"
                    />
                  </div>
                )}
                {myEmoji === 'sad' && (
                  <div
                    className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                    onClick={() => {
                      handle_change()
                    }}
                  >
                    {/* <Lottie
                    animationData={sad_json}
                    loop={false}
                    loading="eager"
                  /> */}
                    <Image
                      src="/assest/sad.svg"
                      alt="sad emoji"
                      layout="fixed"
                      width="25"
                      height="25"
                    />
                    {/* <img
                      src="./assest/sad.svg"
                      className="mx-auto h-5 w-5 rounded-full lg:h-6 lg:w-6"
                      alt="sad emoji"
                    /> */}
                  </div>
                )}
                {myEmoji === 'wow' && (
                  <div
                    className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                    onClick={() => {
                      handle_change()
                    }}
                  >
                    {/* <Lottie
                    animationData={wow_json}
                    loop={false}
                    loading="eager"
                  /> */}
                    <Image
                      src="/assest/wow.svg"
                      alt="sad emoji"
                      layout="fixed"
                      width="25"
                      height="25"
                    />
                  </div>
                )}
                {myEmoji === 'angry' && (
                  <div
                    className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                    onClick={() => {
                      handle_change()
                    }}
                  >
                    {/* <Lottie
                    animationData={angry_json}
                    loop={false}
                    loading="eager"
                  /> */}
                    <Image
                      src="/assest/angry.svg"
                      alt="sad emoji"
                      layout="fixed"
                      width="25"
                      height="25"
                    />
                  </div>
                )}
                {changeLike && (
                  <Fade>
                    <div
                      className="z-50 mb-0 flex rounded-full lg:mb-1"
                      loading="eager"
                    >
                      <div
                        loading="eager"
                        className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                        onClick={() => {
                          handleLike(story_id, 'like')
                        }}
                      >
                        {/* <Lottie
                        animationData={like_json}
                        loop={false}
                        loading="eager"
                      /> */}
                        {/* <img
                          src="./assest/like.svg"
                          className="mx-auto h-5 w-5 rounded-full "
                          alt="like emoji"
                        /> */}
                        <Image
                          src="/assest/like.svg"
                          alt="sad emoji"
                          layout="fixed"
                          width="25"
                          height="25"
                        />
                      </div>
                      <Fade delay={200}>
                        <div
                          className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                          onClick={() => {
                            handleLike(story_id, 'angry')
                          }}
                        >
                          {/* <Lottie
                        animationData={angry_json}
                        loop={false}
                        loading="eager"
                      /> */}
                          {/* <img
                            src="./assest/angry.svg"
                            className="mx-auto h-5 w-5 rounded-full"
                            alt="angry emoji"
                          /> */}
                          <Image
                            src="/assest/angry.svg"
                            alt="sad emoji"
                            layout="fixed"
                            width="25"
                            height="25"
                          />
                        </div>
                      </Fade>
                      <Fade delay={300}>
                        <div
                          className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                          onClick={() => {
                            handleLike(story_id, 'haha')
                          }}
                        >
                          {/* <Lottie
                        animationData={haha_json}
                        loop={false}
                        loading="eager"
                      /> */}
                          {/* <img
                            src="./assest/haha.svg"
                            className="mx-auto h-5 w-5 rounded-full"
                            alt="haha emoji"
                          /> */}
                          <Image
                            src="/assest/haha.svg"
                            alt="sad emoji"
                            layout="fixed"
                            width="25"
                            height="25"
                          />
                        </div>
                      </Fade>
                      <Fade delay={400}>
                        <div
                          className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                          onClick={() => {
                            handleLike(story_id, 'wow')
                          }}
                        >
                          {/* <Lottie
                        animationData={wow_json}
                        loop={false}
                        loading="eager"
                      /> */}
                          {/* <img
                            src="./assest/wow.svg"
                            className="mx-auto h-5 w-5 rounded-full"
                            alt="wow emoji"
                          /> */}
                          <Image
                            src="/assest/wow.svg"
                            alt="sad emoji"
                            layout="fixed"
                            width="25"
                            height="25"
                          />
                        </div>
                      </Fade>
                      <Fade delay={500}>
                        <div
                          className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                          onClick={() => {
                            handleLike(story_id, 'sad')
                          }}
                        >
                          {/* <Lottie
                        animationData={sad_json}
                        loop={false}
                        loading="eager"
                      /> */}
                          {/* <img
                            src="./assest/sad.svg"
                            className="mx-auto h-5 w-5 rounded-full"
                            alt="sad emoji"
                          /> */}
                          <Image
                            src="/assest/sad.svg"
                            alt="sad emoji"
                            layout="fixed"
                            width="25"
                            height="25"
                          />
                        </div>
                      </Fade>
                    </div>
                  </Fade>
                )}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div
                className={`${lgBottom} absolute -right-1 rounded-full ${lgRight} -bottom-1 m-0 h-10 w-10 cursor-pointer`}
              >
                <Image
                  src="/assest/reaction.jpg"
                  alt="sad emoji"
                  layout="fixed"
                  width="28"
                  className={` cursor-pointer rounded-full`}
                  height="28"
                  onClick={() => {
                    handle_open()
                  }}
                />
              </div>

              {openLike && (
                <Fade>
                  <div
                    className="z-50 mb-9 flex rounded-full bg-white lg:mb-2"
                    loading="eager"
                  >
                    <div
                      loading="eager"
                      className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                      onClick={() => {
                        handleLike(story_id, 'like')
                      }}
                    >
                      {/* <Lottie
                        animationData={like_json}
                        loop={false}
                        loading="eager"
                      /> */}
                      <Image
                        src="/assest/like.svg"
                        alt="sad emoji"
                        layout="fixed"
                        width="25"
                        height="25"
                      />
                      {/* <img
                        src="./assest/like.svg"
                        className="mx-auto h-5 w-5 rounded-full"
                        alt="like emoji"
                      /> */}
                    </div>
                    <Fade delay={200}>
                      <div
                        className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                        onClick={() => {
                          handleLike(story_id, 'angry')
                        }}
                      >
                        {/* <Lottie
                        animationData={angry_json}
                        loop={false}
                        loading="eager"
                      /> */}
                        {/* <img
                          src="./assest/angry.svg"
                          className="mx-auto h-5 w-5 rounded-full"
                          alt="angry emoji"
                        /> */}
                        <Image
                          src="/assest/angry.svg"
                          alt="sad emoji"
                          layout="fixed"
                          width="25"
                          height="25"
                        />
                      </div>
                    </Fade>
                    <Fade delay={300}>
                      <div
                        className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                        onClick={() => {
                          handleLike(story_id, 'haha')
                        }}
                      >
                        {/* <Lottie
                        animationData={haha_json}
                        loop={false}
                        loading="eager"
                      /> */}
                        {/* <img
                          src="./assest/haha.svg"
                          className="mx-auto h-5 w-5 rounded-full"
                          alt="haha emoji"
                        /> */}
                        <Image
                          src="/assest/haha.svg"
                          alt="sad emoji"
                          layout="fixed"
                          width="25"
                          height="25"
                        />
                      </div>
                    </Fade>
                    <Fade delay={400}>
                      <div
                        className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                        onClick={() => {
                          handleLike(story_id, 'wow')
                        }}
                      >
                        {/* <Lottie
                        animationData={wow_json}
                        loop={false}
                        loading="eager"
                      /> */}
                        {/* <img
                          src="./assest/wow.svg"
                          className="mx-auto h-5 w-5 rounded-full"
                          alt="wow emoji"
                        /> */}
                        <Image
                          src="/assest/wow.svg"
                          alt="sad emoji"
                          layout="fixed"
                          width="25"
                          height="25"
                        />
                      </div>
                    </Fade>
                    <Fade delay={500}>
                      <div
                        className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white p-1"
                        onClick={() => {
                          handleLike(story_id, 'sad')
                        }}
                      >
                        {/* <Lottie
                        animationData={sad_json}
                        loop={false}
                        loading="eager"
                      /> */}
                        {/* <img
                          src="./assest/sad.svg"
                          className="mx-auto h-5 w-5 rounded-full"
                          alt="sad emoji"
                        /> */}
                        <Image
                          src="/assest/sad.svg"
                          alt="sad emoji"
                          layout="fixed"
                          width="25"
                          height="25"
                        />
                      </div>
                    </Fade>
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

export default React.memo(Like)
