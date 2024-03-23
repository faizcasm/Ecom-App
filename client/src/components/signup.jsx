import { useState } from 'react'
import axios from 'axios'
import '../components/home.css'
import {useNavigate} from 'react-router-dom'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {toast} from 'react-hot-toast'
import Navbar from './navbar'
import Footer from './footer'
function Signup(){
    const Navigate = useNavigate()
    const [username,setUsername] = useState()
    const [email,setEmail] =useState()
    const [password,setPassword] = useState()
    const handlesubmit = async (e)=>{
        e.preventDefault();
        axios.post('https://ecom-app-api-faizcasms-projects.vercel.app/register',{username,email,password})
        .then(result =>{
            console.log("result",result);
            toast.success(`Welcome ${result.data.username}`, {
                style: {
                  borderRadius: '10px',
                  background: 'green',
                  color: '#fff',
                },
              }
            );
            Navigate('/login')
        })
        .catch(err=>{
            console.log("error",err);
            toast.error("Something went wrong", {
                style: {
                  borderRadius: '10px',
                  background: 'red',
                  color: '#fff',
                },
              }
            );
        })
    }
    return(
        <>
       

//form   <form onSubmit={handlesubmit} className='form'>
                <div className='formdiv'>
                <input type='username' onChange={(e)=>setUsername(e.target.value)} name='username' id='username' placeholder='Enter Username'></input>
<br/>
               
                <input type='email' name='email' onChange={(e)=>setEmail(e.target.value)} id='email' placeholder='Enter Email'></input>
<br/>
             
                <input type='password' name='password' onChange={(e)=>setPassword(e.target.value)} id='password' placeholder='Enter Password'></input>
<br/>
                <button type='submit' name='submit' id='submit'>Register</button>
        <br/>
        <br/>
        <br/>
                <a href='/login'>Login</a>
                </div>
</form>

            <br/>
           <br/>
        <Footer/>
        </>
    )
}

export {Signup}
