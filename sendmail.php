<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'mailer/src/PHPMailer.php';
require 'mailer/src/SMTP.php'
require 'mailer/src/Exception.php';

$mail = new PHPMailer (true);
$mail -> CharSet = "UTF-8"
$mail -> setLangueage('ru', 'mailer/language/');
$mail -> IsHTML(true);

$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'landmarksiteform@gmail.com';                     //SMTP username
$mail->Password   = 'aetftmllqbzvrdlx';                               //SMTP password
$mail->SMTPSecure = "tls"            //Enable implicit TLS encryption
$mail->Port       = 465;

$mail -> setFrom('landmarksiteform@gmail.com', 'Новая заявка на сайте');
$mail -> addAddress('inboxlmfostsite@gmail.com');
$mail -> Subject = "Новая заявка на сайте";

$body = 'Данные из формы на сайте:';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>'
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Электронная почта:</strong> '.$_POST['email'].'</p>'
}
if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Номер телефона:</strong> '.$_POST['tel'].'</p>'
}

$mail->Body = $body;

if(!$mail->send()){
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены!';
}

$response = ['message' => $message]

header('Content-type: application/json');
echo json_encode($response);
?>
