//next imports
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState } from 'react'

//component imports
const HeadComp = dynamic(() => import('../../components/page/HeadComp'))
const Footer = dynamic(() => import('../../components/page/Footer'))
const Nav = dynamic(() => import('../../components/page/Nav'))

//image imports
import vid1 from '../../public/assest/blogs/newUpdateBlog/vid1.gif'
import vid2 from '../../public/assest/blogs/newUpdateBlog/vid2.gif'
import vid3 from '../../public/assest/blogs/newUpdateBlog/vid3.gif'
import vid4 from '../../public/assest/blogs/newUpdateBlog/vid4.gif'
import appleStore from '../../public/assest/images/images/shared/apple-xhdpi.png'
import googlePlay from '../../public/assest/images/images/shared/google-xhdpi.png'

export default function NewUpdateBlog() {
  const [searches, setSearches] = useState(false)
  function new_tab(url) {
    window.open(url, '_blank')
  }
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
  const headTitle = 'الزبدة | المدونة'
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
        <Nav setSearches={setSearches} searches={searches} />
      </div>
      <div className="min-h-full">
        <main className="py-10">
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 sm:px-6 lg:max-w-6xl lg:grid-flow-col-dense lg:grid-cols-1">
            <div dir="rtl" className="p-2">
              <div className="relative overflow-hidden bg-white py-16">
                <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
                  <div
                    className="relative mx-auto h-full max-w-prose text-lg"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute top-12 left-full translate-x-32 transform"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
                      />
                    </svg>
                    <svg
                      className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
                      />
                    </svg>
                    <svg
                      className="absolute bottom-12 left-full translate-x-32 transform"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="d3eb07ae-5182-43e6-857d-35c643af9034"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-gray-200"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-prose text-lg">
                    <h1>
                      <span className="text-purple-900 text-gray-900 mt-2 block text-center font-TSbold text-3xl font-semibold font-extrabold leading-8 tracking-tight sm:text-4xl">
                        تحديث جديد على تطبيق الزبدة
                      </span>
                    </h1>
                    <div className="my-10 mx-auto text-center ">
                      <span className="mx-2 inline-block w-36 cursor-pointer lg:w-40">
                        <Image
                          src={appleStore}
                          alt="apple Store"
                          onClick={() => {
                            new_tab(
                              'https://apps.apple.com/us/app/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-alzubda-%D8%A7%D9%84%D8%B2%D8%A8%D8%AF%D8%A9/id1440466617'
                            )
                          }}
                          priority
                          quality={30}
                          loading="eager"
                        />
                      </span>
                      <span className="inline-block w-36 cursor-pointer lg:w-40">
                        <Image
                          src={googlePlay}
                          alt="google Play"
                          onClick={() => {
                            new_tab(
                              'https://play.google.com/store/apps/details?id=com.live.alzubda.newsapp&hl=ar&gl=US'
                            )
                          }}
                          priority
                          quality={30}
                          loading="eager"
                        />
                      </span>
                    </div>
                    <p className="text-gray-500 mt-8 font-TSmedium text-xl leading-8">
                      تحديث جديد لنا على التطبيق يلبي احتياجاتك الإخبارية ويسهل
                      حركة تنقلك بين الدول والفئات الإخبارية المختلفة، عملنا على
                      النقاط التالية:
                    </p>

                    <p className="text-gray-500 mt-8 font-TSmedium text-xl leading-8">
                      ١- يمكنك اختيار عدة دول ومتابعة أخبارها
                      <br /> ٢- يمكنك تصفية/فلترة المحتوى حسب الدولة <br /> ٣-
                      يمكنك التحكم بالإشعارات للفئات الاخبارية لكل دولة. <br />
                      <br />
                      الآن أصبح لديك الحرية الكاملة للتحكم بالمحتوى الظاهر لك
                      على التطبيق، وحرية استلام الإشعارات من عدمها.
                    </p>
                  </div>
                  <div className="prose prose-indigo prose-lg text-gray-500 mx-auto mt-6">
                    <div>
                      <h1 className="text-purple-900 font-TSbold text-3xl font-semibold">
                        ١- اختيار الدول
                      </h1>
                      <p className=" text-gray-500 mx-5 font-TSmedium text-xl leading-8">
                        بعد توسع تطبيق الزبدة إلى عدة دول عربية جديدة (مصر
                        والأردن)، والتوسع إلى (الإمارات العربية المتحدة، قطر،
                        البحرين، وعُمان) قريبا، أصبح بإمكانك الآن متابعة عدة دول
                        في نفس الوقت.{' '}
                      </p>
                    </div>

                    <figure className="mx-auto flex justify-center rounded-lg">
                      <span className="my-20 w-full rounded-lg md:w-1/2 lg:w-1/3 ">
                        <Image
                          src={vid1}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={vid1}
                        />
                      </span>
                    </figure>

                    <div>
                      <h1 className="text-purple-900 font-TSbold text-3xl font-semibold">
                        ٢- تصفية/ فلترة المحتوى حسب الدولة
                      </h1>
                      <p className=" text-gray-500 mx-5 font-TSmedium text-xl leading-8">
                        بما إنه يمكنك الآن اختيار عدة دول، قمنا بإضافة خاصية
                        تصفية/ فلترة المحتوى حسب الدولة، لإظهار أو إخفاء المحتوى
                        الذي تريده.
                      </p>
                    </div>

                    <figure className="my-20 mx-auto flex justify-center rounded-lg">
                      <span className="w-full rounded-lg md:w-1/2 lg:w-1/3  ">
                        <Image
                          src={vid2}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={vid2}
                        />
                      </span>
                    </figure>

                    <p className=" text-gray-500 mx-5 font-TSmedium text-xl leading-8">
                      مثال:
                      <br /> إذا قمت باختيار متابعة دولة الكويت، مصر، والسعودية،
                      ولكنك تريد رؤية الأخبار المحلية في الكويت فقط، يمكنك
                      الذهاب إلى قسم "محليات" ومن ثم إخفاء أخبار مصر والسعودية،
                      كما هو موضح في المثال أدناه:
                    </p>

                    <figure className="my-20 mx-auto flex justify-center rounded-lg">
                      <span className="w-full rounded-lg md:w-1/2 lg:w-1/3  ">
                        <Image
                          src={vid3}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={vid3}
                        />
                      </span>
                    </figure>

                    <div>
                      <h1 className="text-purple-900 font-TSbold text-3xl font-semibold">
                        ٣- التحكم بالإشعارات
                      </h1>
                      <p className=" text-gray-500 mx-5 font-TSmedium text-xl leading-8">
                        بناءً على اقتراحاتكم، قمنا بعمل خاصية جديدة للتحكم
                        بالتنبيهات الخاصة بالفئات الاخبارية لكل دولة.
                        <br /> يمكنك اختيار الحصول على تنبيهات جميع الأخبار،
                        الأخبار المهمة فقط، أو لا تنبيهات، لكل فئة إخبارية حسب
                        الدولة.
                      </p>
                      <br />

                      <p className=" text-gray-500 mx-5 font-TSmedium text-xl leading-8">
                        مثال:
                        <br />
                        إذا أردت عدم الحصول على تنبيهات أخبار الرياضة من دولة
                        السعودية مثلا، والأخبار المهمة فقط لفئة الحكومة في
                        الكويت، يمكن عمل ذلك كما هو موضح أدناه:{' '}
                      </p>
                    </div>

                    <figure className="my-20 mx-auto flex justify-center rounded-lg">
                      <span className="w-full rounded-lg md:w-1/2 lg:w-1/3  ">
                        <Image
                          src={vid4}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={vid4}
                        />
                      </span>
                    </figure>
                    <h1>
                      <span className="text-purple-900 text-gray-900 mt-2 block text-center font-TSbold text-xl font-semibold font-extrabold leading-8 tracking-tight sm:text-xl">
                        نتمنى أن ينال هذا التحديث إعجابكم وننتظر ملاحظاتكم.
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  )
}
