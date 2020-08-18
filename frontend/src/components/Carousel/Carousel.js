import React, {Component} from 'react';
import ProjUnit from './ProjUnit/ProjUnit';
import styles from './Carousel.module.css';
import Arrow from './Arrow';

//will receive projtype prop that dictates which category (web dev, school, other) gets rendered
class Carousel extends Component{
    state = {
        projects: [{desc: "p1"}, {desc: "p2"}, {desc: "p3"}, {desc: "p4"}],
        index: 0
    }
    indexDecrement = ()=>{
        this.setState(prevState=> {return {
            index: prevState.index- 1 < 0 ? this.state.projects.length - 1:prevState.index - 1
        }});
    }
    indexIncrement = ()=>{
        this.setState(prevState=> {return {
            index: prevState.index+ 1 === this.state.projects.length? 0:prevState.index + 1
        }});
    }

    componentDidMount(){
        //SET STATE.PROJECTS ACCORDINGLY USING PROPS + PROJREDUCTER.STATE
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

        return indices;
    }

    render(){
        const indices = this.getIndices();
        return (
            <div className = {styles.Body}>
                <Arrow clickHandler = {this.indexIncrement} cssClass = "LeftArrow" gridColumnStart={1}/>
                <div className = {styles.ProjUnitWrapper}>

                
                {indices.map((indicesIdx, arrayIdx)=><ProjUnit desc = {this.state.projects[indicesIdx].desc} gridColumnStart={arrayIdx + 1}/>)}
                </div>
                <Arrow clickHandler = {this.indexDecrement} cssClass ="RightArrow" gridColumnStart={3}/>
            </div>);
    }
    
};

export default Carousel;