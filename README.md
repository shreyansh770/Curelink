# Curelink

Made a server side app for sending newsletters to subscribed users for the topics of their interest


## Tech Used
 1) MongoDB -> for storing users and articles
 2) Express -> to create server
 3) POSTMAN for server side testing

## FEATURES
 1) Subscribing option to the user via email
 2) Login/Logout feature for the admin using *JWT* cookies
 3) Only admin can create content
 4) Authorization added for giving permissions to add admin or content only to the Admins

## WORKING 
 1) The user subscribes to any number of topics he/she likes
 2) The articles are sorted according the newest first i.e the arcticle which have been created in the last 5 mins will only be send to the specific user
 3) Mails are send to the subscriber using *NODEMAILER*
 4) The process has been automated using *SET INTERVAL* which has been designed to send newsletters to the subscriber every 6 mins


## ADMIN LOGGING IN 
![2022-05-05](https://user-images.githubusercontent.com/56127597/166907311-485bd110-61c0-472c-a346-a385419675d6.png)




## ADMIN ADDING CONTENT 



## USER SUBSCRIBING



## USER RECEIVING NEWSLETTER 


 
