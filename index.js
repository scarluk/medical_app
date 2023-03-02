const express = require('express');
const Twilio = require('twilio');
const bodyParser = require('body-parser');
const assert = require('assert');
const path = require('path'); 
const app = express();
const port = 3000;
const mysql = require('mysql');
const { FactorContextImpl } = require('twilio/lib/rest/verify/v2/service/entity/factor');

const accountSid = process.env.TWILIOACCOUNT || false;
const authoken = process.env.TWILIOTOKEN || false;
const receiverNumber = process.env.TWILIORECEIVENUMBER || false;
const smsSenderNumber = process.env.TWILIOSENDERSMS || false;

// twilio access secret numbers
const client = require('twilio') (accountSid, authoken);

//log in function
const createFile= require('./files');

//message construction
const buildWording = require('./buildWording');

const message = buildWondering(opts).evenWording;

const twilioSendSMS = function(opts) {

     const message = buildWondering(opts).eventWording;

     if (message) {
          //if variables are available - ready to send messaeg
          if(accountSid && smsSenderNumber && receiveNumber) {

               client.messages

                .create({
                    body: message,
                    from: `$(smsSenderNumber)`, 
                    to: `${receiveNumber}`
                })
                .then( (response)=> {
                    if (response.errorCode) {
                         createFile('logs/twilio-log.txt', `SMS Message with sid(${response.sid})FAILED to send to ${masked} at: ${new Date().toISOString()}\r\n`); //updated file

                    }
                    else {

                         var masked = receiveNumber.substr(0, receiveNumber.length - 5) + '*****';
                         createFile('logs/twilio-log.txt', `SMS message with sid ($response.sid}) sent to ${masked} at: ${new Date().toISOString()}\r\n`);
                    }
                })
               .done();
          }
     }
}
module.exports = {

     module.exports = {
         
          twilioSendSMS

     };
}

const dbConnection = mysql.createConnection({
    host: "localhost",
    user: "",
    password: "",
    database: ""
});

dbConnection.connect(err => {
   if(err){
        throw err;
   }else{
        console.log("we connected to the database");
   }
})

app.use(express.static("public"));


app.get("/",(req,res)=>res.sendFile(path.join(__dirname,"public/index.html")));


app.set('view engine', 'ejs');
app.get("/", (req,res)=>res.sendFile("index.html"));

app.listen(port, ()=>console.log(`I am listening on port $(port)`));

