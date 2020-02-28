import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query Icons {
        allFile {
          edges {
            node {
              size
              absolutePath
              relativePath
            }
          }
        }
      }
    `
  )
  console.log("site.siteMetadata", site.Icons)

  return site.Icons
}
