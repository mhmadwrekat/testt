import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BASE_URL } from '../config/config'
import { ThemeProvider } from 'next-themes'
import cookieCutter from 'cookie-cutter'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  //
  // function to handle the user auth.
  const register_user = async () => {
    try {
      let device_id = cookieCutter.get('device_id')
        ? cookieCutter.get('device_id')
        : uuidv4()

      axios
        .post(`${BASE_URL}/v1/Users/`, {
          device_id: device_id,
          device_model_type: '2022',
          device_operating_system: 'web',
          current_version_app: '1.0.0',
          device_type: 'WEB',
        })
        .then(function (response) {
          // cookieCutter.set('device_id', device_id)
          cookieCutter.set('user_token', response.data.data.user_token)
          cookieCutter.set('user_id', response.data.data._id)
        })
        .catch(function (error) {
          console.log(error)
        })
    } catch (err) {
      console.log(err)
    }
  }

  function get_country_code() {
    fetch('https://geolocation-db.com/json/')
      .then((response) => response.json())
      .then((data) => {
        cookieCutter.set('country_code', data.country_code)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    register_user()
    get_country_code()
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
