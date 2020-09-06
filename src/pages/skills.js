import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Segment, Container, Label, Grid } from "semantic-ui-react"
import wave from "../images/wave/topWave.svg"
import {
  skillsFrontEndCon,
  skillsBackEndCon,
  skillsOthersCon,
} from "./contents/content"
const Skill = styled.div`
  margin: 10px auto;
  overflow: hidden;
  div {
  }
  .gatsby-image-wrapper {
    margin-bottom: 5px;
    height: 70px;
    img {
      object-fit: contain !important;
    }
  }
  @media (max-width: 600px) {
    .gatsby-image-wrapper {
      height: 35px;
    }
  }
`
const Language = styled.p``
const SkillName = styled.div`
  text-align: center;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`
export default function skills({ data }) {
  return (
    <Layout>
      <SEO title="Skills" />
      <div className="skillCon page">
        <div className="skillTopCon topCon"></div>
        <img className="TopWave" src={wave} alt="wave" />

        <Container className="skillSetCon">
          <h2 className="pageTitle">Specialized Skill Set</h2>
          {/* Front-End */}
          <Segment raised>
            <Label as="a" color="blue" ribbon>
              Front-End
            </Label>
            <Grid className="skills">
              {skillsFrontEndCon.map(skill => {
                const skillObj = data.allFile.edges.filter(
                  ({ node: skillNode }) =>
                    skillNode.childImageSharp.fluid.originalName ===
                    skill.imgName
                )
                const imgSrc = skillObj[0].node.childImageSharp.fluid
                return (
                  <Grid.Column
                    mobile={4}
                    computer={3}
                    largeScreen={2}
                    widescreen={2}
                    key={skill.name}
                  >
                    <Skill>
                      <Img fluid={imgSrc} alt={skill.name} />
                    </Skill>
                    <SkillName>{skill.name}</SkillName>
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
              {skillsBackEndCon.map(skill => {
                const skillObj = data.allFile.edges.filter(
                  ({ node: skillNode }) =>
                    skillNode.childImageSharp.fluid.originalName ===
                    skill.imgName
                )
                const imgSrc = skillObj[0].node.childImageSharp.fluid
                return (
                  <Grid.Column
                    mobile={4}
                    computer={3}
                    largeScreen={2}
                    widescreen={2}
                    key={skill.name}
                  >
                    <Skill>
                      <Img fluid={imgSrc} alt={skill.name} />
                    </Skill>
                    <SkillName>{skill.name}</SkillName>
                  </Grid.Column>
                )
              })}
            </Grid>
          </Segment>
          <Segment raised>
            <Label as="a" color="yellow" ribbon>
              Others
            </Label>
            <Grid className="skills">
              {skillsOthersCon.map(skill => {
                const skillObj = data.allFile.edges.filter(
                  ({ node: skillNode }) =>
                    skillNode.childImageSharp.fluid.originalName ===
                    skill.imgName
                )
                const imgSrc = skillObj[0].node.childImageSharp.fluid
                return (
                  <Grid.Column
                    mobile={4}
                    computer={3}
                    largeScreen={2}
                    widescreen={2}
                    key={skill.name}
                  >
                    <Skill>
                      <Img fluid={imgSrc} alt={skill.name} />
                    </Skill>
                    <SkillName>{skill.name}</SkillName>
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
