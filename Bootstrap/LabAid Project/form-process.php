<?php
/**
 * php file part for contact form validate
 *
 * @package Cleveland - Responsive Health And Medical Html Template
 */
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];		
	$from="From: $name $phone $subject<$email>\r\nReturn-path: $email";
	$subject="Cleveland - Responsive Health And Medical Html Template";
	mail("shahadat.cse12@yahoo.com", $subject, $message, $from)

?>
