var map = L.map('map').setView([45.4350, 9.2359], 13);
var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
osm.addTo(map);

if (!navigator.geolocation) {
    console.log("Your browser doesn't support geolocation feature!")
} else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, 5000);
}

var marker, circle;
function getPosition(position) {
    var lat = position.coords.latitude
    var long = position.coords.longitude
    var accuracy = position.coords.accuracy

    if (marker) {
        map.removeLayer(marker)
    }
    if (circle) {
        map.removeLayer(circle)
    }
    marker = L.marker([lat, long])
    circle = L.circle([lat, long], {
        radius: accuracy
    })
    var featureGroup = L.featureGroup([marker, circle]).addTo(map)
    map.fitBounds(featureGroup.getBounds())

}

fetch('ricevi.php')
  .then(response => response.json())
  .then(data => {

    console.log (data);
  })




/*
var posizioni = [[1, 2], [3, 4]];

for (let i = 0; i < posizioni.length; i ++) {
    let pos = posizioni[i];
    let marker = L.marker(pos);
    marker.addTo(map);
}
*/

var idroscalo = L.marker([45.46423, 9.28976]);
idroscalo.addTo(map);

var acaso = L.marker([45.46423, 9.30976]);
acaso.addTo(map);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);
var markerpop = L.marker([45.46423, 9.23976]);
markerpop.bindPopup('5 euro').openPopup();
markerpop.addTo(map);

