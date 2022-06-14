import React from 'react'
import { useRouter } from 'next/router'

const indexx = () => {
  const router = useRouter()

  return <div>News --- {router.query.news}</div>
}

export default indexx
