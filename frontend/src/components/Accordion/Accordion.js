import React from 'react';
import classes from './Accordion.module.css';

import ProjUnit from '../Carousel/ProjUnit/ProjUnit';

const Accordion = (props)=>{

    
    return(
        <React.Fragment>
        <div className={classes.BarClick} onClick={props.clickHandler}>
            {props.displayName}
        </div>
        <div className={classes.Body} style={{display: props.active?'block':'none'}}>
            <div className={classes.TechStack}>
                {props.desc}
            </div>
            <ProjUnit desc="Web Game"/>
            <ProjUnit desc="SVG Database"/>
            <ProjUnit desc="Chrome Extension"/>
        </div>
        </React.Fragment>
    );
}

export default Accordion;