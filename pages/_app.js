import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BASE_URL } from '../config/config'
//import * as gtag from '../lib/gtag'
// Themes
import { ThemeProvider } from 'next-themes'

//import {TagManager} from 'react-gtm-module';
//function MyApp({ Component, pageProps }) {
// return <Component {...pageProps} />;
//}

//export default MyApp;

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  // function to handle the user auth.
  const register_user = async () => {
    try {
      let device_id = null

      if ('device_id' in localStorage) {
        device_id = localStorage.getItem('device_id')
      } else {
        device_id = uuidv4()
      }
      //       https://api.alzubda.com/v1/Web/Sections?

      // current_country=JO&

      // userId=5e4ee6b352561e16596649fc
      axios
        .post(`${BASE_URL}/v1/Users/`, {
          device_id: device_id,
          device_model_type: '2022',
          device_operating_system: 'web',
          current_version_app: '1.0.0',
          device_type: 'WEB',
        })
        .then(function (response) {
          localStorage.setItem('device_id', device_id)
          localStorage.setItem('user_token', response.data.data.user_token)
          localStorage.setItem('user_id', response.data.data._id)
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  }

  //Myne : G-CC35HDRGKD
  //'GTM-WSLC3QB'
  const [userId, setUserId] = useState()
  useEffect(() => {
    register_user()
    setUserId(localStorage.getItem('user_id'))
    // console.log(user_id)
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      TagManager.initialize({ gtmId: 'GTM-WSLC3QB' })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  // const send_user = async () => {
  //   try {
  //     //       https://api.alzubda.com/v1/Web/Sections?

  //     // current_country=JO&

  //     // userId=5e4ee6b352561e16596649fc
  //     let url = `${BASE_URL}/v1/Web/Sections?`
  //     console.log(url)

  //     axios
  //       .post(url, {
  //         current_country: 'JO',
  //         userId: user_id,
  //       })
  //       .catch(function (error) {
  //         console.log(error)
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  // send_user()
  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} userId={userId} />
    </ThemeProvider>
  )
}
export default App

/*
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
//import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BASE_URL } from '../config/config'

//import {TagManager} from 'react-gtm-module';
//function MyApp({ Component, pageProps }) {
// return <Component {...pageProps} />;
//}

//export default MyApp;

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  // function to handle the user auth.
  const register_user = async () => {
    try {
      let device_id = null

      if ('device_id' in localStorage) {
        device_id = localStorage.getItem('device_id')
      } else {
        device_id = uuidv4()
      }

      axios
        .post(`${BASE_URL}/v1/Users/`, {
          device_id: device_id,
          device_model_type: '2022',
          device_operating_system: 'web',
          current_version_app: '1.0.0',
          device_type: 'WEB',
        })
        .then(function (response) {
          localStorage.setItem('device_id', device_id)
          localStorage.setItem('user_token', response.data.data.user_token)
          localStorage.setItem('user_id', response.data.data._id)
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  }
  //Myne : G-CC35HDRGKD
  //'GTM-WSLC3QB'

  useEffect(() => {
    register_user()
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      TagManager.initialize({ gtmId: 'GTM-WSLC3QB' })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}
export default App
*/
