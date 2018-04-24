<?php

session_start();

$sUserId = $_SESSION['id'];
$sUserNewName = $_POST ['txtNewUserName'];
$sUserNewLastname = $_POST ['txtNewUserLastName'];
$sUserNewPassword = $_POST ['txtNewUserPassword'];
$sUserNewTelephonenumber = $_POST ['txtNewUserTelephonenumber'];
$sUserNewEmail = $_POST ['txtNewUserEmail'];

echo $sUserNewName;

// Load all the users and decode them to an array
$sUsers = file_get_contents('data-user.txt');
$aUsers = json_decode($sUsers);
//echo $sUsers;

for ($i = 0; $i < count($aUsers); $i++) {
	//var_dump( $aUsers);
  if ($aUsers[$i]->id == $sUserId) {
  	$aUsers[$i]->name = $sUserNewName;
  	$aUsers[$i]->lastname = $sUserNewLastname;
  	$aUsers[$i]->password = $sUserNewPassword;
  	$aUsers[$i]->telephonenumber = $sUserNewTelephonenumber;
  	$aUsers[$i]->email = $sUserNewEmail;
	//echo $sUserId;
    //return;
  }
}

//echo $sUsers;
// Encode all the product and save it to the file;
$sajUsers = json_encode($aUsers);
file_put_contents('data-user.txt', $sajUsers);

session_destroy();



?>


