import React from 'react'
import logo from '../../images/logo.svg'
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
    const containerStyles = {
      height: 16,
      width: '100%',
      backgroundColor: "black",   
      margin:0,
    } 
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      transition:'all .3s ease-out',
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right', 
    }
    const labelStyles = {
        border:"none",
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
    return (
    <> 
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span className='x font' style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </>
    );
  };
  
  export default ProgressBar;