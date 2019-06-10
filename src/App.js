import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstname, setFirstName] = useState("Rajt");
  return (
    <div className="App">
      Name: {firstname}
      <br />
      <input id="myName" name="myName" type='text'/>
      <br/>
      <input type='button' value="Click" onClick={e => setFirstName(document.getElementById('myName').value)}/>
    </div>
  );
}

export default App;
