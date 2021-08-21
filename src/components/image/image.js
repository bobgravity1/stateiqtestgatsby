import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = ({data, left, right}) => {
    const image=data.node.childImageSharp.gatsbyImageData
    return (
        <div className={`${left?'image-left ':'image-right'} bannerimage`}>
          <GatsbyImage layout="fixed" image={image} />
        </div>
    )
}




export default Banner
