import React, { useState, useEffect } from 'react'
import FakeData from './FakeData.json'
import { BASE_URL } from '../config/config'
import dynamic from 'next/dynamic'
import axios from 'axios'
const HeadComp = dynamic(() => import('../components/page/HeadComp'))
const Nav = dynamic(() => import('../components/page/Nav'))
const AllData = dynamic(() =>
  import('../components/appleTemplate/childComponent/AllData')
)

const Search = () => {
  const [token, setUserToken] =
    typeof window !== 'undefined'
      ? useState(localStorage.getItem('user_token'))
      : useState()
  const [search_key, setSearchKey] = useState()
  const [search_data, setSearchData] = useState()
  let bg_color = 'bg-GREEN'

  const search = async () => {
    // console.log(
    //   `${BASE_URL}/v1/Web/Sections?current_country=${country_code}&userId=${user_id}&category_id=5e4e90ac52561e16596649f9`
    // )
    search &&
      axios
        .get(
          `${BASE_URL}/v1/User/Stories/Search/Keywords?phrase=${search_key}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(function (response) {
          setSearchData(response.data.data)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
  }
  const handelFeedback = () => {
    event.preventDefault()

    setSearchKey(event.target.name.value)
    search()
  }
  console.log('DATA ->>>>>> ', search_data)
  return (
    <React.Fragment>
      <div dir="rtl" id="project_body" translate="no">
        <HeadComp />
        <Nav />

        <section className="text-black mx-auto grid w-11/12 bg-white lg:w-10/12 lg:pt-10">
          <div className="relative mt-3 font-TSSemi lg:ml-5 lg:mt-6 lg:pl-3">
            <div className="pointer-events-auto">
              <svg
                className="text-slate-400 absolute mx-4 mt-2 h-7 w-7"
                viewBox="0 0 20 20"
                fill="#FFFFFF"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <form
              onSubmit={() => {
                handelFeedback()
              }}
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="محرك البحث"
                className="w-48 rounded-r-md bg-GRAY200 py-2 pr-12 text-base placeholder-white lg:w-96 lg:text-lg"
              />
              <button
                type="submit"
                className="rounded-l-md bg-Purp500 py-2 px-8 font-TSbold text-base text-white lg:text-lg"
              >
                بحث
              </button>
            </form>
          </div>
          {search_data?.length > 0 && (
            <AllData data={search_data} bg_color={'bg-GREEN'} />
          )}
        </section>
      </div>
      <div className="py-20"></div>
    </React.Fragment>
  )
}

export default Search
/*
   <button className="rounded-l-md border-t-3 border-Purp500 bg-Purp500 py-2 px-8 pt-1.5 font-TSbold text-base text-white">
              بحث
            </button>
*/
