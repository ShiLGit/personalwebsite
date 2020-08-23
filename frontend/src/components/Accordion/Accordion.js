import React from 'react';
import classes from './Accordion.module.css';

import ProjUnit from '../Carousel/ProjUnit/ProjUnit';
import arrowThing from '../../pictures/test.png';
import Carousel from '../Carousel/Carousel';
const Accordion = (props)=>{


    return(
        <React.Fragment>
        <div className={classes.BarClick} onClick={props.clickHandler}>
        <img src = {arrowThing} className={props.active?classes.ActiveImage:classes.InactiveImage}/><p>{props.displayName}</p>
        </div>
        <div className={classes.Body} style={{display: props.active?'block':'none'}}>

                {props.desc}
                <Carousel category={props.category}/>
        </div>
        </React.Fragment>
    );
}

export default Accordion;