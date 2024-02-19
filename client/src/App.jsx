import { useState } from 'react'
import Home from './components/home.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {Signup} from './components/signup.jsx'
import {Login} from './components/login.jsx'
import './components/home.css'
import Payment from './components/payment.jsx'
import Admin from './components/admin.jsx'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'
import Product from './components/Product.jsx'
import Cart from './components/cart.jsx'
import Contact from './components/contact.jsx'
import toast, {Toaster} from 'react-hot-toast'
import Navbar from './components/navbar.jsx'
function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
			
		})
		if(!isPresent){
			toast.success("Added to cart")
		}
		if (isPresent){
			toast.error(`Item already in cart`)
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
     
    <Toaster position='top-center' toastOptions={{duration:3000}}/>
    <BrowserRouter>
      <Routes>
      
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
	{	show ? <Route path='/products'  element={<Product  handleClick={handleClick}/>}></Route>
		: <Route path='/products' element={ <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}></Route>
	}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
