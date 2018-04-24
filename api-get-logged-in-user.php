<?php 

//echo "x";

session_start();

  if( isset( $_SESSION['loggedIn'] ) )
  {
    // show the welcome page
    //echo "YES";
    // echo $_SESSION['sUserName'];
   $sCorrectUserName = $_SESSION['name'];
  $sCorrectUserLastname= $_SESSION['lastname'];
   $sCorrectUserPassword = $_SESSION['password'];
   $sCorrectUserEmail = $_SESSION['email'];
   $sCorrectUsertelephonenumber = $_SESSION['telephonenumber'];
   $sCorrectUserImage = $_SESSION['image'];


	$sjSessionUser = '{}';
   	$jSessionUser = json_decode($sjSessionUser);
   	//$jSessionUser->image = $sCorrectUserImage;
   	$jSessionUser->name = $sCorrectUserName;
    $jSessionUser->lastname = $sCorrectUserLastname;
   	$jSessionUser->password = $sCorrectUserPassword;
   	$jSessionUser->email = $sCorrectUserEmail;
    $jSessionUser->telephonenumber = $sCorrectUsertelephonenumber;
    $jSessionUser->image = $sCorrectUserImage;
	//print_r($jSessionUser);

	$sjSessionUser = json_encode($jSessionUser);
	echo $sjSessionUser;

   // echo $sCorrectUserName;
   // echo $sCorrectUserPassword;
   // echo $sCorrectUserEmail;

  }



?>