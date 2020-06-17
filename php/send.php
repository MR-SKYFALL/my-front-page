<?php
session_start();
require_once "./connect.php";
$name_surname_regExp = "/^[A-z0-9\s]*$/";

 $connect = @ new mysqli($host, $db_user , $db_password,$db_name);
 if ($connect->errno) {
    // echo "wystapil blad" . $connect->errno . "----" . $connect->error;
    echo  "error connect to server";
 }
 else
 {
    $_SESSION['LAST_ACTIVITY'] = time(); // update last activity time

    $name_surname = $_POST["name_surname"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    utf8_encode($name_surname);

    $_SESSION['name_surname_error'] = "";
    $_SESSION['email_error']="";
    $_SESSION['message_error'] = "";
    $all_is_ok = true;

    if(!preg_match($name_surname_regExp,$name_surname) || stristr($name_surname,"`") || stristr($name_surname,"~"))
    {
        $all_is_ok = false;
        $_SESSION['name_surname_error'] = "Imię i nazwisko zawiera nie dozwolone znaki.";
    }
    if(strlen($name_surname)==0)
    {
        $all_is_ok = false;
        $_SESSION['name_surname_error'] = "Nie podałeś imienia i nazwiska.";
    }
    if(strlen($name_surname)>=40)
    {
        $all_is_ok = false;
        $_SESSION['name_surname_error'] = "Twoje imię i nazwisko jest za długie.";
    }
  


    if(!filter_var($email, FILTER_VALIDATE_EMAIL))
    {
        $all_is_ok = false;
        $_SESSION['email_error'] = "Podany e-mail jest nie poprawny.";
    }
    if(strlen($email)==0)
    {
        $all_is_ok = false;
        $_SESSION['email_error'] = "Nie podałeś e-mail.";
    }
    if(strlen($name_surname)>=50)
    {
        $all_is_ok = false;
        $_SESSION['email_error'] = "Twój email jest za długi.";
    }



    if(strlen($message)==0)
    {
        $all_is_ok = false;
        $_SESSION['message_error'] = "Twoja wiadomość jest pusta.";
    }
    if(strlen($message)>1000)
    {
        $all_is_ok = false;
        $_SESSION['message_error'] = "Limit znaków: 1000";
    }
 
     

    if($all_is_ok == true)//
    {
        $_SESSION['non-rotate-card'] = true;
        $_SESSION['show-mail-send-info'] = true;
        $_SESSION['name_surname'] = "";
        $_SESSION['email'] = "";
        $_SESSION['message'] = "";
       

        // send email
        $to      = 'rmat28op.pl@gmail.com';
        $subject = 'Kontakt z moje portfolio';
        $message = "$name_surname napisał: \n $message \n Odpowiedz na maila:\n $email";
        $headers = array(
            'From' => "moje-portfolio@gmail.com",
            
        );

        $_SESSION['is_mail_correct_send'] = false;
        
        $_SESSION['is_mail_correct_send'] =  mail($to, $subject, $message, $headers);

        header("Location:../kontakt.php");
    }
    else
    {

        $_SESSION['non-rotate-card'] = true;
        $_SESSION['show-mail-send-info'] = false;
       
        
        $_SESSION['name_surname'] = $name_surname;
        $_SESSION['email'] = $email;
        $_SESSION['message'] = $message;


        header("Location:../kontakt.php");
    }
}
?>