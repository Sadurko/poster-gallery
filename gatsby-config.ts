import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Samuel Ďurkovic"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'poster',
        path: `${__dirname}/poster`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
}

export default config
