module.exports = {
  siteMetadata: {
    title: 'TfL Design Library',
    description: 'This is where we put our awesome design stuff',
    keywords: 'gatsby,theme,carbon',
  },
  plugins: ['gatsby-theme-carbon'],
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/roundel.svg'
      },
    },
  ],
};
