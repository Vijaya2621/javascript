let loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let user = JSON.parse(localStorage.getItem(email));

    if(user && user.password == password)
    {
       console.log("Welcome")
       window.location.href = "../index.html"
    }
    else
    {
        alert("invalid user");
    }
   
})
function togglePasswordVisibility() {
    const passwordInput = document.querySelector("#password");
    const eyeIcon = document.querySelector("#eye");
  
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
  }