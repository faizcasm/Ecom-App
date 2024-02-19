import mongoose from 'mongoose'
const connectDB = async()=>{
    const db_name ='faizan'
    try {
        const connected = await mongoose.connect(`${process.env.db_url}/${db_name}`);
        console.log(`Mongodb connected ${connected.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection error",error);
    }
}
export default connectDB