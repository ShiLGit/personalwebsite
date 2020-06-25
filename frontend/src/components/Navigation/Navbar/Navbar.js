import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ()=>{
    return(
        <div className={styles.Navbar}>
        <h3>About</h3>
        <h3>Projects</h3>
        <h3>Suggestion Box</h3>
        <h3>Email</h3>
        </div>
    )
}

export default Navbar;