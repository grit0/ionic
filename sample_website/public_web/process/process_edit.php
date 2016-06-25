<?
include('../../lib/con_db.php');

$id = $_POST['id'];
$name = $_POST['txt_name'];
$nickname = $_POST['txt_nickname'];
$social = $_POST['txt_social'];
$mobile = $_POST['txt_mobile'];

$sql = "UPDATE tb_contact SET name='".$name."',nickname='".$nickname."',social='".$social."',mobile='".$mobile."' WHERE id='".$id."'";
if($result = mysql_query($sql)){ ?>
	<meta http-equiv="refresh" content="0;url='../index.php'">
<? } ?>
