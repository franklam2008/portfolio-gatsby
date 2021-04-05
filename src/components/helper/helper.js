import { navigate } from "gatsby"

export function navigationOnClick(directionString, dispatch) {
  dispatch({ type: "PAGE_CHANGING", payload: directionString })
  window.setTimeout(() => {
    navigate(directionString)
  }, 400) // delay the navigation for animation
}
