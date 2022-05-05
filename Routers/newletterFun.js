const express = require('express');
const contentModel = require('../Model/Content');

// const newsRouter = express.Router


// sorting newletter on the basis of time they were created



// to make a function that will fun after every x interval

// this function will get all the articles created in that x interval

// will send this to the userhandler function

// user handler fucntion will get all the users that have subscribed to 
// the article with that topic and will send emails to those users



const userHandler = async () => {

    try {

    } catch (error) {

    }
}


module.exports.articlesHandler = async function () {

    try {

        
        let timeNow = Math.round(new Date().getTime() / 1000);
        let time5minago = Math.round((new Date().getTime() - 5 * 60000) / 1000);

        // getting all the articles within the current 5min timestamp

        let articles = await contentModel.find();

        let Sports = [];
        let Current_Affairs = [];
        let Entertainment = [];
        let Astrology = [];
        let News = []

        for (let i = 0; i < articles.length; i++) {

            if (articles[i].topic === 'Sports' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Sports.push(articles[i]);
            } else if (articles[i].topic === 'Current Affairs' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Current_Affairs.push(articles[i]);
            } else if (articles[i].topic === 'Entertainment' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Entertainment.push(articles[i]);
            } else if (articles[i].topic === 'Astrology' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Astrology.push(articles[i]);
            } else if (articles[i].topic === 'News' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                News.push(articles[i]);
            }

        }
    } catch (error) {

    }






}