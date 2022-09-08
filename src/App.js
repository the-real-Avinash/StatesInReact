import { useEffect, useState } from 'react';
import './App.css';
import BasicForm from './Components/BasicForm';
import UseEffects from './Components/UseEffects';
import UseEffects2 from './Components/UseEffects2';
import UseEffectsAPI from './Components/UseEffectsAPI';
import UsestateArray from './Components/UsestateArray';
import UsestateObject from './Components/UsestateObject';

function App() {
  // console.log(useState("Avinash"));
  const [myName, setMyName] = useState("Avinash");

 
  const changeName = () =>{
    let val = myName;
    (val === "Avinash")? setMyName("Abhijeet"):setMyName("Avinash");
      
   
    
  }
  return (
    <div className="App">
      {/* <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>CLick Me</button> */}
      {/* <UsestateArray/> */}
      {/* <UsestateObject/> */}
      {/* <BasicForm/> */}

      {/* <UseEffects/> */}
      {/* <UseEffects2/> */}
      <UseEffectsAPI/>

    </div>
  );
}

export default App;
