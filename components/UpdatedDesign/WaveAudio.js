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
    height: 100,
    // If true, normalize by the maximum peak instead of 1.0.
    normalize: true,
    // Use the PeakCache to improve rendering speed of large waveforms.
    partialRender: true,
  })
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)
  const [playing, setPlay] = useState(false)
  const [volume, setVolume] = useState(0.5)

  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false)

    const options = formWaveSurferOptions(waveformRef.current)
    wavesurfer.current = WaveSurfer.create(options)

    wavesurfer.current.load(url)

    wavesurfer.current.on('ready', function () {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume)
        setVolume(volume)
      }
    })

    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy()
  }, [url])

  const handlePlayPause = () => {
    setPlay(!playing)
    wavesurfer.current.playPause()
  }

  const onVolumeChange = (e) => {
    const { target } = e
    const newVolume = +target.value

    if (newVolume) {
      setVolume(newVolume)
      wavesurfer.current.setVolume(newVolume || 1)
    }
  }
  return (
    <React.Fragment>
      <div className="mx-auto grid w-10/12">
        <section className="flex pl-0 pr-4 lg:pl-5 lg:pr-0">
          <div id="waveform" className=" w-56 lg:w-44" ref={waveformRef} />
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
              onChange={onVolumeChange}
              defaultValue={volume}
            />
            {/* <label htmlFor="volume">Volume</label> */}
          </div>
          <button onClick={handlePlayPause}>
            {!playing ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 lg:h-14 lg:w-14"
                fill="#E0A719"
                viewBox="0 0 20 20"
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
                fill="#E0A719"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            )}
          </button>
        </section>
      </div>
    </React.Fragment>
  )
}

export default WaveAudio
