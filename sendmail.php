<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/Exception.php';

$mail = new PHPMailer (true);
$mail -> CharSet = "UTF-8"
$mail -> setLangueage('ru', 'PHPMailer/language/');
$mail -> IsHTML(true);

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["tel"];

$email_template = "PHPMailer/template_mail.html";
$body = file_get_contents($email_template);
$body = str_replace('%name%', $name, $body);
$body = str_replace('%email%', $email, $body);
$body = str_replace('%phone%', $tel, $body);
$body = str_replace('%message%', $message, $body);

$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'landmarksiteform@gmail.com';                     //SMTP username
$mail->Password   = 'aetftmllqbzvrdlx';                               //SMTP password
$mail->SMTPSecure = "tls"            //Enable implicit TLS encryption
$mail->Port       = 465;

$mail -> addAddress('inboxlmfostsite@gmail.com');
$mail -> setFrom($email);
$mail->Subject = "[Заявка с формы]";
$mail->MsgHTML($body);

if (!$mail->send()) {
  $message = "Ошибка отправки";
} else {
  $message = "Данные отправлены!";
}

/* Возвращаем ответ */
$response = ["message" => $message];

/* Ответ в формате JSON */
header('Content-type: application/json');
echo json_encode($response);

?>

