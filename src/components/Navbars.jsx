import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import Vector from '../assets/Vector.png'
const Navbars = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  justify-content-between sticky-top" style={{ background:'#001857',
            gap: '14px',
            padding: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}>
           
          <div className="container-fluid flex-row px-4 ms-6  "  style={{ 
            
            gap: '14px', fontFamily:'sans-serif'}} >
          <img src={logo} className="img-fluid w-auto h-auto m-0p-0 ms-1" style={{ width: '507px',
      height: '37px',
      gap: '14px',
    
    }} alt="..."/>
            <a className="navbar-brand" href="#"></a>
            <ul className="navbar-nav flex-row me-auto " style={{width: '507px' , height: '37px', gap: '24px', opacity: '0px', alignItems:'center', fontSize:'20px', color:'white'}}>
              <li className="nav-item w-auto h-auto p-3 pb-1">
                <Link className="nav-link active bs-light-bg-subtle " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item w-auto h-auto p-3 pb-1 " style={{color:'white'}}>
                <Link className="nav-link" to="/aboutUs">
                  AboutUs
                </Link>
              </li>
              <li className="nav-item w-auto h-auto p-3 pb-1 ">
                <Link className="nav-link" to="services">
                  Services
                </Link>
              </li>
              <li className="nav-item w-auto h-auto p-3 pb-1 ">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item w-auto h-auto p-3 pb-1 ">
                <Link className="nav-link" to="contactUs">
                  ContactUs
                </Link>
              </li>
              <li>
             
              </li>
            </ul>
            <button class="btn w-auto h-auto px-5 py-3 me-2 border-top border-1  " style={{color:'#0EEDC5',borderRadius: '30px',
  border: '2px solid green', fontSize:'19px', hover: {
    border: '2px solid white' // Change border color on hover
  }}} ><img src={Vector } /> {''} Let's Discuss
</button>          </div>
        </nav>
      );
}

export default Navbars;
