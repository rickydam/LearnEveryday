<?php
  header('Access-Control-Allow-Origin: *');

  $theConnection = new mysqli("localhost", "root", "", "the_database");
  
  if($theConnection->connect_error) {
    printf("Connection failed: %s\n", $theConnection->connect_error);
    exit();
  }

  $theData = json_decode(file_get_contents('php://input'));
  $id = mysqli_real_escape_string($theConnection, $theData->id);
  $date = mysqli_real_escape_string($theConnection, $theData->date);
  $content = mysqli_real_escape_string($theConnection, $theData->content);

  $query = "UPDATE the_table
            SET theDate='$date', theContent='$content'
            WHERE id='$id'";
  mysqli_query($theConnection, $query);

  $theConnection->close();
?>
