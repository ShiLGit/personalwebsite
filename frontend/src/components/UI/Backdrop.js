import React from 'react';

const Backdrop=(props)=>{
    const style={
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        opacity: 0.3,
        position: 'absolute',
        top: '0px',
        right: '0px',
        zIndex: props.zIndex
    }
    return(
        <div style={{style}}>

        </div>
    )
}


export default Backdrop;