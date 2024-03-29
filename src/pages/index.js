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
                  I possess significant expertise in developing cutting-edge
                  products for businesses and clients as a programmer. My
                  current area of specialization is in Angular 2 and the MERN
                  stack, and my primary goal is to create software that
                  addresses real-world problems for individuals. My unwavering
                  enthusiasm for software development is one of my key traits.
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
