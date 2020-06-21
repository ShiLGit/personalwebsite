import React from 'react';
import classes from './Accordion.module.css';

import ProjUnit from './AccordionUnit/AccordionUnit';

const Accordion = (props)=>{
    return(
        <React.Fragment>
        <div className={classes.BarClick}>
            {props.name}
        </div>
        <div className={classes.Body}>
        <ProjUnit/>
        <ProjUnit/>
        <ProjUnit/>
        </div>
        </React.Fragment>
    )
}

export default Accordion;