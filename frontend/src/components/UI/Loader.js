import React from 'react';
import styles from './CSS/Loader.module.css';
const Loader = ( props)=>{
    return(
    <div className = {styles.loader} style={props.style}> 

    </div>)
}

export default Loader;