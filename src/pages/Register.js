import {  useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function RegisterPage(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[navigate, setNavigate] = useState(false);
    const { auth } = useAuth();

    const submit = async e =>{

        e.preventDefault();

        await axios.post('Auth', {email, password});

        setNavigate(true);
    }
    
    if(navigate || auth?.userName) {
        return <Navigate to="/login"/>
    } 

    return(<main className="form-signin w-100 m-auto">
    <form onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <div className="form-floating">
        <input
          className="form-control"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
          className="form-control"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
    </form>
  </main>
  )
  
};

export default RegisterPage;