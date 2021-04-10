import React from "react"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import { navigationOnClick } from "../components/helper/helper"
import { useStore } from "../context/GlobalContextProvider"
const NavItemCon = styled.span`
  button {
    color: var(--textSaved);
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    transition: 0.2s ease-out;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: var(--textSaved);
    }
  }
  button:focus {
    outline: 0;
  }
  button::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background-image: linear-gradient(
      90deg,
      var(--specialColorSaved),
      var(--mainColorSaved)
    );
    transition: width 0.3s;
  }
  button:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
  @media (max-width: 600px) {
    display: none;
  }
`
const Navigation = () => {
  const { dispatch } = useStore()
  return (
    <NavItemCon className="navItemCon">
      <button
        className="navItem"
        onClick={() => navigationOnClick("/", dispatch)}
      >
        {" "}
        <Icon name="home" />
        <div>Home</div>
      </button>
      <button
        className="navItem"
        onClick={() => navigationOnClick("/projects/", dispatch)}
      >
        {" "}
        <Icon name="suitcase" />
        <div>My Work</div>
      </button>
      <button
        className="navItem"
        onClick={() => navigationOnClick("/skills/", dispatch)}
      >
        {" "}
        <Icon name="wrench" />
        <div>Skill Set</div>
      </button>
      <button
        className="navItem"
        onClick={() => navigationOnClick("/contact/", dispatch)}
      >
        {" "}
        <Icon name="mail outline" />
        <div>Contact</div>
      </button>
    </NavItemCon>
  )
}
export default Navigation
