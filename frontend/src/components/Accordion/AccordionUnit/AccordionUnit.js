import React from 'react';
import classes from './AccordionUnit.module.css';
const ProjUnit = (props)=>{
    return(
    <div className={classes.Wrapper}>
        <img alt="PLACEHOLDERALT" className={classes.Image} src='https://picsum.photos/200/300'/>
        <h5>{props.desc.replace(" ", "\n")}</h5>
    </div>);
}

export default ProjUnit;