import React, {Component} from 'react';

import EditProj from './EditProj';
class Editor extends Component{

    render(){
        const style = {
            display: 'grid',
            gridTemplateColumns: '70vw 30vw'
        }
        return(
            <div style ={style}>
                <EditProj/>
            </div>
        )
    }
}

export default Editor;