const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Contribution guidelines',
    shortName: 'Contribute',
    description: 'Contribute to the Primer Design System'
  },
  pathPrefix: '/contribute',
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        defaultBranch: 'main',
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          react: path.resolve(__dirname, 'node_modules', 'react')
        }
      }
    }
  ]
}
