import React from 'react'


function Navbar() {
  return (
    <>
        <div className="navbar flex align jc-evenly">
      <ul id="left-ul" className="ul-comp flex align jc-between">
        <li><a href="/">Home</a></li>
        <li><a href="/">Explore</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Founder</a></li>
      </ul>
      <div className="name-logo center">
        <img src='/images/jordfins-png.png' alt="JordFins Logo" />
        <h1>JordFins</h1><i class="fa-solid fa-bars" id='menu-navbar'></i>
      </div>
      <ul id="right-ul" className="ul-comp center">
        <li><a href="/">Query</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Testimonials</a></li>
        <li><a href="/">Recruitment</a></li>
      </ul>
    </div>
    {/* <div className="navbar-menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Explore</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Founder</a></li>
        <li><a href="#">Query</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Recruitment</a></li>
      </ul>
    </div> */}
    <hr className='navbar-hr'/>     
    </>
  )
}

export default Navbar