import { useState, useEffect } from "react";
import Image from "./components/image";
import "./App.css";
import SignUp from "./components/signOrLog";
import LogIn from "./components/logIn";

const App = () => {
  const [user, setUser] = useState();
  const [photos, setPhotos] = useState([]);

  // const arr = [{ name: "Steve" }, { name: "Gary" }, { name: "Tony" }];

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setPhotos(data);
  };

  useEffect(() => {
    fetchImages();
  }, []); //every time user's value changes, useEffect will run again

  // for(let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // };

  // arr.map((item, index) => {
  //   console.log(item.name)
  // })

  // const useState = (initialVal) => {
  //   let state = initialVal;

  //   const setState = (newVal) => {
  //     state = newVal
  //   }

  //   return [state, setState];
  // }

  return (
    <div className="App">
      <div className="Account">
      <p>Create An Account</p>
      <SignUp setter={setUser} /> 
      <p>OR</p>
      <p>Login</p>
      <LogIn setter={setUser} /> 
      </div>
      <h1>{user}</h1>
      {user && photos.map((item, i) => {
          return <Image key={i} author={item.author} url={item.download_url} />;
          
        })}
    </div>
  );
};

export default App;