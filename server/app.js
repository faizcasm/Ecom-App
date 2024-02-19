import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
const app = express();
dotenv.config({
    path:'./.env'
})
app.use(express.json({limit:'12kb'}))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send('Backend working')
})
import router from './routes/router.js'
app.use('/',router)
export default app