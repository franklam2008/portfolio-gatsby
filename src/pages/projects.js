import React from "react"
// import { Link } from "gatsby"
import {
  Button,
  Card,
  //  Image,
  Container,
  Icon,
} from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import wave from "../images/wave/topWave.svg"

const projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projectsCon page">
      <div className="projectsTopCon topCon"></div>
      {/* <TopWave /> */}
      <img className="TopWave"src={wave} alt="wave"/>
      <Container fluid>
        <h2 className="pageTitle">Projects</h2>
        <Card.Group centered>
          {[
            {
              title: "Media Application",
              meta: "React, FireBase, SCSS",
              text: `Media Single Page React Application built with FireBase authentication. Custom UX/UI design with Bootstrap. Hosting in serverless Netlify`,
              // imgSrc: react1,
              btnName: "GitHub",
              btnHref: "https://github.com/franklam2008/Media-Application",
              btn2Name: "Live Site",
              btn2Href: "https://franklam.app/",
            },
            {
              title: "this.Portfolio",
              meta: "React, Semantic UI",
              text: `React built portfolio with Semantic UI design. It is deployed in cPanel hosting server, FastComet`,
              // imgSrc: js1,
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
              // imgSrc: wordPress1,
              btnName: "Showcase",
              btnHref: "https://github.com/franklam2008/Portfolio",
            },
            {
              title: "Node Js App",
              meta: "Node, Express, MongoDB",
              text: `Handles API requests and submit to Airtable, Twilio and
              SendGrid. It also perform Web Scraping with Puppeteer in order
              to collect information from other existing website.`,
              // imgSrc: node1,
              btnName: "GitHub",
              btnHref: "https://github.com/franklam2008/WebScrapingAPI",
            },
          ].map(project => (
            <Card key={project.title}>
              <Card.Content>
                {/* <Image
                  floated="right"
                  size="mini"
                  src={project.imgSrc}
                  alt={project.title}
                /> */}
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
          ))}
        </Card.Group>
      </Container>
    </div>
  </Layout>
)

export default projects
