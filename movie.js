var axios = require("axios");

// Constructor
const Movie = function() {
    this.findMovie = function(search) {
        var URL = "https://www.omdbapi.com/?t=" + search + "&apikey=trilogy";

        axios.get(URL).then(function(response) {
            const jsonData = response.data;
            // console.log(jsonData);
            const title = jsonData.Title;
            const released = jsonData.Released;
            const imdbRating = jsonData.imdbRating;
            const rottenTomatoes = jsonData.Ratings[1].Value;
            const country = jsonData.Country;
            const language = jsonData.Language;
            const plot = jsonData.Plot;
            const Actors = jsonData.Actors;
            
            const CRLF = "\n";
            const divider = `\n-----------------------------\n`;
            let movieData = divider + 
                "Title: " + title + CRLF +
                "Released: " + released + CRLF +
                "IMDB Rating: " + imdbRating + CRLF +
                "Rotten Tomatoes: " + rottenTomatoes + CRLF +
                "Country: " + country + CRLF +
                "Language: " + language + CRLF +
                "Plot: " + plot + CRLF +
                "Actor(s): " + Actors
                + divider;
                
            
            console.log(movieData);

        });
    }
}

module.exports = Movie;