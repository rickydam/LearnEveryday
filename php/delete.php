<?php
  header('Access-Control-Allow-Origin: *');

  $theConnection = new mysqli("localhost", "root", "", "the_database");

  if($theConnection->connect_error) {
    printf("Connection failed: %s\n", $theConnection->connect_error);
    exit();
  }

  $theData = json_decode(file_get_contents('php://input'));
  $the_id = mysqli_real_escape_string($theConnection, $theData->id);
  echo $the_id;

  $query = "DELETE FROM the_table WHERE id=$the_id";
  mysqli_query($theConnection, $query);

  $theConnection->close();
?>
