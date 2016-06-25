<?
include('../../lib/con_db.php');

$sql = "DELETE FROM tb_contact WHERE id='".$_GET['id']."'";

if($result = mysql_query($sql)){ ?>
	<meta http-equiv="refresh" content="0;url='../index.php'">
<? } ?>
