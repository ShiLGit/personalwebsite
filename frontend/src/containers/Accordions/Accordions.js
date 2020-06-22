import React, {Component} from 'react';
import Accordion from '../../components/Accordion/Accordion';

class Accordions extends Component{
    state = {
        active: null,
        accordions: [
            {
                displayName:"Placeholder",
                desc:"Node.js, React.js, MongoDB, SQL"
            },
            {
                displayName:"School",
                desc:"C, Java, Data Structures, Algorithms"
            }
        ]
    }
    render(){
        return(
            <React.Fragment>
                {this.state.accordions.map(accordion=>{
                    return <Accordion {...accordion}/>
                })}
            </React.Fragment>
        );
    }
}

export default Accordions;