import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
//pages
import Header from "./header"
//css
import styled from "styled-components"
import "./css/layout.css"
import "./css/app.css"

interface Props {
  children: ReactNode
}
const LayoutCon = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* background-color: blue; */
`
const Main = styled.div`
  flex: 1;
`
const Footer = styled.div`
  text-align: right;
  opacity: 0.2;
`
const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutCon>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()} Frank Lam, Built with GatsbyJS
      </Footer>
    </LayoutCon>
  )
}

export default Layout
