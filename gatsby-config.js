const url = 'https://govirtuoso.org'

module.exports = {
  siteMetadata: {
    title: 'Virtuoso',
    titleTemplate: '%s · Free Coding Camp',
    description:
      'Free JavaScript classes brimming with critical thinking activities, enriching code labs, inspiring projects, and more. Learn quintessential skills required for competing in this age of technology.',
    siteUrl: url,
    url: url,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Virtuoso`,
        short_name: `Virtuoso`,
        description:
          'Free JavaScript classes brimming with critical thinking activities, enriching code labs, inspiring projects, and more. Learn quintessential skills required for competing in this age of technology.',
        lang: `en`,
        start_url: `/`,
        background_color: `#fafafa`,
        theme_color: `#e33371`,
        display: `standalone`,
        icon: `./static/favicon.png`,
        cache_busting_mode: 'none',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['**/static*'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => url,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
        output: '/',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        sitemap: url + '/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}
