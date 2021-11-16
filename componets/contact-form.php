<?php
// define variables and set to empty values
$fName = $lName = $email = $message = "";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fName = test_input($_POST["fName"]);
  $lName = test_input($_POST["lName"]);
  $email = test_input($_POST["Email"]);
  $message = test_input($_POST["Message"]);
}

function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

echo $fName;
echo $lName;
echo $email;
echo $message;

$ahelp = $_POST["help"];
      $n = count($ahelp);


      for ($i = 0; $i < $n; $i++) {
        echo $ahelp[$i];
      }


?>
  