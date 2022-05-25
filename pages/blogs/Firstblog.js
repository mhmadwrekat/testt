//next imports
import Image from "next/image";

//component imports
import Footer from "../../components/page/Footer";
import HeadComp from "../../components/page/HeadComp";

//image imports
import img1 from "../../public/assets/blogs/1.jpg";
import img2 from "../../public/assets/blogs/2.jpg";
import img3 from "../../public/assets/blogs/3.jpg";
import img4 from "../../public/assets/blogs/4.jpg";
import img5 from "../../public/assets/blogs/5.jpg";
import appleStore from "../../public/assets/images/shared/apple-xhdpi.png";
import googlePlay from "../../public/assets/images/shared/google-xhdpi.png";

export default function Firstblog() {
  function NewTab(url) {
    window.open(url, "_blank");
  }
  return (
    <>
      <HeadComp
        props={{
          title: "تحديث جديد على تطبيق الزبدة، وإضافة لتقنية الذكاء الإصطناعي",
          keywords: `
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
          الذكاء الإصطناعي
          لقيمات
          البحث
          ترشيح الأخبار الذكي باستخدام الذكاء الاصطناعي
          تحديث خاصية المشاركة
          `,
          description: `
          تحديث جديد على تطبيق الزبدة، وإضافة لتقنية الذكاء
          الإصطناعي

          في هذا التحديث، عملنا على إضافة بعض التعديلات والمميزات التي نتمنى أن تساهم في زيادة استمتاعكم في استخدام تطبيق الزبدة، نذكرها تباعا.

          ١- لقيمات
          لقيمات هي خاصية جديدة قمنا بإضافتها، تشبه في شكلها خاصية القصص على تطبيقات التواصل الاجتماعي الأخرى.

          ستكون لقيمات هي المكان الذي نستعرض فيه ملخصات لقضايا معينة، أو تسليط الضوء على مواضيع رائجة أو غير واضحة، على شكل تصاميم جذابة وملخصات سريعة، تمكن القارئ من مواكبة الأحداث ومعرفة كل جديد بطريقة أكثر تفاعلا. يمكنكم استخدام هذه الخاصية من الشاشة "الرئيسية" للتطبيق، وتفضيل قصصك المفضلة للعودة لها لاحقا من خلال حسابك الشخصي.

          ٢- البحث
          قمنا بإضافة محرك بحث في أعلى الصفحة في الشاشة "الرئيسية"، حتى يتمكن القارئ من البحث عن أي موضوع أو كلمة مفتاحية، وسيتم عرض جميع الأخبار المتعلقة بها حتى يتمكن القارئ من الإلمام بجميع جوانب حدث معين، أو البحث في أرشيف الأخبار.

          ٣- ترشيح الأخبار الذكي باستخدام الذكاء الاصطناعي
          قمنا ببرمجة خاصية جديدة تمكن تطبيق الزبدة من معرفة اهتمامات القارئ بشكل أدق، من خلال متابعة أكثر الأخبار تفاعلا من حيث القراءة، والتفضيل، والمشاركة، حيث سيقوم التطبيق بترشيح أخبار مماثلة لاهتمامك، لنساعدك في الحصول على تجربة أكثر متعة على التطبيق، وقراءة كل ما هو جديد ضمن اهتماماتك. قمنا أيضا بنقل جميع الأخبار التي قمت بقرائتها مسبقا الى قسم خاص، حتى تتمكن من متابعة أخبار جديد بشكل مستمر دون إزعاج.

          ٤- تحديث خاصية المشاركة
          قمنا بتعديل خاصية المشاركة وإعطائها تصميم جديد أكثر بساطة وسهولة في الاستخدام
         
          `,
        }}
      />
      <div className="min-h-full">
        <main className="py-10">
          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 sm:px-6 lg:max-w-6xl lg:grid-flow-col-dense lg:grid-cols-1">
            <div dir="rtl" className="p-2">
              <div className="relative py-16 bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                  <div
                    className="relative h-full text-lg max-w-prose mx-auto"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute top-12 left-full transform translate-x-32"
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
                      className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
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
                      className="absolute bottom-12 left-full transform translate-x-32"
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
                  <div className="text-lg max-w-prose mx-auto">
                    <h1>
                      <span className="font-semibold font-TSbold text-purple-900 mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        تحديث جديد على تطبيق الزبدة، وإضافة لتقنية الذكاء
                        الإصطناعي
                      </span>
                    </h1>
                    <div className="my-10 mx-auto text-center ">
                      <span className="cursor-pointer inline-block mx-2 lg:w-40 w-36">
                        <Image
                          src={appleStore}
                          alt="apple Store"
                          onClick={() => {
                            NewTab(
                              "https://apps.apple.com/us/app/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-alzubda-%D8%A7%D9%84%D8%B2%D8%A8%D8%AF%D8%A9/id1440466617"
                            );
                          }}
                          loading="lazy"
                        />
                      </span>
                      <span className="cursor-pointer inline-block lg:w-40 w-36">
                        <Image
                          src={googlePlay}
                          alt="google Play"
                          onClick={() => {
                            NewTab(
                              "https://play.google.com/store/apps/details?id=com.live.alzubda.newsapp&hl=ar&gl=US"
                            );
                          }}
                          loading="lazy"
                        />
                      </span>
                    </div>
                    <p className="mt-8 text-xl text-gray-500 leading-8 font-TSmedium">
                      في هذا التحديث، عملنا على إضافة بعض التعديلات والمميزات
                      التي نتمنى أن تساهم في زيادة استمتاعكم في استخدام تطبيق
                      الزبدة، نذكرها تباعا.
                    </p>
                  </div>
                  <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                    <div>
                      <h1 className="text-3xl font-semibold font-TSbold text-purple-900">
                        ١- لقيمات
                      </h1>
                      <p className=" mx-5 text-xl text-gray-500 leading-8 font-TSmedium">
                        لقيمات هي خاصية جديدة قمنا بإضافتها، تشبه في شكلها خاصية
                        القصص على تطبيقات التواصل الاجتماعي الأخرى.
                      </p>
                    </div>

                    <figure className="rounded-lg flex justify-center mx-auto">
                      <span className="w-full md:w-1/2 lg:w-1/3 rounded-lg my-20 ">
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
                      <p className=" mx-5 text-xl text-gray-500 leading-8 font-TSmedium">
                        ستكون لقيمات هي المكان الذي نستعرض فيه ملخصات لقضايا
                        معينة، أو تسليط الضوء على مواضيع رائجة أو غير واضحة، على
                        شكل تصاميم جذابة وملخصات سريعة، تمكن القارئ من مواكبة
                        الأحداث ومعرفة كل جديد بطريقة أكثر تفاعلا. يمكنكم
                        استخدام هذه الخاصية من الشاشة "الرئيسية" للتطبيق، وتفضيل
                        قصصك المفضلة للعودة لها لاحقا من خلال حسابك الشخصي.
                      </p>
                    </div>

                    <figure className=" my-20 rounded-lg flex justify-center mx-auto">
                      <span className="w-full md:w-1/2 lg:w-1/3 rounded-lg">
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
                      <h1 className="text-3xl font-semibold font-TSbold text-purple-900">
                        ٢- البحث
                      </h1>
                      <p className=" mx-5 text-xl text-gray-500 leading-8 font-TSmedium">
                        قمنا بإضافة محرك بحث في أعلى الصفحة في الشاشة
                        "الرئيسية"، حتى يتمكن القارئ من البحث عن أي موضوع أو
                        كلمة مفتاحية، وسيتم عرض جميع الأخبار المتعلقة بها حتى
                        يتمكن القارئ من الإلمام بجميع جوانب حدث معين، أو البحث
                        في أرشيف الأخبار.{" "}
                      </p>
                    </div>

                    <figure className="my-20 rounded-lg flex justify-center mx-auto">
                      <span className="w-full md:w-1/2 lg:w-1/3 rounded-lg  ">
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
                      <h1 className="text-3xl font-semibold font-TSbold text-purple-900">
                        ٣- ترشيح الأخبار الذكي باستخدام الذكاء الاصطناعي
                      </h1>
                      <p className=" mx-5 text-xl text-gray-500 leading-8 font-TSmedium">
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

                    <figure className="my-20 rounded-lg flex justify-center mx-auto">
                      <span className="w-full md:w-1/2 lg:w-1/3 rounded-lg  ">
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
                      <h1 className="text-3xl font-semibold font-TSbold text-purple-900">
                        ٤- تحديث خاصية المشاركة
                      </h1>
                      <p className=" mx-5 text-xl text-gray-500 leading-8 font-TSmedium">
                        قمنا بتعديل خاصية المشاركة وإعطائها تصميم جديد أكثر
                        بساطة وسهولة في الاستخدام{" "}
                      </p>
                    </div>

                    <figure className="my-20 rounded-lg flex justify-center mx-auto">
                      <span className=" w-full md:w-1/2 lg:w-1/3 rounded-lg ">
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
  );
}
