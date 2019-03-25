<?php
function send_email(){
header('Location: ../../index.html');


if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message'])){
        echo 'You are missing some required fields';
        exit;
    }

$to = "me@joannabaile.com";
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = "From: $name \n Message: $message";
$subject = "Message from Website";
$mailheader = "From: $email \r\n";

mail($to, $subject, $formcontent, $mailheader);

echo "<script>alert('Email sent successfully');</script>";
}

send_email();
?>