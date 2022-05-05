const express = require('express');
const jwt = require('jsonwebtoken');
const {
    JWT_KEY
} = require('../secrets');
const subModel = require('../Model/SubscriberModel');

const authRouter = express.Router();
authRouter.route("/signin").post(signIn)
authRouter.route("/signout").get(signOut)

async function signIn(req, res) {
    try {

        let userbody = req.body;

        let user = await subModel.findOne({
            email: userbody.email
        })

        if (user.password === userbody.password) {

            let payload = user.email;

            const token = jwt.sign({
                id: payload
            }, JWT_KEY)

            res.cookie('login', token, {
                httpOnly: true
            })

            res.json({
                message: "Admin signed in",
                user
            })

        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

async function signOut(req, res) {
    try {

        if (req.headers.cookie) {
            res.clearCookie('login');
            res.json({
                message: "Admin logged out",
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}



module.exports = authRouter;