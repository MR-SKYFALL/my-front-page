<?php
require_once "./connect.php";

 $name_surname = $_POST["name_surname"];
 $email = $_POST["email"];
 $message = $_POST["message"];
 $connect = new mysqli($host, $db_user , $db_password,$db_name);
 if ($connect->errno) {
     echo "wystapil blad" . $connect->errno . "----" . $connect->error;
 }
 else
 {
    $all_is_ok = false; 
    echo $name_surname . "<br>";
    echo $email . "<br>";
    echo $message;

    if($all_is_ok == true)
    {

    }
    else
    {
        session_start();
        $_SESSION['name_surname_error'] = "nie wolno liter";
        $_SESSION['email_error'] = "zly email";
        $_SESSION['message_error'] = "zla wiadomosc";
        header("Location:../kontakt.php");
    }
}
?>