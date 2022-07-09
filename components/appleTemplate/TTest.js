import React, { useState } from 'react'
import { useInView, InView } from 'react-cool-inview'
import dynamic from 'next/dynamic'
import CategoryNews from './CategoryNews'
const Video = dynamic(() => import('./Video'))
const Voice = dynamic(() => import('./Voice'), {
  ssr: false,
})
const Logaimat = dynamic(() => import('./Logaimat'))
const TTest = ({
  category_news,
  userToken,
  user_id,
  subs,
  click_subscribe,
  setClickSubscribe,
  all_news,
  bg_image,
  props,
}) => {
  const [show, setShow] = useState(false)

  const { observe, inView } = useInView({
    // Track the actual visibility of the target
    trackVisibility: false,
    unobserveOnEnter: true,
    // For performance perspective, use the largest tolerable value as much as possible // (ms)
    delay: 50,
    onEnter: () => {
      setShow(true)
    },
  })
  return (
    <div ref={observe}>
      <div id="الشأن الدولي" loading="lazy">
        {show && (
          <CategoryNews
            click_subscribe={click_subscribe}
            setClickSubscribe={setClickSubscribe}
            load={'lazy'}
            title={'الشأن الدولي'}
            category_news={category_news}
            userToken={userToken}
            user_id={user_id}
            subs={subs}
            bg_color={'bg-YELLOW'}
            title_color={'text-YELLOW'}
            fill_color={'fill-YELLOW'}
            description={'جميع ما يحدث حول العالم '}
            descriptionColor={'text-GRAY400'}
          />
        )}

        <div id="صحة" loading="lazy">
          {show && (
            <CategoryNews
              click_subscribe={click_subscribe}
              setClickSubscribe={setClickSubscribe}
              load={'lazy'}
              title={'الصحة'}
              category_news={all_news[4]}
              descriptionColor={'text-GRAY400'}
              userToken={userToken}
              user_id={user_id}
              subs={all_news[4]?.is_subscribed}
              bg_color={'bg-BLUE'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الصحة من أهم المصادر'}
            />
          )}
        </div>
        {all_news[9]?.data?.length > 3 && (
          <div id="الأكثر مشاهدة" loading="lazy">
            {show && (
              <Video
                title={'الأكثر مشاهدة'}
                category_news={all_news[9]}
                userToken={userToken}
                user_id={user_id}
                subs={null}
                bg_color={'bg-Purp300'}
                title_color={'text-Purp300'}
                fill_color={'fill-Purp300'}
                description={'بطريقة جميلة يمكنك مشاهدة الأخبار'}
              />
            )}
          </div>
        )}
        <div id="مال وأعمال" loading="lazy">
          {show && (
            <CategoryNews
              click_subscribe={click_subscribe}
              setClickSubscribe={setClickSubscribe}
              load={'lazy'}
              title={'مال وأعمال'}
              category_news={all_news[7]}
              userToken={userToken}
              user_id={user_id}
              descriptionColor={'text-GRAY400'}
              subs={all_news[7]?.is_subscribed}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={
                'جميع ما يخص عالم المال والأعمال على المستوى المحلي والدولي'
              }
            />
          )}
        </div>
        <div id="غزو أوكرانيا" loading="lazy">
          {show && (
            <CategoryNews
              click_subscribe={click_subscribe}
              setClickSubscribe={setClickSubscribe}
              load={'lazy'}
              title={'غزو أوكرانيا'}
              category_news={all_news[8]}
              userToken={userToken}
              user_id={user_id}
              subs={all_news[8]?.is_subscribed}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              descriptionColor={'text-GRAY400'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يخص أحداث غزو أوكرانيا'}
            />
          )}
        </div>
        {props?.loqaimat?.data.length > 3 ? (
          <div id="لقيمات" loading="lazy">
            {show && (
              <Logaimat
                setShowCategory={setShowCategory}
                title={'لقيمات'}
                important_news={props?.loqaimat?.data}
                subs={null}
                title_color={'text-SKY'}
                theme={'bg-SKY'}
                card_color={'bg-GRAY100'}
                fill_color={'fill-SKY'}
                desc_color={'text-GRAY400'}
                text_color={'text-black'}
                description={'بطريقة جميلة يمكنك قراءة المواضيع'}
              />
            )}
          </div>
        ) : null}
        <div id="ترند" loading="lazy">
          {show && (
            <CategoryNews
              click_subscribe={click_subscribe}
              setClickSubscribe={setClickSubscribe}
              load={'lazy'}
              title={'ترند'}
              category_news={all_news[5]}
              userToken={userToken}
              descriptionColor={'text-GRAY400'}
              user_id={user_id}
              subs={all_news[5]?.is_subscribed}
              bg_color={'bg-RED'}
              title_color={'text-RED'}
              fill_color={'fill-RED'}
              description={
                'جميع الأخبار المتعلقة في عالميات الترند من أهم المصادر'
              }
            />
          )}
        </div>
        <div id="الصوتيات" loading="lazy">
          {show && (
            <Voice
              loading="lazy"
              title={'الصوتيات'}
              news_one={all_news[6]}
              userToken={userToken}
              user_id={user_id}
              subs={null}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              card_color={'bg-GRAY100'}
              desc_color={'text-GRAY400'}
              theme={'bg-YELLOW'}
              description={'استمع للاخبار الصوتية الاكثر استماعا على الزبده'}
            />
          )}
        </div>
        <div id="الخليج العربي" loading="lazy">
          {show && (
            <CategoryNews
              click_subscribe={click_subscribe}
              setClickSubscribe={setClickSubscribe}
              descriptionColor={'text-GRAY400'}
              load={'lazy'}
              title={'الخليج العربي'}
              category_news={all_news[10]}
              userToken={userToken}
              user_id={user_id}
              subs={all_news[10]?.is_subscribed}
              bg_color={'bg-YELLOW'}
              title_color={'text-YELLOW'}
              fill_color={'fill-YELLOW'}
              description={'جميع ما يخص أحداث الخليج العربي'}
            />
          )}
        </div>
        <div id="رياضة" loading="lazy">
          {show && (
            <CategoryNews
              click_subscribe={click_subscribe}
              setClickSubscribe={setClickSubscribe}
              load={'lazy'}
              title={'رياضة'}
              category_news={all_news[3]}
              userToken={userToken}
              user_id={user_id}
              subs={all_news[3]?.is_subscribed}
              bg_color={'bg-BLUE'}
              descriptionColor={'text-GRAY400'}
              title_color={'text-BLUE'}
              fill_color={'fill-BLUE'}
              description={'جميع الأخبار المتعلقة في عالم الرياضة حول العالم'}
            />
          )}
        </div>
        <div id="تكنولوجيا" loading="lazy">
          {show && (
            <CategoryNews
              click_subscribe={click_subscribe}
              setClickSubscribe={setClickSubscribe}
              load={'lazy'}
              title={'تكنولوجيا'}
              category_news={all_news[12]}
              descriptionColor={'text-GRAY400'}
              userToken={userToken}
              user_id={user_id}
              subs={all_news[12]?.is_subscribed}
              bg_color={'bg-GREEN'}
              title_color={'text-GREEN'}
              fill_color={'fill-GREEN'}
              description={'جميع ما يخص عالم التكنولوجيا بين يديك'}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(TTest)
