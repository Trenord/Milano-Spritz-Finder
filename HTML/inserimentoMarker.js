function insertMarker(lat,lon){
    let price = getPrice();
    send(lat, lon, price);
    reloadPage();
}

function getPrice(){
    var price = window.prompt("prezzo")
    return price;
}

function send(lat, lon, price){
    var invio = new XMLHttpRequest();
    invio.open("POST", "invio.php", true);
    invio.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    invio.send("lat=" + lat + '&lon=' + lon + '&price=' + price);
}

function reloadPage(){
    location.reload();
}