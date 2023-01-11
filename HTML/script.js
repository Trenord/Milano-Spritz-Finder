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
    addMarkers(data);
    console.log(data);
  })


function addMarkers(locali) {
    for(let i = 0; i < locali.length; i++) {
        let locale = locali[i];
        createMarkerFromLocale(locale);
    }
}


function createMarkerFromLocale(locale) {
    let marker = L.marker(locale);
    marker.bindPopup(locale[2]).openPopup();
    marker.addTo(map);
}






