import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, Grid, Icon } from "semantic-ui-react"
import wave from "../images/wave/topWave.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "semantic-ui-css/semantic.min.css"

const HomeCon = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
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

const BottomCon = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .TopWave {
    position: absolute;
    top:0;
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
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <HomeCon className="page">
      <TopCon>
        <Container>
          <Grid>
            <Grid.Column md={6}>
              <SubTitle>Hi, I'm Frank!</SubTitle>
              <Title>I build amazing experience</Title>
              <SubTitle>Web Developer from Orlando, FL</SubTitle>
              <ColorHeader className="colorHeader">
                <strong>
                  <Link to="/projects/">My Work</Link>
                </strong>
                <Icon name="angle right" />
              </ColorHeader>
            </Grid.Column>
          </Grid>
        </Container>
      </TopCon>
      <BottomCon>
        <img className="TopWave" src={wave} alt="wave" />

        <Container>
          <Grid>
            <HomeParagraph>
              Since the beginning days of my self-taught programming career,
              I've been developing and building great products for businesses
              &amp; clients. My favorite technologies right now are: React.js,
              GraphQL, Node.js, and Firebase. I believe one of the main goals
              for a good developer is building software for people. And I'm
              totally in love with it all.
            </HomeParagraph>
          </Grid>
        </Container>
      </BottomCon>
    </HomeCon>
  </Layout>
)

export default IndexPage
