<?php

    // Connect to the database
    $host = "127.0.0.1";
    $username = "";
    $password = "";
    $database = "test";

    $conn = mysqli_connect($host, $username, $password, $database);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $lat = $_POST['lat'];
    $lon = $_POST['lon'];
    $price = $_POST['price'];

    $query = "INSERT INTO users (Latitudine, Longitudine, Price) VALUES ('$lat', '$lon', '$price')";
    mysqli_query($conn, $query);
?>
