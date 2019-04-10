<?php

date_default_timezone_set('Etc/UTC');

// Edit this path if PHPMailer is in a different location.
require './PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;
$mail->isSMTP();

$ime = $_POST['ime'];
$dolazi = $_POST['dolazi'];
$brojVelikih = $_POST['brojVelikih'];
$brojMalih = $_POST['brojMalih'];

$mail->Host = 'smtp.gmail.com'; // Which SMTP server to use.
$mail->Port = 587; // Which port to use, 587 is the default port for TLS security.
$mail->SMTPSecure = 'tls'; // Which security method to use. TLS is most secure.
$mail->SMTPAuth = true; // Whether you need to login. This is almost always required.
$mail->Username = "stefan.voyager@gmail.com"; // Your Gmail address.
$mail->Password = "voyager171513"; // Your Gmail login password or App Specific Password.

$mail->setFrom("stefan.voyager@gmail.com", "Krstenje"); // Set the sender of the message.
$mail->addAddress('moonwalker13@gmail.com', 'Stefan'); // Set the recipient of the message.
$mail->Subject = 'Potvrda dolaska na krstenje'; // The subject of the message.

$mail->Body = "Ime gosta: ".$ime."\r\nDa li dolazi: ".$dolazi." \r\nBroj velikih: ".$brojVelikih." \r\nBroj malih: ".$brojMalih; // Set a plain text body.

if ($mail->send()) {
    echo "sent";
} else {
    echo "Mailer Error: " . $mail->ErrorInfo;
}
