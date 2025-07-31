import mongoose from "mongoose"

const connectDb = async()=>{
    try {
        const connectionDb = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb Connected successfully ${connectionDb.connection.host}`)
    } catch (error) {
        console.log("Failed to connect mongoDb connection")
    }
}
export default connectDb