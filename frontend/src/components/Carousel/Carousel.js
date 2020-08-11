import React, {Component} from 'react';
import ProjUnit from './ProjUnit/ProjUnit';
import styles from './Carousel.module.css';
//will receive projtype prop that dictates which category (web dev, school, other) gets rendered
class Carousel extends Component{
    state = {
        projects: [{desc: "p1"}, {desc: "p2"}, {desc: "p3"}, {desc: "p4"}],
        index: 0
    }
    
    indexIncrement = ()=>{
        this.setState(prevState=> {return {
            index: prevState.index+ 1 === this.state.projects.length? 0:prevState.index + 1
        }});
    }

    //given starting index (state.index), return indices of all projects to show
    getIndices= ()=>{
        const indices = [];
        let curIndex = this.state.index;
        indices[0] = curIndex;
        for(let i = 1; i < 3; i++){
            curIndex++;
            if(curIndex >= this.state.projects.length){
                curIndex = 0;
            }
            indices[i] = curIndex;
        }

        console.log("indices", indices);
        return indices;
    }

    render(){
        console.log("curindex..", this.state.index)
        const indices = this.getIndices();
        return (
            <div className = {styles.Body}>
                {indices.map(idx=><ProjUnit desc = {this.state.projects[idx].desc}/>)}
                <button onClick = {this.indexIncrement}> NEXT </button>
            </div>)
    }
    
};

export default Carousel;