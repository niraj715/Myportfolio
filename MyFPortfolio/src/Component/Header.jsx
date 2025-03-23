import React, { useRef, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import musicBg from "../assets/bgmusic.mp3";
import Home from './Home'
import About from './About'
import Skill from './Skill';

function Header() {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 500) {
        $('.head1').css('opacity', '0');  // Hide header
        $('.head2').fadeIn();  // Show sticky header
    } else {
        $('header').css('opacity', '1');  // Show header
        $('.fixed').fadeOut();  // Hide sticky header
    }
});
 const [isMuted, setIsMuted] = useState(true); // State to manage mute/unmute
  const audioRef = useRef(null); // Reference to audio element

  // Toggle Mute Function
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };
  return (
    <>
    <header>
   <div className='head1'>
    <nav id="navbar-example2" className="navbar px-3 mb-3 ">
    <a className="navbar-brand" href="#"> <span className='logo'>Yor_Niraj</span></a>
    <ul className="nav nav-pills d-flex gap-2">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/skill">Skills</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blog">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cv">My CV </Link>
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
  <div className="head2">
  <nav id="navbar-example2" className="navbar px-3 mb-3 ">
    <a className="navbar-brand" href="#"> <span className='logo'>Yor_Niraj</span></a>
    <ul className="nav nav-pills d-flex gap-2">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/skill">Skills</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/blogs">Blogs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/cv">My CV </Link>
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
   <audio ref={audioRef} src={musicBg} autoPlay loop muted />
  <button className="mute-button" onClick={toggleMute}>
          {isMuted ? "Sound 🔊" : "Mute 🔇"}
        </button>


   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skill/>}/>
   </Routes>
   </header>
    </>
  )
}

export default Header
