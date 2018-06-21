<?php
/**
 * Created by PhpStorm.
 * User: Aleksandr Tarasov
 * Date: 6/5/2018
 * Time: 10:24 PM
 */

function db_connect() {
    // Define connection as a static variable, to avoid connecting more than once
    static $connection;

    // Try and connect to the database, if a connection has not been established yet
    if(!isset($connection)) {
        $connection = mysqli_connect("localhost","root","","todo_list");
    }

    // If connection was not successful, handle the error
    if($connection === false) {
        // Handle error - notify administrator, log to a file, show an error screen, etc.
        return mysqli_connect_error();
    }
    return $connection;
}

// Connect to the database
$connection = db_connect();

// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
    echo "Connection to the database failed";
}