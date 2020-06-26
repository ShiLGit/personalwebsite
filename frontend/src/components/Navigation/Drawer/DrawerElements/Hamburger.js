import React from 'react';
import styles from './Hamburger.module.css';
const Hamburger = (props)=>{

    return(
        <div className ={styles.Wrapper} >
            <h1>LILIAN SHI</h1>
            <div className={styles.ButtonWrapper} onClick={props.clickHandler}>    
                <div className={`${styles.LineStyle}` + (props.active? ` ${styles.TopLine}`:"")}></div>
                <div className={`${styles.LineStyle}` + (props.active? ` ${styles.MiddleLine}`:"")}></div>
                <div className={`${styles.LineStyle}` + (props.active? ` ${styles.BottomLine}`:"")}></div>
            </div>
        </div>
    )
}

export default Hamburger;