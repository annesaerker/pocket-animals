<?php

$sUserId = $_POST ['txtUserId'];
$sUserNewName = $_POST ['txtNewUserName'];
$sUserNewLastname = $_POST ['txtNewUserLastName'];
$sUserNewPassword = $_POST ['txtNewUserPassword'];
$sUserNewTelephonenumber = $_POST ['txtNewUserTelephonenumber'];
$sUserNewEmail = $_POST ['txtNewUserEmail'];

// Load all the users and decode them to an array
$sUsers = file_get_contents('data-user.txt');
$aUsers = json_decode($sUsers);
//echo $sProducts;

for ($i = 0; $i < count($aUsers); $i++) {
  if ($aUsers[$i]->id == $sUserId) {
  	$aUsers[$i]->name = $sUserNewName;
  	$aUsers[$i]->lastname = $sUserNewLastname;
  	$aUsers[$i]->password = $sUserNewPassword;
  	$aUsers[$i]->telephonenumber = $sUserNewTelephonenumber;
  	$aUsers[$i]->email = $sUserNewEmail;

    //return;
  }
}

echo $sUsers;
// Encode all the product and save it to the file;
$sajUsers = json_encode($aUsers);
file_put_contents('data-user.txt', $sajUsers);


?>