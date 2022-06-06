import React from 'react'
import { Menu } from '@headlessui/react'

const Test = ({ title_color }) => {
  return (
    <React.Fragment>
      <div className="relative">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 cursor-pointer "
              viewBox="0 0 20 20"
              fill="#686767"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </Menu.Button>
          <Menu.Items>
            <section className="absolute top-1 left-0 w-32 lg:left-10 lg:right-0">
              <section className="text-black bg-white grid w-auto rounded-lg p-2 text-right font-TSbold text-sm ">
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`border-b-1 border-GRAY200 py-1 px-2 ${
                        active && `${title_color}`
                      }`}
                      href=""
                    >
                      نسخ الرابط
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`border-b-1 border-GRAY200 py-1 px-2 ${
                        active && `${title_color}`
                      }`}
                      href=""
                    >
                      مشاركه
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`py-1 px-2 ${active && `${title_color}`}`}
                      href=""
                    >
                      ابلاغ
                    </p>
                  )}
                </Menu.Item>
              </section>
            </section>
          </Menu.Items>
        </Menu>
      </div>
    </React.Fragment>
  )
}

export default Test
