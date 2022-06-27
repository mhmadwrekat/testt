//library imports
import { useState } from 'react'
import axios from 'axios'

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    email_address: '',
    name: '',
    attachment: '',
    message: '',
  })
  const [successMessage, setSuccessMessage] = useState({
    message: '',
    isSuccess: false,
  })

  function NewTab(url) {
    window.open(url, '_blank')
  }

  const handleChange = (e) => {
    setContactForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  function send_feedback() {
    axios
      .post(`https://ucwhh3ppgf.execute-api.us-east-2.amazonaws.com/prod`, {
        email_address: contactForm.email_address,
        name: contactForm.name,
        attachment: 'test.png',
        message: contactForm.message,
      })
      .then(function (response) {
        setContactForm({
          email_address: '',
          name: '',
          attachment: '',
          message: '',
        })
        setSuccessMessage({
          message: 'شكرا لتواصلك معنا تم استقبال رسالتك بنجاح ',
          isSuccess: true,
        })

        setTimeout(() => {
          setSuccessMessage({
            message: '',
            isSuccess: false,
          })
        }, 1500)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div id="ContactUs" className="grid h-screen grid-cols-1 lg:grid-cols-2 ">
      <div className="bg-Purp500 lg:order-last">
        <div className="my-6 mx-2 text-right lg:my-24 lg:mx-10">
          <h1 className="space-between font-TSbold text-4xl text-white lg:text-7xl ">
            تواصل معنا
          </h1>
          <br />
          <p className="space-between font-TSmedium text-2xl text-white">
            مقترحاتكم تسعدنا دائما على النحو الأفضل
          </p>
          <br />
          <div className="float-right">
            <div className="my-0 text-right lg:my-44">
              <svg
                width="26"
                height="20"
                className="float-right mx-2 my-1"
                viewBox="0 0 26 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 20H3C1.61929 20 0.5 18.8807 0.5 17.5V2.39125C0.55826 1.05319 1.66067 -0.00126547 3 1.13989e-06H23C24.3807 1.13989e-06 25.5 1.11929 25.5 2.5V17.5C25.5 18.8807 24.3807 20 23 20ZM3 4.835V17.5H23V4.835L13 11.5L3 4.835ZM4 2.5L13 8.5L22 2.5H4Z"
                  fill="white"
                />
              </svg>
              <label className="space-between font-TSmedium text-2xl text-white">
                contact@alzubda.com
              </label>
            </div>
            <br />
            <div className="mx-auto hidden lg:block ">
              <span className="mx-2 inline-block h-10 cursor-pointer lg:h-auto ">
                <img
                  src="./assest/images/images/shared/apple-xhdpi.png"
                  alt="apple Store"
                  onClick={() => {
                    NewTab(
                      'https://apps.apple.com/us/app/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-alzubda-%D8%A7%D9%84%D8%B2%D8%A8%D8%AF%D8%A9/id1440466617'
                    )
                  }}
                  loading="lazy"
                />
              </span>
              <span className="inline-block h-10 cursor-pointer lg:h-auto">
                <img
                  src="./assest/images/images/shared/google-xhdpi.png"
                  alt="google Play"
                  onClick={() => {
                    NewTab(
                      'https://play.google.com/store/apps/details?id=com.live.alzubda.newsapp&hl=ar&gl=US'
                    )
                  }}
                  loading="lazy"
                />
              </span>

              <div className="space-between my-24 hidden text-center font-TSmedium text-2xl text-white md:block lg:block">
                Copyright &#169; {new Date().getFullYear()} Shore ventures Co.
                All rights reserved &#174;
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-Purp500 px-2 lg:flex lg:items-center lg:px-20 ">
        <div className="mx-auto mb-2 w-full rounded-md bg-white py-10 px-2 text-right lg:px-10 ">
          <h1 className="my-2 font-TSmedium text-xl">البريد الإلكتروني</h1>
          <input
            id="email_address"
            name="email_address"
            type="email"
            value={contactForm.email_address}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
            className="block w-full rounded-full border-2 border-GRAY300 px-2 py-2 text-right font-TSmedium"
          />
          <br />

          <h1 className="my-2 font-TSmedium text-xl">رسالتك</h1>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              type="text"
              value={contactForm.message}
              onChange={handleChange}
              rows={9}
              className="mt-1 block w-full rounded-lg border-2 border-GRAY300 px-2 py-2 text-right font-TSmedium shadow-sm"
              placeholder="اكتب رسالتك"
            />
          </div>
          <br />
          <div className="flex flex-row-reverse text-GRAY400 ">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-lg border border-GRAY300 bg-white py-2 px-3 font-medium text-BLUE50 shadow-md focus-within:outline-none focus-within:ring-2 focus-within:ring-BLUE100 focus-within:ring-offset-2 hover:text-BLUE100"
            >
              <span className="font-TSlight text-xl">إضافة مرفقات</span>
              <svg
                width="24"
                height="24"
                className="float-left mx-2 inline-block "
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 17H14V15H17C18.6569 15 20 13.6569 20 12C20 10.3431 18.6569 9 17 9H14V7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17ZM10 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H10V9H7C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15H10V17ZM17 13H7V11H17V13Z"
                  fill="#453783"
                />
              </svg>

              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
          </div>

          <h1 className="mt-6 mb-2 font-TSmedium text-xl">الاسم</h1>
          <div>
            <div className=" mt-2 flex flex-row-reverse text-GRAY400">
              <input
                id="name"
                name="name"
                type="text"
                value={contactForm.name}
                onChange={handleChange}
                className="focus:shadow-outline mx-2  w-full rounded-full border-2 border-GRAY300 py-2 text-right text-base placeholder-GRAY400"
              />
              <button
                onClick={send_feedback}
                className="flex items-center rounded-full  bg-GREEN100 px-4 font-TSmedium text-xl text-white hover:bg-BLUE50 focus:bg-BLUE50"
              >
                إرسال
              </button>
            </div>
          </div>
          <br />

          {successMessage.isSuccess ? (
            <p className="text-l text-green-600 mt-1 mb-2 font-TSmedium">
              {successMessage.message}
            </p>
          ) : null}
        </div>
        <div className="my-5 mx-auto text-center lg:hidden ">
          <span className="relative mx-2 inline-block w-36 cursor-pointer  lg:h-auto ">
            <img
              src="./assest/images/images/shared/apple-xhdpi.png"
              alt="apple Store"
              onClick={() => {
                NewTab(
                  'https://apps.apple.com/us/app/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1-%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-alzubda-%D8%A7%D9%84%D8%B2%D8%A8%D8%AF%D8%A9/id1440466617'
                )
              }}
              loading="lazy"
            />
          </span>
          <span className="relative inline-block w-36 cursor-pointer lg:h-auto">
            <img
              src="./assest/images/images/shared/google-xhdpi.png"
              alt="google Play"
              onClick={() => {
                NewTab(
                  'https://play.google.com/store/apps/details?id=com.live.alzubda.newsapp&hl=ar&gl=US'
                )
              }}
              loading="lazy"
            />
          </span>
        </div>

        <div className="space-between block pb-2 text-center font-TSmedium text-xl text-white md:hidden lg:hidden">
          Copyright &#169; {new Date().getFullYear()} Shore ventures Co. All
          rights reserved &#174;
        </div>
      </div>
    </div>
  )
}
