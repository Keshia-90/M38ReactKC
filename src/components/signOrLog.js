import { useState } from "react";
import { signUp } from "../utils";

const SignUp = ({ setter }) => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

//handles submit
const submitHandler = async (e) => {
    e.preventDefault();//prevents page from refreshing
    await signUp(username, email, password, setter); //needs to be put in the same order
};

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>
            <input onChange={(e)=> setEmail(e.target.value)} placeholder="Email"/>
            <input onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password"/>
            <button type="submit">Create Account</button>
        </form>
    );
};

export default SignUp;