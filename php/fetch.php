<?php
  header('Access-Control-Allow-Origin: *'); // clientside(Node) <-> serverside(PHP)

  $theConnection = new mysqli("localhost", "root", "", "storestuff");

  if($theConnection->connect_error) {
    printf("Connection failed: %s\n", $theConnection->connect_error);
    exit();
  }

  $query = "SELECT * FROM thestuff";
  $theData = array();

  if($result = $theConnection->query($query)) {
    while($row = mysqli_fetch_array($result)) {
      $theData[] = array(
        'id'=>$row['id'],
        'date'=>$row['date'],
        'content'=>$row['content']);
    }
    echo json_encode($theData); // Echo the output for the controller to access
    $result->free(); // Free the result set
  }
  else {
    echo "0 results.";
  }
  $theConnection->close(); // Close the connection
?>
