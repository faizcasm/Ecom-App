import app from "./app.js";
import connectDB from './database/db.js'
const port = 8000
connectDB()
.then(success =>{
    app.listen(port,()=>{
        console.log(`Listening at http://localhost:${port}`);
    })
})
.catch(err=>{
    console.log("Listening failed",err);
})