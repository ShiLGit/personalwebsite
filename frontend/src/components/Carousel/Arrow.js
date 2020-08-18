import React from 'react';
import styles from './Arrow.module.css';
const Arrow = (props)=>{

    return(
        <svg className = {styles[props.cssClass]}version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="38.000000pt" height="52.000000pt" viewBox="0 0 38.000000 52.000000"
             preserveAspectRatio="xMidYMid meet" onClick = {props.clickHandler}
             style={{gridColumnStart: props.gridColumnStart}}>

        <g transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
            <path d="M2 454 l3 -67 107 -61 c59 -33 108 -63 108 -66 0 -3 -49 -33 -108
            -66 l-107 -61 -3 -67 -3 -67 191 127 c104 70 190 130 190 134 0 4 -86 64 -190
            134 l-191 127 3 -67z"/>
        </g>
        </svg>
        
    )
}

export default Arrow;