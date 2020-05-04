import React from 'react';
import logo from './logo.svg';
import './App.css';
import Collapsible from './Components/Collapsible';

function App() {
  return (
    <div className="App">
      <div style = {{}}>
        <Collapsible title = "Web Dev"/>
        <Collapsible title = "Misc"/>
        <Collapsible title = "School"/>
      </div>
    </div>
  );
}

export default App;
