<?php 

$sProductId = $_GET['id'];
// Load all the products and decode them to an array
$sProducts = file_get_contents('data-product.txt');
$aProducts = json_decode($sProducts);

// for ($i = 0; $i < count($aProducts); $i++) {
//   //echo "x";
//   $sProductName = $aProducts[$i] -> name;
//   echo "<div>Name: $sProductName </div>";
// }

$sProducts = json_encode($aProducts);
echo $sProducts;

?>

