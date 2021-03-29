import React from "react"
import styled from "styled-components"
import { GlobalStateContext } from "../../context/GlobalContextProvider"
const WaveSvgCss = styled.div`
  .TopWave {
    margin-left: -20px;
    margin-top: -10px;
    margin-bottom: -5vw;
    max-width: 120%;
    width: 120%;
    transform-origin: top;
  }
  .animatedDown {
    animation: animateWaveDown 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  .animatedUp {
    animation: animateWaveUp 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
  }
  @keyframes animateWaveDown {
    0% {
      transform: scale(1, 0.2);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes animateWaveUp {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 0.2);
    }
  }
  @media only screen and (min-width: 1100px) {
    .TopWave {
      margin-bottom: -10vw;
    }
    .animatedDown {
      animation: animateWaveDown 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    .animatedUp {
      animation: animateWaveUp 2000ms cubic-bezier(0.23, 1, 0.32, 1) forwards;
    }
    @keyframes animateWaveDown {
      0% {
        transform: scale(1, 0.2);
      }
      100% {
        transform: scale(1, 0.5);
      }
    }
    @keyframes animateWaveUp {
      0% {
        transform: scale(1, 0.5);
      }
      100% {
        transform: scale(1, 0.2);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .TopWave {
      margin-bottom: -5vw;
      animation: none;
    }
  }
`

const WaveSvg = () => {
  const state = React.useContext(GlobalStateContext)
  return (
    <WaveSvgCss>
      <div
        className={
          state.pageChanging ? "TopWave animatedUp" : "TopWave animatedDown"
        }
      >
        <svg
          className="topWave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 200"
        >
          <path
            fill="#0f0e16"
            fillOpacity="1"
            d="M0,192L80,165.3C160,139,320,85,480,69.3C640,53,800,75,960,85.3C1120,96,1280,96,1360,96L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </WaveSvgCss>
  )
}

export default WaveSvg
