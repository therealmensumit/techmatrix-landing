<?php
$pathlocal=$_SERVER['HTTP_HOST'];
if ($pathlocal == "localhost") {
  define(ECHRONURL,"http://".$pathlocal."/github/amitJoshi-techmatrixconsulting.com");
}
else {
  define(ECHRONURL,"https://b2demo.in/techmatrix6");
}
?>