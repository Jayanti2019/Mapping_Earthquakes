// Add console.log to check to see if our code is working.
//console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
//let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Jayanti2019/Mapping_Earthquakes/main/majorAirports.json";



// Get data from cities.js
//let cityData = cities;

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});

// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
//    console.log(city)
//    L.marker(city.location, {
//        radius: city.population/100000
//    })
//    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//  .addTo(map);
//});

// Coordinates for each point to be used in the line.
//let line = [
//    [33.9416, -118.4085],
//    [37.6213, -122.3790]
//  ];

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
//    color: "red"
//  }).addTo(map);

// Coordinates for each point to be used in the polyline.
//let line = [
//    [33.9416, -118.4085],
//    [37.6213, -122.3790],
//    [40.7899, -111.9791],
//    [47.4502, -122.3088]
//  ];

// Create a polyline using the line coordinates and make the line yellow.
//L.polyline(line, {
//    color: "yellow"
// }).addTo(map);

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);