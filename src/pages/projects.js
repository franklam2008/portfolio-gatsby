import React from "react"
import styled from "styled-components"
import { Button, Card, Container, Icon } from "semantic-ui-react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import wt from "../images/wtFrontPage.png"
import resume from "../images/Frank_Lam.pdf"
import { useStore } from "../context/GlobalContextProvider"
import VSensorjs from "../components/VisibilitySensor"

const ProjectsCon = styled.div`
  .gatsby-image-wrapper {
    width: 35px;
    float: right;
  }
`
export default ({ data }) => {
  const { dispatch } = useStore()
  React.useEffect(() => {
    dispatch({ type: "PAGE_CHANGED" })
  }, [dispatch])
  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectsCon className=" page">
        <div className="projectsTopCon topCon"></div>
        <Container fluid>
          <VSensorjs>
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
                  text: `Experienced in building and maintaining Angular applications utilized by thousands of customers daily. Collaborated with a diverse group of educational professionals to design and deploy educational software across the K-12 curriculum in the U.S. Improved structural layout, implemented strict-typing, and developed legacy applications to enhance functionality and user experience`,
                  imgName: "cl.png",
                  btnName: "GitHub",
                  btnHref:
                    "https://github.com/CarnegieLearningWeb/passport-frontend-v2",
                  btn2Name: "Live Site",
                  btn2Href: "https://www.carnegielearning.com/login/#/",
                },
                {
                  title: "Huntington Bank BAO",
                  meta: "Angular, TypeScript, Ngrx, RxJS",
                  text: `Involved in Angular projects for Huntington Bank's Business Online Account Opening flow, utilizing Agile Scrum methodologies. Expertise in using TypeScript, Ngrx, and RxJS for app state management and component implementation. Improved code unit test coverage from 11% to 80% with the use of Jest testing framework, ensuring the quality of the release branch`,
                  imgName: "hnb.png",
                  btn2Name: "Live Site",
                  btn2Href:
                    "https://apply.huntington.com/new/business/welcome?product=PT",
                },
                {
                  title: "this.Portfolio",
                  meta: "React, Gatsby, Semantic UI",
                  text: `Built a portfolio utilizing React and Gatsby JS, incorporating a design inspired by Semantic UI. The portfolio is hosted on a serverless Netlify platform for optimized performance and reliability.`,
                  imgName: "gatsby.png",
                  btnName: "GitHub",
                  btnHref: "https://github.com/franklam2008/Portfolio",
                },
                {
                  title: "Professional Banking Dashboard",
                  meta: "React, Create-React-App, Material UI",
                  text: `Developed a professional banking dashboard using React and Redux for state management, with a user-friendly design based on Material UI.`,
                  imgName: "garden.png",
                  btnName: "GitHub",
                  btnHref: "https://github.com/franklam2008/banking-dashboard",
                  btn2Name: "Live Site",
                  btn2Href: "https://banking-dashboard.netlify.com",
                },
                {
                  title: "Media Application",
                  meta: "React, FireBase, Bootstrap",
                  text: `Media-focused single page React application, featuring FireBase authentication. Customized the user experience with a unique UX/UI design using Bootstrap. Hosted the application on a serverless Netlify platform for efficient and scalable performance.`,
                  imgName: "react1.png",
                  btnName: "GitHub",
                  btnHref: "https://github.com/franklam2008/Media-Application",
                  btn2Name: "Live Site",
                  btn2Href: "https://kflam.netlify.app/",
                },
                {
                  title: "Business E-commerce",
                  meta: "WordPress, PHP",
                  text: `Developed an E-commerce website using WordPress, which has generated over hundred thousand sales through the integration of Getresponse and Pipedrive for custom HTML email marketing campaigns and CRM. The website also includes live chat functionality powered by Tidio and a support ticket system using Zendesk.`,
                  imgName: "wordPress1.png",
                  btnName: "Showcase",
                  btnHref: wt,
                },
                {
                  title: "Node Js App",
                  meta: "Node, Express, MongoDB",
                  text: `Manages API requests and submits them to Airtable, Twilio, and SendGrid. Also performs web scraping with Puppeteer to gather information from other websites.`,
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
                      <Img
                        draggable={false}
                        fluid={imgSrc}
                        alt={project.title}
                      />
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
          </VSensorjs>
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
