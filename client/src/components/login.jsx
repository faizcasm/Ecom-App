import '../components/home.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'
import React from 'react';
import Navbar from './navbar'
import swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import Footer from './footer';
function Login(){
    const [email,setEmail] =useState()
    const [password,setPassword] = useState()
    const Navigate = useNavigate()
    const handlesubmit = async (e)=>{
        e.preventDefault();
        axios.post('https://ecom-app-api-faizcasms-projects.vercel.app/login',{email,password})
        .then(result =>{
            console.log("result",result)
            if(result.data=="login success"){
                toast.success(`Login Success`, {
                    style: {
                      borderRadius: '10px',
                      background: 'green',
                      color: '#fff',
                    },
                  }
                );
                    Navigate('/admin')
                }
               else{
                toast.error("Incorrect Password", {
                    style: {
                      borderRadius: '10px',
                      background: 'red',
                      color: '#fff',
                    },
                  }
                );
               }
            
            })
        
        .catch(err=>{
            console.log("error",err);
            toast.error("Invalid Email", {
                style: {
                  borderRadius: '10px',
                  background: 'red',
                  color: '#fff',
                },
              }
            );
        })}
        
    return(
    <>

<br/>
<br/>
<br/>
<br/>
<br/>

        <form onSubmit={handlesubmit} className='form2'>
                <div className='formdiv'>
             
                <input type='email' name='email' id='email1' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'></input>
<br/>

                <input type='password' name='password' id='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'></input>
<br/>
                <button type='submit' name='submit' id='submit'  >Login</button>
                <br/>
                <br/>
                <br/>
                   <p>Don't have account</p>
                   <a href='/register'>Create account</a>
                </div>
</form>

            <br/>
           <br/>
    
      <Footer/>
    </>
    )
}

export {Login}
