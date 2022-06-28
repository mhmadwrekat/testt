const siteUrl = 'https://alzubda.com'
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '/404',
      },
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/Health',
      },
    ],
  },
}
