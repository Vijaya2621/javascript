// Add event listener to submit button
const submitButton = document.getElementById('submitBtn');
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(registration())
  {
    registerDataStore();
  }
});

function registration(){
const fullnameInput = document.getElementById('fullname');
const fullnameError = document.getElementById('fullnameError');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const confirmPasswordInput = document.getElementById('confirmPassword');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');

// regular expressions
const fullnameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
const emailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,6})+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]{8,}$/;
const phoneRegex = /^\(?\d{3}\)?[- ]?\d{3}-?\d{4}$/;


  // Validate full name
  if (!fullnameRegex.test(fullnameInput.value.trim())) {
    fullnameError.textContent = 'Please enter a valid full name';
    return;
  } else {
    fullnameError.textContent = '';
  }

  // Validate email
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address';
    return;
  } else {
    emailError.textContent = '';
  }

  // Validate password
  if (!passwordRegex.test(passwordInput.value.trim())) {
    passwordError.textContent = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character';
    return;
  } else {
    passwordError.textContent = '';
  }

  // Validate confirm password
  if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
    confirmPasswordError.textContent = 'Passwords do not match';
    return;
  } else {
    confirmPasswordError.textContent = '';
  }

  // Validate phone number
  if (!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.textContent = 'Please enter a valid phone number';
    return;
  } else {
    phoneError.textContent = '';
  }

  // All validations passed, submit the form
  return true;
}

function registerDataStore() {
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;

  const userId = Date.now(); // Generate a unique timestamp
  const dataStore = {
    fullname: fullname,
    email: email,
    password: password,
    phone: phone,
  };

  localStorage.setItem(email, JSON.stringify(dataStore));
  alert('Registered Successfully!');
window.location.href ="../pages/loginPage.html";
}

