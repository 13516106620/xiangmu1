<?php
//调用数据库连接
include './demo1.php';
//获取传入的参数
$u=$_GET['username'];
$p=$_GET['password'];

//SQL语句
$sql="select * from aaaa where name='$u' and pass='$p'";
//执行SQL语句,并获取结果集
$result=mysqli_query($link,$sql);
//获取结果集中的数据,并判断
if(mysqli_fetch_row($result)){
    // echo "登录成功";
    // setcookie("name",'$u');
    // header("location:../html/sy.html");
   echo 1;
}else{
    echo "账号或密码有误";
}
?>