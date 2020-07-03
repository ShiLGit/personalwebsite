import React from 'react';
import styles from './Heading.module.css';
import GithubIcon from '../../pictures/github_icon.svg'

const Heading = ()=>{
    return(
        <div className={styles.Wrapper}>
            <div className={styles.Text}>
                LILIAN SHI
                <a alt ="GITHUB" href="https://github.com/ShiLGit" target="_blank" rel="noopener noreferrer">
                    <img src={GithubIcon} className={styles.Image} alt="github link"/>
                </a>
            </div>
            
            <h3>{'> Programming Endeavours'}</h3>
        </div>
    )
}

export default Heading;