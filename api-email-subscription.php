<?php

$jNewSubscription = json_decode('{}');
$jNewSubscription->email = $_POST['txtSubscription'];


// Load all the subcriptions and decode them to an array
$sOldSubscription = file_get_contents('data-subscriptions.txt');
$jOldSubscription = json_decode($sOldSubscription);

// Add the new subcription to the array
array_push( $jOldSubscription, $jNewSubscription );

// Encode all the subcription and save it to the file;
$sNewSubscription = json_encode($jOldSubscription);
file_put_contents('data-subscriptions.txt', $sNewSubscription);

// response -> succes
//echo '{"message": "Added subcriber"}';
echo $sNewSubscription;


?>