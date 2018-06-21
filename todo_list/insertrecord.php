<?php
/**
 * Created by PhpStorm.
 * User: Aleksandr Tarasov
 * Date: 6/6/2018
 * Time: 1:54 AM
 */


require_once('includes/dbconnect.php');

$item = "";
$sql = $connection->prepare("INSERT INTO list (item) VALUES (?)");
$sql->bind_param("s",$item);

$item = $_POST['item'];

$sql->execute();
$sql->close();
$connection->close();