//next imports
import Image from 'next/image'
import dynamic from 'next/dynamic'

//component imports
import HeadComp from '../../components/page/HeadComp'
const Footer = dynamic(() => import('../../components/page/Footer'))
const Nav = dynamic(() => import('../../components/page/Nav'))

//image imports
import img1 from '../../public/assest/blogs/1.jpg'
import img2 from '../../public/assest/blogs/2.jpg'
import img3 from '../../public/assest/blogs/3.jpg'
import img4 from '../../public/assest/blogs/4.jpg'
import img5 from '../../public/assest/blogs/5.jpg'
import appleStore from '../../public/assest/images/images/shared/apple-xhdpi.png'
import googlePlay from '../../public/assest/images/images/shared/google-xhdpi.png'

export default function Firstblog() {
  function new_tab(url) {
    window.open(url, '_blank')
  }
  return (
    <>
      <HeadComp />
      <div
        dir="rtl"
        id="project_body"
        className="text-black bg-white"
        translate="no"
      >
        <Nav />
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
                            className="text-GRAY200"
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
                            className="text-GRAY200"
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
                            className="text-GRAY200"
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
                    <p>
                      <span className="mt-2 block text-center font-TSbold text-3xl font-semibold font-extrabold leading-8 tracking-tight text-Purp500 sm:text-4xl">
                        تحديث جديد على تطبيق الزبدة، وإضافة لتقنية الذكاء
                        الإصطناعي
                      </span>
                    </p>
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
                          loading="lazy"
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
                          loading="lazy"
                        />
                      </span>
                    </div>
                    <p className="mt-8 font-TSmedium text-xl leading-8 text-GRAY400">
                      في هذا التحديث، عملنا على إضافة بعض التعديلات والمميزات
                      التي نتمنى أن تساهم في زيادة استمتاعكم في استخدام تطبيق
                      الزبدة، نذكرها تباعا.
                    </p>
                  </div>
                  <div className="prose prose-indigo prose-lg mx-auto mt-6 text-GRAY400">
                    <div>
                      <p className="font-TSbold text-3xl font-semibold text-Purp500">
                        ١- لقيمات
                      </p>
                      <p className=" text-gray-500 mx-5 font-TSmedium text-xl leading-8">
                        لقيمات هي خاصية جديدة قمنا بإضافتها، تشبه في شكلها خاصية
                        القصص على تطبيقات التواصل الاجتماعي الأخرى.
                      </p>
                    </div>

                    <figure className="mx-auto flex justify-center rounded-lg">
                      <span className="my-20 w-full rounded-lg md:w-1/2 lg:w-1/3 ">
                        <Image
                          src={img1}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={img1}
                        />
                      </span>
                    </figure>

                    <div>
                      <p className=" mx-5 font-TSmedium text-xl leading-8 text-GRAY400">
                        ستكون لقيمات هي المكان الذي نستعرض فيه ملخصات لقضايا
                        معينة، أو تسليط الضوء على مواضيع رائجة أو غير واضحة، على
                        شكل تصاميم جذابة وملخصات سريعة، تمكن القارئ من مواكبة
                        الأحداث ومعرفة كل جديد بطريقة أكثر تفاعلا. يمكنكم
                        استخدام هذه الخاصية من الشاشة "الرئيسية" للتطبيق، وتفضيل
                        قصصك المفضلة للعودة لها لاحقا من خلال حسابك الشخصي.
                      </p>
                    </div>

                    <figure className=" my-20 mx-auto flex justify-center rounded-lg">
                      <span className="w-full rounded-lg md:w-1/2 lg:w-1/3">
                        <Image
                          src={img2}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={img2}
                        />
                      </span>
                    </figure>

                    <div>
                      <p className="font-TSbold text-3xl font-semibold text-Purp500">
                        ٢- البحث
                      </p>
                      <p className=" mx-5 font-TSmedium text-xl leading-8 text-GRAY400">
                        قمنا بإضافة محرك بحث في أعلى الصفحة في الشاشة
                        "الرئيسية"، حتى يتمكن القارئ من البحث عن أي موضوع أو
                        كلمة مفتاحية، وسيتم عرض جميع الأخبار المتعلقة بها حتى
                        يتمكن القارئ من الإلمام بجميع جوانب حدث معين، أو البحث
                        في أرشيف الأخبار.{' '}
                      </p>
                    </div>

                    <figure className="my-20 mx-auto flex justify-center rounded-lg">
                      <span className="w-full rounded-lg md:w-1/2 lg:w-1/3  ">
                        <Image
                          src={img3}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={img3}
                        />
                      </span>
                    </figure>

                    <div>
                      <p className="font-TSbold text-3xl font-semibold text-Purp500">
                        ٣- ترشيح الأخبار الذكي باستخدام الذكاء الاصطناعي
                      </p>
                      <p className=" mx-5 font-TSmedium text-xl leading-8 text-GRAY400">
                        قمنا ببرمجة خاصية جديدة تمكن تطبيق الزبدة من معرفة
                        اهتمامات القارئ بشكل أدق، من خلال متابعة أكثر الأخبار
                        تفاعلا من حيث القراءة، والتفضيل، والمشاركة، حيث سيقوم
                        التطبيق بترشيح أخبار مماثلة لاهتمامك، لنساعدك في الحصول
                        على تجربة أكثر متعة على التطبيق، وقراءة كل ما هو جديد
                        ضمن اهتماماتك. قمنا أيضا بنقل جميع الأخبار التي قمت
                        بقرائتها مسبقا الى قسم خاص، حتى تتمكن من متابعة أخبار
                        جديد بشكل مستمر دون إزعاج.
                      </p>
                    </div>

                    <figure className="my-20 mx-auto flex justify-center rounded-lg">
                      <span className="w-full rounded-lg md:w-1/2 lg:w-1/3  ">
                        <Image
                          src={img4}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={img4}
                        />
                      </span>
                    </figure>
                    <div>
                      <p className="font-TSbold text-3xl font-semibold text-Purp500">
                        ٤- تحديث خاصية المشاركة
                      </p>
                      <p className=" mx-5 font-TSmedium text-xl leading-8 text-GRAY400">
                        قمنا بتعديل خاصية المشاركة وإعطائها تصميم جديد أكثر
                        بساطة وسهولة في الاستخدام{' '}
                      </p>
                    </div>

                    <figure className="my-20 mx-auto flex justify-center rounded-lg">
                      <span className=" w-full rounded-lg md:w-1/2 lg:w-1/3 ">
                        <Image
                          src={img5}
                          alt=""
                          priority
                          quality={30}
                          loading="eager"
                          placeholder="blur"
                          blurDataURL={img5}
                        />
                      </span>
                    </figure>
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
