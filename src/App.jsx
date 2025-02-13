import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login'
import SignUp from './screens/Signup/SignUp'
import LmsDashboard from './screens/Dashboard/Dashboard'
import { ToastContainer } from 'react-toastify'
import ProtectedRoute from './components/ProtectedRoute'
import AuthRoute from './components/AuthRoute'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute/>}>
        <Route path="/dashboard/*" element={<LmsDashboard />} />
        </Route>
        <Route element={<AuthRoute/>}>
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />

        </Route>
        <Route path="/" element={<Home />} />
      
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
