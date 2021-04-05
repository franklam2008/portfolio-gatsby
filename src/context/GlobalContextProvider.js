import React from "react"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
  pageChanging: false,
  currentPage: "/",
}

function reducer(state, action) {
  switch (action.type) {
    case "PAGE_CHANGING": {
      const isPageDifferent = state.currentPage !== action.payload
      const nextPage = isPageDifferent ? action.payload : state.currentPage
      return {
        ...state,
        pageChanging: isPageDifferent && !state.pageChanging ? true : false,
        currentPage: nextPage,
      }
    }
    case "PAGE_CHANGED": {
      return {
        ...state,
        pageChanging: false,
      }
    }
    //default
    default:
      return state
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
