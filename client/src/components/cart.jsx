import React,{useState} from 'react';
import { useEffect } from 'react';
import './cart.css'
import {Navigate, useNavigate} from 'react-router-dom'
import Footer from './footer';
import toast from 'react-hot-toast';
const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
//     const Navigate = useNavigate()
//  function checkout(){
//     Navigate('/payment')
//  }

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }
   
    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        toast.success("Item removed from cart")
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })
  return (
  <>
  <div className='dummy-div'></div>
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div className='below'>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div className='item_price'>
                        <span>Rs / {item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
        <button className='checkout' ><a href='/payment'>Checkout</a></button>

        <br/>
        <br/>
        <br/>
    </article>
    <br/>
    <Footer/>
    </>
  )
}

export default Cart