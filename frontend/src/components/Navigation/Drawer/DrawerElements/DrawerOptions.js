import React from 'react';
import styles from './DrawerOptions.module.css';
import Backdrop from '../../../UI/Backdrop';
const DrawerOptions = (props)=>{
    console.log(props)
    return(
<div className={styles.All}>
    <div className = {styles.Wrapper} style={{display: props.drawerOpen?'block':'none'}}>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Suggestion Box</h3>
        <h3>Email</h3>
    </div>
    <Backdrop zIndex={50} show={props.drawerOpen} onClickHandler={props.onClickHandler} />
</div>
    )
}

export default DrawerOptions;