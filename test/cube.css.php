<?php
ob_start();
include('../css/cube.css');

header('Content-type: text/css; charset: UTF-8');
header('Content-Length: '.ob_get_length());

ob_end_flush(); 
die;
?>
