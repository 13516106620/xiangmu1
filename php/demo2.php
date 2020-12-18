<?php

//SQL语句
$sql="insert into aaaa(name,pass) values('$u','$p') ";
//执行SQL语句
if(mysqli_query($link,$sql)){
    header("location:../html/dl.html");
}else{
    echo "失败";
}
?>