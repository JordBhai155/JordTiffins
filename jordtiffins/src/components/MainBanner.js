import React from 'react'

function main_banner(props) {

    const {image_path}=props
  return (
    <>
     <div className="banner center">
      <img src={image_path} alt="" srcSet="" />
      <div className="banner-buttons center">
        <button className="explore-btn">Explore</button>
        <div className="authentication">
          <button className="authentication-btn">Sign In</button>
          <button className="authentication-btn" id="btn-2">Sign Up</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default main_banner