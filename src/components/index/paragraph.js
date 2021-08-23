import React from 'react';
import Image from '../image/image'
let images;
const Paragraph = ({header, text, left, data, white}) => {
    console.log(text)
    if(data){
       images=data.allFile.edges
    }
    return (
        <div className={`${white&&'white'} p-container`}>
            {header?
            <>
                <div className="segment">
                {data&&<Image right data={images[2]} />}
                    {/* here we are asking if this paragraph has a header passed down. if so render it */}
                    {/* here we are also asking if the paragraph is to the left of an image or right? to show margins accordingly */}
                    <div className={`${!header&&'header-text'} ${left?'paragraph-left':'paragraph-right'} paragraph`}>
                    <h1 className="title paragraph-header">{header}</h1>
                    <div className={`text paragraph-paragaph `}>{text[0]}</div> 
                    <div className='text paragraph-paragraph'>{text[1]}</div>
                    </div>    
                </div>       
             </>
             :
             <>
                {data&&<Image left={left&&true} data={images[1]} />}
                <div className={`${!header&&'header-text'} ${left?'paragraph-right':'paragraph-left'} paragraph-normal paragraph`}>  
                <p className='text paragraph-paragraph'>{text[2]}</p> 
                <p className='text paragraph-paragraph'>{text[3]}</p> 
                </div>
             </>
            }           
        </div>
    )
}

export default Paragraph
