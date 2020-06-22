import React from 'react';
import classes from './Accordion.module.css';

import ProjUnit from './AccordionUnit/AccordionUnit';

const Accordion = (props)=>{
    console.log(props.desc);
    return(
        <React.Fragment>
        <div className={classes.BarClick}>
            {props.name}
        </div>
        <div className={classes.Body}>
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