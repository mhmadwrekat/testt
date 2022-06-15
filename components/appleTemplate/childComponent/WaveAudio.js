import React, { useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'

const WaveAudio = ({ url }) => {
  const formWaveSurferOptions = (ref) => ({
    container: ref,
    waveColor: '#eeeeee',
    progressColor: '#E0A719',
    cursorColor: '#FFFFFF',
    barWidth: 4,
    barRadius: 4,
    responsive: true,
    height: 50,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: true,
  })
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)
  const [playing, setPlay] = useState(false)

  // create new WaveSurfer instance

  useEffect(() => {
    const options = formWaveSurferOptions(waveformRef.current)
    wavesurfer.current = WaveSurfer.create(options)
    wavesurfer.current.load(url)
    // const options = formWaveSurferOptions(waveformRef.current)
    // wavesurfer.current = WaveSurfer.create(options)
    // wavesurfer.current.load(url)
    // wavesurfer.current.pause(url)
    // wavesurfer.current.on('ready', function () {
    //   // https://wavesurfer-js.org/docs/methods.html
    //   // wavesurfer.current.play();
    //   // setPlay(true);
    //   // make sure object stillavailable when file loaded
    //   // if (wavesurfer.current) {
    //   //   wavesurfer.current.setVolume(volume)
    //   //   setVolume(volume)
    //   // }
    // })
    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    // return () => wavesurfer.current.destroy()
  }, [])
  // On component mount and when url changes
  // const get_voice = async () => {
  //   const options = formWaveSurferOptions(waveformRef.current)
  //   wavesurfer.current = WaveSurfer.create(options)
  //   wavesurfer.current.load(url)
  //   wavesurfer.current.on('ready', function () {
  //     wavesurfer.current.play()
  //   })
  // }
  const handlePlay = () => {
    // get_voice()
    // wavesurfer.current.load(url) && playi()
    wavesurfer.current.playPause()
    setPlay(!playing)
  }
  const handlePause = () => {
    // wavesurfer.current.load(url) && playi()
    wavesurfer.current.destroy()
    setPlay(!playing)
  }

  return (
    <React.Fragment>
      {/* <iframe src="https://cross-origin.com/myvideo.html" allow="autoplay" /> */}

      <div className="w-12/12 mx-auto grid lg:w-10/12">
        <section className="flex pl-0 pr-1 lg:pl-5 lg:pr-0">
          <div
            id="waveform"
            className=" mx-auto w-60 lg:w-44"
            ref={waveformRef}
          />
          <div className="controls w-12/12 flex">
            <input
              hidden={true}
              type="range"
              id="volume"
              name="volume"
              // waveSurfer recognize value of `0` same as `1`
              //  so we need to set some zero-ish value for silence
              min="0.01"
              max="1"
              step=".025"
              // onChange={onVolumeChange}
            />
            {/* <label htmlFor="volume">Volume</label> */}
          </div>
          {/* <button> */}
          {!playing ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 lg:h-14 lg:w-14"
              fill="#E0A719"
              viewBox="0 0 20 20"
              onClick={() => {
                handlePlay()
              }}
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 lg:h-14 lg:w-14"
              viewBox="0 0 20 20"
              fill="#E0A719"
              onClick={() => {
                handlePlay()
              }}
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            //    <svg
            //    xmlns="http://www.w3.org/2000/svg"
            //    className="h-12 w-12 lg:h-14 lg:w-14"
            //    viewBox="0 0 20 20"
            //    fill="#E0A719"
            //    onClick={() => {
            //      handlePause()
            //    }}
            //  >
            //    <path
            //      fillRule="evenodd"
            //      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
            //      clipRule="evenodd"
            //    />
            //  </svg>
          )}
          {/* </button> */}
        </section>
      </div>
    </React.Fragment>
  )
}

export default WaveAudio
{
  /* <svg
xmlns="http://www.w3.org/2000/svg"
className="h-12 w-12 lg:h-14 lg:w-14"
fill="#E0A719"
viewBox="0 0 20 20"

>
<path
  fillRule="evenodd"
  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
  clipRule="evenodd"
/>
</svg> */
}
