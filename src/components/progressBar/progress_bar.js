import React from 'react'
import logo from '../../images/logo.svg'
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
    const containerStyles = {
      height: 16,
      width: '100%',
      backgroundColor: "white",   
      margin:0,
    } 
    const fillerStyles = {
      height: '100%',
      boxShadow:'rgba(0, 0, 0, 0.45) 10px -30px 8px -28px inset',
      width: `${completed}%`,
      transition:'all .3s ease-out',
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right', 
      borderTopRightRadius:3,
      borderBottomRightRadius:3,
    }
    const labelStyles = {
      border:"none",
      padding: 3,
      color: 'white',
      fontWeight: 'bold'
    }
    const progress = {
      fontFamily:'Roboto',
      color: 'black',
      textAlign:'center',
      fontWeight: 'light'
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