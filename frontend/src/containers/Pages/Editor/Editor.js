import React, {Component} from 'react';

import EditProj from './EditProj';
class Editor extends Component{
    state = {
        submitPath: '/addproj'
    }
    render(){
        const style = {
            display: 'grid',
            gridTemplateColumns: '70vw 30vw'
        }
        return(
            <div style ={style}>
                <EditProj path={this.state.submitPath}/>
            </div>
        )
    }
}

export default Editor;