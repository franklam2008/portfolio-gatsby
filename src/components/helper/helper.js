import { navigate } from "gatsby"

export function navigationOnClick(directionString, dispatch, currentPage) {
  const fromHomePage = currentPage === "/" // homePage
  const timeDelay = fromHomePage ? 500 : 200
  dispatch({ type: "PAGE_CHANGING", payload: directionString })
  window.setTimeout(() => {
    navigate(directionString)
  }, timeDelay) // delay the navigation for animation
}
