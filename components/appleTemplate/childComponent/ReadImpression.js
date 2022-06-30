import React from 'react'
import { useInView, InView } from 'react-cool-inview'
import axios from 'axios'

const ReadImpression = ({ user_id, stories }) => {
  const { observe, inView } = useInView({
    // Track the actual visibility of the target
    trackVisibility: false,
    unobserveOnEnter: true,
    // For performance perspective, use the largest tolerable value as much as possible // (ms)
    delay: 15000,
    // onEnter: () => {
    //   let url = `https://734slo1j48.execute-api.us-east-2.amazonaws.com/prod`
    //   let data = {
    //     body: {
    //       user: user_id,
    //       stories: stories,
    //     },
    //   }
    //   axios.post(url, data).then((res) => {
    //     // console.log(res)
    //     // console.log(data)
    //     // console.log('Read')
    //   })
    //   // console.log(Data)
    // },
  })
  return (
    <React.Fragment>
      <div ref={observe}></div>
    </React.Fragment>
  )
}

export default ReadImpression
