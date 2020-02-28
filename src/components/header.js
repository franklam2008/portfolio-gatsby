import { Link } from "gatsby"
import frankIcon from "../images/frank.png"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import NavItems from "./navItems"
import ContactNav from "./contactNav"
const TopNavbarCSS = styled.nav`
  background-color: var(--darkerSaved);
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  padding: 10px 20px;
  .topNavLeft {
    display: flex;
    align-items: center;
    img{
      margin:0;
    }
    .navItemCon {
      margin-left: 20px;
      .navItem {
        padding: 0 10px;
        svg {
          display: none;
        }
      }
    }
  }
`
const MainIcon = styled.img`
  filter: brightness(0) invert(1);
  max-width: 80px;
`
const Header = ({ siteTitle }) => (
  <header>
    <TopNavbarCSS>
      <div className="topNavLeft">
        <Link to="/">
          <MainIcon src={frankIcon} alt="main Icon" />
        </Link>
        <NavItems />
      </div>
      <ContactNav />
    </TopNavbarCSS>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
