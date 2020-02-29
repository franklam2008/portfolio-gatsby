import React, { useState, useRef } from "react"
import axios from "axios"

import { useSiteMetadata } from "../hooks/use-site-metadata"

import Layout from "../components/layout"
import ContactNav from "../components/contactNav"
import SEO from "../components/seo"
import wave from "../images/wave/topWave.svg"
import styled from "styled-components"
import { Container, Checkbox, Form, Button, Icon } from "semantic-ui-react"
const ContactCon = styled.div`
  .ContactNav {
    margin: 20px auto;
    justify-content: center;
    text-align: center;
    a {
      i {
        color: var(--darkerSaved);
        font-size: 1.5rem;
        margin: 0 10px;
        &:hover {
          color: var(--mainColorSaved);
        }
      }
    }
  }
`
const MadeWith = styled.p`
  margin: 20px;
  text-align: center;
  .heart {
    color: var(--specialColorSaved);
    padding-top: 2px;
  }
`
export default () => {
  const { title } = useSiteMetadata()
  const [formMsg, setFormMsg] = useState("")
  const [checkbox, setCheckbox] = useState(false)
  const emailInput = useRef()
  const nameInput = useRef()
  const phoneInput = useRef()
  const messageInput = useRef()
  console.log(title);
  
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactCon className="page">
        <div className="contactTopCon topCon"></div>
        <img className="TopWave" src={wave} alt="wave" />
        <Container>
          <h2 className="pageTitle">Contact Me</h2>
          <Form className="contactForm" onSubmit={handleForm}>
            <p>
              Let's talk! I would love to hear your project idea, I'll get the
              beer.
            </p>
            {formMsg !== "Submission Successful" ? (
              <>
                <Form.Field>
                  <input
                    className="inputSaved"
                    type="text"
                    ref={nameInput}
                    placeholder="Name"
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    className="inputSaved"
                    type="email"
                    ref={emailInput}
                    placeholder="Enter email"
                    required
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    className="inputSaved"
                    type="tel"
                    ref={phoneInput}
                    placeholder="Phone Number"
                    required
                  />
                </Form.Field>

                <Form.Field>
                  <input
                    className="inputSaved"
                    type="text"
                    ref={messageInput}
                    placeholder="Message"
                    required
                  />
                </Form.Field>

                <Form.Field>
                  <Checkbox
                    checked={checkbox}
                    onChange={() => setCheckbox(!checkbox)}
                    label="Send me a SMS &amp; Email"
                  />
                </Form.Field>
                <p>
                  We'll never share your information with anyone else saving it
                  in Airtable and send you a SMS and Email via Twilio and
                  SendGrid API.
                </p>
                <Button type="submit">Submit</Button>
              </>
            ) : (
              <div>Thank you!</div>
            )}
            <span style={{ marginLeft: 10 }}>{formMsg}</span>
          </Form>
          <ContactNav />
          <MadeWith>
            Made with <Icon name="heart" /> in Orlando, Florida
          </MadeWith>
        </Container>
      </ContactCon>
    </Layout>
  )
  function handleForm(e, value) {
    e.preventDefault()
    const input = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
      message: messageInput.current.value,
      checkbox: checkbox,
    }

    sendForm(input)
  }
  function sendForm(input) {
    console.log(input)
    axios
      // .post("http://localhost:4000/submit", input)
      .post("https://secure-peak-92770.herokuapp.com/submit", input)
      .then(res => {
        console.log(res)
        setFormMsg(res.data)
      })
      .catch(err => {
        console.log(err)
        setFormMsg("Connected Error")
      })
  }
}
