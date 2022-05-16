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
<!DOCTYPE html>
<html>
<head>
<title>Home</title>
<link rel = "icon" href =  
"https://fsocietyservices.xyz/fslogo.png" type = "image/x-icon"> 
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
</head>
<style>
body,h1 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.bgimg {
  background-color: white ;
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
#myBtn {
  width: 200px;
  font-size: 18px;
  padding: 10px;
  border: none;
  background: #000;
  color: #fff;
  cursor: pointer;
}

#myBtn:hover {
  background: #ddd;
  color: black;
}
</style>
<body>
<div class="bgimg w3-display-container w3-animate-opacity w3-text-black">
  <div class="w3-display-middle">
    <p class="w3-large w3-center">Select your choice</p>
    <button id="myBtn" onclick="window.location.href = 'https://fsocietyservices.xyz/internshipnew/organization/signup.php';">Organization</button>
    <button id="myBtn" onclick="window.location.href = 'https://fsocietyservices.xyz/internshipnew/employee/signup.php';">Employee</button>
  </div>
  <div class="w3-display-bottomleft w3-padding-large">
    made for internship at Chifts innovations pvt.ltd
  </div>
</div>
</script>
</body>
</html>