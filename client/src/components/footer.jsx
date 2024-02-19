import './home.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
function Footer(){
    return(
        <>
  <br/>
    
            <div className="footer-container">
            <h4>Ecom App</h4>
            <div className="social-links">
            <a href="#insta"> <FaInstagram size={30} className='instagram'/> </a>
          
                <a href="#fb"><FaFacebook size={30} className='facebook' /></a>
               
                <a href=" https://www.linkedin.com/in/faizan-hameed-a54316255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={30} className='linkedin' /></a>
              
              <a href="https://github.com/Faizcasm"><FaGithub size={30} className='github' /></a>
            </div>
                <h4>All rights reserved by &copy; <b>Ecom App</b></h4>
            </div>
        </>
    )
}
export default Footer