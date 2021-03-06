const express = require('express');
const contentModel = require('../Model/Content');
const subModel = require('../Model/SubscriberModel');
const {
    protectRoute,
    isAuthorized
} = require('./middleware');

const userRouter = express.Router();

userRouter.route('/add').post(protectRoute, isAuthorized(['Admin']), addAdmin)
userRouter.route('/create').post(protectRoute, isAuthorized(['Admin']), createContent)
userRouter.route('/subscribe').post(subUser)


// add admin (only admin allowed)

async function addAdmin(req, res) {

    try {

        let adminObj = req.body;


        let admin = await subModel.create(adminObj);

        res.json({
            message: "New Admin has been added",
            admin
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// function to add content (only admins)
async function createContent(req, res) {
    try {

        let contentObj = req.body;

        let post = await contentModel.create(contentObj);

        res.json({
            message: "New post has been added",
            post
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// user subscription 

async function subUser(req, res) {
    try {

        let userObj = req.body

        let user = await subModel.create(userObj);

        res.json({
            message: "Thankyou for subscribing to our newsletter",
            user
        })


    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

// user subscribing to topics






module.exports = userRouter;