import React from 'react'

export default function ThirdSection() {
  return (
    <React.Fragment>
      {/* ------------------- LAPTOP VIEW ----------------------- */}
      {/* ------------------- LAPTOP VIEW ----------------------- */}
      <div className="relative hidden min-h-full overflow-hidden bg-GRAYLIGHT lg:block">
        <div className="relative">
          <span className="absolute top-0 left-0">
            <img
              src="./assest/images/images/web/thirdSection/Vector.png"
              alt="vector"
              loading="lazy"
            />
          </span>
          <span className="absolute top-8 left-0 ">
            <img
              src="./assest/images/images/web/thirdSection/three-mobiles.png"
              alt="threeMobile"
              width="600"
              loading="lazy"
            />
          </span>
        </div>
        <div className="m-44 mx-24 text-right font-TSmedium text-3xl font-bold text-Purp ">
          بنيت فكرة الزبدة الأساسية على <br />
          <br />
          استخلاص أي محتوى خبري مهما كان نوعه أو <br />
          <br />
          حجمه في 60 كلمة أو أقل دون إخلال و بكل <br />
          <br />
          شفافية و موضوعية <br />
          <br />
          نوثق لك الخبر بنسبة 100% عبر البحث في <br />
          <br />
          الاف المصادر الأكثر أهمية و شيوعا <br />
          <br />و الوصول للمصدر رقم صفر للخبر
          <br />
          <br />
          كل ذلك و أكثر على يد فريق من المحترفين
          <br />
          <br /> في كل الخطوات
        </div>
      </div>
      {/* ------------------- MOBILE VIEW ----------------------- */}
      {/* ------------------- MOBILE VIEW ----------------------- */}
      <div className="relative min-h-full overflow-hidden bg-GRAYLIGHT lg:hidden">
        {/* <div className="mx-auto flex h-12 justify-center">
         <img
            src="./assest/images/images/mobile/thirdSection/Rectangle-mobile.png"
            alt="rectangle"
            loading="lazy"
          /> 
        </div> */}
        <div className="flex justify-center ">
          <div className="mx-auto text-center">
            <div className="text-purple-900 mx-4 my-12 text-center font-TSmedium text-2xl ">
              بنيت فكرة <b> الزبدة</b> الأساسية على استخلاص أي محتوى خبري مهما
              كان نوعه أو حجمه في 60 كلمة أو أقل دون إخلال و بكل شفافية و
              موضوعية نوثق لك الخبر بنسبة 100% عبر البحث في الاف المصادر الأكثر
              أهمية و شيوعا و الوصول للمصدر رقم صفر للخبر كل ذلك و أكثر على يد
              فريق من المحترفين في كل الخطوات
            </div>
            <br />
            <br />
            <br />
            {/* <div className="relative"> */}
            <div className="mx-auto">
              <img
                src="./assest/images/images/mobile/thirdSection/Rectangle-long-mobile.png"
                alt="rectangleLong"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 mx-auto h-2/5		  ">
              <img
                src="./assest/images/images/mobile/thirdSection/mobiles-mobile-view.png"
                alt="mobileInMobileView "
                loading="lazy"
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
