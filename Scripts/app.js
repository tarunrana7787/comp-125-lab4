/**
 * @ author : Tarun Rana
 * @ student number : 300871205
 * @ Date : 8th July 2016
 */
(function () {
    var form = document.getElementById("form");
    var username;
    var password;
    
    form.addEventListener('submit', function (e) {

    
        e.preventDefault();
        console.log("App Started");
        
        var UserObject = {
            UserName : document.getElementById("username").value,
            Password : document.getElementById("password").value
        }
        console.log("Username: " + UserObject.UserName);
        console.log("Password: " +UserObject.Password);
    });
})();