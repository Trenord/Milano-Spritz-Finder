<?php
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    
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

    $query = "INSERT INTO users (name, email) VALUES ('$lat', '$lon')";
    mysqli_query($conn, $query);
?>