import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../../Components/Button";
import { Input } from "../../../Components/Form"
import Container from "../../Common/Container"

export default () => {
  const {id} =useParams()
  console.log({id})
  const[empData,setEmpData]=useState();

  useEffect(() => {
    if(id){
      axios.get(`http://localhost:3001/emp/${id}`)
      .then((response) => {
          
      })
      .catch(err=>console.log({err}));
    }
  
 
  }, [id])
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(id){
      axios.put("http://localhost:3001/update-emp")
      .then((response) => {
          
      })
      .catch(err=>console.log({err}));

    }else{
      axios.post("http://localhost:3001/create-emp")
              .then((response) => {
                  
              })
              .catch(err=>console.log({err}));

    }
  }
  const inputHandler = (event) => {
    const { name, value } = event.target
    setEmpData(
        (preState) => ({
            ...preState,
            [name]: value
        })
    )
}
  return<Container>
<form className = "row g-3 needs-validation" onSubmit={handleSubmit}>
    <Input label='Name' name="name" />
    <Input label='Designation' name="designation"/>
    <Input label='Location' name="location"/>
    <Input label='Salary' name="salary"/>
    <Button label={id?'Update' :'Save'}/>
  </form>
</Container>
 }