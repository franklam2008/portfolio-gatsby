import { useStaticQuery, graphql } from "gatsby"
export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  console.log('site.siteMetadata',site.siteMetadata);
  
  return site.siteMetadata
}