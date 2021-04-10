import React from "react"
import "./css/waveSvg.css"

const WaveSvg = ({ pageChanging }) => {
  const [start, setStart] = React.useState(true)
  React.useEffect(() => {
    window.setTimeout(() => {
      setStart(false)
    }, 100) // prevent weird anmination when page switchings
  }, []) 
  return (
    <div className={start ? "hide" : waveClass(pageChanging)}>
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
  )

  function waveClass(pageChanging) {
    return pageChanging ? "TopWave animatedUp" : "TopWave animatedDown"
  }
}

export default WaveSvg
