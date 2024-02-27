function validation() {
    const name = document.getElementById('name').value;
    const uname = document.getElementById('uname').value;
    const mob = parseInt(document.getElementById('mob').value, 10);
    const maxmob = document.getElementById('mob').value;
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;

    if (name === '') {
        document.getElementById('errorname').innerHTML = "Please enter your name";
        return false;
    }

    if (uname === '') {
        showAlert("Please enter a username");
        return false;
    }

    if (!uname.includes('@gmail.com')) {
        showAlert("Please include @gmail.com in the username");
        return false;
    }

    if (isNaN(mob)) {
        showAlert("Please enter a valid mobile number");
        return false;
    }

    if (maxmob.length !==10) {
        showAlert("Mobile number should be 10 digits");
        return false;
    }

    if (pass === "") {
        showAlert("Please enter a password");
        return false;
    }

    if (!pass.includes('@')) {
        showAlert("Include @ in the password");
        return false;
    }

    if (cpass === "") {
        showAlert("Please enter confirm password");
        return false;
    }

    if (pass !== cpass) {
        showAlert("Passwords do not match");
        return false;
    }

    function showAlert(message) {
        alert(message);
        document.getElementById('name').focus();
    }
}
