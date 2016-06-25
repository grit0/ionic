<?
include('../../lib/con_db.php');

$name = $_POST['txt_name'];
$nickname = $_POST['txt_nickname'];
$social = $_POST['txt_social'];
$mobile = $_POST['txt_mobile'];

$sql = "INSERT INTO tb_contact (name,nickname,social,mobile) VALUES('".$name."','".$nickname."','".$social."','".$mobile."')";

if($result = mysql_query($sql)) { ?>
    <meta http-equiv="refresh" content="0;url='../index.php'">
<? } ?>
