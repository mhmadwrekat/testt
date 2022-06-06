module.exports = {
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
            value: 'public, max-age=9999999999, must-revalidate',
          },
        ],
      },
    ]
  },

  images: {
    minimumCacheTTL: 99999999,
    domains: [
      'netaq.s3.ap-south-1.amazonaws.com',
      'admin-panel-alzubda.s3.us-east-2.amazonaws.com',
      'https://img.youtube.com/',
      'orient-news.net',
      'alghad.com',
      'www.youtube.com',
      'img.youtube.com',
      'youtu.be',
      'cdn.discordapp.com',
      'inappimagesalzubda.s3.us-east-2.amazonaws.com',
      'assets.devops.arabiaweather.com',
      'images.unsplash.com',
      'media.istockphoto.com',
      'storage.googleapis.com',
      'miro.medium.com',
      'assets.devops.arabiaweather.com',
      'i2-prod.dailyrecord.co.uk',
      'media.gettyimages.com',
      'aljaras.com',
      'cdn-icons-png.flaticon.com',
      'alzubda.com',
      'res.cloudinary.com',
      'www.facebook.com',
      'www.qataxi.com',
      'liteamay.nyc3.digitaloceanspaces.com',
      'pbs.twimg.com',
      'www.jordanzad.com',
      'www.albayan.ae',
      'cdn.al-ain.com',
      'cdnimg.royanews.tv',
      'cdnnarabic1.img.sputniknews.com',
      'jo24.net',
      'static.dw.com',
      'img.btolat.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
}
