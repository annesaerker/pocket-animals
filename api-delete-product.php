<?php
	
	$sProductId = $_GET['id'];

	// Load all the PRODUCTS and decode them to an array
	$sProducts = file_get_contents('data-product.txt');
	$aProducts = json_decode($sProducts);

	for ($i = 0; $i < count($aProducts); $i++) {
  		if ($aProducts[$i]->id == $sProductId) {
    	echo json_encode($aProducts[$i]);
    	//return;
    	// Delete from array, this product, 1 {object}
    	array_splice($aProducts, $i, 1);
  		}
	}

	$sajUpdatedProduct = json_encode($aProducts);
	file_put_contents('data-product.txt', $sajUpdatedProduct);
	$sajUpdatedProduct = file_get_contents('data-product.txt');


?>