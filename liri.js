require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var userInput = process.argv.slice(3).join(" ");

// ---------------------------------------------------------------------

if (process.argv[2] === "concert-this") {
    console.log(userInput);
    var bandURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";
    console.log(bandURL);
    axios
    .get(bandURL)
    .then(function (response) {
        console.log(response.data);
        // console.log("Venue: " + response.data);
        // console.log("Location: " + response.data);
        // console.log("Date: " + response.data);

    })
    .catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
}
// ---------------------------------------------------------------------

if (process.argv[2] === "movie-this") {
    if (!userInput) {
        userInput = "Mr.+Nobody";
    }
    var movieURL = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";
    axios
    .get(movieURL)
    .then(function (response) {
        // console.log(response.data);
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);

    })
    .catch(function (error) {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });

}







// ---------------------------------------------------------------------

if (process.argv[2] === "spotify-this-song") {
    spotify.search({ type: 'track', query: songName, limit: 5}, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }   
           

        console.log(data.tracks.items[0].name); 
        });
}








// ---------------------------------------------------------------------

if (process.argv[2] === "do-what-it-says") {

}
// ---------------------------------------------------------------------








