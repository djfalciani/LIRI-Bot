require("dotenv").config();
var moment = require('moment');
const keys = require("./keys.js");

function Spotify(obj) {
    this.id = obj.id;
    this.secret = obj.secret;
}

const spotify = new Spotify(keys.spotify);
// console.log(spotify);
// console.log("Hello World");
// console.log(process.env.SPOTIFY_ID)
// var test = keys.spotify.id;
// console.log(test);

// Commands: concert-this, spotify-this song, movie-this, do-what-it-says

let date = moment().format('dddd');
let date2 = moment().format('L');
console.log(date);
console.log(date2);
