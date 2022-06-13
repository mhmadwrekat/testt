import React from 'react'
import { useInView, InView } from 'react-cool-inview'
import axios from 'axios'

const Read = ({ user_id, stories }) => {
  const { observe, inView } = useInView({
    // Track the actual visibility of the target
    trackVisibility: false,
    unobserveOnEnter: true,
    // For performance perspective, use the largest tolerable value as much as possible // (ms)
    delay: 500,

    onLeave: () => {
      // Triggered when the target is visible and leaves the viewport
      // console.log('RRRRRRRRRRRRR  ')
    },
    // onLeave: () => {console.log('None')},
  })
  return (
    <React.Fragment>
      <div ref={observe}></div>
    </React.Fragment>
  )
}

export default Read
