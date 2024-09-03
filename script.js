document.getElementById("validationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  // Name Validation
  if (name === "") {
    showError("nameError", "Name is required");
    valid = false;
  } else {
    hideError("nameError");
  }

  // Phone Validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    showError("phoneError", "Enter a valid 10-digit phone number");
    valid = false;
  } else {
    hideError("phoneError");
  }

  // Email Validation
  if (!email.includes("@") || !email.includes(".")) {
    showError("emailError", "Enter a valid email address");
    valid = false;
  } else {
    hideError("emailError");
  }

  // Message Validation
  if (message === "") {
    showError("messageError", "Message is required");
    valid = false;
  } else {
    hideError("messageError");
  }

  // If all fields are valid
  if (valid) {
    alert("Form submitted successfully!");
    // Add code here to send form data to a server or perform other actions.
  }
});

function showError(id, message) {
  const errorElement = document.getElementById(id);
  errorElement.textContent = message;
  errorElement.style.display = "block";
}

function hideError(id) {
  const errorElement = document.getElementById(id);
  errorElement.style.display = "none";
}
