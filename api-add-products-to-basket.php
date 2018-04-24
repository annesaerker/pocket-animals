<?php

$sProductId = $_GET['id'];
// $sProductName = $_GET['name'];
// $sProductPrice = $_GET['price'];
// $sProductImage = $_GET['image'];

// Load all the users and decode them to an array
$sProducts = file_get_contents('data-product.txt');
$aProducts = json_decode($sProducts);

for ($i = 0; $i < count($aProducts); $i++) {
  if ($aProducts[$i]->id == $sProductId) {
    //$AddedProduct = json_encode($aProducts[$i]);
    $sProductId = $aProducts[$i]->id;
   	$sProductName = $aProducts[$i]->name;
    $sProductPrice = $aProducts[$i]->price;
    $sProductImage = $aProducts[$i]->image;
	  $sjProducts = json_encode($aProducts[$i]);
    // return;
    // echo $AddedProduct;
  }
}
//echo $sProducts;

$sAddedProducts = file_get_contents('data-basket.txt');
$aAddedProducts = json_decode($sAddedProducts);

$sajProducts = json_encode($aProducts);
file_put_contents('data-basket.txt', $sajProducts);
echo $sajProducts;

$jAddedProduct = json_decode('{}');
$jAddedProduct->id = $sProductId;
$jAddedProduct->name = $sProductName;
$jAddedProduct->price = $sProductPrice;
$jAddedProduct->image = $sProductImage;
// $jNewProduct->price = $sProductPrice;

array_push($aAddedProducts, $jAddedProduct);

$sAddedToBakset = json_encode($aAddedProducts);
file_put_contents('data-basket.txt', $sAddedToBakset);

echo $sAddedToBakset;

?>