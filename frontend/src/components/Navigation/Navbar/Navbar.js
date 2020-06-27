import React from 'react';
import styles from './Navbar.module.css';

import {NavLink} from 'react-router-dom';
const Navbar = ()=>{
    return(
        <div className={styles.Wrapper}>
        <div className={styles.Navbar}>
        <NavLink to='/' activeClassName={styles.Active} exact>
            <h3>About</h3>
        </NavLink>
        <NavLink to ='/projects' activeClassName={styles.Active}>
            <h3>Projects</h3>
        </NavLink>
        <NavLink to ='/suggestions' activeClassName={styles.Active}>
            <h3>Suggestion Box</h3>
        </NavLink>
        <NavLink to ='/Email' activeClassName={styles.Active}>
            <h3>Email</h3>
        </NavLink>

        </div>
        </div>
    )
}

export default Navbar;