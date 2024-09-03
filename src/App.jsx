import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbars from './components/Navbars'
import Services from './components/Services'
import Blog from './components/Blog'
import ContactUs from './components/ContactUs'


function App() {

  return (
  <>
  <Navbars/>
  <div>
  <Routes>
  <Route path = "/" element={<Home/>}/>
  <Route path ="/aboutUs" element={<AboutUs/>}/>
  <Route path = "/services" element={<Services/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/contactUs' element ={<ContactUs/>}/>

  </Routes>
  </div>
  </>
  )
}

export default App
