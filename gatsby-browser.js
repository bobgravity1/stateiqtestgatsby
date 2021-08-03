import Layout from './src/components/layout.js';
import React, {createContext, useState} from 'react'
// export context
import GlobalContextProvider from './src/context/GlobalContextProvider'

const App=({children})=>{
    return (
    <GlobalContextProvider>{children}</GlobalContextProvider>
    )
}
// THIS IS IF WE WAMNT TO WRAP SITE IN NABVBAR AND FOOTER. 
// NOT AS EFFECTIVE FOR OUR NEEDS OF PASSING STATE THROUGH ALL COMPONENTS
export const wrapRootElement=({element, props})=>{
    return (<App {...props}>{element}</App>)
}