import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNavbar from './Components/NavBar'
import Home from './Pages/home'
import About from './Pages/about'
import Gallery from './Pages/gallery'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Footer from './Components/Footer'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TopNavbar/>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>  
    </div>

    <Footer/>
  </React.StrictMode>
)
