//L.mapbox.accessToken = 'pk.eyJ1Ijoic2NoaWFyaXp6aSIsImEiOiJjajE4a3NuZWowNzQ5MzNvN2xkdGh2YnVwIn0.dOZQgGCs8Fwxpy7bmRvvTg';
// var map = new mapboxgl.Map({
//     container: 'map', // container id
//     style: 'mapbox://styles/schiarizzi/cjiaky4v983k32rpkncdf3eyf', // stylesheet location
//     center: [-71.198680, 42.161251], // starting position [lng, lat]
//     zoom: 4 // starting zoom
// });


//===================//
//open the correct modal on marker click
function markerOnClick(e){
  console.log("clicked a marker");
  
  
}

//==================//

//create map object, and no scroll zoom
var map = L.map('map', {scrollWheelZoom: false }).setView([42.161251, -71.198680 ], 4.5);

L.tileLayer('https://api.mapbox.com/styles/v1/schiarizzi/cjiaky4v983k32rpkncdf3eyf/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2NoaWFyaXp6aSIsImEiOiJjajE4a3NuZWowNzQ5MzNvN2xkdGh2YnVwIn0.dOZQgGCs8Fwxpy7bmRvvTg', {
    id: 'mymap'
    }).addTo(map);

//38.955532,-77.364300 my office
var tempmarker = L.marker([38.955532, -77.364300]).addTo(map).on('click', markerOnClick);
tempmarker.bindPopup("<b><a href='#'>Hello world!</a></b> 1/27/2019").openPopup();





