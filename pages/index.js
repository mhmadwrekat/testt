// Library imports
import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { BASE_URL } from '../config/config'
import axios from 'axios'

// Apple View component
const CategoryNews = dynamic(() =>
  import('../components/appleTemplate/CategoryNews')
)
const ImportantNews = dynamic(() =>
  import('../components/appleTemplate/ImportantNews')
)
const ArroundYou = dynamic(() =>
  import('../components/appleTemplate/ArroundYou')
)
const Colored = dynamic(() => import('../components/appleTemplate/Colored'))
const Video = dynamic(() => import('../components/appleTemplate/Video'))
const Voice = dynamic(() => import('../components/appleTemplate/Voice'), {
  ssr: false,
})
const Logaimat = dynamic(() => import('../components/appleTemplate/Logaimat'))

// page Component
const HeadComp = dynamic(() => import('../components/page/HeadComp'))
const Nav = dynamic(() => import('../components/page/Nav'))
const Footer = dynamic(() => import('../components/page/Footer'))
const IndexSkeleton = dynamic(() =>
  import('../components/Skeletons/IndexSkeleton')
)
const CategorySkeleton = dynamic(() =>
  import('../components/Skeletons/CategorySkeleton')
)
// Get Server Side Function
export async function getServerSideProps({ req, res }) {
  // Cache the content of this page for 12 hrs
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=604800, stale-while-revalidate=59'
  )

  // Get Logaimat API
  let user_token = ''
  const LoqaimatDataReq = axios({
    method: 'GET',
    url: `${BASE_URL}/v1/Web/Loqaimat`,
    headers: {
      Authorization: `Basic ${user_token}`,
    },
  })
  const loqaimat = await LoqaimatDataReq

  return {
    props: {
      loqaimat: loqaimat.data,
    },
  }
}

const index = (props) => {
  // Declare State
  const [all_news, setAllNews] = useState()
  const [bg_image, setBackgroundImage] = useState('')
  const [showCategory, setShowCategory] = useState(true)
  const [searches, setSearches] = useState(false)
  const [click_subscribe, setClickSubscribe] = useState(true)
  let user_id = props.user_id && props.user_id
  let country_code = props.country_code && props.country_code

  // Function Get all News
  const get_all_news = async () => {
    user_id &&
      axios
        .get(
          `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}`
        )
        .then((res) => {
          let keys = Object.keys(res.data.data)
          let custom_array = []
          // let custom_subscribe = []
          // let custom_unsubscribe = []
          keys.map((item) => {
            custom_array.push(res.data.data[item])
            // res.data.data[item].is_subscribed === true
            // ? custom_subscribe.push(res.data.data[item])
            // : res.data.data[item].is_subscribed === false &&
            // custom_unsubscribe.push(res.data.data[item])
          })
          setAllNews(custom_array)
          // setNewsSubscribe(custom_subscribe)
          // setNewsUnubscribe(custom_unsubscribe)
        })
  }
  // Function Returns Background Image Based on Country Code
  const get_background_image = async () => {
    if (country_code?.includes('JO')) {
      setBackgroundImage('bg-jordan')
    } else if (country_code?.includes('SA')) {
      setBackgroundImage('bg-saudi')
    } else if (country_code?.includes('EG')) {
      setBackgroundImage('bg-egypt')
    } else if (country_code?.includes('KW')) {
      setBackgroundImage('bg-kuwait')
    }
  }
  // Call All Functions
  useEffect(() => {
    get_all_news()
    get_background_image()
  }, [user_id])

  let alternative_search = all_news && [
    ...all_news[0].data.slice(0, 3),
    ...all_news[11].data.slice(0, 3),
    ...all_news[4].data.slice(0, 3),
  ]
  const headKeywords = `
  اخبار,الزبده,Alzubda,عاجل,نبض,العربية, اخبار السعودية,الاخبار,اخبار العالم,اخبار24,الجزيرة,اخبار اليوم,كرة القدم
  الزبدة
  الزبده
  زبد
  الزبد
  سياسه
  سياسة
  اخبار السياسة
  أخبار السياسه
  اخبار الرياضة اليوم
  مباريات اليوم
  اخبار الرياضة السعودية
  اخبار الرياضة الكويتية
  اخبار المغرب
  اخبار العراق
  اخبار محمد صلاح
  اخبار ميسي
  اخبار ريال مدريد
  اخبار برشلونة
  اخبار نادي برشلونة
  دبي
  الامارات
  اخبار الامارات
  اخبار الخليج العربي
  صحيفة
  صحف اخبار
  صحيفة الاخبار
  سبق
  عكاظ
  توتر
  تويتر
  تحميل تويتر
  تحميل توتر
  هنجري شارك
  نبض
  مبض
  وظائف الامارات
  خبر عاجل
  خبر
  اخبار المطلاع
  المطلاع
  المعونات
  برنامج اخباري
  الترندات
  مصادر الاخبار
  موقع اخبار
  موقع اخباري
  زبدة الاخبار
  زبدة العالم
  الدوري السعودي
  ترند
  اخبار ترند
  الدوري الاسباني
  كرة القدم
  الأخبار
  الاخبار
  اخبار الرياضة
  كرة القدم السعودية
  الرواتب
  اقتباسات
  البورصة الكويتية
  البورصة
  حول العالم
  اخبار العالم
  احداث العالم
  عاجل
  يحدث الآن
  الان
  اخبار الكويت
  اخبار السعودية
  اخبار مصر
  الجزيرة
  العربية
  ارقام
  وظيفة
  توظيف
  الاهلي السعودي
  النصر
  البورصة الامريكية
  العملات الرقمية
  عملات مشفرة
  بتكوين
  بتكون
  وفيات
  وفيات اليوم
  اموات اليوم
  موتى اليوم
  اخبار المغرب
  المغرب العربي
  انباء
  الرياضة
  رياضة
  اخبار الأردن
  جرائد
  جريدة
  جريده
  جرائد الكويت
  جرائد السعودية
  جرائد السعوديه
  nabde
تطبيق اخبار
nabd news
nabdapp
nabd app
nabd website
nabd arabic news
نبض
تطبيق نبض
اخبار نبض
alwakeel news
الوكيل
اخبار الوكيل
alwakil 
Garaa news
جراءة اخبار
عاجل خبرني
خبرني اخبار
khberni
roya news
رؤيا اخبار
طقس العرب
arabia weather
alnaba اخبار 
النبء
النبأ اخبار
alwatan kuwait
الوطن الكويت
النهار الكويت
annahar news
aljazeera news
سبق اخبار
sabaq
alyoum 7 news
youm7 
يوم 7 اخبار
اليوم السابع 
كورة
كوورة
coora
kora
koora
الجزيرة نت
سكاي نيوز
sky news
  News
  News live
  Newspaper
  News tv
  News live
  Trending now
  Saudi new
  Saudia news
  Saudia new
  Saudia
  oil price
  news live
  World news
  Finance
  Kuwait tv
  Nabd
  New
  Anews
  Indian news
  India news
  Marketing
  Invest
  Investing
  Markets
  India new
  Gulf
  Arabia
  Gcc
  Gulf new
  Gulf news
  Arabia
  Arabia new
  Islam news
  Islam new
  Palestine news
  Olastine new
  Alzubda
  Zubda
  Alzubdah
  Zebda
  Alzebda
  Alzubdah
  Zobda
  alzobda
  `
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
  const headTitle = 'الزبدة | الأخبار'

  // news_unsubscribe && console.log(news_unsubscribe)
  return (
    <React.Fragment>
      <HeadComp
        headKeywords={headKeywords}
        headDescription={headDescription}
        headTitle={headTitle}
      />
      <div
        dir="rtl"
        id="project_body"
        className="text-black bg-white"
        translate="no"
      >
        {click_subscribe !== null && (
          <Nav
            click_subscribe={click_subscribe}
            showCategory={showCategory}
            news_subscribe={true}
            alternative_search={alternative_search}
            setSearches={setSearches}
            searches={searches}
            user_id={user_id}
            country_code={country_code}
          />
        )}
        {searches ? (
          <CategorySkeleton />
        ) : all_news ? (
          <React.Fragment>
            <ImportantNews
              loading="eager"
              title={'أهم الأخبار'}
              category_news={all_news[0]}
              user_id={user_id}
              subs={null}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
            />
            {all_news[1]?.data?.length > 4 ? (
              <Colored
                loading="lazy"
                title={'مخصص لك'}
                important_news={all_news[1]}
                user_id={user_id}
                card_color={'bg-Purp100'}
                theme={'bg-Purp200'}
                text_color={'text-white'}
                fill_color={'fill-Purp200'}
                desc_color={'text-GRAY'}
                description={
                  'الأخبار المقترحه لك بناء على المواضيع او الفئات الاخبارية التي تم قرائتها'
                }
              />
            ) : null}
            <div id="الشأن الدولي">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'الشأن الدولي'}
                category_news={all_news[11]}
                user_id={user_id}
                subs={all_news[11]?.is_subscribed}
                bg_color={'bg-YELLOW'}
                title_color={'text-YELLOW'}
                fill_color={'fill-YELLOW'}
                description={'جميع ما يحدث حول العالم '}
              />
            </div>
            <div id="صحة">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'الصحة'}
                category_news={all_news[4]}
                user_id={user_id}
                subs={all_news[4]?.is_subscribed}
                bg_color={'bg-BLUE'}
                title_color={'text-BLUE'}
                fill_color={'fill-BLUE'}
                description={
                  'جميع الأخبار المتعلقة في عالم الصحه من أهم المصادر'
                }
              />
            </div>
            {all_news[2] ? (
              <ArroundYou
                bg_image={bg_image}
                loading="lazy"
                title={'يدور حولك'}
                important_news={all_news[2]}
                user_id={user_id}
                card_color={'bg-GRAY100'}
                theme={'bg-Purp100'}
                text_color={'text-GRAY100'}
                fill_color={'fill-Purp100'}
                description={' جميع ما يدور من حولك من أخبار و مواضيع'}
              />
            ) : null}
            {all_news[9]?.data?.length > 3 && (
              <div id="الأكثر مشاهدة">
                <Video
                  title={'الأكثر مشاهدة'}
                  category_news={all_news[9]}
                  user_id={user_id}
                  subs={null}
                  bg_color={'bg-Purp300'}
                  title_color={'text-Purp300'}
                  fill_color={'fill-Purp300'}
                  description={'بطريقة جميلة يمكنك مشاهدة الأخبار'}
                />
              </div>
            )}
            <div id="اخبار الفن">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'أخبار الفن'}
                category_news={all_news[15]}
                user_id={user_id}
                subs={all_news[15]?.is_subscribed}
                bg_color={'bg-BLUE'}
                title_color={'text-BLUE'}
                fill_color={'fill-BLUE'}
                description={
                  'جميع الأخبار المتعلقة في عالم الفن من أهم المصادر'
                }
              />
            </div>
            <div id="مال وأعمال">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'مال وأعمال'}
                category_news={all_news[7]}
                user_id={user_id}
                subs={all_news[7]?.is_subscribed}
                bg_color={'bg-GREEN'}
                title_color={'text-GREEN'}
                fill_color={'fill-GREEN'}
                description={
                  'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
                }
              />
            </div>

            <div id="غزو أوكرانيا">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'غزو أوكرانيا'}
                category_news={all_news[8]}
                user_id={user_id}
                subs={all_news[8]?.is_subscribed}
                bg_color={'bg-YELLOW'}
                title_color={'text-YELLOW'}
                fill_color={'fill-YELLOW'}
                description={'جميع ما يخص أحداث غزو أوكرانيا'}
              />
            </div>
            <div id="لقيمات">
              <Logaimat
                setShowCategory={setShowCategory}
                loading="lazy"
                title={'لقيمات'}
                important_news={props?.loqaimat?.data}
                subs={null}
                title_color={'text-SKY'}
                theme={'bg-SKY'}
                card_color={'bg-GRAY100'}
                fill_color={'fill-SKY'}
                desc_color={'text-GRAY400'}
                text_color={'text-black'}
                description={'بطريقة جميلة يمكنك قرائه المواضيع'}
              />
            </div>

            <div id="ترند">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'ترند'}
                category_news={all_news[5]}
                user_id={user_id}
                subs={all_news[5]?.is_subscribed}
                bg_color={'bg-RED'}
                title_color={'text-RED'}
                fill_color={'fill-RED'}
                description={
                  'جميع الأخبار المتعلقة في عالميات الترند من أهم المصادر'
                }
              />
            </div>
            <div id="الصوتيات">
              <Voice
                loading="lazy"
                title={'الصوتيات'}
                news_one={all_news[6]}
                user_id={user_id}
                subs={null}
                title_color={'text-YELLOW'}
                fill_color={'fill-YELLOW'}
                card_color={'bg-GRAY100'}
                desc_color={'text-GRAY400'}
                theme={'bg-YELLOW'}
                description={'استمع للاخبار الصوتيه الاكثر استماعا على الزبده'}
              />
            </div>
            <div id="ألعاب">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'ألعاب'}
                category_news={all_news[13]}
                user_id={user_id}
                subs={all_news[13]?.is_subscribed}
                bg_color={'bg-GREEN'}
                title_color={'text-GREEN'}
                fill_color={'fill-GREEN'}
                description={'جميع ما يخص عالم الالعاب بين يديك'}
              />
            </div>

            <div id="الخليج العربي">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'الخليج العربي'}
                category_news={all_news[10]}
                user_id={user_id}
                subs={all_news[10]?.is_subscribed}
                bg_color={'bg-YELLOW'}
                title_color={'text-YELLOW'}
                fill_color={'fill-YELLOW'}
                description={'جميع ما يخص أحداث الخليج العربي'}
              />
            </div>

            <div id="رياضة">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'رياضة'}
                category_news={all_news[3]}
                user_id={user_id}
                subs={all_news[3]?.is_subscribed}
                bg_color={'bg-BLUE'}
                title_color={'text-BLUE'}
                fill_color={'fill-BLUE'}
                description={'جميع الأخبار المتعلقة في عالم الرياضه حول العالم'}
              />
            </div>
            <div id="لايف ستايل">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'لايف ستايل'}
                category_news={all_news[16]}
                user_id={user_id}
                subs={all_news[16]?.is_subscribed}
                bg_color={'bg-RED'}
                title_color={'text-RED'}
                fill_color={'fill-RED'}
              />
            </div>
            <div id="الشرق الاوسط">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'الشرق الاوسط'}
                category_news={all_news[14]}
                user_id={user_id}
                subs={all_news[14]?.is_subscribed}
                bg_color={'bg-YELLOW'}
                title_color={'text-YELLOW'}
                fill_color={'fill-YELLOW'}
                description={'جميع ما يحدث حول العالم '}
              />
            </div>

            <div id="تكنولوجيا">
              <CategoryNews
                click_subscribe={click_subscribe}
                setClickSubscribe={setClickSubscribe}
                loading="lazy"
                title={'تكنولوجيا'}
                category_news={all_news[12]}
                user_id={user_id}
                subs={all_news[12]?.is_subscribed}
                bg_color={'bg-GREEN'}
                title_color={'text-GREEN'}
                fill_color={'fill-GREEN'}
                description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
              />
            </div>
            <div className="py-3"></div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <IndexSkeleton />
            <IndexSkeleton />
          </React.Fragment>
        )}
        {all_news && <Footer loading="lazy" />}
      </div>
    </React.Fragment>
  )
}
export default index
