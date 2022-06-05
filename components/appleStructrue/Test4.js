import React, { useState } from 'react'
// import './styles.css'

import Waveform from './Test2'
import PlayList from './Test3'

// const url = 'https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3'

//https://testin-bucket2021.s3.us-east-2.amazonaws.com/filevdnsnvibad.mp3

const tracks = [
  {
    id: 0,
    title: 'Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b',
    url: 'https://testin-bucket2021.s3.us-east-2.amazonaws.com/filevdnsnvibad.mp3',
  },
  {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url: 'https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3',
  },
]

export default function App({ important_news }) {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0])

  const track = []

  important_news.data.map((item) => {
    track.push(Object.values(item.voices)[1])
  })
  console.log(track)
  return (
    <div className="App">
      <Waveform url={selectedTrack.url} />
      <PlayList
        tracks={tracks}
        selectedTrack={selectedTrack}
        setSelectedTrack={setSelectedTrack}
      />
      <br />
      <p>Wavesurfer.js with React.JS</p>
    </div>
  )
}
