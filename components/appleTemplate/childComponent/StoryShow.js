import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
// import FakeData from '../FakeData.json'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { BASE_URL } from '../../../config/config'
import moment from 'moment'
import 'moment/locale/ar'
import axios from 'axios'
// import Like from '../../components/appleTemplate/childComponent/Like'
const MenuThreeDot = dynamic(() => import('./MenuThreeDot'))
const HeadComp = dynamic(() => import('../../page/HeadComp'))
const Nav = dynamic(() => import('../../page/Nav'))
const AllData = dynamic(() => import('./AllData'))
const StorySkeleton = dynamic(() => import('../../Skeletons/StorySkeleton'))
const StoryShow = () => {
  const router = useRouter()
  const [head_news, setHeadNews] = useState()
  const [related_news, setRelatedNews] = useState()
  const [user_id, setUserId] =
    typeof window !== 'undefined'
      ? useState(localStorage.getItem('user_id'))
      : useState()

  let title_color = 'text-RED'
  let bg_color = 'bg-YELLOW'
  // Function Get all News
  const get_all_news = async () => {
    // console.log(
    //   `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}&category_id=5e4e90ac52561e16596649f9`
    // )
    // /v1/Web/Story?story_id=

    router.query.category &&
      axios
        .get(`${BASE_URL}/v1/Web/Story?title=${router.query.category}`)
        .then((res) => {
          // console.log(res.data.data)
          setHeadNews(res?.data?.data?.story)
          let keys =
            res?.data?.data?.story &&
            Object.keys(res?.data?.data?.relevant_stories)
          let custom_array = []
          keys.map((item) => {
            custom_array.push(res?.data?.data?.relevant_stories[item])
          })
          setRelatedNews(custom_array)
        })
  }
  // function to return the youtube code to show the thumbnail
  function retrieve_youtube_code(link) {
    let code = ''
    // check for watch videos
    if (link.includes('watch/')) {
      code = link.split('watch/')[1]
      return code
    } else if (link.includes('watch?')) {
      // check for regular youtube videos
      code = link.split('watch?')[1]
      const youtube_code_for_thumbnail = code?.split('v=')[1]
      return youtube_code_for_thumbnail?.split('&')[0]
    }
    // (link.includes('youtu.be'))
    else {
      // check for Link without watch
      code = link.split('youtu.be/')[1]
      return code
    }
  }
  // Call All Functions
  useEffect(() => {
    typeof window !== 'undefined'
      ? setUserId(localStorage.getItem('user_id'))
      : ''
    router?.query?.category?.length > 15 && get_all_news()
  }, [router, router.query.category])

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
  const headTitle = `الزبدة | ${router.query.category}`
  // head_news && console.log(head_news)
  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        {head_news ? (
          <section className="text-black mx-auto grid w-11/12 pt-10 lg:w-10/12">
            <HeadComp
              headKeywords={headKeywords}
              headDescription={head_news?.stories_content.slice(0, 200)}
              headTitle={headTitle}
            />
            <section
              className="grid grid-cols-1 gap-0 bg-GRAY100 shadow-md lg:grid-cols-2 lg:gap-8"
              id="card"
            >
              <section className="">
                <div className="">
                  <p
                    className={`rounded-t-md bg-Purp300 py-5 text-right font-TSbold text-base text-white hover:underline lg:pr-8`}
                  ></p>
                </div>
                <div className="relative mx-auto h-72 w-full shadow-md lg:h-96">
                  {head_news?.stories_media_url[0] &&
                    (head_news?.stories_media_url[0].includes('youtube') ||
                    head_news?.stories_media_url[0].includes('youtu.be') ? (
                      // <iframe
                      //   loading="eager"
                      //   src={`https://www.youtube.com/embed/${retrieve_youtube_code(
                      //     head_news?.stories_media_url[0]
                      //   )}`}
                      //   alt={head_news?.stories_headlines}
                      //   className="relative h-72 w-full object-cover lg:h-full"
                      // />
                      <iframe
                        allowFullScreen={true}
                        title="Video"
                        className="aspect-video h-full w-full rounded-b-lg shadow-lg"
                        src={`https://www.youtube.com/embed/${retrieve_youtube_code(
                          head_news?.stories_media_url[0]
                        )}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        loading="eager"
                      ></iframe>
                    ) : (
                      // <Image
                      //   src={head_news?.stories_media_url[0]}
                      //   className="relative object-cover"
                      //   alt={head_news?.stories_headlines}
                      //   quality={100}
                      //   layout="fill"
                      //   objectFit="cover"
                      //   // width={800}
                      //   // height={350}
                      //   loading="eager"
                      //   priority
                      //   placeholder="blur"
                      //   blurDataURL={head_news?.stories_media_url[0]}
                      // />
                      <img
                        loading="eager"
                        src={head_news?.stories_media_url[0]}
                        alt={head_news?.stories_headlines}
                        className="relative h-72 w-full object-cover lg:h-full"
                      />
                    ))}
                  {/* <div className="absolute bottom-2 right-2 rounded-full bg-white p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" h-7 w-7 cursor-pointer"
          fill="#FF0000"
          viewBox="0 0 24 24"
          stroke="#FF0000"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div> */}
                </div>
              </section>
              <section className="">
                <div className="px-2.5 pt-2">
                  <div className="flex justify-between">
                    <b className="text-red-800 flex pt-1.5 font-TSbold lg:hidden">
                      {head_news?.publisher_name}
                    </b>
                    <p className="flex px-2.5 pt-2 font-TSbold text-GRAY300 lg:hidden">
                      قبل {moment(head_news?.published_on).fromNow(true)}
                    </p>
                  </div>
                  <div className="mt-3 font-TSExtra text-lg md:text-xl lg:h-28 lg:w-11/12 lg:text-3xl">
                    {head_news?.stories_headlines}
                  </div>
                  <p className="pt-4 font-TSmedium text-lg lg:grid lg:h-60 lg:pt-0 ">
                    {head_news?.stories_content}
                  </p>
                </div>
                <div className=" my-2 flex justify-between px-2.5 font-TSlight text-sm">
                  <p>
                    <b className="text-red-800 hidden font-TSbold lg:flex">
                      {head_news?.publisher_name}
                    </b>
                  </p>
                  <div className="flex px-2.5">
                    {/* {console.log(router.query.news)} */}
                    <MenuThreeDot
                      id={head_news?._id}
                      title_color={title_color}
                      category={router.query.news}
                      story={head_news?.stories_headlines}
                      fill={'fill-Purp300'}
                      story_id={head_news?._id}
                      user_id={user_id}
                    />{' '}
                    <p className="hidden px-2.5 pt-2 font-TSbold text-GRAY300 lg:flex">
                      قبل {moment(head_news?.published_on).fromNow(true)}
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <p
              className={`mt-12 mb-3 font-TSExtra text-2xl text-Purp300 lg:text-4xl`}
            >
              أخبار ذات صلة
            </p>
            <AllData
              data={related_news}
              bg_color={'bg-Purp300'}
              category={router.query.news}
              fill={'fill-Purp300'}
              user_id={user_id}
            />
          </section>
        ) : (
          <StorySkeleton />
        )}

        {/* {console.log(related_news)} */}
      </div>
      <div className="py-4"></div>
    </React.Fragment>
  )
}

export default StoryShow
