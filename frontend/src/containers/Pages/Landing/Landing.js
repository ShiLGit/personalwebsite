import React from 'react';
import styles from './Landing.module.css';

import portrait from '../../../pictures/vectorhead.png';
import Heading from '../../../components/Decoration/Heading';
import Accordions from '../../Accordions/Accordions';
const Landing =()=>{
    return(
    <React.Fragment>
        <img className={styles.Picture} alt="MY HEAD" src={portrait}/>
            <div>
            <Heading/>
            <div className={styles.Accordions}>
                <Accordions/>
            </div>
            </div>
    </React.Fragment>
    );
}

export default Landing;