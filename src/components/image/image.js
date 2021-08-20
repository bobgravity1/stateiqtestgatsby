import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Banner = ({data}) => {
    const image=data.node.childImageSharp.gatsbyImageData
    const imageStyle={
      padding:8
    }
    return (
        <div className='bannerimage'>
          <GatsbyImage layout={"fullWidth"} style={imageStyle} image={image} />
        </div>
    )
}




export default Banner
