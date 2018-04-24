<?php
	
	session_start();

	$sUserId = $_SESSION['id'];

	// Load all the PRODUCTS and decode them to an array
	$sUsers = file_get_contents('data-user.txt');
	$aUsers = json_decode($sUsers);

	for ($i = 0; $i < count($aUsers); $i++) {
  		if ($aUsers[$i]->id == $sUserId) {
    	echo json_encode($aUsers[$i]);
    	//return;
    	// Delete from array, this user, 1 {object}
    	array_splice($aUsers, $i, 1);
    	session_destroy();
  		}
	}

	$sajUpdatedUser = json_encode($aUsers);
	file_put_contents('data-user.txt', $sajUpdatedUser);
	$sajUpdatedUser = file_get_contents('data-user.txt');



?>