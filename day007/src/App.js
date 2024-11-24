import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Childcompo from './Childcompo';

function App() {
  const [cname,setCname]=useState("Default")
  const recievedName=(name)=>{
    setCname(name)
  }
  return (
    <div className='App'>
      <h2>Hello React I'm parent</h2>
      <h3>Hello React I'm child</h3>
      <Childcompo setfun={recievedName}/>
      <p>parent:My child </p>
      <p>said:{cname}</p>

    </div>
  );

  
}

export default App;
