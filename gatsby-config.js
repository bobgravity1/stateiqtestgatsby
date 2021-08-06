const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.stateiqtest.org",
    title: "StateIQTest - State of the Art IQ Test",
    author: "Robert O'Toole, Andrew O'Toole",
    image:"/header-meta-icon.svg",
    url: "https://www.stateiqtest.org",
    description:"good iq test"
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
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
  ],
};



