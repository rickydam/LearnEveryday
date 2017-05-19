<?php

  header('Access-Control-Allow-Origin: *');

  $theConnection = mysqli_connect("localhost", "root", "", "storestuff");
  if(mysqli_connect_errno()) {
    echo "Failed to connect to MySQL.";
  }

  $theData = json_decode(file_get_contents('php://input'));
  $date = mysqli_real_escape_string($theConnection, $theData->date);
  $content = mysqli_real_escape_string($theConnection, $theData->content);

  $query = "INSERT INTO thestuff(date, content) VALUES('$date', '$content')";
  mysqli_query($theConnection, $query);

  mysqli_close($theConnection);

?>
