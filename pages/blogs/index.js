import React from 'react'

//next imports
import Link from 'next/link'
import Image from 'next/image'

//component imports
import HeadComp from '../../components/page/HeadComp'
import Footer from '../../components/page/Footer'
// import Nav from '../../components/page/Nav'

//image imports
import AppUpdateImg from '../../public/assest/blogs/app-upadte.jpg'
import NewUpdateBlogCover from '../../public/assest/blogs/newUpdateBlog/cover.jpg'

const posts = [
  {
    title: 'تحديث جديد على تطبيق الزبدة',
    id: 'NewUpdateBlog',
    category: { name: 'مقال', id: 'NewUpdateBlog' },
    description:
      'تحديث جديد لنا على التطبيق يلبي احتياجاتك الإخبارية ويسهل حركة تنقلك بين الدول والفئات الإخبارية المختلفة، نذكرها تباعا.',
    date: 'Apr 04, 2022',
    datetime: '04-04-2021',
    imageUrl: NewUpdateBlogCover,
    readingTime: 'دقيقتان',
    author: {
      name: 'زيد سلام',
    },
  },
  {
    title: 'تحديث جديد على تطبيق الزبدة، وإضافة لتقنية الذكاء الإصطناعي',
    id: 'Firstblog',
    category: { name: 'مقال', id: 'Firstblog' },
    description:
      'في هذا التحديث، عملنا على اضافة بعض التعديلات و الميزات التي نتمنى أن تساهم في زيادة استمتاعكم في استخدام تطبيق الزبدة، نذكرها تباعا',
    date: 'Mar 16, 2020',
    datetime: '03-11-2021',
    imageUrl: AppUpdateImg,
    readingTime: 'دقيقتان',
    author: {
      name: 'زيد سلام',
    },
  },
]

export default function blogs() {
  return (
    <>
      <HeadComp />
      {/* <div dir="rtl">
        <Nav />
      </div> */}
      <div className="relative bg-Purp100 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-12 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-TSbold text-4xl tracking-tight text-Purp500 lg:text-5xl">
              مقالات الزبدة
            </h2>
          </div>

          <div
            dir="rtl"
            className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
          >
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              >
                <div className="h-48 w-full flex-shrink-0 object-cover">
                  <Image
                    src={post.imageUrl}
                    alt="article image"
                    priority
                    quality={30}
                    loading="eager"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <div className="cursor-pointer font-TSmedium text-sm font-bold text-BLUE hover:underline">
                      {post.category.name}
                    </div>
                    <div className="cursor-pointer">
                      <Link href={'blogs/' + post.id}>
                        <div className="mt-2 block">
                          <p className="font-TSbold text-xl font-semibold text-Purp500">
                            {post.title}
                          </p>
                          <p className="mt-3 font-TSlight font-medium text-GRAY400">
                            {post.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-6">
                    <div className="cursor-pointer font-TSlight text-sm font-medium text-Purp500">
                      <p className="hover:underline">{post.author.name}</p>
                    </div>
                    <div className="mt-1 flex items-center">
                      <div className="font-TSlight text-sm text-GRAY400">
                        <time className="ml-1" dateTime={post.datetime}>
                          {post.datetime}
                        </time>
                        <span aria-hidden="true">&middot;</span>
                        <span className="mr-1">{post.readingTime} قراءة</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
