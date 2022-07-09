import React, { useEffect } from 'react'
// component imports
import IntroSection from '../components/landingPage/IntroSection'
import SecondSection from '../components/landingPage/SecondSection'
import ThirdSection from '../components/landingPage/ThirdSection'
import FourthSection from '../components/landingPage/FourthSection'
import FifthSection from '../components/landingPage/FifthSection'
import ContactSection from '../components/landingPage/ContactSection'

export default function home() {
  // useEffect(() => {
  //   analytics.page('Landing Page', {
  //     title: 'Landing Page',
  //     url: 'https://alzubda.com/home',
  //   })
  // }, [])

  return (
    <React.Fragment>
      <IntroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <ContactSection />
    </React.Fragment>
  )
}
