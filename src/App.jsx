import { useState } from 'react'
import Login from './Pages/login';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import Reister from './Pages/register';
import Dashboard from './Pages/dashboars';
import Inbox from './Pages/inbox';
import Createticket from './Pages/createTickect';


function App() {
  return (
    <>
    <Routes>
      <Route path="/"  element={<Login/>}/>
      <Route path="/home"  element={<Home/>}/>
      <Route path="/register"  element={<Reister/>}/>
      <Route path="/dashboard"  element={<Dashboard/>}/>
      <Route path="/inbox"  element={<Inbox/>}/>
      <Route path="/create"  element={<Createticket/>}/>
    </Routes>

    </>

  )
}

export default App
