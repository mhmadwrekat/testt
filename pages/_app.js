import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BASE_URL } from '../config/config'
// import { ThemeProvider } from 'next-themes'
// import gtag from '../lib/gtag'
import Script from 'next/script'
const ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // function to handle the user auth.
  // Function Get User Info From LocalStorage else From API
  const register_user = async () => {
    try {
      let device_id = null
      if ('device_id' in localStorage && 'user_id' in localStorage) {
        // console.log('Not Get User ID')
        device_id = localStorage.getItem('device_id')
      } else {
        device_id = uuidv4()
        axios
          .post(`${BASE_URL}/v1/Users/`, {
            device_id: device_id,
            device_model_type: '2022',
            device_operating_system: 'web',
            current_version_app: '1.0.0',
            device_type: 'WEB',
          })
          .then(function (response) {
            // console.log('Get User Id')
            localStorage.setItem('device_id', device_id)
            localStorage.setItem('user_token', response.data.data.user_token)
            localStorage.setItem('user_id', response.data.data._id)
          })
          .catch(function (error) {
            // console.log(error)
          })
      }
    } catch (err) {
      // console.log(err)
    }
  }
  // Function Get Country Code From LocalStorage else From API
  const get_country = async () => {
    // getCookie('country_code')
    localStorage.getItem('country_code')
      ? null
      : axios.get('https://geolocation-db.com/json/').then((res) => {
          // console.log('Get Country Code')
          // setCookies('country_code', res.data.country_code)
          localStorage.setItem('country_code', res.data.country_code)
          // setCountryCode(res.data.country_code)
        })
  }

  useEffect(() => {
    register_user()
    get_country()
  }, [])
  // useEffect(() => {
  //   // register_user()
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url)
  //     TagManager.initialize({ gtmId: 'GTM-WSLC3QB' })
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <React.Fragment>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS}`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ANALYTICS}');
        `}
      </Script>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
export default MyApp
/*
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BASE_URL } from '../config/config'
import { ThemeProvider } from 'next-themes'
import gtag from '../lib/gtag'
const App = ({ Component, pageProps }) => {
  const router = useRouter()
  // function to handle the user auth.
  // Function Get User Info From LocalStorage else From API
  const register_user = async () => {
    try {
      let device_id = null
      if ('device_id' in localStorage && 'user_id' in localStorage) {
        // console.log('Not Get User ID')
        device_id = localStorage.getItem('device_id')
      } else {
        device_id = uuidv4()
        axios
          .post(`${BASE_URL}/v1/Users/`, {
            device_id: device_id,
            device_model_type: '2022',
            device_operating_system: 'web',
            current_version_app: '1.0.0',
            device_type: 'WEB',
          })
          .then(function (response) {
            // console.log('Get User Id')
            localStorage.setItem('device_id', device_id)
            localStorage.setItem('user_token', response.data.data.user_token)
            localStorage.setItem('user_id', response.data.data._id)
          })
          .catch(function (error) {
            // console.log(error)
          })
      }
    } catch (err) {
      // console.log(err)
    }
  }
  // function returned() {
  //   if (typeof window !== 'undefined') {
  //     return localStorage?.getItem('country_code')
  //   }
  // }

  // useEffect(() => {
  //   // register_user()
  //   // get_country_code()
  //   returned()
  // }, [])

  useEffect(() => {
    // register_user()
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      TagManager.initialize({ gtmId: 'GTM-WSLC3QB' })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
© 2022 GitHub, Inc.
Terms

*/
/*
  // Function Get User Info From LocalStorage else From API
  const register_user = async () => {
    try {
      let device_id = null
      if ('device_id' in localStorage && 'user_id' in localStorage) {
        // console.log('Not Get User ID')
        device_id = localStorage.getItem('device_id')
        setUserId(localStorage.getItem('user_id'))
      } else {
        device_id = uuidv4()
        axios
          .post(`${BASE_URL}/v1/Users/`, {
            device_id: device_id,
            device_model_type: '2022',
            device_operating_system: 'web',
            current_version_app: '1.0.0',
            device_type: 'WEB',
          })
          .then(function (response) {
            // console.log('Get User Id')
            localStorage.setItem('device_id', device_id)
            localStorage.setItem('user_token', response.data.data.user_token)
            localStorage.setItem('user_id', response.data.data._id)
            setUserId(response.data.data._id)
          })
          .catch(function (error) {
            // console.log(error)
          })
      }
    } catch (err) {
      // console.log(err)
    }
  }
*/
