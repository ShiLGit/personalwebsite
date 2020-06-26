import React from 'react';

const Backdrop=(props)=>{
    const style={
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        opacity: 0.3,
        position: 'fixed',
        top: '0px',
        right: '0px',
        zIndex: props.zIndex
    }
    return(
        <div style={{...style, display:props.show?'block':'none'}} onClick ={props.onClickHandler}>
        </div>
    )
}


export default Backdrop;