import { navigate } from "gatsby"

export function navigationOnClick(directionString, dispatch) {
  dispatch({ type: "PAGE_CHANGING", payload: directionString })
  window.setTimeout(() => {
    dispatch({ type: "PAGE_CHANGED" })
    navigate(directionString)
  }, 400)
}
