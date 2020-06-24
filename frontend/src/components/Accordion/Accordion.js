import React from 'react';
import classes from './Accordion.module.css';
import {Transition} from 'react-transition-group';

import ProjUnit from './AccordionUnit/AccordionUnit';

const Accordion = (props)=>{
    const accordionBody=(
        <div className={classes.Body} >
            <div className={classes.TechStack}>
                {props.desc}
            </div>
            <ProjUnit desc="Web Game"/>
            <ProjUnit desc="SVG Database"/>
            <ProjUnit desc="Chrome Extension"/>
        </div>
    );
    
    return(
        <React.Fragment>
        <div className={classes.BarClick} onClick={props.clickHandler}>
            {props.displayName}
        </div>
        <Transition in={props.active} unmountOnExit mountOnEnter timeout={1000000500}>
        {(animState)=>{
            switch(animState){
                case 'entered':
                    return(accordionBody);
            }
        }}
        </Transition>
        </React.Fragment>
    );
}

export default Accordion;