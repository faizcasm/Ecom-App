import React from 'react';
import list from './list';
import Cards from './cards';
import './cart.css'
import Footer from './footer';
const Product = ({handleClick}) => {
  return (
    <>
    <section>
        {
            list.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
    <br/>
    <Footer/>
</>
  )
}

export default Product