const express = require('express');
const contentModel = require('../Model/Content');

// const newsRouter = express.Router


// sorting newletter on the basis of time they were created



// to make a function that will fun after every x interval

// this function will get all the articles created in that x interval

// will send this to the userhandler function

// user handler fucntion will get all the users that have subscribed to 
// the article with that topic and will send emails to those users


module.exports.articlesHandler = async function () {

    let timeNow = Math.round(new Date().getTime() / 1000);
    let time5minago = Math.round(timeNow - 5 * 60000);

    // getting all the articles within the current 5min timestamp

    let articles = await contentModel.find();

    let Sports =[];
    let Current_Affairs =[];
    let Entertainment =[];
    let Astrology =[];
    let News=[]

}