<?php 

$sProducts = file_get_contents('data-basket.txt');
$aProducts = json_decode($sProducts);

// converting the array of products into a emtry array
$aProducts = [];

$sAddedToBakset = json_encode($aProducts);
file_put_contents('data-basket.txt', $sAddedToBakset);

?>