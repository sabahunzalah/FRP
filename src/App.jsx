import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login'
import SignUp from './screens/Signup/SignUp'
import LmsDashboard from './screens/Dashboard/Dashboard'
import ResponsiveDrawer from './screens/Dashboard/Dashboard'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<LmsDashboard />} />
      </Routes>
      <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
    </>
  )
}

export default App
