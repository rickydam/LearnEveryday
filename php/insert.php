<?php

  header('Access-Control-Allow-Origin: *');

  $theConnection = new mysqli("localhost", "root", "", "the_database");
  if($theConnection->connect_error) {
    printf("Connection failed: %s\n", $theConnection->connect_error);
    exit();
  }

  $theData = json_decode(file_get_contents('php://input'));
  $date = mysqli_real_escape_string($theConnection, $theData->date);
  $content = mysqli_real_escape_string($theConnection, $theData->content);

  $query = "INSERT INTO the_table(theDate, theContent) VALUES('$date', '$content')";
  mysqli_query($theConnection, $query);

  $query = "SELECT id FROM the_table ORDER BY id DESC LIMIT 1";
  if($result = $theConnection->query($query)) {
    while($row = mysqli_fetch_array($result)) {
      $the_id = $row['id'];
      echo $the_id;
    }
  }
  $result->free(); // Free the result set

  mysqli_close($theConnection);

?>
