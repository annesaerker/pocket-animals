
    /************************************************** CREATE USER IN ADMIN **************************************************/

  btnSaveUserAdmin.addEventListener("click", saveUserAdmin);
  //console.log("Create user has been clicked");
  // AJAX FUNCTION THAT RUNS THE API THAT SAVES THE NEW USER
  function saveUserAdmin() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var sDataFromServer = JSON.parse(this.responseText);
        //console.log("Response: ", sDataFromServer);

      }
    };
    request.open("POST", "api-create-user.php", true);
      var oFrmUserAdmin = new FormData(frmUserAdmin);
      request.send(oFrmUserAdmin);
  } 
    

    /************************************************** CREATE USER **************************************************/

	btnSaveUser.addEventListener("click", saveUser);
	//console.log("Create user has been clicked");
	// AJAX FUNCTION THAT RUNS THE API THAT SAVES THE NEW USER
	function saveUser() {
		var request = new XMLHttpRequest();
		request.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var sDataFromServer = JSON.parse(this.responseText);
				//console.log("Response: ", sDataFromServer);

				// IF FORM IS FILLED OUT
				// THEN LOGIN
				// IF FORM IS NOT FILLEDE OUT
				// THEN USER TO FILL OUT FORM
        //showUserAddedMessage();

			}
		};
		  request.open("POST", "api-create-user.php", true);
    	var oFrmUser = new FormData(frmUser);
    	request.send(oFrmUser);
	}	

    //   function showUserAddedMessage() {
    //   var userHtml = '<h1>Your user has been created!</h1>\
    //                   <p>Proceed to login page</p>'
    //   insertUserAddedMessageHere.innerHTML = userHtml;           
    // }

    /************************************************** SHOW ALL USERS **************************************************/

    getAllUsers();
    var Users = [];
    function getAllUsers() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          users = JSON.parse(this.responseText);
          showUsers();
        }
      }
      request.open("GET", "api-get-users.php");
      request.send();
    }

    function showUsers() {
      var htmlUsers = "";
      for (var i = 0; i < users.length; i++) {
        var htmlUser = '<div class="users">\
                          <p class="name">'+users[i].name+'</p>\
                          <button id="btnGetUser" data-id="'+users[i].id+'">See details</button>\
                        </div>'
        htmlUsers += htmlUser;
      }
      insertUsersHere.innerHTML = htmlUsers;
      updateUserButtons();
    }


    /************************************************** SHOW DETAILS ABOUT SPECIFIC USER *********************************************/


    var btnsGetUser;
    var user;
    function getSingleUser(e) {
      var userId = e.target.getAttribute('data-id');
      // console.log("Show single user", e.target.getAttribute('data-id'));
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          user = JSON.parse(this.responseText);
          showSingleUser();

        }
      }
      request.open("GET", "api-get-user.php?id="+userId);
      request.send();
    }
    function showSingleUser() {
      var userHtml = '<img src="'+user.image+'">\
                      <p>Name: '+user.name+'</p>\
                      <p>Lastname: '+user.lastname+'</p>\
                      <p>Password: '+user.password+'</p>\
                      <p>Telephonenumber: '+user.telephonenumber+'</p>\
                      <p>Email: '+user.email+'</p>\
                      <form id="frmUpdateUser">\
                      <h1>Edit User Details</h1>\
                      <input name="txtUserId" type="hidden" value="'+user.id+'">\
                      <input name="txtNewUserName" type="text" placeholder="Name">\
                      <input name="txtNewUserLastName" type="text" placeholder="Lastname">\
                      <input name="txtNewUserPassword" type="text" placeholder="Password">\
                      <input name="txtNewUserTelephonenumber" type="text" placeholder="Telephonenumber">\
                      <input name="txtNewUserEmail" type="text" placeholder="Email">\
                      </form>\
                      <button id="btnUpdateUser">Update</button>\
                      <button id="btnDeleteUser" data-productId="'+user.id+'">Delete</button>'
      insertUserDetailsHere.innerHTML = userHtml;  
      updateUserClick();   
      deleteUserClick();          
    }


    // Helpers
    function updateUserButtons() {
      btnsGetUser = document.querySelectorAll("#btnGetUser");
      for (var i = 0; i < btnsGetUser.length; i++) {
        btnsGetUser[i].addEventListener("click", getSingleUser);
      }
    }

    /************************************************** UPDATE USER **************************************************/


    function updateUserClick (){
    // When button is clicked the get API that gets the form
    btnUpdateUser.addEventListener("click", function(){
      //console.log("X");
      
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              //document.getElementById("demo").innerHTML = this.responseText;
            }
          };
      xhttp.open("POST", "api-update-user.php", true);
      var jFrmUpdateUser = new FormData( frmUpdateUser );
      xhttp.send( jFrmUpdateUser );


    });

  }

      /************************************************** DELETE USER **************************************************/


    function deleteUserClick (){
    // When button is clicked the get API that gets the form
    btnDeleteUser.addEventListener("click", function(){
      //console.log("X");
      var deleteUserId = this.getAttribute('data-productId');
      
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              //document.getElementById("demo").innerHTML = this.responseText;
              //console.log("DELETE PRODUCT");
              window.location.reload();
            }
          };
      xhttp.open("GET", "api-delete-user.php?id="+deleteUserId, true);
      xhttp.send();


    });

  }

    /************************************************** CREATE PRODUCT ON CLICK **************************************************/


  btnSaveProduct.addEventListener("click", saveProduct);
  //console.log("Create user has been clicked");
  // AJAX FUNCTION THAT RUNS THE API THAT SAVES THE NEW USER
  function saveProduct() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var sDataFromServer = JSON.parse(this.responseText);
        //console.log("Response: ", sDataFromServer);
      }
    };
    request.open("POST", "api-create-Product.php", true);
      var oFrmProduct = new FormData(frmProduct);
      request.send(oFrmProduct);
  } 

    /************************************************** SHOW ALL PRODUCTS **************************************************/
  
    // btnShowAllProducts.addEventListener("click", getAllProducts);
    getAllProducts();
    var Products = [];
    function getAllProducts() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          products = JSON.parse(this.responseText);
          showProducts();
        }
      }
      request.open("GET", "api-get-products.php");
      request.send();
    }
    function showProducts() {
      var htmlProducts = "";
      for (var i = 0; i < products.length; i++) {
        var htmlProduct = '<div class="product">\
                          <p class="name">'+products[i].name+'</p>\
                          <button id="btnGetProduct" data-id="'+products[i].id+'">See details</button>\
                        </div>'
        htmlProducts += htmlProduct;
      }
      insertProductsHere.innerHTML = htmlProducts;
      updateButtons();
    }

    /************************************************** SHOW DETAILS ABOUT SPECIFIC PRODUCT *******************************************/

    var btnsGetProduct;
    var product;
    function getSingleProduct(e) {
      var productId = e.target.getAttribute('data-id');
      // console.log("Show single product", e.target.getAttribute('data-id'));
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          product = JSON.parse(this.responseText);
          showSingleProduct();

        }
      }
      request.open("GET", "api-get-product.php?id="+productId);
      request.send();
    }
    function showSingleProduct() {
      var productHtml = '<img src="'+product.image+'">\
                      <h2>'+product.name+'</h2>\
                      <p>'+product.price+'</p>\
                      <form id="frmUpdate">\
                      <h1>Edit Product Details</h1>\
                      <input name="txtProductId" type="hidden" value="'+product.id+'">\
                      <input name="txtProductNewName" type="text" placeholder="Name">\
                      <input name="txtProductNewPrice" type="text" placeholder="Price">\
                      </form>\
                      <button id="btnUpdateProduct">Update</button>\
                      <button id="btnDeleteProduct" data-productId="'+product.id+'" >Delete</button>'
      insertProductDetailsHere.innerHTML = productHtml;  
      updateProductClick();   
      deleteProductClick();          
    }


    // Helpers
    function updateButtons() {
      btnsGetProduct = document.querySelectorAll("#btnGetProduct");
      for (var i = 0; i < btnsGetProduct.length; i++) {
        btnsGetProduct[i].addEventListener("click", getSingleProduct);
      }
    }

    /************************************************** UPDATE PRODUCTS **************************************************/


    function updateProductClick (){
    // When button is clicked the get API that gets the form
    btnUpdateProduct.addEventListener("click", function(){
      //console.log("X");
      
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              //document.getElementById("demo").innerHTML = this.responseText;
            }
          };
      xhttp.open("POST", "api-update-product.php", true);
      var jFrmUpdate = new FormData( frmUpdate );
      xhttp.send( jFrmUpdate );


    });

  }
        


        // pass to the page itself the old and the new value
        // the old value is to find a match
        // the new value is to replace the match with it
        // var sOldValue = lblOldLetter.innerHTML;
        // console.log("sOldValue",sOldValue);
        // var sNewValue = txtNewLetter.value;
        // console.log("sNewValue",sNewValue);
        // // index.php?old=A&new=X
        // location.href = "updateValues.php?old="+sOldValue+"&new="+sNewValue;


    /************************************************** DELETE PRODUCTS **************************************************/


    function deleteProductClick (){
    // When button is clicked the get API that gets the form
    btnDeleteProduct.addEventListener("click", function(){
      //console.log("X");
      var deleteProductId = this.getAttribute('data-productId');
      
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              //document.getElementById("demo").innerHTML = this.responseText;
              //console.log("DELETE PRODUCT");
              window.location.reload();
            }
          };
      xhttp.open("GET", "api-delete-product.php?id="+deleteProductId, true);
      xhttp.send();

    });

  }


    /************************************************** DISPLAY ALL PRODUCTS **************************************************/

    //displayProductsHere.innerHTML = "Loading...";

    var allProducts = [];

    var ajax = new XMLHttpRequest(); // AJAX
    ajax.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        allProducts = JSON.parse(this.responseText);
        //console.log(allProducts);
        displayAllProducts();
      } 
    };

    ajax.open( "GET", "api-display-products.php", true );
    ajax.send();

    function displayAllProducts() {
      var htmlAllProducts = "";
      for (var i = 0; i < allProducts.length; i++) {
        var displayProductHtml = '<div class="all-products">\
                                    <div class="all-product-info">\
                                    <img src="'+allProducts[i].image+'">\
                                    <h2>'+allProducts[i].name+'</h2>\
                                    <p>'+allProducts[i].price+' DKK</p>\
                                    <button id="btnAddToBasket" data-basket-id="'+allProducts[i].id+'">Add to basket</button>\
                                    </div>\
                                  </div>'
        htmlAllProducts += displayProductHtml;
      }
      
      displayProductsHere.innerHTML = htmlAllProducts; 
      //iPageViewProducts.insertAdjacentHTML('beforeend', htmlAllProducts );              
    }

    /************************************************** ADD TO BASKET **************************************************/

     var productsBasket;

    document.addEventListener("click", function(e){
      if (e.target.id == "btnAddToBasket") {
        console.log("Add to basket clicked");
        var productId = e.target.getAttribute('data-basket-id');
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //productsBasket = JSON.parse(this.responseText);
            console.log(productsBasket);
            //displayProductsBasket();
          } 
        };
            xhttp.open("GET", "api-add-products-to-basket.php?id="+productId, true);
    xhttp.send();
      }

    });


    /************************************************** DISPLAY BASKET **************************************************/

    var displayBasket;

    document.addEventListener("click", function(e){
      if (e.target.id == "showBasketPage") {
        //console.log("x");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            displayBasket = JSON.parse(this.responseText);
            //console.log("x");
            //console.log(displayBasket);
            displayProductsBasket();
          }
        };
        xhttp.open("GET", "api-get-products-basket.php", true);
        xhttp.send();
      }
    });

        function displayProductsBasket() {
      var htmlBasketProducts = "";
      for (var i = 0; i < displayBasket.length; i++) {
        var displayBasketProductHtml = '<div class="basket-products">\
                                          <div class="basket-product-left">\
                                            <img src="'+displayBasket[i].image+'">\
                                          </div>\
                                          <div class="basket-product-rigth">\
                                            <div class="basket-product-rigth-content">\
                                              <p>'+displayBasket[i].name+'</p>\
                                              <p>'+displayBasket[i].price+' DKK</p>\
                                              <button class="btnDeleteOneItem" data-product-basket-id="'+displayBasket[i].id+'">Delete</button>\
                                            </div>\
                                          </div>\
                                        </div>'
        htmlBasketProducts += displayBasketProductHtml;
      }
      
      displayBasketProductsHere.innerHTML = htmlBasketProducts; 
      //iPageViewProducts.insertAdjacentHTML('beforeend', htmlAllProducts ); 
    }

    // // // Helpers
    function addToBasketButtons() {
      btnsAddToBasket = document.querySelectorAll("#btnAddToBasket");
      for (var i = 0; i < btnsAddToBasket.length; i++) {
        btnsAddToBasket[i].addEventListener("click", addSingleProductBasket);
      }
    }

    /***************************************** DELETE SINGLE PRODUCT IN BASKET ****************************************/

    // var productsBasket;
    
    //     document.addEventListener("click", function(e){
    //       if (e.target.id == "btnAddToBasket") {
    //         console.log("Add to basket clicked");
    //         var productId = e.target.getAttribute('data-basket-id');
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.onreadystatechange = function() {
    //           if (this.readyState == 4 && this.status == 200) {
    //             //productsBasket = JSON.parse(this.responseText);
    //             console.log(productsBasket);
    //             //displayProductsBasket();
    //           } 
    //         };
    //             xhttp.open("GET", "api-add-products-to-basket.php?id="+productId, true);
    //     xhttp.send();
    //       }
    
    //     });
    
    
document.addEventListener("click", function (e) {
    if (e.target.className == "btnDeleteOneItem") {
        //console.log("Delete button has been clicked");
        var sProductId = e.target.getAttribute("data-product-basket-id");
        //getDeleteProductFromBasket( sProductId );
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //productsBasket = JSON.parse(this.responseText);
                console.log("xmmm");
                //displayProductsBasket();
                window.location.reload();
            }
        };
        xhttp.open("GET", "api-delete-product-basket.php?id="+sProductId, true);
        xhttp.send();
    }
});


    // var aBtnDeleteOneItem = document.getElementsByClassName("btnDeleteOneItem");
    
    // // this is an array
    // for(var i = 0; i < aBtnDeleteOneItem.length; i++)
    // {
    //     console.log("x");
    //     aBtnDeleteOneItem[i].addEventListener("click",function(){
    //         console.log("x");

    //     });
    // }


    // function deleteProductClick (){
    //   // When button is clicked the get API that gets the form
    //   btnDeleteProduct.addEventListener("click", function(){
    //     //console.log("X");
    //     var deleteProductId = this.getAttribute('data-productId');
        
    //         var xhttp = new XMLHttpRequest();
    //         xhttp.onreadystatechange = function() {
    //           if (this.readyState == 4 && this.status == 200) {
    //             //document.getElementById("demo").innerHTML = this.responseText;
    //             //console.log("DELETE PRODUCT");
    //             window.location.reload();
    //           }
    //         };
    //     xhttp.open("GET", "api-delete-product.php?id="+deleteProductId, true);
    //     xhttp.send();
  
    //   });
  
    // }




    // var aBtnDeleteOneItem = document.getElementsByClassName("btnDeleteOneItem");
    // // this is an array
    // for(var i = 0; i < aBtnDeleteOneItem.length; i++)
    // {
    //      console.log("x");
    //     // aBtnShowPages[i].addEventListener("click",function(){
    //     //     // console.log("x");
    //     //     // Hide the pages
    //     //     var aPages = document.getElementsByClassName( "cPage" );
    //     //     for(var j = 0; j < aPages.length; j++)
    //     //     {
    //     //         // console.log("x");
    //     //         aPages[j].classList.remove("displayPage");
    //     //     }

    //     //     var sDataAttibute = this.getAttribute("data-showThisPage");
            
    //     //     if (sDataAttibute == 'iPageContact') {
    //     //       console.log("hej");
    //     //       initMap();
    //     //     }
    //     //     // pageOne or pageTwo
    //     //     //console.log(sDataAttibute);
    //     //     document.getElementById(sDataAttibute).classList.add("displayPage");
    //     // });
    // }



    // var classname = document.getElementsByClassName("classname");
    // function myFunction() {
    //     // DO STUFF
    // };
    // for (var i = 0; i < classname.length; i++) {
    //     classname[i].addEventListener('click', myFunction, false);
    // }

    /************************************************** CLEAR BASKET **************************************************/

    var clearBasket;

    document.addEventListener("click", function(e){
      if (e.target.id == "btnClearProducts") {
        console.log("x");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            //clearBasket = JSON.parse(this.responseText);
            console.log("x");
            console.log(clearBasket);
            window.location.reload();
          }
        };
        xhttp.open("GET", "api-clear-basket.php", true);
        xhttp.send();
      }
    });


    /******************************************** BUY PRODUCTS IN BASKET **************************************************/

      document.addEventListener("click", function(e){
        if (e.target.id == "btnBuyProducts") {
          //console.log("x");
          window.alert("You have purchased the products!");
        }
      });

    /************************************************** DISPLAY PROFILE **************************************************/

    var sessionUser;

    document.addEventListener("click", function(e){
      if (e.target.id == "showProfilePage") {
        //console.log("x");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          sessionUser = JSON.parse(this.responseText);
          //console.log(sessionUser);
          displaySessionUser();
      }
    };
    xhttp.open("GET", "api-get-logged-in-user.php", true);
    xhttp.send();
  }

    });

    function displaySessionUser() {
      //var htmlSessionUser = "";
      //console.log("x");

        //console.log("x");
        var displaySessionUserHtml = '<div class="user-profile-details">\
                                        <div class="user-text-details">\
                                          <img src="'+sessionUser.image+'">\
                                          <p>Name: '+sessionUser.name+'</p>\
                                          <p>Lastname: '+sessionUser.lastname+'</p>\
                                          <p>Password: '+sessionUser.password+'</p>\
                                          <p>Tel. No. : '+sessionUser.telephonenumber+'</p>\
                                          <p>Email: '+sessionUser.email+'</p>\
                                        </div>\
                                        <div class="form-container">\
                                          <form id="frmUpdateUserProfile">\
                                            <h1>Edit Profile</h1>\
                                            <input name="txtUserId" type="hidden" value="'+sessionUser.id+'">\
                                            <input name="txtNewUserName" type="text" placeholder="Name">\
                                            <input name="txtNewUserLastName" type="text" placeholder="Lastname">\
                                            <input name="txtNewUserPassword" type="text" placeholder="Password">\
                                            <input name="txtNewUserTelephonenumber" type="text" placeholder="Tlephonenumber">\
                                            <input name="txtNewUserEmail" type="text" placeholder="Email">\
                                          </form>\
                                          <button id="btnUpdateUserProfile">Update User Details</button>\
                                          <button id="btnDeleteUserProfile">Delete User</button>\
                                        </div>\
                                      </div>'
       //htmlSessionUser += displaySessionUserHtml;
      
      
      displaySessionUserHere.innerHTML = displaySessionUserHtml; 
     //iPageUserProfile.insertAdjacentHTML('beforeend', displaySessionUserHtml ); 
      updateUserProfileClick();   
      deleteUserProfileClick();                   
    } 

    /************************************************** UPDATE USER **************************************************/


    function updateUserProfileClick (){
    // When button is clicked the get API that gets the form
    btnUpdateUserProfile.addEventListener("click", function(){
      //console.log("X");
      
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              //document.getElementById("demo").innerHTML = this.responseText;
            }
          };
      xhttp.open("POST", "api-update-user-profile.php", true);
      var jFrmUpdateUserProfile = new FormData( frmUpdateUserProfile );
      xhttp.send( jFrmUpdateUserProfile );


    });

  }

        /************************************************** DELETE USER PROFILE **************************************************/


    function deleteUserProfileClick (){
    // When button is clicked the get API that gets the form
    btnDeleteUserProfile.addEventListener("click", function(){
      console.log("X");
      var deleteUserId = this.getAttribute('data-productId');
      
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              //document.getElementById("demo").innerHTML = this.responseText;
              //console.log("DELETE USER");
              window.location.reload();
            }
          };
      xhttp.open("GET", "api-delete-user-profile.php?id="+deleteUserId, true);
      xhttp.send();

    });

  }

    /************************************************** SUBSCRIBE ************************************************/

  btnSubscription.addEventListener("click", saveSubscription);
  //console.log("Create SUBCRIPTION has been clicked");
  // AJAX FUNCTION THAT RUNS THE API THAT SAVES THE NEW SUBSCRIPTION
  function saveSubscription() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        //var sDataFromServer = JSON.parse(this.responseText);
        //console.log(sDataFromServer);

      }
    };
    request.open("POST", "api-email-subscription.php", true);
      var oFrmSubscription = new FormData(frmSubscription);
      request.send(oFrmSubscription);
  } 

    /************************************************** LOGOUT **************************************************/

		// btnLogout.addEventListener( "click" , function(){  
		// });

    document.addEventListener("click" , function(e){
      // console.log(e.target);
      if (e.target.classList.contains("btnLogout")) {
        //console.log(e.target);
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() 
      {

        location.reload();
        // cPage.style.display = "none";
        //iPageUserProfile.style.display ="none";
        //iPageViewProducts.style.display ="none";
        //iPageLogin.style.display = "none";
        //document.getElementByClassName('cPage').style.display = 'none';
        iPageUserHome.style.display = "none";
        iPageAdminHome.style.display = "none";
        iPageHome.style.display = "flex";
        //iPageLogin.style.display = "flex";
        
        iNavLoggedInAdmin.style.display = "none";
        iNavLoggedIn.style.display = "none";
        iNavLoggedOut.style.display = "flex";
        console.log("Clicked log out");
      }     
      ajax.open( "GET", "api-logout.php" , true );
      ajax.send();  
      }
      // YOU CAN USE ELSE IF TO MAKE OTHER CLICK EVENTS ON BUTTONS GENERATED BY JS
      // ELSE IF
    });

    /************************************************** LOGIN **************************************************/


		btnLogin.addEventListener( "click" , function(){
			console.log("X");
			
		  var ajax = new XMLHttpRequest();
		  ajax.onreadystatechange = function() 
		  {
		    if (this.readyState == 4 && this.status == 200) 
		    {
		     	var jDataFromServer = JSON.parse( this.responseText );

	   			if( jDataFromServer.login == "ok" )		   			
	   			{
   					console.log("WELCOME:" , jDataFromServer.name );
   					iPageUserHome.style.display = "flex";
            iPageAdminHome.style.display = "none";
   					iPageLogin.style.display = "none";
            iNavLoggedIn.style.display = "flex";
            iNavLoggedOut.style.display = "none";
            iNavLoggedInAdmin.style.display = "none";
            //displayLoginMessage();
            //console.log('<p>Hello ' . $sUsername . ', you have successfully logged in!</p>');
        
	   			}	else if (jDataFromServer.login == "admin" )  {
            console.log("WELCOME:" , jDataFromServer.name );
            iPageAdminHome.style.display = "flex";
            iPageLogin.style.display = "none";
            iPageUserHome.style.display = "none";
            iNavLoggedInAdmin.style.display = "flex";
            iNavLoggedOut.style.display = "none";
            iNavLoggedIn.style.display = "none";

          }	   		
					else
					{
						console.log("LOGIN FAIL - TRY AGAIN");
            iPageAdminHome.style.display = "none";
   					iPageUserHome.style.display = "none";
   					iPageLogin.style.display = "flex";		 				
					}
	   		}
	    }			
		  ajax.open( "POST", "api-login.php" , true );
		  var jFrmLogin = new FormData( frmLogin );
		  ajax.send( jFrmLogin );		
			
		});


          /************************************************** GOGGLE MAPS ************************************************/


 // google.maps.event.trigger(map, 'resize');
      // JSONP
      function initMap() {

         var jLygten = {
            lat: 55.703935,
            lng: 12.537669
         };
         // on click, use this variable to set the lat lng
          var jMarkerPos = {};

         var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: jLygten
         });

         var marker = new google.maps.Marker({
            map: map
         });
         
         map.addListener('click', function (e) {
            jMarkerPos.lng = e.latLng.lng();
            jMarkerPos.lat = e.latLng.lat();
            console.log(jMarkerPos); // INCREDIBLE
            marker.setPosition(jMarkerPos);
         });
      }

       //google.maps.event.addDomListener(window, 'resize', initialize);

      // map.checkResize(); 


    /************************************************** BUTTON SHOW PAGES **************************************************/
	
	var aBtnShowPages = document.getElementsByClassName("btnShowPage");
    // this is an array
    for(var i = 0; i < aBtnShowPages.length; i++)
    {
        //console.log("x");
        aBtnShowPages[i].addEventListener("click",function(){
            console.log("x");
            // Hide the pages
            var aPages = document.getElementsByClassName( "cPage" );
            for(var j = 0; j < aPages.length; j++)
            {
                // console.log("x");
                aPages[j].classList.remove("displayPage");
            }

            var sDataAttibute = this.getAttribute("data-showThisPage");
            
            if (sDataAttibute == 'iPageContact') {
              console.log("hej");
              initMap();
            }
            // pageOne or pageTwo
            //console.log(sDataAttibute);
            document.getElementById(sDataAttibute).classList.add("displayPage");
        });
    }

    /************************************************** DESKTOP NOTIFICATION **************************************************/

  btnSubscription.addEventListener( "click" , function(){
      //console.log("X");

    function notifyMe() {
      //Setting the sound ready for play
      var oSound = new Audio('Sad-cat.mp3');
      // play sound
      oSound.play();
      // Let's check whether notification permissions have already been granted
      if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        displayNotification();
      }
      // Otherwise, we need to ask the user for permission
      else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            displayNotification();
          }
        });
      }
    // Finally, if the user has denied notifications and you
    // want to be respectful there is no need to bother them any more.
    }

    function displayNotification(){
      var notification = new Notification("Hi there, how are you?", {
        // image for the notification
        "icon": 'images/strips.png',
        "body": "Text in notification"
        });
    }

    //code before the pause
    setTimeout(function(){
      //do what you need here
      notifyMe();
    }, 1000); 

  });
















