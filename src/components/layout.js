import React from "react"
import PropTypes from "prop-types"
// pages
import Header from "./header"
// css
import styled from "styled-components"
import "./css/layout.css"
import "./css/app.css"
import WaveSvg from "./svgs/waveSvg"
import { Container, Grid } from "semantic-ui-react"
import { navigationOnClick } from "./helper/helper"
import { useStore } from "../context/GlobalContextProvider"
import ArrowSvg from "./svgs/arrowSvg"

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
const TopCon = styled.div`
  padding-top: 100px;
  background-color: var(--darkerSaved);
  color: var(--textSaved);
  @media (max-width: 600px) {
    padding-top: 120px;
    padding-bottom: 50px;
  }
`
const Title = styled.h1`
  font-size: 3.5em;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 2.1em;
  }
`
const SubTitle = styled.h4`
  font-size: 1.5em;
  font-weight: 500;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
`
const ColorHeader = styled.h2`
  padding-bottom: 30px;
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`
const MyWorkCon = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  button {
    background: none;
    border: none;
    max-height: 30px;
    &:focus {
      outline: 0;
    }
  }
`
const Layout = ({ children }) => {
  const { state, dispatch } = useStore()
  let isHomePage = false
  if (children && children[0].props.title === "Home") {
    isHomePage = true
  }
  return (
    <LayoutCon>
      <Header />
      {isHomePage ? (
        <TopCon>
          <Container>
            <Grid>
              <Grid.Column md={6}>
                <SubTitle>Hi, I'm Frank!</SubTitle>
                <Title>I build amazing experiences</Title>
                <SubTitle>Web Developer from Pittsburgh, PA</SubTitle>
                <MyWorkCon>
                  <ColorHeader className="colorHeader">
                    <strong>
                      <button
                        onClick={() =>
                          navigationOnClick("/projects/", dispatch)
                        }
                      >
                        My Work
                      </button>
                    </strong>
                  </ColorHeader>
                  <button
                    onClick={() => navigationOnClick("/projects/", dispatch)}
                  >
                    <ArrowSvg />
                  </button>
                </MyWorkCon>
              </Grid.Column>
            </Grid>
          </Container>
        </TopCon>
      ) : (
        <></>
      )}
      <WaveSvg pageChanging={state.pageChanging} />
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()} Frank Lam, Built with GatsbyJS
      </Footer>
    </LayoutCon>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
