import stripe from 'stripe'
import { v4 as uuidv4 } from "uuid";
const Stripe = stripe('sk_test_51OgMFHSIQTzOyhReZIkK0eqIz7Vb1RqBxn9WzVRigbagilu1yEAWoyN1JrNRW4qsgFws3mHU2YL6utNrUHqBgfA100MFiXYxoy')
const payment = async (req,res)=>{
    const {product,token}=req.body
    console.log("product :",product);
    const idempotencyKey =uuidv4()

    return Stripe.customers.create({
        email: token.email,
        source : token.id,
    }).then(customer=>{
        Stripe.paymentIntents.create({
            amount :product.price*100,
            currency :'usd',
            customer:customer.id,
            receipt_email:token.email,
            description :"purchase of product.name"
        },{idempotencyKey})
    }).then(result=>{
        console.log("Payment success");
       return res.status(200).json(result)
    }).catch(err=>{
        console.log("error hai bhai ",err);
    })
    
}
export default payment