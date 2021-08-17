module.exports = {
  siteMetadata: {
    title: "CSS Grid and Flexbox, v2",
    subtitle: "For Responsive CSS Layouts",
    author: "Jen Kramer",
    authorSubtitle: "Freelance Instructor",
    authorImage: "author.jpg", // this image should go in /static
    courseImage: "courseImage.jpg", // this also should go in /static
    twitter: "https://twitter.com/jen4web", // make empty string to omit socials
    linkedin: "https://www.linkedin.com/in/jen4web/",
    github: "https://github.com/jen4web",
    description:
      "Learn how to do realtime communcation on the web with your teacher Brian Holt",
    keywords: [
      "grid",
      "css grid",
      "flexbox",
      "css"
    ],
  },
  pathPrefix: "/grid-flexbox-v2", // if you're using GitHub Pages, put the name of the repo here with a leading slash
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};
