import React, { useState } from "react"
import PropTypes from "prop-types"
//pages
import Header from "./header"
//css
import styled from "styled-components"
import "./css/layout.css"
import "./css/app.css"
const LayoutCon = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Main = styled.div`
  flex: 1;
`
const Footer = styled.div`
  text-align: right;
  opacity: 0.2;
`
const Layout = ({ children }) => {
  const [animatedDown, setAnimatedDown] = useState(true)

  return (
    <LayoutCon>
      <Header handleAnimatedDown={handleAnimatedDown} />
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()} Frank Lam, Built with GatsbyJS
      </Footer>
    </LayoutCon>
  )

  function handleAnimatedDown(boolean) {
    setAnimatedDown(boolean)
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
