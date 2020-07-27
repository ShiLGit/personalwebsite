import React, {Component} from 'react';
import ProjectList from './ProjectList';
import EditProj from './EditProj';

import axios from 'axios';
class Editor extends Component{
    state = {
        submitPath: '/projects/add'
    }
    render(){
        const style = {
            display: 'grid',
            gridTemplateColumns: '70vw 30vw'
        }
        return(
            <div style ={style}>
                <EditProj path={this.state.submitPath}/>
                <ProjectList/>
            </div>
        )
    }
}

export default Editor;