import React from 'react'

// component imports
import IntroSection from '../components/landingPage/IntroSection'
import SecondSection from '../components/landingPage/SecondSection'
import ThirdSection from '../components/landingPage/ThirdSection'
import FourthSection from '../components/landingPage/FourthSection'
import FifthSection from '../components/landingPage/FifthSection'
import ContactSection from '../components/landingPage/ContactSection'
// import TagManager from "react-gtm-module";

export default function home() {
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: "GTM-WSLC3QB" });
  // }, []);

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
