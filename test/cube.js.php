<?php
ob_start();
$js[] = file_get_contents('../js/0.cube.entry.js');

$js[] = file_get_contents('../js/1.lib.js');
$js[] = file_get_contents('../js/module/fps.js');

$js[] = file_get_contents('../js/2.point3d.js');
$js[] = file_get_contents('../js/5.cube.js');
$js[] = file_get_contents('../js/8.init.js');

$js[] = file_get_contents('../js/9.cube.exit.js');

$js = implode("\n", $js);

echo $js;
header('Content-type: text/javascript; charset: UTF-8');
header('Content-Length: '.ob_get_length());

ob_end_flush(); 
die;
?>
