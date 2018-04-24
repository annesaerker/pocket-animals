<?php 

// Load all the users and decode them to an array
$sProducts = file_get_contents('data-product.txt');
$aProducts = json_decode($sProducts);

for ($i = 0; $i < count($aProducts); $i++) {
  unset( $aProducts[$i]->image );
}

$sProducts = json_encode($aProducts);
echo $sProducts;

?>