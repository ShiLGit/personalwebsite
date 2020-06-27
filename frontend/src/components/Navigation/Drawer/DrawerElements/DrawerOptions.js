import React from 'react';
import styles from './DrawerOptions.module.css';
import Backdrop from '../../../UI/Backdrop';

import {Link} from 'react-router-dom';
const DrawerOptions = (props)=>{
    console.log(props)
    return(
<div className={styles.All}>
    <div className = {styles.Wrapper} style={{display: props.drawerOpen?'block':'none'}}>
        <Link to='/'>
            <h3>About</h3>
        </Link>
        <Link to ='/projects'>
            <h3>Projects</h3>
        </Link>
        <Link to ='/suggestions'>
            <h3>Suggestion Box</h3>
        </Link>
        <Link to ='/Email'>
            <h3>Email</h3>
        </Link>
    </div>
    <Backdrop zIndex={50} show={props.drawerOpen} onClickHandler={props.onClickHandler} />
</div>
    )
}

export default DrawerOptions;