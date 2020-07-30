import React, {Component} from 'react';
import ProjectList from './ProjectList';
import EditProj from './EditProj';

import axios from 'axios';
class Editor extends Component{
    state = {
        curProjID: null
    }
    loadProj = (projID)=>{
        this.setState({curProj: projID});
        alert(projID);  
    }
    render(){
        const style = {
            display: 'grid',
            gridTemplateColumns: '70vw 30vw'
        }
        return(
            <div style ={style}>
                <EditProj path={this.state.submitPath} formTitle = {this.state.formTitle} curProjID={this.state.curProj}/>
                <ProjectList loadProj = {this.loadProj}/>
            </div>
        )
    }
}

export default Editor;