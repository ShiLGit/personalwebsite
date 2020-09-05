import React from 'react';
import styles from './Hamburger.module.css';
import GithubIcon from '../../../../pictures/github_icon.svg';
import {NavLink} from 'react-router-dom';
const Hamburger = (props)=>{

    return(
        <div className ={styles.Wrapper} >
            <NavLink to = "/">
                <h1 className = {styles.Header}>LILIAN SHI</h1>

            </NavLink>
            <a href="https://github.com/ShiLGit" target="_blank" rel="noopener noreferrer">
                <img src={GithubIcon} className={styles.Image} alt="github link"/>
            </a>
            <div className={styles.ButtonWrapper} onClick={props.clickHandler}>    
                <div className={`${styles.LineStyle}` + (props.active? ` ${styles.TopLine}`:"")}></div>
                <div className={`${styles.LineStyle}` + (props.active? ` ${styles.MiddleLine}`:"")}></div>
                <div className={`${styles.LineStyle}` + (props.active? ` ${styles.BottomLine}`:"")}></div>
            </div>
        </div>
    )
}

export default Hamburger;