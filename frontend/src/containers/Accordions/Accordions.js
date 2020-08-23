import React, {Component} from 'react';
import Accordion from '../../components/Accordion/Accordion';
import styles from './Accordions.module.css'
class Accordions extends Component{
    state = {
        active: -1,
        accordions: [
            {
                displayName:"Placeholder",
                desc:"Node.js, React.js, MongoDB, SQL",
                key: 0,
                category:"Web Dev"
            },
            {
                category:"School",
                displayName:"School",
                desc:"C, Java, Data Structures, Algorithms",
                key: 1
            },
            {
                category:"Other",
                displayName: "Other",
                desc: "I stoopid",
                key: 2
            }
        ]
    }
    accordionClickHandler=(key)=>{
        this.setState(prev=>({active: prev.active===key?-1:key}));
    }
    render(){    
        return(
            <div className={styles.Wrapper}>
                {this.state.accordions.map(acc=>{
                    return <Accordion {...acc} active={this.state.active ===acc.key} clickHandler={()=>this.accordionClickHandler(acc.key)}/>
                })}
            </div>
        );
    }
}

export default Accordions;