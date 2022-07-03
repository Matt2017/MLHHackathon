require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
/* 
I had an issue connecting the data inputted in the HTML forms into this JS file.  Typical import/export wasn't working, as I've read that feature is different for Node.
Because of this, I simply wrote my imputs into the message body of the text.  If I could import, I would ${name}, for example.

With more time, I would fetch weather conditions within 24 hours of the concert with an open-source api that tracks weather.  
If the chance of precipitation goes above 50% in the area of the concert, a text would be deployed to the user.

A similar script could be used to notify users if there was an issue with parking, an emergency, or show delays.
I was attempting to get the weather function working in my weather.js file, but I figured that I would encounter the same issues importing my data into this file.
*/
client.messages.create({
    body: 'Hi Matt, your spot is reserved in section B-1. See you at the Hackerland Music Festival!',
    from: '+19794065541',
    to: '+16315747575'
}).then( message => console.log(message)).catch((err) => console.log(err));