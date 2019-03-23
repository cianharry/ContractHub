const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD5iKSY-85eQiHvymdAPHULQM6iX9HSFQ0",
  authDomain: "contracthub-caa72.firebaseapp.com",
  databaseURL: "https://contracthub-caa72.firebaseio.com",
  projectId: "contracthub-caa72",
  storageBucket: "contracthub-caa72.appspot.com",
  messagingSenderId: "408056838234"
};
firebase.initializeApp(config);

const auth = firebase.auth();

//const handlebars = require('handlebars');
const path = require("path");
const VIEWS = path.join(__dirname, 'views');

const app = express();

//app.set('view engine', 'hbs');
//app.engine('hbs', engines.handlebars);

app.set('views', './views');

//allow the application access the images folder contents to use in the app
app.use(express.static("images"));
app.use(express.static("styles"));
app.use(express.static("scripts"));

app.get('/', function(req, res){
  res.set('Cache-Control', 'public, max-ages=300, s-maxage=600');
  res.sendFile('Login.html', {root:VIEWS});
  console.log("Index home");
});

var database = firebase.database();



exports.app = functions.https.onRequest(app);

/*app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-ages=300, s-maxage=600');
    getFacts().then(facts => {
        response.render('index', { facts })
    });
});

handlebars.registerHelper('info', function() {
  var name = handlebars.escapeExpression(this.name), 
      age = handlebars.escapeExpression(this.age),
      weight = handlebars.escapeExpression(this.weight);

  return new handlebars.SafeString(
    "Name: "+name+"\nAge: "+age+"\nWeight: "+weight
  );
});*/


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
