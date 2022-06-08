import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BASE_URL } from '../config/config'
import { ThemeProvider } from 'next-themes'
import gtag from '../lib/gtag'
import Cookies from 'cookies'
import { getCookies, getCookie, setCookies, removeCookies } from 'cookies-next'

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
          setCookies('device_id', device_id)
          setCookies('user_token', response.data.data.user_token)
          setCookies('user_id', response.data.data._id)
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  }

  function returned() {
    if (typeof window !== 'undefined') {
      return localStorage?.getItem('country_code')
    }
  }

  useEffect(() => {
    register_user()
    // get_country_code()
    returned()
  }, [])

  useEffect(() => {
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
      <Component {...pageProps} coun={returned()} />
    </ThemeProvider>
  )
}
export default App
