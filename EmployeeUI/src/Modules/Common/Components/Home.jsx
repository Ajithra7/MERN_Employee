import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from '../Container';

const Home = () => {
    const [empData, setEmpData] = useState([])
    
        useEffect(() => {
            axios.get("http://localhost:3001/emp-list")
            .then((response) => {
                console.log({response});
                setEmpData(response.data.data)
            })
            .catch();
        }, [])
        
  return (
    <div><Container heading='Employee List'>
{
    empData.map(emp=>{
        return <li>
            {emp.name}-{emp.designation}-{emp.salary}
        </li>
    })
}

    </Container></div>
  )
}

export default Home