//next imports
import Image from 'next/image'

//component imports
import HeadComp from '../../components/page/HeadComp'
import Footer from '../../components/page/Footer'

//image imports
import vid1 from '../../public/assest/blogs/newUpdateBlog/vid1.gif'
import vid2 from '../../public/assest/blogs/newUpdateBlog/vid2.gif'
import vid3 from '../../public/assest/blogs/newUpdateBlog/vid3.gif'
import vid4 from '../../public/assest/blogs/newUpdateBlog/vid4.gif'
import appleStore from '../../public/assest/images/images/shared/apple-xhdpi.png'
import googlePlay from '../../public/assest/images/images/shared/google-xhdpi.png'

export default function NewUpdateBlog() {
  function new_tab(url) {
    window.open(url, '_blank')
  }
  return (
    <>
      <HeadComp />
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
    </>
  )
}
