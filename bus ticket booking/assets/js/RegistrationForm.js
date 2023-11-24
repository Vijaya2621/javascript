
let fullnameInput = document.getElementById('fullname');
let fullnameError = document.getElementById('fullnameError');
let emailInput = document.getElementById('email');
let emailError = document.getElementById('emailError');
let passwordInput = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
let confirmPasswordInput = document.getElementById('confirmPassword');
let confirmPasswordError = document.getElementById('confirmPasswordError');
let phoneInput = document.getElementById('phone');
let phoneError = document.getElementById('phoneError');


// check fullname
fullnameInput.addEventListener('blur', () => {
  if (!validateFullname(fullnameInput.value)) {
    fullnameError.textContent = 'Please enter a valid full name';
  } else {
    fullnameError.textContent = '';
  }
});

//check email
emailInput.addEventListener('blur', () => {
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
  } else {
    emailError.textContent = '';
  }
});


//check password
passwordInput.addEventListener('blur', () => {
  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = 'Enter valid Password';
  } else {
    passwordError.textContent = '';
  }
});

// confirm password
confirmPasswordInput.addEventListener('blur', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
  } else {
    confirmPasswordError.textContent = '';
  }
});

// check phone number
phoneInput.addEventListener('blur', () => {
  if (!validatePhone(phoneInput.value)) {
    phoneError.textContent = 'Please enter a valid phone number';
  } else {
    phoneError.textContent = '';
  }
});


let submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (!validateFullname(fullnameInput.value)) {
    fullnameError.textContent = 'Please enter a valid full name';
    return;
  }

  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    return;
  }

  if (!validatePassword(passwordInput.value)) {
    passwordError.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number';
    return;
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = 'Passwords do not match';
    return;
  }

  if (!validatePhone(phoneInput.value)) {
    phoneError.textContent = 'Please enter a valid phone number';
    return;
  }

  // Submit the form
  alert('Form submitted successfully!');
});


//funcitons
function validateFullname(fullname) {
  return fullname.trim().length > 0;
}

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

function validatePassword(password) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.{8,}).*$/;
  return regex.test(password);
}

function validatePhone(phone) {
  let regex = /^\(?\d{3}\)?[- ]?\d{3}-?\d{4}$/;
  return regex.test(phone);
}




// console.log(storeData);
// localStorage.setItem(storeData.email, JSON.stringify(storeData));
// let data=JSON.parse(localStorage.getItem("Fullname"));
// console.log(data);

// let reggforms = document.querySelector('#submitBtn');
// console.log(reggforms);
// reggforms.addEventListener("submit", function(e){
// e.preventDefault();
// console.log("hello");    
// })
