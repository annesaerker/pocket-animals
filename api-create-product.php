<?php

// Get the file(image) and save it with a unique id
$sFileExtension = pathinfo($_FILES['fileProductImage']['name'], PATHINFO_EXTENSION);
$sFolder = 'images/';
$sFileName = 'productimage-'.uniqid().'.'.$sFileExtension;
$sSaveFileTo = $sFolder.$sFileName;
move_uploaded_file( $_FILES['fileProductImage']['tmp_name'], $sSaveFileTo);

// Get the data from the form input and decode into json
$jNewProduct = json_decode('{}');
$jNewProduct->id = uniqid();
$jNewProduct->name = $_POST['txtProductName'];
$jNewProduct->price = $_POST['txtProductPrice'];
$jNewProduct->image = $sFolder.$sFileName;

// Load all the products and decode them to an array
$sOldProducts = file_get_contents('data-product.txt');
$jOldProducts = json_decode($sOldProducts);


// Add the new product to the array
array_push( $jOldProducts, $jNewProduct );

// Encode all the productss and save it to the file
$sNewProducts = json_encode($jOldProducts);
file_put_contents('data-product.txt', $sNewProducts);

//echo $sNewProducts;

?>