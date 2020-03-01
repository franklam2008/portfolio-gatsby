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
                title: "React E-commerce",
                meta: "React, Gatsby, Contentful",
                text: `Media Single Page React Application built with FireBase authentication. Custom UX/UI design with Bootstrap. Hosting in serverless Netlify`,
                imgName: "contentful.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/shop-gatsby",
                btn2Name: "Live Site",
                btn2Href: "https://shop-gatsby.netlify.com/",
              },
              {
                title: "Media Application",
                meta: "React, FireBase, Bootstrap",
                text: `Media Single Page React Application built with FireBase authentication. Custom UX/UI design with Bootstrap. Hosting in serverless Netlify`,
                imgName: "react1.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/Media-Application",
                btn2Name: "Live Site",
                btn2Href: "https://franklam.app/",
              },
              {
                title: "this.Portfolio",
                meta: "React, Gatsby, Semantic UI",
                text: `React built portfolio with Gatsby JS and Semantic UI design. It is deployed in a cPanel hosting server, FastComet`,
                imgName: "gatsby.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/Portfolio",
                btn2Name: "Live Site",
                btn2Href: "/",
              },
              {
                title: "Business E-commerce",
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
                imgName: "express.png",
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
                      <Button href={project.btnHref} basic target="_blank" color="grey">
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
