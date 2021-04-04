import frankIcon from "../images/frank.png"
import React from "react"
import styled from "styled-components"
import Navigation from "./navigation"
import ContactNav from "./contactNav"
import { navigationOnClick } from "../components/helper/helper"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
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
    img {
      margin: 0;
    }
    .navItemCon {
      margin-left: 20px;
      .navItem {
        padding: 0 10px;
        i {
          display: none;
        }
      }
    }
  }
`
const BottomNavbarCSS = styled.nav`
  background-color: white;
  z-index: 5;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  opacity: 0;
  .navItemCon {
    height: 100%;
    margin: 0 auto;
    max-width: 300px;
    display: none;
    justify-content: space-between;
    align-items: center;
    .navItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.7em;
      color: var(--baseColorSaved);
      i {
        font-size: 18px;
      }
    }

    a.active {
      color: var(--mainColorSaved) !important;
    }
  }
  @media (max-width: 600px) {
    opacity: 1;
    .navItemCon {
      display: flex;
      span {
        opacity: 0.7;
      }
    }
  }
`
const MainIcon = styled.img`
  filter: brightness(0) invert(1);
  cursor: pointer;
  max-width: 80px;
`
const Header = () => {
  const dispatch = React.useContext(GlobalDispatchContext)
  return (
    <header>
      <TopNavbarCSS>
        {/* Left Nav */}
        <div className="topNavLeft">
          <div onClick={() => navigationOnClick("/", dispatch)}>
            <MainIcon src={frankIcon} alt="main Icon" />
          </div>
          <Navigation />
        </div>
        {/* Right Nav */}
        <ContactNav />
      </TopNavbarCSS>
      <BottomNavbarCSS>
        <Navigation />
      </BottomNavbarCSS>
    </header>
  )
}

export default Header
