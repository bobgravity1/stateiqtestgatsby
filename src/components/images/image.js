import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({image}) => {
    return (
        <div>
     <GatsbyImage image={image} />
        </div>
    )
}

export default Image
