import React from "react"
import styled from "styled-components"
import {
  Button,
  Card,
  //  Image,
  Container,
  Icon,
} from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import wave from "../images/wave/topWave.svg"
import wt from "../images/wtFrontPage.png"
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
        {/* <TopWave /> */}
        <img className="TopWave" src={wave} alt="wave" />
        <Container fluid>
          <h2 className="pageTitle">Projects</h2>
          <Card.Group centered>
            {[
              {
                title: "Media Application",
                meta: "React, FireBase, SCSS",
                text: `Media Single Page React Application built with FireBase authentication. Custom UX/UI design with Bootstrap. Hosting in serverless Netlify`,
                imgName: "react1.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/Media-Application",
                btn2Name: "Live Site",
                btn2Href: "https://franklam.app/",
              },
              {
                title: "this.Portfolio",
                meta: "React, Semantic UI",
                text: `React built portfolio with Semantic UI design. It is deployed in cPanel hosting server, FastComet`,
                imgName: "js1.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/Portfolio",
              },
              {
                title: "Business Website",
                meta: "WordPress, PHP",
                text: ` WordPress built E-commerce website that generate over hundred
              thousand sales via the utilization of Getresponse and Pipedrive
              for custom HTML email marketing campaign and CRM. Live chat
              integrates with Tidio and Zendesk for the support ticket system.`,
                imgName: "wordPress1.png",
                btnName: "Showcase",
                btnHref: wt,
              },
              {
                title: "Node Js App",
                meta: "Node, Express, MongoDB",
                text: `Handles API requests and submit to Airtable, Twilio and
              SendGrid. It also perform Web Scraping with Puppeteer in order
              to collect information from other existing website.`,
                imgName: "node1.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/WebScrapingAPI",
              },
            ].map(project => {
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
                      <Button href={project.btnHref} basic color="grey">
                        {project.btnName} <Icon name="caret right" />
                      </Button>
                      {project.btn2Name ? (
                        <Button href={project.btn2Href} basic color="orange">
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
