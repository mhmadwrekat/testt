import React from 'react'
import { Menu } from '@headlessui/react'

const Test = ({ title_color }) => {
  return (
    <React.Fragment>
      <div className="relative">
        <Menu as="div" className="inline-block text-left">
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
            <section className="absolute top-3 left-24 w-32 lg:left-32">
              <section className="text-black bg-white grid w-48 rounded p-1 text-center font-TSbold text-sm shadow-lg lg:w-56 ">
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={`cursor-pointer border-b-1 border-GRAY200 pt-2 text-GRAY400 ${
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
                      className={`cursor-pointer border-b-1 border-GRAY200 pt-2 text-GRAY400 ${
                        active && `${title_color}`
                      }`}
                      href=""
                    >
                      مشاركه{' '}
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {/* font-TSExtra */}
                  {({ active }) => (
                    <p
                      className={`mt-1 cursor-pointer text-GRAY400  ${
                        active && `${title_color}`
                      }`}
                      href=""
                    >
                      أبلاغ
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
