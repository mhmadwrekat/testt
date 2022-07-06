import React from 'react'

const NavSkeleton = () => {
  const unsubscribe_item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <React.Fragment>
      <section className="mx-2 flex h-10 animate-pulse justify-start rounded-full border-3 border-Purp200 px-3 lg:h-11">
        <section className="flex w-full py-0 px-0 first:mr-0 first:pr-0 lg:first:mr-0 lg:first:pr-0">
          {unsubscribe_item?.map((item) => {
            return (
              <section
                key={item}
                className={`flex w-16 items-center justify-center gap-3`}
              >
                <div className="h-2 w-7 rounded-full bg-GRAY200"></div>
              </section>
            )
          })}
        </section>
      </section>
    </React.Fragment>
  )
}

export default NavSkeleton
