import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/outline'

export default function Sidebar({
  isOpen,
  country,
  categories,
  setSidebarOpen,
}) {
  const router = useRouter()

  function handle_selected_categories(category) {
    router.push(`/${category.category_name}`)
    setSidebarOpen(false)
  }

  return (
    <>
      <div className="mx-3 flex justify-end">
        {isOpen ? (
          <ChevronDownIcon className="my-auto h-5 w-5 font-bold " />
        ) : (
          <ChevronLeftIcon className="my-auto h-5 w-5 font-bold " />
        )}

        <div className="my-auto mx-2 mt-1 inline-block">{country.name}</div>

        <div className="relative mt-1.5 h-5 w-10">
          <Image
            src={country.photo}
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>
      {isOpen ? (
        <>
          {categories.map((category) => {
            return (
              <div
                onClick={() => handle_selected_categories(category)}
                className="border border-gray-100 py-1 text-right font-TSmedium text-lg text-gray-500 lg:border-none lg:hover:bg-gray-100 "
              >
                <div className="mx-3 flex justify-end">
                  <div className="my-auto mx-2 mt-1 inline-block">
                    {category.category_name}
                  </div>
                </div>
              </div>
            )
          })}
        </>
      ) : null}
    </>
  )
}
