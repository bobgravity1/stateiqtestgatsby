import Layout from './src/components/layout.js';
import React from 'react'


// THIS IS IF WE WAMNT TO WRAP SITE IN NABVBAR AND FOOTER. 
// NOT AS EFFECTIVE FOR OUR NEEDS OF PASSING STATE THROUGH ALL COMPONENTS
export function wrapPageElement({element, props}){
    return (<Layout {...props}>{element}</Layout>)
}