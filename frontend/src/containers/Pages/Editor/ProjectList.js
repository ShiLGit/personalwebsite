import React from 'react';
import {connect} from 'react-redux';
import styles from './ProjectList.module.css';
const ProjectList = (props)=>{

    const projects = props.projects;
    const list = projects.map(p=>{
        return (
        <div className = {styles.ProjUnit} key = {p._id}>
            <button>X</button>
            <p>{p.projID}</p><p>{p.projName}</p>
        </div>)});
    console.log(list)
    return(
        <div className = {styles.Wrapper}>
        <p style ={{fontWeight:"bold", fontSize: 24, display: 'inline-block'}}>Projects</p>

        <div className = {styles.ListWrapper}>
            {list}
        </div>
        </div>
        
    )
}

const stateToProps = (state)=>{
    return {projects: state.projReducer.projects};
}
export default connect(stateToProps)(ProjectList);