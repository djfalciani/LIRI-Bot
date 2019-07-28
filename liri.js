require("dotenv").config();
var ConcertEvent = require("./BandsInTown.js");
var Spotify = require('node-spotify-api');

let command = process.argv[2];
let search = process.argv.slice(3).join(" ");

// Create a new TV object
var concert = new ConcertEvent();

var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });

// Commands: concert-this, spotify-this song, movie-this, do-what-it-says
if (command === "concert-this") {
    concert.findConcert(search);
} else if (command === 'spotify-this-song') {
    // By default, if no search term is provided, search for "Andy Griffith"
    if (!search) {
        search = "The Sign";
    }
    spotify.search({
        type: 'track', query: `${search}`
    }).then(function(response) {
        const jsonData = response.tracks.items;
        // console.log(jsonData[0].artists[0].name);
        // console.log(jsonData[0].name);
        // console.log(jsonData[0].preview_url);
        // console.log(jsonData[0].album.name);
    
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
