import React from "react"
import styled from "styled-components"
import { Container, Grid } from "semantic-ui-react"

// components
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStore } from "../context/GlobalContextProvider"
import "semantic-ui-css/semantic.min.css"
import VSensorjs from "../components/VisibilitySensor"

const HomeCon = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 30vh;
`

const BottomCon = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .TopWave {
    position: absolute;
    top: 0;
  }
`
const HomeParagraph = styled.p`
  font-size: 1.3em;
  max-width: 600px;
  margin: 0 auto;
  color: var(--subTextSaved);
  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`

const IndexPage = () => {
  const { dispatch } = useStore()
  React.useEffect(() => {
    dispatch({ type: "PAGE_CHANGED" })
  }, [dispatch])
  return (
    <Layout>
      <SEO title="Home" />
      <HomeCon className="page">
        <BottomCon>
          <Container>
            <VSensorjs>
              <Grid>
                <HomeParagraph>
                  Since the beginning days of my programming career, I've been
                  developing and building great products for businesses &amp;
                  clients. My favorite technologies right now are Angular 2 and
                  MERN stack. I believe one of the main goals for a good
                  developer is building software for people. And I'm totally in
                  love with it all.
                </HomeParagraph>
              </Grid>
            </VSensorjs>
          </Container>
        </BottomCon>
      </HomeCon>
    </Layout>
  )
}

export default IndexPage
