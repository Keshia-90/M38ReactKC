import { useState } from "react";
import { deleteAcc } from "../utils";

const DeleteAcc = ({ setter }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

//handles submit
const submitHandler = async (e) => {
    e.preventDefault();//prevents page from refreshing
    await deleteAcc(username, password, setter); //needs to be put in the same order
};

    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e)=> setUsername(e.target.value)} placeholder="Username"/>
            <input onChange={(e)=> setPassword(e.target.value)} placeholder="Password" type="password"/>
            <button type="submit">Delete Account</button>
            
        </form>
        
    );
};

export default DeleteAcc;