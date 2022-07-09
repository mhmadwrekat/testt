import axios from 'axios'
import { BASE_URL } from '../../config/config'
import { getServerSideSitemap } from 'next-sitemap'

export const getServerSideProps = async (ctx) => {
  const response = axios({
    method: 'GET',
    url: `${BASE_URL}/v1/Web/Categories`,
  })

  const categorized_news = await response

  const field = categorized_news.data.data.map((news) => ({
    loc: `https://alzubda.com/${news.category_name}`,
    lastmod: new Date().toISOString(),
  }))

  const fields = [...field]

  return getServerSideSitemap(ctx, fields)
}

export default function Site() {}
