const path = require(`path`)

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.stateiqtest.org",
    title: "StateIQTest - State of the Art IQ Test",
    author: "Robert O'Toole, Andrew O'Toole",
    image:"/logo.svg",
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
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations
        
        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '100% 00%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
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



