import fs from 'fs'
import { Feed } from 'feed'
import axios from 'axios'
import { BASE_URL } from '../config/config'
// import marked from 'marked'
// import html from 'remark-html'
// import emoji from 'remark-emoji'

const get_news_by_category_name = async (categoryName) => {
  return await axios.get(`${BASE_URL}/v1/Web/Stories/Categories`, {
    params: {
      category_name: categoryName,
      limit: 25,
      page: 0,
    },
  })
}

// function to return the youtube code to show the thumbnail
function retrieve_youtube_code(link) {
  let code = ''
  // check for watch videos
  if (link.includes('watch/')) {
    code = link.split('watch/')[1]
    return code
  } else if (link.includes('watch?')) {
    // check for regular youtube videos
    code = link.split('watch?')[1]
    const youtube_code_for_thumbnail = code?.split('v=')[1]
    return youtube_code_for_thumbnail?.split('&')[0]
  }
  // (link.includes('youtu.be'))
  else {
    // check for Link without watch
    code = link.split('youtu.be/')[1]
    return code
  }
}

export const generateFeeds = async () => {
  const domain = 'alzubda.com'

  const siteURL = `https://alzubda.com`
  const date = new Date()

  const categories = [
    'الكويت',
    'الخليج العربي',
    'رياضة',
    'ترند',
    'الشأن الدولي',
    'مال وأعمال',
    'الصحة',
    'لايف ستايل',
    'منوعات',
    'الشرق الأوسط',
    'الفن',
    // 'تكنولوجيا',
    'قرارات حكومية',
    'مجلس الأمة',
    // 'ألعاب',
    // 'غزو أوكرانيا',
    'السعودية',
    // 'قرارات رسمية',
    'مصر',
    'الحكومة',
    'محليات-الأردن',
    'الحكومة الأردنية',
    'المرأة',
  ]

  let promises = []
  categories.map((categoryName) => {
    promises.push(get_news_by_category_name(categoryName))
  })
  const fix_image_xml = (link) => {
    link.replace('&w', '&amp;w')
    console.log(link.replace('&', '&amp;'))
  }

  const handle_url = (story) => {
    let ready_title = ''
    if (story.includes('%')) {
      let title = story.replace(/\s+/g, '_')
      // console.log(`/${title.replace('%', '_')}`)
      ready_title = `${title.replace('%', '_')}`
    } else if (story.includes(' ')) {
      let title = story.replace(/\s+/g, '_')
      ready_title = `${title.replace(' ', '_')}`
    } else {
      ready_title = story
    }
    if (story.includes('?')) {
      let title = story.replace(/\s+/g, '')
      ready_title = `${title.replace('?', '_')}`
    }

    let ready_url = ready_title
    return ready_url
  }
  // const markdownToHtml = async (markdown) => {
  //   marked().use(html).use(emoji).processSync(markdown).toString()
  // }
  // console.log(markdownToHtml('hihihihihihi'))
  await Promise.all(promises)
    .then((results) => {
      results.map((result, index) => {
        let data = result.data.data
        const date = new Date()
        // const author = {
        //   name: 'Alzubda',
        //   email: 'media@alzubda.com',
        //   link: 'https://alzubda.com',
        // }
        let xml_link = ''
        const encoded = encodeURI(
          `${siteURL}/rss/${categories[index]}/feed.xml`
        )

        // console.log('Link --> ', encoded)
        // expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

        try {
          // console.log(xml_link)
          // expected output: "https://mozilla.org/?x=шеллы"
        } catch (e) {
          // catches a malformed URI
          // console.error(e)
        }
        const feed = new Feed({
          title: `${categories[index]} | الزبدة`,
          description: `${categories[index]} | الزبدة`,
          id: siteURL,
          language: 'ar',
          link: encoded,
          copyright: `All rights reserved ${date.getFullYear()}, alzubda.com`,
          idIsPermalink: false, // if guid is the permalink, you can set this true
          updated: date, // today's date
          generator: 'Feed for Node.js',
          feedLinks: {
            rss2: `${siteURL}/rss/feed.xml`, // xml format
            json: `${siteURL}/rss/feed.json`, // json fromat
          },
          // author,
        })

        data?.forEach((el) => {
          let handle_story = handle_url(el?.stories_headlines)
          const encoded_url = encodeURI(`${siteURL}/${handle_story}`)
          // if (el?.stories_headlines.includes('«')) {
          //   return
          // } else if (el?.stories_headlines.includes('»')) {
          //   return
          // } else
          if (el.stories_media_url[0].includes('youtube')) {
            return
            // } else if (el?.stories_headlines.includes(':')) {
            //   // console.log(el?.stories_headlines)
            //   return
            // } else if (el?.stories_headlines.includes('10')) {
            //   // console.log(el?.stories_headlines)
            //   return
          } else {
            // console.log(el?._id)
            // console.log(el.stories_headlines)
            const url = el?._id
            const titles = el?.stories_headlines
            // console.log(url)
            // feed.addItem({
            //   title: post.title,
            //   id: url,
            //   link: url,
            //   description: post.excerpt,
            //   content: post.excerpt,
            //   author: [author],
            //   contributor: [author],
            //   date: new Date(post.date),
            // });

            feed.addItem({
              title: titles,
              // id: url.toString().trim(),
              // link: url.toString().trim(),
              id: encoded_url,
              link: encoded_url,
              description: el?.stories_content,
              content: el?.stories_content,
              // author: [author],
              // contributor: [author],
              date: new Date(el.published_on),
              image:
                // el.media_type == "VIDEO"
                el.stories_media_url[0].includes('youtube')
                  ? // ? "https://mir-s3-cdn-cf.behance.net/project_modules/1400/484e8495524615.5e995cb76b34f.png"
                    ` https://img.youtube.com/vi/${retrieve_youtube_code(
                      el.stories_media_url[0]
                    )}/0.jpg`
                  : el.stories_media_url[0].includes('facebook')
                  ? 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/484e8495524615.5e995cb76b34f.png'
                  : el.stories_media_url[0].includes('&fit')
                  ? fix_image_xml(el.stories_media_url[0])
                  : el.stories_media_url[0].includes('&w')
                  ? fix_image_xml(el.stories_media_url[0])
                  : el.stories_media_url[0],
            })
          }
        })
        fs.mkdirSync(`./public/rss/${categories[index]}`, {
          recursive: true,
        })
        fs.writeFileSync(
          `./public/rss/${categories[index]}/feed.xml`,
          feed.rss2(),
          'utf8'
        )
        fs.writeFileSync(
          `./public/rss/${categories[index]}/feed.json`,
          feed.json1()
        )
      })
    })
    .catch((error) => {
      console.log('ERRORRRRRRRRRRRRRR====!!!!', error.message)
    })
}
{
  /* <atom:link href="http://dallas.example.com/rss.xml" rel="self" type="application/rss+xml" /> */
}
