import React from 'react'
import Lottie from 'lottie-react'

import like_json from '../../../public/assest/emoji/like.json'
import angry_json from '../../../public/assest/emoji/angry.json'
import haha_json from '../../../public/assest/emoji/haha.json'
import sad_json from '../../../public/assest/emoji/sad.json'
import wow_json from '../../../public/assest/emoji/wow.json'
const MostEmoji = ({ lgBottom, bottom, left, lgLeft, reactions }) => {
  const handle_most_select_emoji = (reactions) => {
    let returned_array = []
    let returned_most_selected = ''

    if (reactions?.most_selected) {
      let arr = []
      reactions?.most_selected?.wow !== undefined &&
        arr.push(reactions?.most_selected?.wow)
      reactions?.most_selected?.like !== undefined &&
        arr.push(reactions?.most_selected?.like)
      reactions?.most_selected?.sad !== undefined &&
        arr.push(reactions?.most_selected?.sad)
      reactions?.most_selected?.angry !== undefined &&
        arr.push(reactions?.most_selected?.angry)
      reactions?.most_selected?.haha !== undefined &&
        arr.push(reactions?.most_selected?.haha)

      let most_selected_num = Math.max(...arr)

      returned_most_selected =
        most_selected_num === reactions?.most_selected?.wow
          ? 'wow'
          : returned_most_selected
      returned_most_selected =
        most_selected_num === reactions?.most_selected?.like
          ? 'like'
          : returned_most_selected
      returned_most_selected =
        most_selected_num === reactions?.most_selected?.sad
          ? 'sad'
          : returned_most_selected
      returned_most_selected =
        most_selected_num === reactions?.most_selected?.haha
          ? 'haha'
          : returned_most_selected
      returned_most_selected =
        most_selected_num === reactions?.most_selected?.angry
          ? 'angry'
          : returned_most_selected

      returned_array = [most_selected_num, returned_most_selected]
    } else {
    }
    return returned_array
  }
  bottom ? bottom : (bottom = 'bottom-0')
  lgBottom ? lgBottom : (lgBottom = 'lg:bottom-1')
  left ? left : (left = 'left-2')
  lgLeft ? lgLeft : (lgLeft = 'lg:left-1')
  return (
    <React.Fragment>
      <div
        className={`${bottom} absolute ${lgBottom} rounded-full ${left} ${lgLeft} shadow-2xl`}
        loading="eager"
      >
        {handle_most_select_emoji(reactions)[0] > 0 && (
          <div className="absolute left-0 bottom-6 w-8 rounded-full bg-white text-center font-TSExtra text-xs text-black shadow-2xl">
            {/* {Math.floor(Math.random() * 100)} */}
            {handle_most_select_emoji(reactions)[0]}
          </div>
        )}

        {/* <img
            src="./assest/sad.jpg"
            className="mx-auto h-5 w-5 rounded-full"
            alt="sad"
          /> */}
        {handle_most_select_emoji(reactions)[1] === 'wow' && (
          <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white shadow-2xl">
            <Lottie animationData={wow_json} loop={false} loading="eager" />
          </div>
        )}
        {handle_most_select_emoji(reactions)[1] === 'like' && (
          <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white shadow-2xl">
            <Lottie animationData={like_json} loop={false} loading="eager" />
          </div>
        )}
        {handle_most_select_emoji(reactions)[1] === 'haha' && (
          <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white shadow-2xl">
            <Lottie animationData={haha_json} loop={false} loading="eager" />
          </div>
        )}
        {handle_most_select_emoji(reactions)[1] === 'angry' && (
          <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white shadow-2xl">
            <Lottie animationData={angry_json} loop={false} loading="eager" />
          </div>
        )}
        {handle_most_select_emoji(reactions)[1] === 'sad' && (
          <div className="mx-auto flex h-8 w-8 cursor-pointer items-center rounded-full bg-white shadow-2xl">
            <Lottie animationData={sad_json} loop={false} loading="eager" />
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default MostEmoji
