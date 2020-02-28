import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const NavItemCon = styled.span`
  a {
    color: var(--textSaved);
    display: inline-block;
    transition: 0.2s ease-out;
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: var(--textSaved);
    }
  }
  a::after {
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
  a:hover::after {
    width: 100%;
    transition: width 0.3s;
  }
  @media (max-width: 600px) {
    display: none;
  }
`
export default function navItems() {
  return (
    <NavItemCon className="navItemCon">
      <Link className="navItem" to="/">
        {" "}
        <span>Home</span>
      </Link>

      <Link className="navItem" to="/projects/">
        {" "}
        <span>My Work</span>
      </Link>
      <Link className="navItem" to="/skills/">
        {" "}
        <span>Skill Set</span>
      </Link>
      <Link className="navItem" to="/contact/">
        {" "}
        <span>Contact</span>
      </Link>
    </NavItemCon>
  )
}
