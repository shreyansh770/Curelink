const express = require('express')
const userRouter = require('./Routers/user')

const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({limit:'50mb',extended:true}))


// Routers
app.use('/admin',userRouter)



app.listen(8080,()=>{
    console.log("Server running on port 8080")
})