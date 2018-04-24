<?php

$sProductId = $_POST ['txtProductId'];
$sProductNewName = $_POST ['txtProductNewName'];
$sProductNewPrice = $_POST ['txtProductNewPrice'];

// Load all the productss and decode them to an array
$sProducts = file_get_contents('data-product.txt');
$aProducts = json_decode($sProducts);
//echo $sProducts;

for ($i = 0; $i < count($aProducts); $i++) {
  if ($aProducts[$i]->id == $sProductId) {
  	$aProducts[$i]->name = $sProductNewName;
  	$aProducts[$i]->price = $sProductNewPrice;
    //return;
  }
}

echo $sProducts;
// Encode all the product and save it to the file;
$sajProducts = json_encode($aProducts);
file_put_contents('data-product.txt', $sajProducts);


?>