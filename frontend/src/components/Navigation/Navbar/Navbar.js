import React from 'react';
import styles from './Navbar.module.css';

import {Link} from 'react-router-dom';
const Navbar = ()=>{
    return(
        <div className={styles.Navbar}>
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
    )
}

export default Navbar;