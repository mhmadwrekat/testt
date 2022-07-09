import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

//next imports
import Link from 'next/link'
import Image from 'next/image'

//component imports
const HeadComp = dynamic(() => import('../../components/page/HeadComp'))
const Footer = dynamic(() => import('../../components/page/Footer'))
const Nav = dynamic(() => import('../../components/page/Nav'))

//image imports
import AppUpdateImg from '../../public/assest/blogs/app-upadte.jpg'
import NewUpdateBlogCover from '../../public/assest/blogs/newUpdateBlog/cover.jpg'

const posts = [
  {
    title: 'تحديث جديد على تطبيق الزبدة',
    id: 'NewUpdateBlog',
    category: { name: 'مقال', id: 'NewUpdateBlog' },
    description:
      'تحديث جديد لنا على التطبيق يلبي احتياجاتك الإخبارية ويسهل حركة تنقلك بين الدول والفئات الإخبارية المختلفة، نذكرها تباعا.',
    date: 'Apr 04, 2022',
    datetime: '04-04-2021',
    imageUrl: NewUpdateBlogCover,
    readingTime: 'دقيقتان',
    author: {
      name: 'زيد سلام',
    },
  },
  {
    title: 'تحديث جديد على تطبيق الزبدة، وإضافة لتقنية الذكاء الإصطناعي',
    id: 'Firstblog',
    category: { name: 'مقال', id: 'Firstblog' },
    description:
      'في هذا التحديث، عملنا على اضافة بعض التعديلات و الميزات التي نتمنى أن تساهم في زيادة استمتاعكم في استخدام تطبيق الزبدة، نذكرها تباعا',
    date: 'Mar 16, 2020',
    datetime: '03-11-2021',
    imageUrl: AppUpdateImg,
    readingTime: 'دقيقتان',
    author: {
      name: 'زيد سلام',
    },
  },
]

export default function blogs() {
  const [searches, setSearches] = useState(false)
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
  useEffect(() => {
    analytics.page('Blog Page', {
      title: 'Blog Page',
      url: 'https://alzubda.com/blogs',
    })
  }, [])

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
        className="bg-white text-black"
        translate="no"
      >
        <Nav setSearches={setSearches} searches={searches} />
      </div>

      <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-12 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-TSbold text-4xl tracking-tight text-Purp500 lg:text-5xl">
              مقالات الزبدة
            </h2>
          </div>

          <div
            dir="rtl"
            className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
          >
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="h-48 w-full flex-shrink-0 object-cover">
                  <Image
                    src={post.imageUrl}
                    alt="article image"
                    priority
                    quality={30}
                    loading="eager"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <Link href={'blogs/' + post.id}>
                      <div className="cursor-pointer font-TSmedium text-sm font-bold text-BLUE hover:underline">
                        {post.category.name}
                      </div>
                    </Link>
                    <div className="cursor-pointer">
                      <Link href={'blogs/' + post.id}>
                        <div className="mt-2 block">
                          <p className="font-TSbold text-xl font-semibold text-Purp500">
                            {post.title}
                          </p>
                          <p className="mt-3 font-TSlight font-medium text-GRAY400">
                            {post.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="cursor-pointer font-TSlight text-sm font-medium text-Purp500">
                      <p className="hover:underline">{post.author.name}</p>
                    </div>
                    <div className="mt-1 flex items-center">
                      <div className="font-TSlight text-sm text-GRAY400">
                        <time className="ml-1" dateTime={post.datetime}>
                          {post.datetime}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span className="mr-1">{post.readingTime} قراءة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div dir="rtl">
        <Footer />
      </div>
    </React.Fragment>
  )
}
