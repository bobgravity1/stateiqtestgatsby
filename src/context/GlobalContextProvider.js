import React, {createContext, useReducer} from 'react'
// navbar state//reducer
import activeNavReducer from '../reducers/activeNavReducer'
import {initialState} from '../reducers/activeNavReducer'
// questions state//reducer
import questionsReducer from '../reducers/questionsReducer'
import {deckInitialState} from '../reducers/questionsReducer'
//navbar state context
export const ActiveNavStateContext=createContext()
export const ActiveNavDispatchContext=createContext()
//question shuffled deck state context (questions, score, etc)
export const QuestionsStateContext=createContext()
export const QuestionsDispatchContext=createContext()

//this is where the GLOBAL CONTEXT is DEFINED and passed down
//it is best to split up state and dispatch for performance reasonsPropTypes.
//less re renders if only one changes. sometimes only state needed etc. 
const GlobalContextProvider=({children})=>{
    const [state, dispatch] = useReducer(activeNavReducer, initialState);
    const [deckState, deckDispatch] = useReducer(questionsReducer, deckInitialState);
    return (
        <QuestionsStateContext.Provider value={deckState}>
            <QuestionsDispatchContext.Provider value={deckDispatch}>
                <ActiveNavDispatchContext.Provider value={dispatch}>
                    <ActiveNavStateContext.Provider value={state}>
                        {children}
                    </ActiveNavStateContext.Provider>
                </ActiveNavDispatchContext.Provider>
            </QuestionsDispatchContext.Provider>
        </QuestionsStateContext.Provider>
)
}

export default GlobalContextProvider