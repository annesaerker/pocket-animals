<?php 
// Load all the users and decode them to an array
$sUsers = file_get_contents('data-user.txt');
$aUsers = json_decode($sUsers);

for ($i = 0; $i < count($aUsers); $i++) {
  unset( $aUsers[$i]->image );
}

$sUsers = json_encode($aUsers);
echo $sUsers;


?>