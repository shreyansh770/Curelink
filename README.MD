# Curelink

Made a server side app for sending newsletters to subscribed users for the topics of their interest


## Tech Used
 1) MongoDB -> for storing users and articles
 2) Express -> to create server
 3) POSTMAN for server side testing
 4) Nodejs

## FEATURES
 1) Subscribing option to the user via email
 2) Login/Logout feature for the admin using *JWT* cookies
 3) Only admin can create content
 4) Authorization added for giving permissions to add admin or content only to the Admins

## WORKING 
 1) The user subscribes to any number of topics they like
 2) The admin adds the article which can be stored in the database and timestamp would be added to it automatically done using *DATE CONSTRUCTOR*
 3) The articles are sorted according the newest first i.e the arcticle which have been created in the last 5 mins will only be send to the specific user
 4) Mails are send to the subscriber using *NODEMAILER*
 5) The process has been automated using *SET INTERVAL* which has been designed to send newsletters to the subscriber every 5 mins


## ADMIN LOGGING IN 
![2022-05-05](https://user-images.githubusercontent.com/56127597/166907311-485bd110-61c0-472c-a346-a385419675d6.png)


## USER SUBSCRIBING
![2022-05-05 (4)](https://user-images.githubusercontent.com/56127597/166910575-41d391b5-a64f-4e78-95a7-fa9bc0f6b0aa.png)

## ADMIN ADDING CONTENT 
![2022-05-05 (2)](https://user-images.githubusercontent.com/56127597/166910276-f2d5e4c3-45f5-42a0-9881-5a2acdb22e59.png)



## USER RECEIVING NEWSLETTER 
![2022-05-05 (3)](https://user-images.githubusercontent.com/56127597/166910398-74875042-2fea-42ab-bdf9-9853faaaef1d.png)

## CONTENT STORAGE
![2022-05-05 (8)](https://user-images.githubusercontent.com/56127597/166921150-05f2fc60-2d60-48d4-bd6b-e38674334dad.png)
## USER STORAGE
![2022-05-05 (7)](https://user-images.githubusercontent.com/56127597/166920865-c7e94d85-4ae3-46ef-918b-8842746a683f.png)

## CODE INFO
1) server.js -> main file needs to be run(nodemon server.js) to start the server
2) Routers -> contains function that would run at various routes
3) helpers -> some helper function like sendMail function for sending mail
4) Model -> Contains Schema model for Content and Subscriber DB


## Improvements and Pitfalls
1) One thing where the code could be optimised is the complexity while sending mail to the subsrciber
2) There would be certain delay of fews microseconds due to set interval when working on a larger scale 
 

Was a great experience working on this assignment thankyou CURELINK for providing me with this oppurtunity. Hoping to get more opportunities to work with the team