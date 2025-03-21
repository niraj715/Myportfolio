import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

function Header() {
  return (
    <>
    <header>
<div>
 
  <nav id="navbar-example2" className="navbar bg-body-transparent px-3 mb-3 ">
    <a className="navbar-brand" href="#"> <span className='logo'>Yor_Niraj</span></a>
    <ul className="nav nav-pills d-flex gap-2">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">My CV </Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Contact </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#scrollspyHeading3">Facebook</a></li>
          <li><a className="dropdown-item" href="#scrollspyHeading4">Linkedin</a></li>
          
          <li><a className="dropdown-item" href="#scrollspyHeading5"></a></li>
        </ul>
      </li>
     
    </ul>
    
  </nav>
 
</div>


   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </header>
    </>
  )
}

export default Header
