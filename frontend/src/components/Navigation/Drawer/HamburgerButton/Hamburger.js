import React from 'react';
import styles from './Hamburger.module.css';
const Hamburger = ()=>{
    return(
        <div className={styles.Wrapper}>    
            <div className={styles.LineStyle}></div>
            <div className={styles.LineStyle}></div>
            <div className={styles.LineStyle}></div>
        </div>
    )
}

export default Hamburger;