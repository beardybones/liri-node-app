require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
// var spotify = new Spotify(keys.spotify);

var nodeArgs = process.argv;

movieName = "";
// change to [3] after implimenting movie-this
if(!process.argv[3]) {
    movieName = "Mr.+Nobody";
}
if(!process.argv[2] === "concert-this") {
    
}

for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
  
    }
  }

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios
    .get(queryUrl)
    .then(function(response) {
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
    .catch(function(error) {
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