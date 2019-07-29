require("dotenv").config();
var ConcertEvent = require("./BandsInTown.js");
var Spotify = require('node-spotify-api');
var Movie = require("./movie.js");
var fs = require("fs");

let command = process.argv[2];
let search = process.argv.slice(3).join(" ");


var concert = new ConcertEvent();
var movie = new Movie();

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });

// Commands: concert-this, spotify-this song, movie-this, do-what-it-says
if (command === "concert-this") {
    concert.findConcert(search);
} else if (command === 'spotify-this-song') {
    // By default, if no search term is provided, search for "The Sign"
    if (!search) {
        search = "The Sign";
    }

    spotifySong(search);
} else if (command === 'movie-this') {
    // By default, if no search term is provided, search for "Mr. Nobody"
    if (!search) {
        search = "Mr. Nobody";
    }

    movie.findMovie(search);
} else if (command === 'do-what-it-says') {
    fs.readFile("random.txt", "utf8", function(error, data) {

        // If the code experiences any errors it will log the error to the console.
        if (error) {
          return console.log(error);
        }
        
        // We will then print the contents of data
        //console.log(data);
      
        // Then split it by commas (to make it more readable)
        var dataArr = data.split(",");

        if (dataArr[0] == "spotify-this-song") {
            spotifySong(dataArr[1]);
        } else if (dataArr[0] == 'movie-this') {
            movie.findMovie(dataArr[1]);
        } else if (dataArr[0] == 'concert-this') {
            concert.findConcert(dataArr[1]);
        }
        
      });
}

function spotifySong(search) {
    spotify.search({
        type: 'track', query: `${search}`
    }).then(function(response) {
        const jsonData = response.tracks.items;
    
        jsonData.forEach(element => {
            const divider = `\n-----------------------------\n`;
            let SongData2 = `${divider}Artist(s): ${element.artists[0].name} \nSong: ${element.name} \nPreview URL: ${element.preview_url} \nAlbum: ${element.album.name} ${divider}`;
            console.log(SongData2);
        });
      })
      .catch(function(err) {
        console.log(err);
      });
}
