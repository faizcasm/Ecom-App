import { useState } from 'react'
import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
import { useNavigate } from 'react-router-dom';
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

import axios from 'axios';
import Navbar from './navbar'
import toast from 'react-hot-toast';
import Footer from './footer';

function Payment(){
    const Navigate = useNavigate()
    const [product,setProduct] = useState({
        name :"Faizan",
        price:20000,
        productBy:'Faizan Merchant'
    })
    const makepayment = token=>{
        const body ={
            token,
            product
        }
        const headers = {
            "Content-Type":'application/json'
        }
         return fetch('http://localhost:8000/payment',{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(response=>{
            console.log("Stripe response ",response);
           toast.success("Payment Successfull")
           Navigate('/products')
        }).catch(err=>{
            console.log("Error occured",err);
            toast.error("Payment Failed")
        })
    }
    return(
        <>

                <div className='pay'>
            <StripeCheckout stripeKey='pk_test_51OgMFHSIQTzOyhRecoYt6vmBEtcpiz9pG5OcGVes2HZRr7uQY8jSEk3TyihOXXSec5GX23tKGwrYNA1Kj4aO7wHK00iCODBoV8' token={makepayment} amount={product.price*100} name={product.name}>
                <button id='pay'>Pay</button>
            </StripeCheckout>
</div>

<br/>
           <br/>
    
        <Footer/>

           
        </>
    )
}
export default Payment