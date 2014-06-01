<?php
ob_start();
$js[] = file_get_contents('../js/0.cube.entry.js');
$js[] = file_get_contents('../js/1.cube.js');
$js[] = file_get_contents('../js/9.cube.exit.js');

$js = implode("\n", $js);

// $version = array_key_exists('v',$_REQUEST) ? $_REQUEST['v'] : 'commercial';
// switch($version) {
//     case 'trial':
//         $js = preg_replace( '/(.*)=== (START|END) SECTION TRIAL ===(.*)/','',$js );
//         break;
//     case 'nc':
//         $js = preg_replace( '/(.*)=== (START|END) SECTION NONCOMMERCIAL ===(.*)/','',$js );
//         break;
        
//     default:
//         break;
// }
// echo preg_replace( '/(.*)=== MAGICZOOMPLUS(.*)/','',$js );
echo $js;
header('Content-type: text/javascript; charset: UTF-8');
header('Content-Length: '.ob_get_length());

ob_end_flush(); 
die;

?>
