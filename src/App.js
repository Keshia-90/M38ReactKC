import { useState, useEffect } from "react";//
import Box from "./box";
import './App.css';

const App = () => {
  const [user,setUser] = useState("Keshia");
  return (
    <div className="App">
      <Box name={user}/>
      <Box name="Gary"/>
      <Box name="Clive"/>
      <Box name="Kevin"/>
      {/* value of state will change when typed into...Top name will change{user}*/} 
      <input onChange={(event)=> setUser(event.target.value)}/>
      {/* short hand if statement*/}
      {user && <Box name= "Tony"/>}
      {/* short hand if else statement if user true jeff: if not true  */}
      {user ? <Box name= "Jeff"/> : <Box name="Not Jeff"/>}
    </div>
  );
}

export default App;
