//Require Statements
let dbManager = require('./dbManager');
let express = require("express");
var qString = require("querystring");
const { response } = require('express');
let app = express();
var ObjectID = require('mongodb').ObjectId;

var database;
var postParams;





//The following 6 app.get are for the home page to select the category of quiz that you would like to play
//By clicking the link of your choice, the server will direct you to then choose the difficulty for that
//category that you would like to play on

//Home
app.get('/', function (req, res){
    res.end('<html><h1>Welcome To The Quiz App!</h1><h3>Select a topic:</h3><body><br><br><a href="/sports">Sports</a>&emsp;&emsp;<a href="/math">Math</a>&emsp;&emsp;<a href="/tvshows">TV Shows</a>&emsp;&emsp;<a href="/music">Music</a>&emsp;&emsp;<a href="/usahistory">American Hitsory</a></body></html>');
})

//Sports
app.get('/sports', function (req, res){
    res.end('<html><h1>Welcome To The Quiz App!</h1><h2>Topic: SPORTS</h2><h3>Select a difficulty:</h3><body><br><br><a href="/sports/easy">Easy</a>&emsp;&emsp;<a href="/sports/medium">Medium</a>&emsp;&emsp;<a href="/sports/hard">Hard</a></body></html>');
})

//Math
app.get('/math', function (req, res){
    res.end('<html><h1>Welcome To The Quiz App!</h1><h2>Topic: MATH</h2><h3>Select a difficulty:</h3><body><br><br><a href="/math/easy">Easy</a>&emsp;&emsp;<a href="/math/medium">Medium</a>&emsp;&emsp;<a href="/math/hard">Hard</a></body></html>');
})

//TV Shows
app.get('/tvshows', function (req, res){
    res.end('<html><h1>Welcome To The Quiz App!</h1><h2>Topic: TV SHOWS</h2><h3>Select a difficulty:</h3><body><br><br><a href="/tvshows/easy">Easy</a>&emsp;&emsp;<a href="/tvshows/medium">Medium</a>&emsp;&emsp;<a href="/tvshows/hard">Hard</a></body></html>');
})

//Music
app.get('/music', function (req, res){
    res.end('<html><h1>Welcome To The Quiz App!</h1><h2>Topic: MUSIC</h2><h3>Select a difficulty:</h3><body><br><br><a href="/music/easy">Easy</a>&emsp;&emsp;<a href="/music/medium">Medium</a>&emsp;&emsp;<a href="/music/hard">Hard</a></body></html>');
})

//American History
app.get('/usahistory', function (req, res){
    res.end('<html><h1>Welcome To The Quiz App!</h1><h2>Topic: AMERICAN HISTORY</h2><h3>Select a difficulty:</h3><body><br><br><a href="/usahistory/easy">Easy</a>&emsp;&emsp;<a href="/usahistory/medium">Medium</a>&emsp;&emsp;<a href="/usahistory/hard">Hard</a></body></html>');
})
//***********************************************************************************************************************************************************************



//Difficulties/Actual Quiz Presentation (is the goal at least)
//Unfinished because do not how to select only precise parts of collection documents and make it pretty


//Sports EASY
app.get('/sports/easy', function (req, res){
    /*database.collection('questions').find({category:"Sports", difficulty:"easy"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
*/

    res.send('<html><h1>Welcome To The Quiz App!</h1>'+
    '<body> <form method="post">'+
    '<h2>Sports - Easy</h2>'+
    'Question 1 <input name="answer[0]"><br>'+
    'Question 2 <input name="answer[1]"><br>' +
    'Question 3 <input name="answer[2]"><br>'+
    'Question 4 <input name="answer[3]"><br>' +
    'Question 5 <input name="answer[4]"><br>' +
    '<input type="submit" value="Submit">' +
    '<input type="reset" value="Clear">'+
    '</form>');

   //let grade;
    /*for(let i=0; i < 4; i++)
    {
        if(answer[i] = correctAnswer)
        {
            grade++;
        }
    }
*/
    //res.end('<div id="answer[i]"><h3> Number of Correct Answers: out of 5 possible</h3></div>');




   // database.questions.find({"category" : 1}, {"question" : 1, "_id" : 0});

/*
    var prop= postParams.prop;
	var val = postParams.value;
    let searchDoc = { [prop] : val };
res.end(dbManager.get().collection("questions").find(searchDoc, {projection: { _id: 0 , category: 0, question: 1, possibleAnswers: 0, correctAnswer: 0, difficulty: 0}}).sort({distance: -1}));
*/



})
//Sports MEDIUM
app.get('/sports/medium', function (req, res){
    database.collection('questions').find({"category":"Sports", "difficulty":"medium"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//Sports HARD
app.get('/sports/hard', function (req, res){
    database.collection('questions').find({"category":"Sports", "difficulty":"hard"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//*********************************************************************************************************************

//Math EASY
app.get('/math/easy', function (req, res){
    database.collection('questions').find({"category":"Math", "difficulty":"easy"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//Math MEDIUM
app.get('/math/medium', function (req, res){
    database.collection('questions').find({"category":"Math", "difficulty":"medium"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//Math HARD
app.get('/math/hard', function (req, res){
    database.collection('questions').find({"category":"Math", "difficulty":"hard"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//*********************************************************************************************************************

//TV Shows EASY
app.get('/tvshows/easy', function (req, res){
    database.collection('questions').find({"category":"TV Shows", "difficulty":"easy"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//TV Shows MEDIUM
app.get('/tvshows/medium', function (req, res){
    database.collection('questions').find({"category":"TV Shows", "difficulty":"medium"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//TV Shows HARD
app.get('/tvshows/hard', function (req, res){
    database.collection('questions').find({"category":"TV Shows", "difficulty":"hard"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//*********************************************************************************************************************

//Music EASY
app.get('/music/easy', function (req, res){
    database.collection('questions').find({"category":"Music", "difficulty":"easy"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//Music MEDIUM
app.get('/music/medium', function (req, res){
    database.collection('questions').find({"category":"Music", "difficulty":"medium"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//Music HARD
app.get('/music/hard', function (req, res){
    database.collection('questions').find({"category":"Music", "difficulty":"hard"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//*********************************************************************************************************************

//American History EASY
app.get('/usahistory/easy', function (req, res){
    database.collection('questions').find({"category":"American History", "difficulty":"easy"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//American History MEDIUM
app.get('/usahistory/medium', function (req, res){
    database.collection('questions').find({"category":"American History", "difficulty":"medium"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//American History HARD
app.get('/usahistory/hard', function (req, res){
    database.collection('questions').find({"category":"American History", "difficulty":"hard"}).toArray((err, result) => {
        if(err) throw err
        res.send(result)
    })
})
//****************************************************************************************************************************** 



//Functions to detect the correct vs. incorrect answers and present you the given score for that quiz


//WIP






//Reroutes to error if routes above dont match the request
app.use('*', function(req, res){
    res.status(400);
    res.end(`<h1> ERROR 400. ${req.url} NOT FOUND</h1><br><br>`);
})

//Opens the server to port 3000 and lets the admin know that server is running and 
//Whether or not the server connected to correct mongodb database
app.listen(3000, async ()=> {

    try{
        database = await dbManager.get("projectDB");
    } catch (e){
        console.log(e.message);
    }

    console.log("Server is running.");

})