<?php
/**
 * Created by PhpStorm.
 * User: Aleksandr Tarasov
 * Date: 6/5/2018
 * Time: 11:19 PM
 */
require_once('includes/dbconnect.php');


$id = $_POST['id'];

$sql = "DELETE FROM list WHERE id=" . $id;
mysqli_query($connection,$sql);

mysqli_close($connection);
