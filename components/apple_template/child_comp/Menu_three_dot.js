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
            <section className="text-black bg-white absolute top-7 left-0 w-24 rounded-lg p-2 lg:left-10 lg:right-0">
              <section className="grid w-auto text-right font-TSbold text-sm">
                <Menu.Item>
                  {({ active }) => (
                    <p className={`pt-1 ${active && `${title_color}`}`} href="">
                      نسخ الرابط
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p className={`pt-1 ${active && `${title_color}`}`} href="">
                      مشاركه
                    </p>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <p className={`pt-1 ${active && `${title_color}`}`} href="">
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
