import React from 'react';
import styles from './Hamburger.module.css';
const Hamburger = (props)=>{
    return(
        <div className ={styles.Wrapper} onClick={props.clickHandler}>
            <h1>LILIAN SHI</h1>
            <div className={styles.ButtonWrapper}>    
                <div className={styles.LineStyle}></div>
                <div className={styles.LineStyle}></div>
                <div className={styles.LineStyle}></div>
            </div>
        </div>
    )
}

export default Hamburger;