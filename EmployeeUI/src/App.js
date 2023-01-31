
import './App.css';
import { RouterProvider,createBrowserRouter, Outlet } from 'react-router-dom';
import Login from './Modules/Common/Components/Login';
import Navbar from './Modules/Common/Components/Navbar';
import SignUp from './Modules/Common/Components/SignUp';
import Home from './Modules/Common/Components/Home';
import { redirect } from "react-router-dom";
import { useEffect } from 'react';
import AddEmployee from './Modules/Admin/Components/AddEmployee';

const Routes = [
  {path: '/', element : <Login />},
  {path: '/sign-up', element : <SignUp />},
  {path: '/home', element : <Home/>},
  {path: '/create', element : <AddEmployee/>},
  {path: '/create/:id', element : <AddEmployee/>},
 ]

function App() {
  const token = localStorage.getItem('token')

console.log({token})
useEffect(()=>{
  if (token) {
     redirect("/login");
  }
},[token])

  return (
   <div>
    <Navbar/>

    <RouterProvider router={createBrowserRouter(Routes)}/>
  
    <Outlet/>
   </div>
  );
}

export default App;
