import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Childcom from './Childcom'

function App() {
  const [childname,setChildname]=useState("Default")
  const recieveName=(name)=>{
    setChildname(name)
  }
  return (
    <div className='App'>
      <h2>Hello React I'm parent</h2>
      <h3>Hello React I'm child</h3>
      <Childcom setfun={recieveName}/>
      <p>parent:My child said:{childname}</p>

    </div>
  );

  
}

export default App;
