/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:300,400,500,700,900"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: '/assets/fontawesome/js/all.js', // Change to the script filename
      },
    },
  ],
}
