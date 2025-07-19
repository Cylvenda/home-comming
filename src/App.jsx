import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Home from './Pages/Home/Home'
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom'
import Profile from './Pages/Profile/Profile';
import Header from './Components/Header/Header';
import Register from './Pages/Acounts/Register'
import Login from './Pages/Acounts/Login'


const App = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />


        <Route path='/' element={<Home />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App