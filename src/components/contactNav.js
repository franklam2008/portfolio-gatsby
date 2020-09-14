import React from "react"
import styled from "styled-components"
import { Menu, Icon } from "semantic-ui-react"
import resume from "../images/Frank_Lam.pdf"
const ContactNavCSS = styled.div`
  i {
    margin: 0.5em 0.5em;
    font-size: 1.5em;
    color: var(--textSaved);
    transition: 0.5s all;
    &:hover {
      color: var(--mainColorSaved);
    }
  }
  @media (max-width: 600px) {
    svg {
      font-size: 1.2em;
      margin-right: 0.5em;
    }
  }
`
export default function contactNav() {
  return (
    <ContactNavCSS className="ContactNav">
      <Menu.Item
        href={resume}
        target="_blank"
        data-inverted=""
        data-tooltip="Resume"
        data-position="bottom right"
      >
        <Icon name="newspaper outline" />
      </Menu.Item>
      <Menu.Item
        href="https://github.com/franklam2008"
        target="_blank"
        data-inverted=""
        data-tooltip="GitHub"
        data-position="bottom right"
      >
        <Icon name="github" />
      </Menu.Item>
      <Menu.Item
        href="mailto:franklam2008@gmail.com"
        target="_blank"
        data-inverted=""
        data-tooltip="E-mail"
        data-position="bottom right"
      >
        <Icon name="mail" />
      </Menu.Item>
      <Menu.Item
        href="https://www.linkedin.com/in/frank-lam-010a9253"
        target="_blank"
        data-inverted=""
        data-tooltip="Linkedin"
        data-position="bottom right"
      >
        <Icon name="linkedin" />
      </Menu.Item>
    </ContactNavCSS>
  )
}
