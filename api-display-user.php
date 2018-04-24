<?php

  session_start();

  $sUserId = $_GET['id'];
  $sUserName = $_GET['name'];

	// Load all the users and decode them to an array
	$sUsers = file_get_contents('data-user.txt');
	$aUsers = json_decode($sUsers);



  if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
	for ($i = 0; $i < count($aUsers); $i++) {
  		if ($aUsers[$i]->id == $sUserId) {
   			echo json_encode($aUsers[$i]);
    		return;
  		}
	}

  }


$sUsers = json_encode($aUsers);
echo $sUsers;


?>