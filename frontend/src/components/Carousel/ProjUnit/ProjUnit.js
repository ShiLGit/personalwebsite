import React from 'react';
import classes from './ProjUnit.module.css';
// + props.img
const ProjUnit = (props)=>{
    return(
    <div className={classes.Wrapper} style = {{gridColumnStart: props.gridColumnStart}}>
        <img alt="PLACEHOLDERALT" className={classes.Image} src={require('../../../pictures/test.png' )}/>
        <h5>{props.desc.replace(" ", "\n")}</h5>
    </div>);
}

export default ProjUnit;