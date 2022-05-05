const jwt = require('jsonwebtoken');
const subModel = require('../Model/SubscriberModel');
const {
    JWT_KEY
} = require('../secrets');


module.exports.protectRoute = (req, res, next) => {

    try {

        let token = req.headers.cookie ?.split("=")[1];

        if (token) {

            let isverified = jwt.verify(token, JWT_KEY);

            if (isverified) {
                req.aId = isverified.id;
                next();

            } else {
                res.json({
                    message: "Please log in"
                })
            }

        } else {
            res.json({
                message: "Please log in"
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports.isAuthorized = (roles) => {

    return async function (req, res, next) {
        let {
            aId
        } = req;

        try {

            let user = await subModel.find({
                email: aId
            });

            if (user) {

                let isAllowed = roles ?.includes(user[0].role);

                if (isAllowed) {
                    next()
                } else {
                    res.json({
                        message: "User not not authorized for following operations"
                    })
                }

            }

        } catch (error) {

        }
    }
}