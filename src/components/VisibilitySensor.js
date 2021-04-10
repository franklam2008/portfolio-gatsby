import React from "react"
import VSensor from "react-visibility-sensor"

const VisibilitySensor = ({ children }) => {
  return (
    <VSensor partialVisibility>
      {({ isVisible }) => (
        <div className={isVisible ? "visible" : "invisible"}>{children}</div>
      )}
    </VSensor>
  )
}
export default VisibilitySensor
