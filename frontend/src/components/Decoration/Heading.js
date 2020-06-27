import React from 'react';
import styles from './Heading.module.css';
import GithubIcon from '../../pictures/github_icon.svg'

const Heading = ()=>{
    return(
        <div className={styles.Wrapper}>
            <div className={styles.Text}>
                LILIAN SHI
                <a alt ="GITHUB" href="https://github.com/ShiLGit" target="_blank">
                    <img src={GithubIcon} className={styles.Image}/>
                </a>
            </div>
            
            <h3>{'> Programming Endeavours'}</h3>
        </div>
    )
}

export default Heading;