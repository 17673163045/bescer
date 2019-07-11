<?php
   //将整个json数据读取成字符串类型
   $jsonStr = file_get_contents("php://input"); 
   
   // 转成php数组类型
   $data = json_decode($jsonStr, true);
   //打印一波,php数组,php已经接收成功
   // var_dump($data); 

   // 我就想要那就话,php数组取值拼接
   echo '欢迎老铁post请求账号:'.$data['uname'].'密码:'.$data['upwd'];

   // 我要json蛇精病前端,没什么意义 老铁  
   //echo $jsonStr ;   // 返回已个JOSN