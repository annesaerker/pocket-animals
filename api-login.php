<?php
	session_start();

    $sUsers = file_get_contents('data-user.txt');
    //echo $sUsers;

    // HARD CODEDED ADMIN USER
	$sAdminName = "admin";
	$sAdminPassword = "admin";
	$sAdminEmail = "admin@admin.com";

    $aUsers = json_decode($sUsers);

    $sUserName = $_POST['txtLoginName'];
    $sUserPassword = $_POST['txtLoginPassword'];

    for($i = 0; $i < count($aUsers); $i++) {
    	//echo "x";
    	$sCorrectUserId = $aUsers[$i]->id;
    	$sCorrectUserName = $aUsers[$i]->name;
		$sCorrectUserlastname = $aUsers[$i]->lastname;
    	$sCorrectUserPassword = $aUsers[$i]->password;
    	$sCorrectUserEmail = $aUsers[$i]->email;
    	$sCorrectUsertelephonenumber = $aUsers[$i]->telephonenumber;
    	$sCorrectUserImage = $aUsers[$i]->image;

    	if ($sUserName == $sCorrectUserName && $sUserPassword == $sCorrectUserPassword) {
    		//echo "x";
    		$_SESSION['loggedIn'] = true;
    		$_SESSION['id'] = $sCorrectUserId;
    		$_SESSION['name']=$sCorrectUserName;
    		$_SESSION['lastname']=$sCorrectUserlastname;
    		$_SESSION['password']=$sCorrectUserPassword;
    		$_SESSION['email']=$sCorrectUserEmail;
    		$_SESSION['telephonenumber']=$sCorrectUsertelephonenumber;
    		$_SESSION['image']=$sCorrectUserImage;

			// send this to the client
			$sjResponse = '{"login":"ok","name":"'.$sUserName.'"}';
			echo $sjResponse;
			//print_r($sUserName);
			exit;
			// session variale
  		} else if ($sAdminName == $sUserName && $sAdminPassword == $sUserPassword ) {
  			//echo "x";
    		$_SESSION['loggedInAdmin'] = true;
    		$_SESSION['name']=$sUserName; 
			// send this to the client
			$sjResponse = '{"login":"admin","name":"'.$sUserName.'"}';
			echo $sjResponse;
			exit;
  		}

    };


    $_SESSION['loggedInAdmin'] = false;
  	$sjResponse = '{"login":"error"}';
	echo $sjResponse;




?>