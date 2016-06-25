<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Website</title>
</head>
<body>
<a href='AddForm.php'>+ Add Contact</a>
<hr>
<table border='1'>
<tr>
<td>ID</td>
<td>Name</td>
<td>Nick Name</td>
<td><strong>Edit</strong></td>
<td><strong>Delete</strong></td>
</tr>

<?
include('../lib/con_db.php');
				$sql = "SELECT * FROM tb_contact";
				$resource = mysql_query($sql);
				while($result = mysql_fetch_assoc($resource)){
?>

<tr>
<td><?=$result['id'];?></td>
<td><?=$result['name'];?></td>
<td><?=$result['nickname'];?></td>
<td><a href="EditForm.php?id=<?=$result['id'];?>">Edit</a></td>
<td><a href="./process/process_delete.php?id=<?=$result['id'];?>">Delete</a></td>
</tr>

<? } ?>

</table>
</body>
</html>