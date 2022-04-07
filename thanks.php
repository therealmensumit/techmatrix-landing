<?php
function send_mail_smtp($message, $to, $subject) {
  $headers = "From: info@techmatrixconsulting.com" . "\r\n";
  $headers .= "MIME-Version: 1.0" . "\r\n";
  $headers .= "X-Priority: 3\r\n";
  $headers .= "X-Mailer: smail-PHP " . phpversion() . "\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
  $success = mail($to, $subject, $message, $headers);
  return $success;
}

if($_POST['action']=="contact_form"){

  $name        =   $_POST["name"];
  $email       =  $_POST["email"];
  $company       =  $_POST["company"];
  $phone       =   $_POST["phone"];
  $requirements		=   $_POST["requirements"];
  
  
  ############# Assessment Email #################
  $mess= "<table width='96%' cellspacing='0' cellpadding='2' border='0'><tr><td>
  <br/><br/></td></tr>
  <tr><td>You have received an enquiry. Details of which are as follows: <br /><br />";
  $mess.= "Name : ".$name."<br /><br />";
  $mess.= "Email : ".$email."<br /><br />";
  $mess.= "Company : ".$company."<br /><br />";
  $mess.= "Phone : ".$phone."<br /><br />";
  $mess.= "Requirements : ".$requirements."<br /><br />";
  
  
  $mess.= "Thanks<br>Team<br>techmatrixconsulting.com </strong></td></tr>
  </table>";
  
  send_mail_smtp($mess, 'echrontech@gmail.com', 'Techmatrix enquiry');
  }


  if (isset($_POST['g-recaptcha-response'])) {

	
    //GOOGLE RECAPTCH CODE
    require_once('../include/ReCaptcha/ReCaptcha.php');
    require_once('../include/ReCaptcha/RequestMethod.php');
    require_once('../include/ReCaptcha/RequestParameters.php');
    require_once('../include/ReCaptcha/Response.php');
    require_once('../include/ReCaptcha/RequestMethod/Post.php');
    require_once('../include/ReCaptcha/RequestMethod/Socket.php');
    require_once('../include/ReCaptcha/RequestMethod/SocketPost.php');
    $gRecaptchaResponse = $_POST['g-recaptcha-response'];
    $secret = '6LdutFIfAAAAAEZa5btwMLxio5BpkBvOstkw49Nu';
    
    $recaptcha = new \ReCaptcha\ReCaptcha($secret);
    $resp = $recaptcha->verify($gRecaptchaResponse, $_SERVER['REMOTE_ADDR']);
    if ($resp->isSuccess()) {
            

  
  
  
if($_POST['action']=="home_query"){

  $name        =   $_POST["name"];
  $email       =  $_POST["email"];
  $phone       =   $_POST["phone"];
  $employees		=   $_POST["employees"];
  $interest		=   $_POST["interest"];
  $message		=   $_POST["message"];
	

	foreach ($interest as $arr){ 
		$interestVal .= "<li>".$arr."</li>";
}
  
 
 ############# Assessment Email #################
 $mess= "<table width='96%' cellspacing='0' cellpadding='2' border='0'><tr><td>
 <br/><br/></td></tr>
 <tr><td>You have received an enquiry. Details of which are as follows: <br /><br />";
 $mess.= "Name : ".$name."<br /><br />";
 $mess.= "Email : ".$email."<br /><br />";
 $mess.= "Phone : ".$phone."<br /><br />";
 $mess.= "Employees : ".$employees."<br /><br />";
 $mess.= "Message : ".$interestVal."<br /><br />";
 $mess.= "Message : ".$message."<br /><br />";
 

 $mess.= "Thanks<br>Team<br>techmatrixconsulting.com </strong></td></tr>
 </table>";
   
   send_mail_smtp($mess, 'echrontech@gmail.com', 'Techmatrix enquiry');
}
}
else {
    $output = '<b>Captcha</b> Validation Required!';
    $errors = $resp->getErrorCodes();
    die($output);
    }
}



?>

<!DOCTYPE html>
<html>

<?php include('include/head.php')?>

<body>
<?php # include('include/header.php')?>

<div class="head-margin"></div>
<div class="thankyou">
<div class="tclose">
    <a href="index.php" class="fa fa-close thank-close"></a>
</div>
<div class="thankarea">
<i class="fa fa-thumbs-up"></i>
</div><!--thankarea-end-->
<h1>Thank you for getting in touch!</h1>
<!-- -->
<p ><span class="para">We appreciate you contacting Techmatrix Consulting
    
</span> <br>
One of our colleagues will be  in touch with you soon!<br>
Have a great day! </p>

<p class="para2">Need help? Call us:- +65 6224 8246, +1 479 409 4527, +91-8826286801<br>
Email:- contactus@techmatrixconsulting.com</p>
<div class="clearfix"></div>
</div>

<?php # include('include/footer.php')?>

</body>

</html>