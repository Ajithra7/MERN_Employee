import axios from "axios";
import {  useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
import { Input } from "../../../Components/Form";
import Container from "../Container";

const Login= () => {
        const [loginData, setLoginData] = useState({})
        const navigate =useNavigate()
        const loginApi = (data) => {
            axios.post("http://localhost:3001/sign-in",data)
                .then((response) => {
                    console.log({response});
                    localStorage.setItem("token", response.data.token);
                    navigate('/home')
                })
                .catch(err=>{console.log({err})});
        };
    
       

const handleSubmit = (e)=>{
e.preventDefault()
    loginApi(loginData);
}
const inputHandler = (event) => {
    const { name, value } = event.target
    setLoginData(
        (preState) => ({
            ...preState,
            [name]: value
        })
    )
}

  return (<Container heading = "LOGIN">
      <form className = "row g-3 needs-validation" onSubmit={handleSubmit}>
        <Input label="email" name="email"   onChange={inputHandler} />
        <Input label="Password" name="password" onChange={inputHandler}/>
        <Button label="LOGIN" onChange={inputHandler}/>
      <Link to='sign-up'>sign-up</Link>
      </form>
    </Container>
  );
};

export default Login;


