const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()


const app = express()
app.use(express.json())

app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/books',require('./routes/bookRoutes'))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server Running on Port ${PORT}`)
})