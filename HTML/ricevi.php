<?php
    // Connessione al database
    $servername = "127.0.0.1";
    $username = "";
    $password = "";
    $dbname = "spritz";

    // Crea la connessione
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    // Sql query per recuperare i dati dalla tabella mappa
    $sql = "SELECT Latitudine, Longitudine, Price FROM mappa";
    $result = $conn->query($sql);
 
    if ($result->num_rows > 0) { 
        // Itera attraverso i risultati e li stampa
        $output = array();
        while($row = $result->fetch_assoc()) {
            array_push($output, array($row["Latitudine"],$row["Longitudine"],$row["Price"]));
            
        }
        echo json_encode($output);

        

    } else {
        echo "0 results";   
    }
    
    $conn->close();
?>
