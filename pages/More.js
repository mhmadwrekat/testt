import React from 'react'
import FakeData from './FakeData.json'
import dynamic from 'next/dynamic'
const HeadComp = dynamic(() => import('../components/page/HeadComp'))
const Nav = dynamic(() => import('../components/page/Nav'))
const AllData = dynamic(() =>
  import('../components/appleTemplate/childComponent/AllData')
)
const MenuThreeDot = dynamic(() =>
  import('../components/appleTemplate/childComponent/MenuThreeDot')
)
const More = () => {
  let title_color = 'text-RED'
  let bg_color = 'bg-YELLOW'
  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <HeadComp />
        <Nav />
        <section className="text-black mx-auto grid w-11/12 pt-10 lg:w-10/12 ">
          <section
            className="grid grid-cols-1 gap-0 bg-GRAY100 shadow-md lg:grid-cols-2 lg:gap-8"
            id="card"
          >
            <section className="">
              <div className="">
                <p
                  className={`${bg_color} rounded-t-md pr-5 pt-1.5 pb-0.5 text-right font-TSbold text-base text-white hover:underline lg:pr-8`}
                >
                  category
                </p>{' '}
              </div>
              <div className="relative h-56 w-full shadow-md lg:h-96">
                <img
                  src="https://safetravelbarometer.com/wp-content/uploads/2020/11/North-America-630X335.jpg"
                  alt="test"
                  className="relative h-56 w-full object-cover lg:h-full"
                />
                <div className="absolute bottom-2 right-2 rounded-full bg-white p-1">
                  {/* {console.log(category_news.data[0]._id)} */}
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
                </div>
              </div>
            </section>
            <section className="">
              <div className="px-2.5 pt-2">
                <div className="mt-3 font-TSExtra text-lg md:text-xl lg:h-24 lg:w-10/12 lg:text-2xl">
                  "«أمريكا تناديك» سافر بدون فحص كورونا حتى لو كنت مريضا",
                  "«أمريكا تناديك» سافر بدون فحص كورونا حتى لو كنت مريضا",
                </div>
                <p className="pt-4 font-TSmedium text-base lg:grid lg:h-56 lg:pt-0 ">
                  "ألغى مركز السيطرة على الأمراض الأمريكي CDC شرط إجراء فحص
                  كورونا COVID19 ووجوب سلبية النتيجة قبل مغادرة الرحلة إلى
                  الولايات المتحدة ، اعتبارًا من 12 يونيو 2022. وبرر المركز
                  قراره بسبب انتشار اللقاحات وتحسن المناعة الاجتماعية، ودخول
                  جائحة كورونا مرحلة جديدة، حيث لم يعد الفيروس خطيرا كما كان.
                  وأكد المر......." "ألغى مركز السيطرة على الأمراض الأمريكي CDC
                  شرط إجراء فحص كورونا COVID19 ووجوب سلبية النتيجة قبل مغادرة
                  الرحلة إلى الولايات المتحدة ، اعتبارًا من 12 يونيو 2022. وبرر
                  المركز قراره بسبب انتشار اللقاحات وتحسن المناعة الاجتماعية،
                  ودخول جائحة كورونا مرحلة جديدة، حيث لم يعد الفيروس خطيرا كما ك
                  الولايات المتحدة ، اعتبارًا من 12 يونيو 2022. وبرر المركز
                  قراره بسبب انتشار اللقاحات وتحسن المناعة الاجتماعية، ودخول ك
                </p>
              </div>
              <div className=" my-2 flex justify-between px-2.5 font-TSlight text-sm">
                <p>
                  <b className="text-red-800 font-TSbold">منصه فيسبوك</b>
                </p>
                <p className="font-TSbold text-GRAY300">قبل 20 ساعه</p>
              </div>
              <div className="float-left px-2.5">
                {/* <MenuThreeDot title_color={title_color} /> */}
              </div>
            </section>
          </section>

          <AllData data={FakeData} bg_color={'bg-BLUE'} />
        </section>
      </div>
      <div className="py-20"></div>
    </React.Fragment>
  )
}

export default More
