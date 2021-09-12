const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.stateiqtest.org",
    title: "StateIQTest - State of the Art IQ Test",
    author: "Robert O'Toole, Andrew O'Toole",
    image:"/logo.svg",
    url: "https://www.stateiqtest.org",
    description:"very dank iq test"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `Roboto:300,400,500,600,700`  ,
              `Oswald:300,400,500,600,700 `,    
             `Cabin:300,400,500,600,700`,
          ], display: 'swap'       
      }
  },
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/news`,
        name: 'news',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/faq`,
        name: 'faq',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/research`,
        name: 'research',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/whyourtest`,
        name: 'whyourtest',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/aboutus`,
        name: 'aboutus',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/readus`,
        name: 'readus',
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-remark-line-breaks`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `StateIQTest - State of the Art IQ Test`,
        short_name: `StateIQTest`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#FFF`,
        display: `minimal-ui`,
        icon: `src/images/header-meta-icon.svg`, // This path is relative to the root of the site.
      },
    }
  ],

};



