<!DOCTYPE html>
<html lang="en">
    
<?php include('include/head.php') ?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Banner Form</title>
</head>

<body>
    <div class="form-s">
        <form action="thanks.php" method="post">
            <input type="hidden" name="action" value="contact_form">
            <div class="form-head">
                <h2>GET STARTED</h2>
                <span>Talk with a Specialist about getting started with</span>
            </div>
            <div class="inp">
                <input type="text" name="name" class="bname" placeholder="Name" />
            </div>
            <div class="inp">
                <input type="email" name="email" class="bemail" placeholder="E-mail" />
            </div>
            <div class="inp">
                <input type="text" name="company" placeholder="Company Name" />
            </div>
            <div class="inp">
                <input type="text" name="phone" value="+91 " class="bphone" placeholder="Phone No." />
            </div>
            <div class="inp">
                <input type="text" name="requirements" placeholder="Requirements" />
            </div>
            <div class="terms">
                <p>By Clicking below, you agree to our <a href="javascript:void()">Terms of use</a>
                    and consent to our <a href="javascript:void()">privacy policy</a>.</p>
            </div>
            <div class="inp">
                <div class="g-recaptcha" data-sitekey='6LdutFIfAAAAAJSkl0fbJwCMOFu_1llrWZeK7k79'></div>
                <script src='https://www.google.com/recaptcha/api.js'></script>
            </div>
            <div class="form-butn">
                <button class="cl_form_sb btn-top" type="submit">Submit</button>
            </div>
        </form>
    </div>
    <script src="js/script.js"></script>
</body>

</html>