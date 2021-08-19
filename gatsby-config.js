const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Contribution guidelines',
    shortName: 'Contribute',
    description: 'TODO'
  },
  pathPrefix: '/contribute',
  plugins: [
    '@primer/gatsby-theme-doctocat',
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
