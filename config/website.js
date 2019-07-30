const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'HackHershey 2019', // Navigation and Site Title
  siteTitleAlt: 'HackHershey', // Alternative Site title for SEO
  siteTitleShort: 'HackHershey', // short_name for manifest
  siteHeadline: 'A full day of coding, games, and prizes', // Headline for schema.org JSONLD
  siteUrl: 'https://wwww.hackhershey.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: "HackHershey 2019 Will Be Hershey High School’s Second Hackathon. Students From Across Pennsylvania Will Come Together To Code Their Ideas Into Reality And Compete For Prizes! All Students Are Welcome - We Are Beginner Friendly!",
  author: 'Michael', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@hackhershey', // Twitter Username
  ogSiteName: 'hackhershey', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
