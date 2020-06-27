import React from 'react';
import styles from './Hamburger.module.css';
import GithubIcon from '../../../../pictures/github_icon.svg';

const Hamburger = (props)=>{

    return(
        <div className ={styles.Wrapper} >
            LILIAN SHI
            <a href="https://github.com/ShiLGit" target="_blank" alt="GITHUB">
                <img src={GithubIcon} className={styles.Image}/>
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