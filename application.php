<?php

call_user_func(function(){

  function AuthenticateUser($user, $pwd){
    foreach([
      [
        'user' => 'bell',
        'pwd' => 'bell'
      ]
    ] as $authUser) {
      if($authUser['user'] == $user && $authUser['pwd'] == $pwd) return true;
    }
    return false;
    return true;
    //foreachからfalse;までをコメントアウトする
  }

  function authBasic(){
    header("WWW-Authenticate: Basic realm=\"Restricted.\"");
    header("HTTP/1.0 401 Unauthorized");
    echo "Authorization Required";
    exit;
  }

/*  if(!isset($_SERVER["PHP_AUTH_USER"])) {
    authBasic();
  }*/

  if(AuthenticateUser($_SERVER["PHP_AUTH_USER"],$_SERVER["PHP_AUTH_PW"])){
    include('index.html');
  }else{
    authBasic();
  }

});
