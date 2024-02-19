import './home.css'
import { useNavigate } from 'react-router-dom'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin , FaCartPlus } from 'react-icons/fa'
import { CiMenuFries } from "react-icons/ci";
function Navbar({size, setShow}){
    function menu(){
        const container = document.querySelector('li');
        container.style.visibility="visible"
    }
    return(
        <>
    
 <div className="nav-container">
                <h1>Ecom App</h1>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/products" onClick={()=>setShow(true)}>Products</a></li>
                <li><a href="/contact">Contact</a></li>
            <span onClick={()=>setShow(false)} ><FaCartPlus size={30}/>{size}</span>
                {/* <span>{size}</span> */}
            </div>
        </>
    )
}
export default Navbar