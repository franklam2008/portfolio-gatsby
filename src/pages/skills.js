import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Segment, Container, Label, Grid } from "semantic-ui-react"
import WaveSvg from "../components/svgs/waveSvg"
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
        <WaveSvg />

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
                { name: "TypeScript", imgName: "typescript.png" },
                { name: "Angular2", imgName: "angular.png" },
                { name: "Ngrx", imgName: "ngrx.png" },
                { name: "RxJS", imgName: "rxjs.png" },
                { name: "Gatsby", imgName: "gatsby.png" },
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
              {[
                { name: "Node JS", imgName: "node.png" },
                { name: "Graphql", imgName: "graphql.png" },
                { name: "Firebase", imgName: "firebase.png" },
                { name: "ExpressJS", imgName: "express.png" },
              ].map(skill => {
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
              {[
                { name: "Contentful", imgName: "contentful.png" },
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
