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

var blogs = posts;
console.log(blogs);
//load list of posts from json.
//posts variable
var postnumber = blogs.length;
var i;
for(i = 0; i < postnumber; i++){
  var tempmarker = L.marker([blogs[i].lat, blogs[i].lon]).addTo(map).on('click', markerOnClick);
  if(blogs[i].img != ""){//has an image
    console.log("has img =", blogs[i].img);
    //<img src="" class="postimg" alt="an image">
     tempmarker.bindPopup('<b>' + blogs[i].title + '</b> ' + blogs[i].date + '</br><img src="' + blogs[i].img + '" class="postimg" width="200px" alt="an image"><br> <p>' + blogs[i].post + '</p>').openPopup();
     }
  else{
      tempmarker.bindPopup('<b>' + blogs[i].title + '</b> ' + blogs[i].date + '</br><p>' + blogs[i].post + '</p>').openPopup();
  }
  
}

map.setView([42.161251, -71.198680 ], 4.5);


//========= Set recent post ===========//
var recent_post_section = document.getElementById('recent-content');

const appendNewPost = function(entry) {
  console.log("entry is ", entry);
  var newpost = '<h2>' + entry.title+ '</h2><p>' + entry.date + ".<b> Location: </b>" + entry.lat + ", " + entry.lon + '  <b>W3W:</b> '+ entry.id + '</p><p>' + entry.post +'</p>';
  recent_post_section.innerHTML = newpost;
}

console.log("last entry: " , blogs[blogs.length - 1]);
appendNewPost(blogs[blogs.length - 1]);
