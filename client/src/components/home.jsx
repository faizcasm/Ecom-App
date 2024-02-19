import '../components/home.css'
import React from 'react';
import {useNavigate} from 'react-router-dom'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Navbar from './navbar';
import Footer from './footer';
 function Home(){
    const navigate = useNavigate()
   function signup(){
    navigate('/register')
   }
    return(
        <>
      
            <br/>
            <div className='home'>'
            <div className='home-hero'>
            </div>
            <h3>Get Start With Ecommerce App</h3>
              <button className='signup' onClick={signup}>Signup</button>
            </div>
           <br/>
           <br/>
    <Footer/>
        </>
    )
    }
 export default Home