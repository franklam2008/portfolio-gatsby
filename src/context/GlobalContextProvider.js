import React from "react"

// export const GlobalStateContext = React.createContext()
// export const GlobalDispatchContext = React.createContext()
const GlobalContext = React.createContext(null);

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
export const useStore = () => React.useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
