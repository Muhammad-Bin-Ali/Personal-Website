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
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "workplaces",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "WorkPlace",
        // Url to query from
        url: "http://localhost:3000/graphql",
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
        url: "http://localhost:3000/graphql",
      },
    },
  ],
};
