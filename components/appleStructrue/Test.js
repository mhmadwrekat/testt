// // import Styles from '../../styles/Audio.css'
// import React, { useState, useRef, useEffect } from 'react'

// const Test = ({ important_news }) => {
//   const [isPlaying, setisPlaying] = useState(false)
//   const [duration, setDuration] = useState(0)
//   const [currentTime, setCurrentTime] = useState(0)

//   const audioPlayer = useRef()
//   const progressBar = useRef()
//   const animationRef = useRef()

//   useEffect(() => {
//     const seconds = Math.floor(audioPlayer.current.duration)
//     setDuration(seconds)
//     progressBar.current.max = seconds
//   }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

//   const playPause = () => {
//     setisPlaying(!isPlaying)
//     if (!isPlaying) {
//       audioPlayer.current.play()
//       animationRef.current = requestAnimationFrame(whilePlaying)
//     } else {
//       audioPlayer.current.pause()
//       cancelAnimationFrame(animationRef.current)
//     }
//   }
//   const whilePlaying = () => {
//     progressBar.current.value = audioPlayer.current.currentTime
//     setCurrentTime(progressBar.current.value)
//     animationRef.current = requestAnimationFrame(whilePlaying)
//   }
//   const changeRange = () => {
//     audioPlayer.current.currentTime = progressBar.current.value
//     setCurrentTime(progressBar.current.value)
//   }

//   const calculateTime = (seco) => {
//     const minutes = Math.floor(seco / 60)
//     const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
//     const seconds = Math.floor(seco % 60)
//     const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
//     return `${returnMinutes}:${returnSeconds}`
//   }

//   return (
//     <React.Fragment>
//       {important_news.data.map((item) => {
//         console.log(Object.values(item.voices)[1])
//         return (
//           <>
//             <section>
//               <audio
//                 hidden="true"
//                 ref={audioPlayer}
//                 preload="metadata"
//                 controlsList="nodownload noplaybackrate "
//                 loading="lazy"
//                 controls
//                 className=" mx-auto w-40 rounded-2xl font-TSbold text-xs lg:right-4
//                             lg:w-52 lg:text-base"
//                 src={Object.values(item.voices)[1]}
//               ></audio>

//               <button onClick={playPause}>
//                 {isPlaying ? (
//                   <img
//                     src="https://png.vector.me/files/images/6/7/678557/windows_media_player_pause_button_preview"
//                     className="  right-6 h-11 w-11"
//                   />
//                 ) : (
//                   <img
//                     src="https://png.vector.me/files/images/6/7/678531/windows_media_player_play_button_updated_preview"
//                     className="  right-6 h-11 w-11"
//                   />
//                 )}
//               </button>
//               <div>{calculateTime(currentTime)}</div>
//               <div>
//                 <input
//                   onChange={changeRange}
//                   type="range"
//                   defaultValue="0"
//                   ref={progressBar}
//                 ></input>
//               </div>
//               <div>
//                 {duration && !isNaN(duration) && calculateTime(duration)}
//               </div>
//             </section>
//           </>
//         )
//       })}
//     </React.Fragment>
//   )
// }

// export default Test
