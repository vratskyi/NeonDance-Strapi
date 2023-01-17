<?php

$name = $_POST['name'];
$email = $_POST['email'];
$represent = $_POST['bordered-radio'];
$budget = $_POST['small', 'medium', 'big'];
$message = $_POST['message'];
$token = "5704797894:AAGofk8dEYNaYMQpXiQDGOtMyGWna_zRZbE";
$chat_id = "-1001879117178";
$arr = array(
  'Name: ' => $name,
  'Email: ' => $email,
  'Represent: ' => $represent,
  'Budget: ' => $budget,
  'Message: ' => $message,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo 'OK';
} else {
  // echo 'ERROR';
  // header('Location: index.html');
}


?>