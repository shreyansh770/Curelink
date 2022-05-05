const express = require('express');
const authRouter = require('./Routers/isAuth');
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
app.use('/auth',authRouter)


setInterval(() => {
    console.log("run");
    articlesHandler()
}, 300001)



app.listen(8080, () => {
    console.log("Server running on port 8080")
})