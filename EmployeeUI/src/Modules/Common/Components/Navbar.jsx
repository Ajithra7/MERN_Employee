import { useEffect, useState } from 'react'

import logo from '../../../Assests/images/logoHR.png'
export default () => {

const [token,setToken]=useState()
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    },[token])
    
    return  <div>
    <nav class="navbar">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="logo" width="50" height="45" />
            </a>
          <form class="d-flex" role="button">
                <button class="btn btn-outline" type="link">
                    <a class="nav-link" href="/home">
                        EMPLOYEE DATA BANK
                    </a>
                </button>
                <button class="btn btn-outline" type="link" >
                    <a class="nav-link" href="/create">
                        ADD/EDIT EMPLOYEE
                    </a>
                </button>
                <button class="btn btn-outline" type="link" >
                    <a class="nav-link" href="/" onClick={()=>localStorage.clear()}>
                       SIGN-OUT
                    </a>
                </button>
            </form>
        </div>
    </nav>
</div>
}