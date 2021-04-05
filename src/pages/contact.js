import React, { useState, useRef } from "react"
import axios from "axios"
import Layout from "../components/layout"
import ContactNav from "../components/contactNav"
import SEO from "../components/seo"
import styled from "styled-components"
import { Container, Checkbox, Form, Button, Icon } from "semantic-ui-react"
import WaveSvg from "../components/svgs/waveSvg"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
const ContactCon = styled.div`
  .contactForm {
    max-width: 500px;
    margin: 0 auto;
  }
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
  const [formMsg, setFormMsg] = useState("")
  const [checkbox, setCheckbox] = useState(false)
  const emailInput = useRef()
  const nameInput = useRef()
  const phoneInput = useRef()
  const messageInput = useRef()
  const dispatch = React.useContext(GlobalDispatchContext)
  dispatch({ type: "PAGE_CHANGED" })

  return (
    <Layout>
      <SEO title="Contact" />
      <ContactCon className="page">
        <div className="contactTopCon topCon"></div>
        <WaveSvg />
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
                  I'll never share your information with anyone else. it saves
                  in Airtable securly and send you a SMS and Email via Twilio
                  and SendGrid API.
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
            Made with <Icon name="heart" /> in Pittsburgh, Pennsylvania
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
    axios
      .post("https://secure-peak-92770.herokuapp.com/submit", input)
      .then(res => {
        setFormMsg(res.data)
      })
      .catch(err => {
        setFormMsg("Connected Error")
      })
  }
}
