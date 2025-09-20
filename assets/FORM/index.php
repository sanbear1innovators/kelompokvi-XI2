<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Form</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div id="form">
        <h1>Login Form</h1>
        <form name="form" action="javascript:void(0);" onsubmit="return isvalid()">
            <label>Username: </label>
            <input type="text" id="user" name="user"></br></br>
            <label>Password: </label>
            <input type="password" id="pass" name="pass"></br></br>
            <input type="submit" id="btn" value="Login" name="btn"/>
        </form>
    </div>

    <script>
        // Dummy user credentials (usually, you would fetch this from a database)
        const validUser = "admin";
        const validPass = "12345";  // In a real-world app, passwords should be encrypted.

        // Function to validate login
        function isvalid(){
            var user = document.form.user.value;
            var pass = document.form.pass.value;

            // Check if username or password fields are empty
            if(user == "" && pass == ""){
                alert("Username and password field is empty");
                return false;
            } else {
                if(user == ""){
                    alert("Username is empty");
                    return false;
                }
                if(pass == ""){
                    alert("Password is empty");
                    return false;
                }
            }

            // Check if credentials match
            if(user === validUser && pass === validPass){
                alert("Login successful!");
                // Store the login status in localStorage
                localStorage.setItem("loggedIn", true);
                // Redirect to another page (for example, dashboard.html)
                window.location.href = "dashboard.html"; // Redirect to a new page
            } else {
                alert("Invalid username or password!");
            }
        }

        // Check if user is already logged in (Optional: for auto-login on page reload)
        if(localStorage.getItem("loggedIn") === "true") {
            window.location.href = "dashboard.html"; // Redirect if already logged in
        }
    </script>
</body>
</html>
