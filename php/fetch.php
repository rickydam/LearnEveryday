<?php
  header('Access-Control-Allow-Origin: *'); // clientside(Node) <-> serverside(PHP)

  $mysqli = new mysqli("localhost", "root", "", "storestuff");

  if($mysqli->connect_error) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
  }

  $query = "SELECT * FROM thestuff";
  $theData = array();

  if($result = $mysqli->query($query)) {
    while($row = mysqli_fetch_array($result)) {
      $theData[] = array(
        'date'=>$row['date'],
        'content'=>$row['content']);
    }
    echo json_encode($theData); // Echo the output for the controller to access
    $result->free(); // Free the result set
  }
  else {
    echo "0 results.";
  }
  $mysqli->close(); // Close the connection
?>
