<?php

$name = $_POST['name'];
$phone = $_POST['phone'];

$letter = '<html><body>';
$letter = '<p>Клиент воспользовался формой на сайте <a href="http://'.$_SERVER['HTTP_HOST'].'" target="_blank">"Ремонт турбин 24"</a>.</p>';
$letter .= '<p><strong>ФИО:</strong> '.$name.'</p>';
$letter .= '<p><strong>Телефон:</strong> '.$phone.'</p>';
$letter .= '</body></html>';

mail('mail@remontturbin-24.ru', 'Заявка клиента | Ремонт турбин 24', $letter, 'Content-type: text/html; charset=utf-8');
$res['sent'] = true;
echo json_encode($res);


?>