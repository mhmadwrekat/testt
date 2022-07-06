import React from 'react'
import { useInView, InView } from 'react-cool-inview'
import axios from 'axios'
const VIEW = process.env.NEXT_PUBLIC_VIEWS_URL

const ViewImpression = ({ user_id, stories }) => {
  const { observe, inView } = useInView({
    // Track the actual visibility of the target
    trackVisibility: false,
    unobserveOnEnter: true,
    // For performance perspective, use the largest tolerable value as much as possible // (ms)
    delay: 500,
    onEnter: () => {
      let url = `https://${VIEW}`
      let data = {
        body: {
          user: user_id,
          stories: stories,
        },
      }
      axios.post(url, data).then((res) => {
        // console.log(res)
        // console.log(data)
        // console.log('Vieww')
      })
      // console.log(Data)
    },
    // onLeave: () => {console.log('None')},
  })
  return (
    <React.Fragment>
      <div ref={observe}></div>
    </React.Fragment>
  )
}

export default ViewImpression
