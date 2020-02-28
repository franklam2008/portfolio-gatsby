import React from "react"
import styled from "styled-components"
// import { ReactComponent as TopWave } from "../images/topWave.svg";
import {
  // useStaticQuery,
  graphql,
  // Link
} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  // Image,
  Segment,
  Container,
  Label,
  Grid,
} from "semantic-ui-react"
// const Skill = styled.div`
//   margin: 10px 0;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   height: 100%;
//   font-size: 0.8em;
//   img {
//     margin-bottom: 5px;
//     max-height: 50px;
//   }
// `
const Language = styled.p``

export default function skills({ data }) {
  console.log("log", data.allFile.edges)
  // const { title, description } = useSiteMetadata()

  return (
    <Layout>
      <SEO title="Skills" />
      <div className="skillCon page">
        <div className="skillTopCon topCon"></div>
        {/* <TopWave /> */}
        <Container className="skillSetCon">
          <h2 className="pageTitle">Specialized Skill Set</h2>
          {/* Front-End */}
          <Segment raised>
            <Label as="a" color="blue" ribbon>
              Front-End
            </Label>
            <Grid className="skills">
              {/* {[
              { name: "React", src: ReactJS },
              { name: "JS ES6", src: js },
              { name: "SCSS", src: scss },
              { name: "Bootstrap 5", src: bootstrap },
              { name: "Adobe XD", src: xd },
              { name: "HTML 5", src: html },
              { name: "Jquery", src: jquery },
              { name: "WordPress", src: WordPress }
            ].map(skill => (
              <Grid.Column
                mobile={5}
                computer={4}
                largeScreen={2}
                key={skill.name}
              >
                <Skill>
                  <Image src={skill.src} />
                  <div>{skill.name}</div>
                </Skill>
              </Grid.Column>
            ))} */}
            </Grid>
          </Segment>
          {/* Back-End */}
          <Segment raised>
            <Label as="a" color="orange" ribbon>
              Back-End
            </Label>
            <Grid className="skills">
              {/* {[
              { name: "Node JS", src: Node },
              { name: "Firebase", src: firebase },
              { name: "MongoDB", src: Mongo },
              { name: "ExpressJS", src: express },
              { name: "Git", src: git },
              { name: "VS Code", src: vs }
            ].map(skill => (
              <Grid.Column
                mobile={5}
                computer={4}
                largeScreen={2}
                key={skill.name}
              >
                <Skill>
                  <Image src={skill.src} />
                  <div>{skill.name}</div>
                </Skill>
              </Grid.Column>
            ))} */}
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
    allFile(filter: { relativeDirectory: { eq: "icons" } }) {
      edges {
        node {
          size
          absolutePath
          relativePath
        }
      }
    }
  }
`
