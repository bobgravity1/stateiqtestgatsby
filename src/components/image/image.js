import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"

const Banner = ({data, left, black}) => {
    const image=data.node.childImageSharp.gatsbyImageData
    return (
        <div className={`${left===true?'image-left ':'image-right'} ${black?'white-image':'black-image'} bannerimage`}>
          <GatsbyImage className='bannerimage-image' layout="fixed" image={image}/>
          <h1 className={`${black?'black-text':'white-text'}`}>We offer the highest quality IQ testing service. All results are secure and confidential.</h1>
        </div>
    )
}




export default Banner
