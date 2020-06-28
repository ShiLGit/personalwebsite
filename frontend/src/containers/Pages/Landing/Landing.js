import React from 'react';
import styles from './Landing.module.css';

import portrait from '../../../pictures/vectorhead.png';
import Heading from '../../../components/Decoration/Heading';
import Accordions from '../../Accordions/Accordions';
const Landing =()=>{
    return(
    <div className={styles.Body}>
        <img className={styles.Picture} alt="MY HEAD" src={portrait}/>
            <div classNames={styles.RightHalf}>
            <Heading/>
            <div className={styles.Accordions}>
                <Accordions/>
            </div>
            <div className={styles.BottomBar}>
                © Me 2020
            </div>
        </div>
    </div>
    );
}

export default Landing;