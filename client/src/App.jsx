import { useState } from 'react'
import UserAuth from '../components/user_auth'
import {BrowserRouter as Router,Routes,Route, Outlet} from 'react-router-dom'
import Dashboard from '../components/Dashboard'


export default function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact Component={UserAuth}/>
        <Route path='/login' Component={UserAuth}/>
        <Route path='/dashboard' Component={Dashboard}/>
      </Routes>
      <Outlet />
    </Router>
    </>
  )
}