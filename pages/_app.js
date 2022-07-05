import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { NextSeo } from 'next-seo'
import { BASE_URL } from '../config/config'
import Script from 'next/script'
const ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

function MyApp({ Component, pageProps }) {
  const headDescription = `
  يقدم تطبيق الزبدة الإخباري عصارة الأخبار، يختار لك باقة من أحدث وأفضل الأخبار عالميا وخليجيا وعربيا، في عدد كلمات لا يتجاوز 60 كلمة، بشكل مبتكر بهدف إحداث ثورة في مجال الخدمات الإخبارية اليومية، حتى نصبح المنصة الإخبارية الرائدة بالشرق الأوسط وشمال إفريقيا.

  يعتمد تطبيق الزبدة في رصد أخبار على المصادر الأولية، نقدمها لك في قالب إخباري موضوعي دون تحيز أو رأي شخصي. فقط نرصد لك المعلومة، ويطلع عليها المستخدم بسهولة وكفاءة حسب تفضيلاته، حتى نضمن لك تقديم صورة شاملة ومثالية لمتابعي الأخبار بأي شكل تفضله.

  بُنِيَتْ فكرة «الزبدة» الأساسية على استخلاص أي محتوى خبري مهما كان نوعه أو حجمه في 60 كلمة أو أقل، دون إخلال، وبكل شفافية وموضوعية، مع توثيقه بنسبة 100%، عبر البحث في آلاف المصادر الأكثر أهمية وشيوعا، والوصول للمصدر رقم صفر للخبر. كل ذلك على يد فريق من المحترفين في كل الخطوات.

  وبذلك يحل تطبيق «الزبدة» بديلا جيدا للمهتمين بالخدمات الإخبارية من جميع أنحاء العالم، عن مطالعة آلاف الصفحات يوميا.

  في لمح البصر، احصل على آخر الأخبار المفضلة لك في 60 كلمة، فقط تحتاج لـ5 ثوان لقراءة الخبر، ليس ذلك فقط بل تأخذ المعلومة الصحيحة من مصدرها الموثوق، المصدر رقم صفر.

  مميزات تطبيق الزبدة:

  ◉ اقرأ ملخصات لجميع الأخبار
  من خلال التنقل بين الأخبار، يمكنك قراءة الخبر من مصدره الرئيسي بـ60 كلمة أو أقل. وعند سحب الشاشة إلى اليسار، تستطيع قراءة الخبر بالكامل من المصدر الرسمي.

  ◉ الفئات الإخبارية
  مجموعة متنوعة من الفئات الإخبارية بين يديك. نرصد لك الخبر من جميع أنحاء العالم، وننقله بكل شفافية لك بعد التأكد من صحة المعلومة من مصدره الأساسي، سواء سياسيا أو اقتصاديا أو اجتماعيا أو ثقافيا. كل هذا في 60 كلمة.

  ◉ اختيار المصادر ومواضيع الأخبار
  يمكنك اختيار المواضيع الإخبارية التي تهمك في أي وقت. وأيضا المصادر التي ترغب بقراءة الأخبار منها. أنت تتحكم في كل شيء.

  ◉ المفضلة
  إمكانية حفظ الخبر لتطلع عليه في أي وقت.

  ◉ الأخبار المهمة
  جولة سريعة على أهم وأفضل الأخبار حول العالم في دقائق معدودة.

  ◉ مشاركة الأخبار
  بلمسة واحدة يمكنك مشاركة الأخبار المهمة مع أصدقائك أو عبر منصات التواصل الاجتماعي لإخبارهم بحدث مهم وطرحه للنقاش على العلن.

  ◉ الوضع الليلي
  إمكانية تفعيل خاصية الوضع الليلي أثناء قراءة الأخبار مساءً لراحة أكثر لك.

  وفّر وقتك معنا، وابق على اطلاع دائم بما يحدث حول العالم من مصادرها الأولية، المصدر صفر.

  حمّل التطبيق الآن لقراءة الأخبار بطريقة جديدة وعصرية.

  للتواصل معنا:
  media@alzubda.com
  `
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

  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  const workerRef = useRef()
  useEffect(() => {
    workerRef.current = new Worker(
      new URL('../public/OneSignalSDKWorker.js', import.meta.url)
    )
    workerRef.current.onmessage = (evt) =>
      alert(`WebWorker Response => ${evt.data}`)
    return () => {
      workerRef.current.terminate()
    }
  }, [])

  const handleWork = useCallback(async () => {
    workerRef.current.postMessage(100000)
  }, [])

  useEffect(() => {
    navigator.serviceWorker.getRegistrations()
    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
      OneSignal.init({
        appId: "270f0280-bc60-44f1-b09c-9bb8db7641eb",
        safari_web_id: "web.onesignal.auto.3437296f-1581-4c9c-99a7-ef947df2b18c",
        notifyButton: {
          enable: true,
        },
      });
    });
    return () => {
      window.OneSignal = undefined
    }
  }, []) // <-- run this effect once on mount
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */
  /********************************************** */

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
export default MyApp
