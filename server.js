const express = require('express');
const {
    articlesHandler
} = require('./Routers/newletterFun');
const userRouter = require('./Routers/user')

const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({
    limit: '50mb',
    extended: true
}))


// Routers
app.use('/admin', userRouter)


// setInterval(() => {
    articlesHandler()

// }, 300)



app.listen(8080, () => {
    console.log("Server running on port 8080")
})