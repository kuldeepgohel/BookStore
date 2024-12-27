import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Home from './Home/Home'
import Course from './Components/Course'
import {Route, Routes} from 'react-router-dom'
import  Footer from './Components/Footer'
import Signup from './Components/Signup'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>

  
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
