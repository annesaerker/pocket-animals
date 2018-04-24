<?php
  session_start();

  $sShowLoggedInNav = "";
  $sShowLoggedOutNav = "";
  $sShowLoggedInAdminNav = "";
  //$sShowAdminHome = "";
  $sShowUserHome = "";
  $sShowHome = "";
  if(isset($_SESSION['loggedIn']))
  {
    // show the welcome page
    //echo "YES";
    $sShowUserHome  = "displayPage";
    $sShowLoggedInNav = "displayNav";
  } 
  elseif ( isset( $_SESSION['loggedInAdmin'] ) ) {
    $sShowAdminHome  = "displayPage";
    $sShowLoggedInAdminNav = "displayNav";
  }
  else
  {
    // show the login page
    //echo "NO";
    $sShowHome = "displayPage";
    $sShowLoggedOutNav = "displayNav";
  }

// IS IT TRUE OR FALSE
//var_dump($_SESSION['loggedIn']); 

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Exam Webshop</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>

        <nav>
            <div id="iNavLoggedIn" class="cNav  <?php echo $sShowLoggedInNav; ?>">
                <?php include_once("nav-logged-in-user.php");?>
            </div>
            <div id="iNavLoggedOut" class="cNav  <?php echo $sShowLoggedOutNav; ?>">
                <?php include_once("nav-logged-out.php");?>
            </div>
            <div id="iNavLoggedInAdmin" class="cNav  <?php echo $sShowLoggedInAdminNav; ?>">
                <?php include_once("nav-logged-in-admin.php");?>
            </div>
        </nav>

        <!-- HOME PAGE -->

        <div
            id="iPageHome"
            class="cPage  <?php echo $sShowHome; ?>"
            <?php // if ($sShowUserHome == "displayPage") {//echo 'style="display: none;"';} ?>>
            <h1>WELCOME TO MY WEBSHOP</h1>

            <form id="frmSubscription">
                <div class="subscribe-container">
                    <input type="text" name="txtSubscription" placeholder="email">
                    <button id="btnSubscription" type="button">Subscribe</button>
                </div>
            </form>

            <div id="map"></div>
        </div>

        <!-- ADMIN HOME PAGE -->

        <div id="iPageAdminHome" class="cPage <?php echo $sShowAdminHome; ?>">
            <!-- <button id="btnLogout" name="logout" type="button">LOGOUT</button> -->
            <h1>WELCOME Admin:
                <?php echo $_SESSION['name']; ?></h1>
        </div>

        <!-- VIEW USER PROFILE -->

        <div id="iPageUserProfile" class="cPage">
            <h1>Your Profile</h1>
            <div class="user-details" id="displaySessionUserHere">
                <!-- Display Session User Details -->
            </div>
        </div>

        <!-- USER HOME PAGE -->

        <div
            id="iPageUserHome"
            class="cPage <?php echo $sShowUserHome; ?>"
            <?php //if ($sShowUserHome == "displayPage") {echo 'style="display: flex;"';} ?>>
            <h1>WELCOME USER:
                <?php echo $_SESSION['name']; ?></h1>
        </div>

        <!-- CREATE USER PAGE -->

        <div id="iPageSaveUser" class="cPage">
            <div class="message" id="insertUserAddedMessageHere">
                <!-- Display Session User Details -->
            </div>
            <div class="form-container">
                <h1>CREATE USER</h1>
                <form id="frmUser">
                    <p>Name:</p>
                    <input type="text" name="txtUserName" placeholder="Name">
                    <p>Last Name:</p>
                    <input type="text" name="txtUserLastName" placeholder="Last Name">
                    <p>Email:</p>
                    <input type="email" name="txtUserEmail" placeholder="e-mail">
                    <p>Telephone Number:</p>
                    <input type="txt" name="txtUserTelephoneNumber" placeholder="Telephone Number">
                    <p>Password:</p>
                    <input type="text" name="txtUserPassword" placeholder="password">
                    <p>Password</p>
                    <input type="text" name="txtReTypePassword" placholder="Re-type Password">
                    <p>Image:</p>
                    <input type="file" name="fileUserImage">
                    <button id="btnSaveUser" type="button">Sign Up</button>
                </form>
            </div>
        </div>

        <!-- LOGIN PAGE -->

        <div id="iPageLogin" class="cPage ">
            <div class="form-container">
                <h1>LOGIN</h1>
                <form id="frmLogin">
                    <p>User Name:</p>
                    <input type="text" name="txtLoginName" placeholder="user name">
                    <p>Password:</p>
                    <input type="password" name="txtLoginPassword" placeholder="user password">
                    <button id="btnLogin" type="button">LOGIN</button>
                </form>
            </div>
        </div>

        <!-- ADMIN PRODUCT PAGE -->

        <div id="iPageAdminProducts" class="cPage">
            <h1>Product Admin</h1>
            <div class="container-admin-products">
                <!-- Create Products -->
                <div class="create-product">
                    <h1>Create Product</h1>
                    <form id="frmProduct">
                        <p>Product Name:</p>
                        <input type="text" name="txtProductName" placeholder="Name">
                        <p>Product Price:</p>
                        <input type="text" name="txtProductPrice" placeholder="Price">
                        <p>Image:</p>
                        <input type="file" name="fileProductImage">
                        <button id="btnSaveProduct" type="button">Save Product</button>
                    </form>
                </div>

                <!-- Show all Products -->
                <div class="show-all-products">
                    <h1>All products</h1>
                    <div class="products" id="insertProductsHere">
                        <!-- Products -->
                    </div>
                </div>

                <!-- Show detailed view about single Product -->
                <div class="show-single-product">
                    <h1>Product details</h1>
                    <div class="product-details" id="insertProductDetailsHere">
                        <!-- Product details -->
                    </div>
                </div>

            </div>
        </div>

        <!-- ADMIN USER PAGE -->

        <div id="iPageAdminUsers" class="cPage">
            <div class="container-admin-users">
                <div class="create-user-admin">
                    <h1>CREATE USER</h1>
                    <form id="frmUserAdmin">
                        <p>Name:</p>
                        <input type="text" name="txtUserName" placeholder="Name">
                        <p>Last Name:</p>
                        <input type="text" name="txtUserLastName" placeholder="Last Name">
                        <p>Email:</p>
                        <input type="email" name="txtUserEmail" placeholder="e-mail">
                        <p>Telephone Number:</p>
                        <input type="txt" name="txtUserTelephoneNumber" placeholder="Telephone Number">
                        <p>Password:</p>
                        <input type="text" name="txtUserPassword" placeholder="password">
                        <p>Image:</p>
                        <input type="file" name="fileUserImage">
                        <button id="btnSaveUserAdmin" type="button">Sign Up</button>
                    </form>
                </div>

                <!-- Show all users -->
                <div class="show-all-users">
                    <h1>Users</h1>
                    <div class="user" id="insertUsersHere">
                        <!-- Users -->
                    </div>
                </div>

                <!-- Show detailed view about single user -->
                <div class="show-single-user">
                    <h1>User details</h1>
                    <div class="user-details" id="insertUserDetailsHere">
                        <!-- User details -->
                    </div>
                </div>

            </div>
        </div>

        <!-- VIEW PRODUCT PAGE -->

        <div id="iPageViewProducts" class="cPage">
            <div class="text-banner">
                <h1>Products</h1>
            </div>
            <div class="display-products-box">
                <div class="all-products products-container" id="displayProductsHere">
                    <!-- Display all Products -->
                </div>
            </div>
        </div>

        <!-- VIEW BASKET PAGE -->

        <div id="iPageViewBasket" class="cPage">
          <div class="form-container">
            <h1>Basket</h1>
            
                <div class="all-products-in-basket basket-container"
                    id="displayBasketProductsHere">
                    <!-- Display all Basket -->
                </div>

           
            <div class="basket-buttons">
            <button id="btnBuyProducts">Buy Products</button>
            <button id="btnClearProducts">Clear Basket</button>
</div>
          </div>
        </div>

        <script src="scripts.js"></script>

        <script
            async="async"
            defer="defer"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBtB3qpt4003rHzCU6wxzota2aTx2CPiqc&callback=initMap"></script>

    </body>
</html>