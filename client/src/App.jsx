import { useState } from 'react'
import UserAuth from '../components/user_auth'
import {BrowserRouter as Router,Routes,Route, Outlet} from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Login from '../components/Login'


export default function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' eaxct Component={Login}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={UserAuth}/>
        <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
      <Outlet />
    </Router>
    </>
  )
}