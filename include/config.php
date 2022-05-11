<?php
$pathlocal=$_SERVER['HTTP_HOST'];
if ($pathlocal == "localhost") {
  define(ECHRONURL,"http://".$pathlocal."/github/techmatrix-landing");
}
else {
  define(ECHRONURL,"https://b2demo.in/techmatrix6");
}
?>