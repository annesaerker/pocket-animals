<?php 

$sProductId = $_GET['id'];

// Load all the users and decode them to an array
$sProducts = file_get_contents('data-product.txt');
$aProducts = json_decode($sProducts);

for ($i = 0; $i < count($aProducts); $i++) {
  if ($aProducts[$i]->id == $sProductId) {
    echo json_encode($aProducts[$i]);
    return;
  }
}

?>