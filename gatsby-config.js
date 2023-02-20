/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 500,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "workplaces",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "WorkPlace",
        // Url to query from
        url: "https://websiteapi.herokuapp.com/graphql",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "projects",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "Project",
        // Url to query from
        url: "https://websiteapi.herokuapp.com/graphql",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/photography`,
        name: "photographs",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/mainPagePics`,
        name: "mainPageImages",
      },
    },
  ],
};
