/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [commands,setCommands]=useState([])

  useEffect(async ()=>{
     const response  = await fetch('http://localhost:9090/commands',{
       method:'GET'
     })
     const commandsR =await response.json()

     setCommands(commandsR)
  },[])
  return (
    <div className="App">
      <h1> docker revisit </h1>
       <h2>Docker Commands </h2>
       {
         commands.map(command=><div>
           <p>{command.title}</p>
           <p>{command.body}</p>
         </div>)
       }
    </div>
  );
}

export default App;
