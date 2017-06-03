<?php
  header('Access-Control-Allow-Origin: *'); // clientside(Node) <-> serverside(PHP)

  $theConnection = new mysqli("localhost", "root", "", "the_database");

  if($theConnection->connect_error) {
    printf("Connection failed: %s\n", $theConnection->connect_error);
    exit();
  }

  $query = "SELECT * FROM the_table";
  $theData = array();

  if($result = $theConnection->query($query)) {
    while($row = mysqli_fetch_array($result)) {
      $theData[] = array(
        'id'=>$row['id'],
        'date'=>$row['theDate'],
        'content'=>$row['theContent']);
    }
    echo json_encode($theData); // Echo the output for the controller to access
    $result->free(); // Free the result set
  }
  else {
    echo "0 results.";
  }
  $theConnection->close(); // Close the connection
?>
