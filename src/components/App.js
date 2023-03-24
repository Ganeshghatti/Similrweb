import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Home'
import Landingpage from './Landingpage'
import Loginpage from './Loginpage'
import Otpverification from './Otpverification'
import Signuppage from './Signuppage'
import Username from './Username'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landingpage/>} />
      {/* <Route path="./Loginpage" element={<Loginpage/>} />
      <Route path="./Signuppage" element={<Signuppage/>} />
      <Route path='./Otpverification' element={<Otpverification/>}/>
      <Route path='./Username' element={<Username/>}/>
      <Route path='./Home' element={<Home/>}/> */}
      </Routes>   
  </BrowserRouter> 
  )
}
