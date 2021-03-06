module.exports = {
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  },

  productionBrowserSourceMaps: true,
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: false,
    contentBase: './dist',
  },
  rewrites: async () => [
    {
      source: '/public/myfile.html',
      destination: '/pages/api/myfile.js',
    },
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999, must-revalidate',
          },
        ],
      },
    ]
  },
  images: {
    minimumCacheTTL: 9999,
    domains: [
      'netaq.s3.ap-south-1.amazonaws.com',
      'cdn2.unrealengine.com',
      'cdn1.epicgames.com',
      'admin-panel-alzubda.s3.us-east-2.amazonaws.com',
      'https://img.youtube.com/',
      'psycatgames.com',
      'mediaaws.almasryalyoum.com',
      'cdnuploads.aa.com.tr',
      'orient-news.net',
      'alghad.com',
      'www.youtube.com',
      'img.youtube.com',
      'youtu.be',
      'cdn.discordapp.com',
      'inappimagesalzubda.s3.us-east-2.amazonaws.com',
      'assets.devops.arabiaweather.com',
      'akm-img-a-in.tosshub.com',
      'images.unsplash.com',
      'media.istockphoto.com',
      'safetravelbarometer.com',
      'storage.googleapis.com',
      'miro.medium.com',
      'assets.devops.arabiaweather.com',
      'i2-prod.dailyrecord.co.uk',
      'media.gettyimages.com',
      'cdn.onlinewebfonts.com',
      'cdn-icons-png.flaticon.com',
      'cdn4.premiumread.com',
      'violetsyria.org',
      'www.egypttoday.com',
      'donyayadonya.com',
      'files.elfann.com',
      'res.cloudinary.com',
      'www.facebook.com',
      'www.qataxi.com',
      'liteamay.nyc3.digitaloceanspaces.com',
      'pbs.twimg.com',
      'www.jordanzad.com',
      'www.albayan.ae',
      'cdn.al-ain.com',
      'cdnimg.royanews.tv',
      'www.legacyhealing.com',
      'images.newscientist.com',
      'cdnnarabic1.img.sputniknews.com',
      'jo24.net',
      'static.dw.com',
      'vid.alarabiya.net',
      'www.eremnews.com',
      'i0.wp.com',
      'www.sarayanews.com',
      // 'img.btolat.com',
      // 'm.wsj.net',
      // 'aljaras.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
}
