import React from 'react';
import classes from './AccordionUnit.module.css';
const ProjUnit = (props)=>{
    return(
    <div className={classes.Wrapper}>
        <img className={classes.Image} src='https://picsum.photos/200/300'/>
        <h5>{props.desc}</h5>
    </div>);
}

export default ProjUnit;