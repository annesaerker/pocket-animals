<?php

// Get the file and save it with a unique id
$sFileExtension = pathinfo($_FILES['fileUserImage']['name'], PATHINFO_EXTENSION);
$sFolder = 'images/';
$sFileName = 'userimage-'.uniqid().'.'.$sFileExtension;
$sSaveFileTo = $sFolder.$sFileName;
move_uploaded_file( $_FILES['fileUserImage']['tmp_name'], $sSaveFileTo);

// Refactored version
$jNewUser = json_decode('{}');
$jNewUser->id = uniqid();
$jNewUser->name = $_POST['txtUserName'];
$jNewUser->lastname = $_POST['txtUserLastName'];
$jNewUser->email = $_POST['txtUserEmail'];
$jNewUser->telephonenumber = $_POST['txtUserTelephoneNumber'];
$jNewUser->password = $_POST['txtUserPassword'];
$jNewUser->rePassword = $_POST['txtReTypePassword'];
$jNewUser->image = $sFolder.$sFileName;


// Load all the users and decode them to an array
$sOldUsers = file_get_contents('data-user.txt');
$jOldUsers = json_decode($sOldUsers);

// Add the new user to the array
array_push( $jOldUsers, $jNewUser );

// Encode all the users and save it to the file;
$sNewUsers = json_encode($jOldUsers);
file_put_contents('data-user.txt', $sNewUsers);

// response -> succes
//echo '{"message": "Added user"}';
echo $sNewUsers;
?>