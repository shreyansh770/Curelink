const express = require('express');
const sendMail = require('../helpers/sendMail');
const contentModel = require('../Model/Content');
const subModel = require('../Model/SubscriberModel')

// const newsRouter = express.Router


// sorting newletter on the basis of time they were created



// to make a function that will fun after every x interval

// this function will get all the articles created in that x interval

// will send this to the userhandler function

// user handler fucntion will get all the users that have subscribed to 
// the article with that topic and will send emails to those users



const userHandler = async (event, newletters) => {

    try {


        let allUsers = await subModel.find({});

        let subUsers = allUsers.filter((user) => {
            return user.topics ?.includes(event)
        })

        // sending mail to sub users
        for (let i = 0; i < subUsers.length; i++) {
            let email = subUsers[i].email;

            // send mail function
            // sendMail(email, newletters)
        }

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
        let Health_Care = []

        for (let i = 0; i < articles.length; i++) {

            if (articles[i].topic === 'Sports' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Sports.push(articles[i]);
            } else if (articles[i].topic === 'Current Affairs' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Current_Affairs.push(articles[i]);
            } else if (articles[i].topic === 'Entertainment' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Entertainment.push(articles[i]);
            } else if (articles[i].topic === 'Astrology' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Astrology.push(articles[i]);
            } else if (articles[i].topic === 'Health Care' && articles[i].time <= timeNow && articles[i].time >= time5minago) {
                Health_Care.push(articles[i]);
            }

        }

        for (let i = 0; i < 5; i++) {

            if (i == 0 && Sports.length != 0) {
                userHandler("Sports", Sports);
            }

            if (i == 1 && Current_Affairs.length != 0) {
                userHandler("Current Affairs", Current_Affairs);
            }

            if (i == 2 && Entertainment.length != 0) {
                userHandler("Entertainment", Entertainment);
            }

            if (i == 3 && Astrology.length != 0) {
                userHandler("Astrology", Astrology);
            }

            if (i == 4 && Health_Care.length != 0) {
                console.log(Health_Care.length);
                userHandler("Health Care", Health_Care);
            }
        }

        // userHandler()

    } catch (error) {

    }






}