import '../components/home.css'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Navbar from './navbar'
import Footer from './footer'
function About(){
    
 return(
        <>
      
<br/>
            <div className='about'>'
            <div className='about-hero'>

            </div>
            <h3>We Provide best quality . Our merchants are very honest and our customer service is perfect</h3>
              <a href='/products'>Learn more</a>
            </div>
            

            <div className='about2'>'
            <div className='about2-hero'>

            </div>
            <h3>
            1. Discover a sustainable shopping experience with our eco-friendly ecommerce website, offering a wide range of environmentally conscious products. <br/>
             2. Shop guilt-free on our ecommerce platform, dedicated to promoting sustainable living through a curated selection of eco-friendly products. <br/>
            3. Embrace a greener lifestyle with our ecommerce website, providing a diverse collection of environmentally friendly products for conscious consumers.
            </h3>
              <a href='/products'>Learn more</a>
            </div>
           <br/>
           <br/>
    
         <Footer/>
        </>
    )
}
export default About