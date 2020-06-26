import React from 'react';
import styles from './DrawerOptions.module.css';
const DrawerOptions = (props)=>{
    return(
    <div className = {styles.Wrapper} style={{display: props.open?'block':'none'}}>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Suggestion Box</h3>
        <h3>Email</h3>
    </div>)
}

export default DrawerOptions;