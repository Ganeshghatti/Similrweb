import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Landingpage from './components/Landingpage'
import Loginpage from './components/Loginpage'
import Otpverification from './components/Otpverification'
import Signuppage from './components/Signuppage'
import Username from './components/Username'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage/>} />
      <Route path="/Loginpage" element={<Loginpage/>} />
      <Route path='/Signuppage' element={<Signuppage/>}/>
      <Route path='/Otpverification' element={<Otpverification/>}/>
      <Route path='/Username' element={<Username/>}/>
      <Route path='/Home' element={<Home/>}/>
      </Routes>   
  </BrowserRouter> 
  )
}
