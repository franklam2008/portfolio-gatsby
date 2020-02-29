import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
// import { ReactComponent as TopWave } from "../images/topWave.svg";
import {
  // useStaticQuery,
  graphql,
  // Link
} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Segment, Container, Label, Grid } from "semantic-ui-react"
import wave from "../images/wave/topWave.svg"
const Skill = styled.div`
  margin: 10px auto;
  font-size: 1em;
  overflow: hidden;
  text-align: center;
  .gatsby-image-wrapper {
    margin-bottom: 5px;
    height: 70px;
    img {
      object-fit: contain !important;
    }
  }
  @media (max-width: 600px) {
    .gatsby-image-wrapper {
    height: 50px;
 
  }
  }
`
const Language = styled.p``

export default function skills({ data }) {
  return (
    <Layout>
      <SEO title="Skills" />
      <div className="skillCon page">
        <div className="skillTopCon topCon"></div>
        {/* <TopWave /> */}
        <img className="TopWave" src={wave} alt="wave" />

        <Container className="skillSetCon">
          <h2 className="pageTitle">Specialized Skill Set</h2>
          {/* Front-End */}
          <Segment raised>
            <Label as="a" color="blue" ribbon>
              Front-End
            </Label>
            <Grid className="skills">
              {[
                { name: "React", imgName: "react.png" },
                { name: "JS ES6", imgName: "javaS.png" },
                { name: "SCSS", imgName: "scss.png" },
                { name: "Bootstrap 5", imgName: "bootstrap.png" },
                { name: "Adobe XD", imgName: "xd.png" },
                { name: "HTML 5", imgName: "html.png" },
                { name: "Jquery", imgName: "jquery.png" },
                { name: "WordPress", imgName: "wordPress.png" },
              ].map(skill => {
                const skillObj = data.allFile.edges.filter(
                  ({ node: skillNode }) =>
                    skillNode.childImageSharp.fluid.originalName ===
                    skill.imgName
                )
                const imgSrc = skillObj[0].node.childImageSharp.fluid
                return (
                  <Grid.Column
                    mobile={5}
                    computer={4}
                    largeScreen={2}
                    widescreen={2}
                    key={skill.name}
                  >
                    <Skill>
                      <Img fluid={imgSrc} alt={skill.title} />
                    </Skill>
                    <div style={{ textAlign: "center" }}>{skill.name}</div>
                  </Grid.Column>
                )
              })}
            </Grid>
          </Segment>
          {/* Back-End */}
          <Segment raised>
            <Label as="a" color="orange" ribbon>
              Back-End
            </Label>
            <Grid className="skills">
              {[
                { name: "Node JS", imgName: "node.png" },
                { name: "Firebase", imgName: "firebase.png" },
                { name: "MongoDB", imgName: "mongo.png" },
                { name: "ExpressJS", imgName: "express.png" },
                { name: "Git", imgName: "git.png" },
                { name: "VS Code", imgName: "vs.png" },
              ].map(skill => {
                const skillObj = data.allFile.edges.filter(
                  ({ node: skillNode }) =>
                    skillNode.childImageSharp.fluid.originalName ===
                    skill.imgName
                )
                const imgSrc = skillObj[0].node.childImageSharp.fluid
                return (
                  <Grid.Column
                    mobile={5}
                    computer={4}
                    largeScreen={2}
                    widescreen={2}
                    key={skill.name}
                    style={{ textAlign: "center" }}
                  >
                    <Skill>
                      <Img fluid={imgSrc} alt={skill.title} />
                    </Skill>
                    <div style={{ textAlign: "center" }}>{skill.name}</div>
                  </Grid.Column>
                )
              })}
            </Grid>
          </Segment>
          <Language>
            I can also read and write chinese, and speak fluent Cantonese and
            Mandarin.{" "}
          </Language>
        </Container>
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allFile(
      filter: {
        extension: { eq: "png" }
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "skillIcons" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 100) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
