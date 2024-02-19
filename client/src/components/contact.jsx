import {useNavigate} from 'react-router-dom'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import '../components/home.css'
import axios from 'axios'
import { useState } from 'react'
import Navbar from './navbar'
import {toast} from 'react-hot-toast'
import Footer from './footer'
function Contact(){
    const Navigate = useNavigate()
    const [from,setFrom]=useState()
    const [to,setTo] = useState()
    const [subject,setSubject] = useState()
    const [message,setMessage] = useState()
    const Emailsubmit = async (e)=>{
        e.preventDefault();
       
        axios.post('http://localhost:8000/contact',{to,from,subject,message})
        .then(result =>{
            console.log("result",result);
            toast.success("Mail Sended Success")
            Navigate('/contact')
           document.getElementById('from').value="";
           document.getElementById('subject').value="";
           document.getElementById('message').value="";
        })
        .catch(err=>{
            console.log("error",err);
            toast.error("Something went wrong")
        })
    }
    return(
        <>

            <br/>
  
//form   <form onSubmit={Emailsubmit} className='emailform'>
                <div className='emailformdiv'>
                <h1 >Contact me</h1>
                <input type='email' onChange={(e)=>setFrom(e.target.value)} name='from' id='from' placeholder='Enter Email'></input>

<br/>
             
                <input type='text' name='subject' onChange={(e)=>setSubject(e.target.value)} id='subject' placeholder='Enter Subject'></input>
<br/>
                <textarea id='message' name='message' onChange={(e)=>setMessage(e.target.value)} placeholder='Your Message'></textarea>
<br/>
                <button type='submit' name='submit' id='submit'>Send</button>
                </div>
                </form>



           <br/>
           <br/>
    
           <Footer/>
        </>
    )
}
export default Contact