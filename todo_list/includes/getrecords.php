<?php
/**
 * Created by PhpStorm.
 * User: Aleksandr Tarasov
 * Date: 6/5/2018
 * Time: 10:36 PM
 */

require_once('dbconnect.php');

$sql = "SELECT * FROM list";
if($result = mysqli_query($connection, $sql)) {
    if (mysqli_num_rows($result) > 0) {
        while ($row = $result->fetch_assoc()) {
            if ($row["done"] == "true") {
                echo '<li class="todo list-group-item crossout"><span class="remove btn removeBtn" data-id="' . $row["id"] . '"><button type="button" class="btn btn-danger">X</button></span><span class="item">&nbsp;&nbsp;&nbsp;' . $row["item"] . '</span></li>';
            }
            else {
                echo '<li class="todo list-group-item"><span class="remove btn removeBtn" data-id="' . $row["id"] . '"><button type="button" class="btn btn-danger">X</button></span><span class="item">&nbsp;&nbsp;&nbsp;' . $row["item"] . '</span></li>';
            }
        }
    }
}

mysqli_close($connection);""
?>