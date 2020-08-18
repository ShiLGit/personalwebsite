import React from 'react';
import classes from './Accordion.module.css';

import ProjUnit from '../Carousel/ProjUnit/ProjUnit';
import Carousel from '../Carousel/Carousel';
const Accordion = (props)=>{

    
    return(
        <React.Fragment>
        <div className={classes.BarClick} onClick={props.clickHandler}>
            {props.displayName}
        </div>
        <div className={classes.Body} style={{display: props.active?'block':'none'}}>
                {props.desc}
                <Carousel/>
        </div>
        </React.Fragment>
    );
}

export default Accordion;