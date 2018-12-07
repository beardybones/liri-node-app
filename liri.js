require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotify);

var argument = process.argv;

for (var i = 2; i < argument.length; i++) {

    if (i > 2 && i < argument.length) {
        movieName = movieName + "+" + argument[i];
    }
    else {
        movieName += argument[i];

    }
}

movieName = "";
artistName = "";
songName = "";

// change to [3] after implimenting movie-this
if (!process.argv[3]) {
    movieName = "Mr.+Nobody";
}
if (process.argv[2] === "concert-this") {

}

if (process.argv[2] === "movie-this") {

}

if (process.argv[2] === "spotify-this-song") {

}

if (process.argv[2] === "do-what-it-says") {

}



var movieURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
var bandURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";
var spotifyURL = 

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


spotify.search({ type: 'track', query: 'Ophelia' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
       
    console.log(data); 
    });