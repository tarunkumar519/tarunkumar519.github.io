<?php 
	session_start();
if (isset($_SESSION['u_id'])) {
	session_unset();
	session_destroy();}
else {
  echo "gifts are only available once";
	header("Location: https://harshithabday.herokuapp.com");
}	
	exit();			}
?>