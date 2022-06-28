export default function SecondSection() {
  return (
    <div className="relative min-h-full  overflow-hidden bg-gradient-to-r from-primary to-secondary">
      <div className="flex justify-center  bg-circle-center bg-cover bg-center bg-no-repeat lg:min-h-screen">
        <div className="mx-auto mt-16 text-center lg:mt-20 ">
          <label className="font-TSSemi text-3xl text-white lg:text-5xl ">
            نلخص الأخبار و الأحداث العالمية و المحلية لنقدم لك{' '}
            <b className="font-TSExtra text-3xl text-white lg:text-5xl ">
              الزبدة
            </b>
          </label>

          <br />
          <br />
          <h1 className="mt-2 inline-block rounded  bg-GRAY200  font-TSlight text-3xl text-BLUEDARK lg:text-5xl">
            محتوى دسم سهل الهضم
          </h1>
          <br />

          <div className="my-12 mx-auto h-80 w-full px-6 md:h-full lg:mb-32 lg:flex lg:h-3/5 lg:justify-center">
            <img
              src="./assest/images/images/web/secondSection/news.png"
              alt="news"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
