import React, {createContext, useReducer} from 'react'

export const GlobalStateContext=createContext()
export const GlobalDispatchContext=createContext()

const initialState={
    active:false
}

function reducer(state, action) { 
    switch (action.type) {
      case 'SET_ACTIVE':
        return {
            ...state, 
            active:!state.active
        }
  default:
    throw new Error('ERROR - Refer to Reducer')
}   
}
  
const GlobalContextProvider=({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
)
}

export default GlobalContextProvider