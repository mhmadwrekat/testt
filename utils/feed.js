import fs from "fs";
import { Feed } from "feed";
import axios from "axios";
import { BASE_URL } from "../config/config";

const get_news_by_category_name = async (categoryName) => {
  return await axios.get(`${BASE_URL}/v1/Web/Stories/Categories`, {
    params: {
      category_name: categoryName,
      limit: 25,
      page: 0,
    },
  });
};

// function to return the youtube code to show the thumbnail
function retrieve_youtube_code(link) {
  let code = "";
  if (link.includes("watch/")) {
    code = link.split("watch/")[1];
    return code;
  } else {
    code = link.split("watch?")[1];
    const youtube_code_for_thumbnail = code?.split("v=")[1];
    return youtube_code_for_thumbnail?.split("&")[0];
  }
}

export const generateFeeds = async () => {
  const domain = "alzubda.com";

  const siteURL = `https://${domain}`;
  const date = new Date();

  const categories = [
    "الكويت",
    "الخليج العربي",
    "رياضة",
    "ترند",
    "الشأن الدولي",
    "مال وأعمال",
    "الصحة",
    "لايف ستايل",
    "منوعات",
    "الشرق الأوسط",
    "الفن",
    "تكنولوجيا",
    "قرارات حكومية",
    "مجلس الأمة",
    "ألعاب",
    "غزو أوكرانيا",
    "السعودية",
    "قرارات رسمية",
    "مصر",
    "الحكومة",
    "محليات-الأردن",
    "الحكومة الأردنية",
    "المرأة",
  ];
  let promises = [];
  categories.map((categoryName) => {
    promises.push(get_news_by_category_name(categoryName));
  });

  await Promise.all(promises)
    .then((results) => {
      results.map((result, index) => {
        let data = result.data.data;

        const feed = new Feed({
          title: `${categories[index]} | الزبدة`,
          description: `${categories[index]} | الزبدة`,
          id: siteURL,
          link: siteURL,
          copyright: `All rights reserved ${date.getFullYear()}, alzubda.com`,
          idIsPermalink: false, // if guid is the permalink, you can set this true
          updated: date,
          feedLinks: {
            rss2: `${siteURL}/feed.xml`,
          },
        });

        data?.map((el) => {
          // console.log(el);
          const url = `${siteURL}/${categories[index]}/${el.stories_headlines}`;

          feed.addItem({
            title: el?.stories_headlines,
            id: url,
            link: url,
            description: el?.stories_content,
            content: el?.stories_content,
            date: new Date(el.published_on),
            image:
              // el.media_type == "VIDEO"
              el.stories_media_url[0].includes("youtube")
                ? // ? "https://mir-s3-cdn-cf.behance.net/project_modules/1400/484e8495524615.5e995cb76b34f.png"
                  ` https://img.youtube.com/vi/${retrieve_youtube_code(
                    el.stories_media_url[0]
                  )}/0.jpg`
                : el.stories_media_url[0].includes("facebook")
                ? "https://mir-s3-cdn-cf.behance.net/project_modules/1400/484e8495524615.5e995cb76b34f.png"
                : el.stories_media_url[0],
          });
        });

        fs.mkdirSync(`./public/rss/${categories[index]}`, {
          recursive: true,
        });

        fs.writeFileSync(
          `./public/rss/${categories[index]}/feed.xml`,
          feed.rss2()
        );
      });
    })
    .catch((error) => {
      console.log("ERRORRRRRRRRRRRRRR====!!!!", error.message);
    });
};
