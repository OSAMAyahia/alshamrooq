import React from 'react'
import img from './png-transparent-codina-quincaillerie-logo-diy-store-corporate-design-castres-vdl-blue-text-logo-thumbnail-removebg-preview.png'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light" style={{ fontFamily:' "Rajdhani", sans-serif'}}>
    <div className=" container mx-5">
      <div>
      <a className=" " href="#">
        <img src={img} style={{height:'60px', width:'190px'}}/>
      </a>

      </div>

      <div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item mx-3">
            <a  className="nav-link "  style={{fontWeight:"800", fontSize:"1.2rem"}} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item  mx-3" >
            <a className="nav-link"  style={{fontWeight:"800", fontSize:"1.2rem"}} href="#">about</a>
          </li>
          <li className="nav-item dropdown  mx-3">
            <a className="nav-link dropdown-toggle"   style={{fontWeight:"800", fontSize:"1.2rem"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item  mx-3">
            <a className="nav-link"   style={{fontWeight:"800", fontSize:"1.2rem"}} aria-disabled="true">projects</a>
          </li>
        </ul>
         
      </div>
      </div>
     
    </div>
  </nav>
 
  )
}

export default NavBar
