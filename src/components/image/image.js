import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = ({data, left}) => {
    const image=data.node.childImageSharp.gatsbyImageData
    console.log(left)
    return (
        <div className={`${left===true?'image-left ':'image-right'} bannerimage`}>
          <GatsbyImage className='bannerimage-image' layout="fixed" image={image} />
          <h1>We offer top quality service. private score. and anonymous whatever</h1>
        </div>
    )
}




export default Banner
