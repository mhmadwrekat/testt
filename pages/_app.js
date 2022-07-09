import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { BASE_URL } from '../config/config'
function MyApp({ Component, pageProps }) {
  const [country_code, setCountryCode] = useState()
  const [user_id, setUserId] = useState()
  const [userToken, setUserToken] = useState()

  // Function Get User Info From LocalStorage else From API
  const register_user = async () => {
    try {
      let device_id = null
      if ('device_id' in localStorage && 'user_id' in localStorage) {
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
            localStorage.setItem('device_id', device_id)
            localStorage.setItem('user_token', response.data.data.user_token)
            localStorage.setItem('user_id', response.data.data._id)
            setUserId(response.data.data._id)
          })
          .catch(function (error) {})
      }
    } catch (err) {}
  }
  // Function Get Country Code From LocalStorage else From API
  const get_country = async () => {
    localStorage.getItem('country_code')
      ? setCountryCode(localStorage.getItem('country_code'))
      : axios.get('https://geolocation-db.com/json/').then((res) => {
          localStorage.setItem('country_code', res.data.country_code)
          setCountryCode(res.data.country_code)
        })
  }

  useEffect(() => {
    register_user()
    get_country()
    typeof window !== 'undefined'
      ? setUserId(localStorage.getItem('user_id'))
      : ''
    typeof window !== 'undefined'
      ? setUserToken(localStorage.getItem('user_token'))
      : ''
  }, [])

  return (
    <React.Fragment>
      {/* <Script
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
      </Script> */}
      {/* <Script>
        {`!function(){var analytics=window.analytics=window.analytics||[]
  if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.")
  else{analytics.invoked=!0
    analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"]
    analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments)
      t.unshift(e)
      analytics.push(t)
      return analytics}}
      for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e]
        analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script")
        t.type="text/javascript"
        t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js"
        var n=document.getElementsByTagName("script")[0]
        n.parentNode.insertBefore(t,n)
        analytics._loadOptions=e}
        analytics._writeKey="${SEGMENT}"
        analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("${SEGMENT}");
  analytics.page();
  }}()`}
      </Script> */}
      <Component
        {...pageProps}
        country_code={country_code}
        user_id={user_id}
        userToken={userToken}
      />
    </React.Fragment>
  )
}
export default React.memo(MyApp)
