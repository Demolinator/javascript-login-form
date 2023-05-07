function processForm(e){
    e.preventDefault(); //stop the form from submitting to server
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var Cusername = "TeacherLogin";
    var Cpassword = "Hapke";
    var Wrong = "Wrong user name or password";

    if (username == Cusername && password == Cpassword) {
        window.location.href = "https://mail.google.com/mail/";
    } else {
        alert(Wrong);
    }
}