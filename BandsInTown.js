var axios = require("axios");
var moment = require('moment');

// Constructor
const ConcertEvent = function() {
    this.findConcert = function(band) {
        var URL = "https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp";
        // console.log(URL);

        axios.get(URL).then(function(response) {
            // Place the response.data into a variable, jsonData.
            const jsonData = response.data;

            // console.log(jsonData[0].venue.name);
            jsonData.forEach(element => {
                const divider = `\n-----------------------------\n`;
                let concertData = `${divider}Venue: ${element.venue.name} \nLocation: ${element.venue.city},  ${element.venue.region} \nDate: ${moment(element.datetime).format('L')} ${divider}`;
                console.log(concertData);
            });

        }).catch(function(err) {
            console.log(err);
          });
    }
}

module.exports = ConcertEvent;