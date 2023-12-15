function checkPass() {
    var passcode = 'rex1234';
    var password = document.getElementById('password').value;

    if (password == passcode) {
        window.alert("Successful Login");
        window.location.href = '2. Profile Page/index.html';
        return true;
    } else if (password == '' || password == null) {
        window.alert("Enter password");
        return false;
    } else {
        window.alert("Wrong password");
        return false;
    }
}