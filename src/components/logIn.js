import { useState } from "react";
import { logIn } from "../utils";

const LogIn = ({ setter }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

//handles submit
const submitHandler = async (e) => {
    e.preventDefault();//prevents page from refreshing
    await logIn(username, password, setter); //needs to be put in the same order
};

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>
            <input onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password"/>
            <button type="submit">LogIn</button>
        </form>
    );
};

export default LogIn;