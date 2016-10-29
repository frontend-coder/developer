<?php

$recepient = "frontendercode@gmail.com";
$sitename  = "домен: developer.local";
$subject   = "Заказ с сайта developer.local";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$formaone = trim($_POST["formaone"]);


$message = "
С какого сайта пришло сообщение: $sitename  <br>
Место размещения формы в шаблоне: $formaone  <br>
Имя обратившегося: $name  <br>
Телефон: $phone <br>
текст: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $subject, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");
?>