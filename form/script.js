document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (name === "" || email === "" || password === "" || confirm === "") {
        alert("Please fill all fields.");
        return;
    }

    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration Successful!");
});