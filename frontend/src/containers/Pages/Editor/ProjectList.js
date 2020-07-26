import React from 'react';
import {connect} from 'react-redux';
import styles from './ProjectList.module.css';
const ProjectList = (props)=>{

    const projects = props.projects;
    const list = projects.map(p=>{return <div style = {style} key = {p._id}>{p.projID}</div>});
    console.log(list)
    return(
        <div style = {styleWrapper}>
            {list}
        </div>
        
    )
}

const stateToProps = (state)=>{
    return {projects: state.projReducer.projects};
}
export default connect(stateToProps)(ProjectList);