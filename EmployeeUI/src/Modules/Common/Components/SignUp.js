import axios from "axios";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../Components/Button";
import { Input } from "../../../Components/Form";
import Container from "../Container";

const SignUp= () => {
  const navigate = useNavigate()
        const [loginData, setLoginData] = useState({})
        const createUser = async(data) => {
           await axios.post("http://localhost:3001/create-user",data)
                .then((response) => {
                    console.log({response});
                    navigate('/home')
                })
                .catch(error=>({error}));
        };
    
       

const handleSubmit = (e)=>{
e.preventDefault()
    createUser(loginData);
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

  return (<Container heading = "SIGN-UP">
      <form className = "row g-3 needs-validation" onSubmit={handleSubmit}>
      <Input label="Name" name="fullName"   onChange={inputHandler} />
        <Input label="email" name="email"   onChange={inputHandler} />
        <Input label="Password" name="password" onChange={inputHandler}/>
        <Button label="SIGNUP" onChange={inputHandler}/>
        <Link to='/'>login</Link>
      </form>
    </Container>
  );
};

export default SignUp;


