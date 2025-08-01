import express from "express"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app