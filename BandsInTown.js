var axios = require("axios");
var fs = require("fs");
var moment = require('moment');

// Constructor
const ConcertEvent = function() {
    this.findConcert = function(band) {
        var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";

        axios.get(URL).then(function(response) {
            // Place the response.data into a variable, jsonData.
            const jsonData = response.data;

            // console.log(response.data[0].id);
            jsonData.forEach(function(element) {
                // console.log(element.id);
                let concertData = [
                    "Venue: " + element.venue.name,
                    "Location: " + element.venue.city + ", " + element.venue.region,
                    "Date: " + moment(element.datetime).format('L')
                ].join("\n\n");
                console.log(concertData);
              });
            

        });
    }
}

module.exports = ConcertEvent;