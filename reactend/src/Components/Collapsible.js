import React, {Component} from 'react';
import '../Stylesheets/Collapsible.css';

const style = {
    width: '40%',
    fontSize: '24px',
    fontFamily: 'Quantico',
    padding: '1px',
    margin: '10px',    
    color: 'white',
    backgroundColor: '#415CEA'
}
class Collapsible extends Component{
    state = {};
    render(){
        return(
        <div style = {style}>
            <p>{this.props.title}</p>
        </div>)
    }
}

export default Collapsible;