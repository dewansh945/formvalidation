function validation() {
    let name = document.getElementById('name').value;
    let uname = document.getElementById('username').value;
    let mob = document.getElementById('mob').value;
    let pass = document.getElementById('pass').value;
    let cpass = document.getElementById('cpass').value;
    console.log(name, uname, mob, pass, cpass);
    if (name == '') {
        alert("please Enter name");
        document.getElementById('name').focus()
        return false
        
    }
    else if (uname === '') {
        alert("please enter username");
        document.getElementById('username').focus()
        return false
    }
    else if (!uname.includes('@gmail.com')) {
        alert("@gmail.com must be included")
        return false;
    }
}