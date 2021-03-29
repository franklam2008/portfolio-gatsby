import React from "react"
import styled from "styled-components"
import {
  Button,
  Card,
  Container,
  Icon,
} from "semantic-ui-react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import WaveSvg from "../components/svgs/waveSvg"
import wt from "../images/wtFrontPage.png"
import resume from "../images/Frank_Lam.pdf"
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
        <WaveSvg />
        <Container fluid>
          <h2 className="pageTitle">
            Projects <br />{" "}
            <small className="colorHeader">
              <strong>
                <a href={resume} target="_blank" rel="noreferrer">
                  resume
                </a>
              </strong>
            </small>{" "}
          </h2>
          <Card.Group centered>
            {[
              {
                title: "Carnegie Learning",
                meta: "Angular, TypeScript, Ngrx, RxJS",
                text: `Collaborated with a multidisciplinary group of educational professionals to develop and deploy educational software used across the U.S. within the K-12 curriculum. Improved structural layout and added strict-typing to existing Angular codebase.`,
                imgName: "cl.png",
                btnName: "GitHub",
                btnHref:
                  "https://github.com/CarnegieLearningWeb/passport-frontend-v2",
                btn2Name: "Live Site",
                btn2Href: "https://passport.qa-cli.com/#/login/form",
              },
              {
                title: "Huntington Bank BAO",
                meta: "Angular, TypeScript, Ngrx, RxJS",
                text: `Worked on Angular project for Huntington bank Business Account Opening flow. Utilized TypeScript, Ngrx and RxJS for app state management. Unfortunately, I cannot showcase code here for banking security reason.`,
                imgName: "hnb.png",
                btn2Name: "Live Site",
                btn2Href:
                  "https://apply.huntington.com/new/business/welcome?product=PT",
              },
              {
                title: "this.Portfolio",
                meta: "React, Gatsby, Semantic UI",
                text: `React built portfolio with Gatsby JS and Semantic UI design. It is deployed in a cPanel hosting server, FastComet.`,
                imgName: "gatsby.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/Portfolio",
              },
              {
                title: "Professional Banking Dashboard",
                meta: "React, Create-React-App, Material UI",
                text: `React built professional banking dashboard with Redux for state management and Material UI design`,
                imgName: "garden.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/banking-dashboard",
                btn2Name: "Live Site",
                btn2Href: "https://banking-dashboard.netlify.com",
              },
              {
                title: "Media Application",
                meta: "React, FireBase, Bootstrap",
                text: `Media Single Page React Application built with FireBase authentication. Custom UX/UI design with Bootstrap. Hosting in serverless Netlify.`,
                imgName: "react1.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/Media-Application",
                btn2Name: "Live Site",
                btn2Href: "https://franklam.app/",
              },

              {
                title: "React E-commerce",
                meta: "React, Gatsby, Contentful",
                text: `Gatsby built E-commerce website with lightspeed load time and custom SEO for excellent user experience, manage product inventory with Contentful Graphql API.`,
                imgName: "contentful.png",
                btnName: "GitHub",
                btnHref: "https://github.com/franklam2008/shop-gatsby",
                btn2Name: "Live Site",
                btn2Href: "https://shop-gatsby.netlify.com/",
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
