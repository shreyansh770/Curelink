const express = require('express')
const subModel = require('./Model/SubscriberModel')
const userRouter = require('./Routers/user')

const app = express();

// middleware
app.use(express.json())

app.use('/auth',userRouter)


app.listen(8080,()=>{
    console.log("Server running on port 8080")
})