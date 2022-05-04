const express = require('express');
const contentModel = require('../Model/Content');
const subModel = require('../Model/SubscriberModel');

const userRouter = express.Router();

userRouter.route('/add').post(addAdmin)
userRouter.route('/create').post(createContent)


// create admin (only admin allowed)

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

async function createContent(req, res) {
    try {

        let contentObj = req.body;

        let post = await contentModel.create(contentObj);

        res.json({
            message: "New post has been added",
            post
        })

    } catch (error) {

    }
}




module.exports = userRouter;