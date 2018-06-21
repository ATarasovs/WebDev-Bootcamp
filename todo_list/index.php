<?php
/**
 * Created by PhpStorm.
 * User: Aleksandr Tarasov
 * Date: 6/5/2018
 * Time: 10:36 PM
 */
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Todo List</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="robots" content="index,follow" />
	<link rel="stylesheet" type="text/css" href="assets/css/lib/fontawesome/css/font-awesome.min.css" />
	<link rel="stylesheet" type="text/css" href="assets/css/styles.css" />
	<script src="assets/js/lib/jquery.min.js"></script>
   <script src="assets/js/script.js"></script>
   <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet">   
</head>
<body>
   <div class="container">
      <div class="row">
         <div class="col-sm-12 center">
            <h1 class="center">To-Do List</h1>
            <input class="itemInput" type="text" placeholder="New Item" class="form-control" >
            <ul class="list-group">
                <?php
                require_once('includes/dbconnect.php');
                require_once('includes/getrecords.php');
                ?>
<!--               <li class="todo list-group-item"><span class="remove btn"><button type="button" class="btn btn-danger">X</button></span><span class="item"> TO</span></li>-->
<!--               <li class="todo list-group-item"><span class="remove btn">X</span><span class="item"> TO</span></li>-->
<!--               <li class="todo list-group-item"><span class="remove btn">X</span><span class="item"> TO</span></li>-->
            </ul>
         </div>
      </div>
   </div>
</body>
</html>
