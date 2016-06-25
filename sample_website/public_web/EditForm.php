<h1>Edit Form</h1>

<?
include('../lib/con_db.php');

$sql = "SELECT * FROM tb_contact WHERE id='".$_GET['id']."'";
$resource = mysql_query($sql);
$result = mysql_fetch_array($resource);
?>

<form action="process/process_edit.php" method="POST">

    <input type="hidden" name="id" value="<?=$result['id'];?>">

    Name : <input type="text" name="txt_name" value="<?=$result['name'];?>">
    <br>
    NickName : <input type="text" name="txt_nickname" value="<?=$result['nickname'];?>">
    <br>
    Social : <input type="text" name="txt_social" value="<?=$result['social'];?>">
    <br>
    Mobile : <input type="text" name="txt_mobile" value="<?=$result['mobile'];?>">
    <br>

<input type="submit" value="OK">
<input type="reset" value="Cancel">
</form>