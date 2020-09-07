import React from "react"
import styled from "styled-components"
import {
  Button,
  Card,
  //  Image,
  Container,
  Icon,
} from "semantic-ui-react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import wave from "../images/wave/topWave.svg"
import resume from "../images/Frank_Lam.pdf"
import { projectsCon } from "./contents/content"

const ProjectsCon = styled.div`
  .gatsby-image-wrapper {
    width: 35px;
    float: right;
  }
`
export default function projects({ data }) {
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsCon className=" page">
        <div className="projectsTopCon topCon"></div>
        <img className="TopWave" src={wave} alt="wave" />
        <Container fluid>
          <h2 className="pageTitle">
            Projects <br />{" "}
            <small className="colorHeader">
              <strong>
                <a href={resume} target="_blank">
                  resume
                </a>
              </strong>
            </small>{" "}
          </h2>
          <Card.Group centered>
            {projectsCon.map(project => {
              //getting imgSrc from dataObj
              const projectObj = data.allFile.edges.filter(
                ({ node: projectNode }) =>
                  projectNode.childImageSharp.fluid.originalName ===
                  project.imgName
              )
              const imgSrc = projectObj[0].node.childImageSharp.fluid
              return (
                <Card key={project.title}>
                  <Card.Content>
                    <Img fluid={imgSrc} alt={project.title} />
                    <Card.Header>{project.title}</Card.Header>
                    <Card.Meta>{project.meta}</Card.Meta>
                    <Card.Description>{project.text}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      {project.btnName ? (
                        <Button
                          href={project.btnHref}
                          basic
                          target="_blank"
                          color="grey"
                        >
                          {project.btnName} <Icon name="caret right" />
                        </Button>
                      ) : null}

                      {project.btn2Name ? (
                        <Button
                          href={project.btn2Href}
                          basic
                          target="_blank"
                          color="orange"
                        >
                          {project.btn2Name}
                          <Icon name="caret right" />
                        </Button>
                      ) : null}
                    </div>
                  </Card.Content>
                </Card>
              )
            })}
          </Card.Group>
        </Container>
      </ProjectsCon>
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        extension: { eq: "png" }
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "projectIcons" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 300, quality: 50) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
