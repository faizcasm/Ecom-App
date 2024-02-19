import { useState } from 'react'
import React from 'react';
import Navbar from './navbar'
import '../components/home.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaCartPlus} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Footer from './footer';
function Admin(){
  const Navigate=useNavigate()
  const logout =()=>{
    Navigate('/login')
    toast.success("User Logged Out")
  }
  function ouch(){
    Navigate('/cart')
}
    const user = "Profile"
    function ouch(){
        Navigate('/cart')
        toast("I am Cart")
    }
  return(
    <>
       
  
            <br/>
            <br/>
            <div className="logout">
                <h2>Hello {user}</h2>
                <button className="logoutbtn" onClick={logout}>Logout</button>
            </div>
            <br/>
            <hr/>
            <div className='admin'>'
            <div className='admin-hero'>
            </div>
            <h3>Welcome Back</h3>
              <a href='/products'>Check New Products</a>
            </div>
           <br/>
           <br/>
            
          <Footer/>
    </>
  )
}
export default Admin