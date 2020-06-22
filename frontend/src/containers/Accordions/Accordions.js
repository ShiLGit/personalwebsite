import React, {Component} from 'react';
import Accordion from '../../components/Accordion/Accordion';

class Accordions extends Component{
    state = {
        active: -1,
        accordions: [
            {
                displayName:"Placeholder",
                desc:"Node.js, React.js, MongoDB, SQL",
                key: 0
            },
            {
                displayName:"School",
                desc:"C, Java, Data Structures, Algorithms",
                key: 1
            }
        ]
    }
    accordionClickHandler=(key)=>{
        this.setState(prev=>({active: prev.active===key?-1:key}));
    }
    render(){    
        return(
            <React.Fragment>
                {this.state.accordions.map(acc=>{
                    return <Accordion {...acc} active={this.state.active ===acc.key} clickHandler={()=>this.accordionClickHandler(acc.key)}/>
                })}
            </React.Fragment>
        );
    }
}

export default Accordions;