<?php
$conn = mysqli_connect('127.0.0.1','','','test');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$query = 'SELECT * FROM users';
$result = mysqli_query($conn, $query);
header('Content-Type: application/json');
echo json_encode($result);

?>