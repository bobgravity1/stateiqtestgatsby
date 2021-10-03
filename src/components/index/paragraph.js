import React from 'react';
import Image from '../image/image'
let images;
const Paragraph = ({header, text, left, data, whiteText}) => {
    if(data){
       images=data.allFile.edges
    }
    return (
        <div className={`${whiteText&&'white'} p-container`}>
            {header?
            <>
                <div className="segment">
                {data&&<Image black={whiteText} right data={images[1]} />}
                    {/* here we are asking if this paragraph has a header passed down. if so render it */}
                    {/* here we are also asking if the paragraph is to the left of an image or right? to show margins accordingly */}
                    <div className={`${!header&&'header-text'} ${left?'paragraph-left':'paragraph-right'} paragraph`}>
                    <h1 className="title paragraph-header">{header}</h1>
                    <div className={`text paragraph-paragraph `}>{text}</div> 
                    </div>    
                </div>       
             </>
             :
             <>
                {data&&<Image black={whiteText} left={left&&true} data={images[1]} />}
                <div className={`${!header&&'header-text'} ${left?'paragraph-right':'paragraph-left'} paragraph-normal paragraph`}>  
                <p className='text paragraph-paragraph'>{text}</p> 
                </div>
             </>
            }           
        </div>
    )
}

export default Paragraph
