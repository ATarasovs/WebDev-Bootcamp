<?php
/**
 * Created by PhpStorm.
 * User: Aleksandr Tarasov
 * Date: 6/6/2018
 * Time: 2:33 AM
 */

require_once('includes/dbconnect.php');

$status = "";
$id = "";
$sql = $connection->prepare("UPDATE list SET done=? WHERE id=?");
$sql->bind_param("si",$status, $id);

$status = $_POST['status'];
$id = $_POST['id'];

$sql->execute();
$sql->close();
$connection->close();