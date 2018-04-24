<?php 

$sProductId = $_GET['id'];
// Load all the products and decode them to an array
$sProducts = file_get_contents('data-basket.txt');

echo $sProducts;

?>