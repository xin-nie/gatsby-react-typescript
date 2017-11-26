module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // gatsby-remark-prismjs for syntax highlighting
        // gatsby-remark-copy-linked-files to copy relative files specified in markdown
        // gatsby-remark-images to compress images and add responsive images with srcset
        plugins: []
      }
    },
  ],
}
