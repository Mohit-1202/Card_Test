import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"
import app from "./app.js"


dotenv.config()
const PORT = process.env.PORT || 3000
connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is listening on ${PORT}`)
    })
}).catch((err)=>{
    console.log("Db connection failed",err)
})