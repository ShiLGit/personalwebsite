import React from 'react';
import styles from './DrawerOptions.module.css';
import Backdrop from '../../../UI/Backdrop';

import {NavLink} from 'react-router-dom';
const DrawerOptions = (props)=>{
    return(
<div className={styles.All}>
    <div className = {styles.Wrapper} style={{display: props.drawerOpen?'block':'none'}}>
        <NavLink to='/' activeClassName={styles.Active} exact>
            <h3 onClick={props.toggleDrawer}>About</h3>
        </NavLink>
        <NavLink to ='/projects' activeClassName={styles.Active}>
            <h3 onClick={props.toggleDrawer}>Projects</h3>
        </NavLink>
        <NavLink to ='/suggestions' activeClassName={styles.Active}>
            <h3 onClick={props.toggleDrawer}>Suggestion Box</h3>
        </NavLink>
        <NavLink to ='/Email' activeClassName={styles.Active}>
            <h3 onClick={props.toggleDrawer}>Email</h3>
        </NavLink>
    </div>
    <Backdrop zIndex={50} show={props.drawerOpen} onClickHandler={props.toggleDrawer} />
</div>
    )
}

export default DrawerOptions;