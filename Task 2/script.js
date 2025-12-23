document.addEventListener("DOMContentLoaded", function() {
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

phoneInput.addEventListener("blur", validatePhone);
passwordInput.addEventListener("blur", validatePassword);

// Add a "focus" effect: Clear the error as soon as they start fixing it
phoneInput.addEventListener("focus", () => clearError("phone"));
passwordInput.addEventListener("focus", () => clearError("password"));

  const form = document.getElementById("registration-form");

  // Helper function to show errors
  function showError(inputId, message) {
    const errorSpan = document.getElementById(`${inputId}-error`);
    errorSpan.textContent = message;
    errorSpan.style.color = "red";
  }

  // Helper function to clear errors
  function clearError(inputId) {
    const errorSpan = document.getElementById(`${inputId}-error`);
    errorSpan.textContent = "";
  }

  // 1. Individual Validation Functions
  function validateUsername() {
    const val = document.getElementById("username").value.trim();
    if (val.length < 4) {
      showError("username", "Name must be at least 4 characters.");
      return false;
    }
    clearError("username");
    return true;
  }

  function validateEmail() {
    const val = document.getElementById("email").value.trim();
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!regex.test(val)) {
      showError("email", "Please enter a valid email address.");
      return false;
    }
    clearError("email");
    return true;
  }
  
  function validatePhone() {
    const val = document.getElementById("phone").value.trim();
    const regex = /^\d+$/;
    
    // Check if it's NOT numeric OR NOT the right length (10 digits)
    if (!regex.test(val) || val.length !== 10) {
      showError("phone", "Please enter exactly 10 digits.");
      return false;
    }
    clearError("phone");
    return true;
}
function validatePassword() {
    const val = document.getElementById("password").value.trim();
    // Regex for: at least one number
    const hasNumber = /\d/.test(val);

    if (val.length < 8 || !hasNumber) {
        showError("password", "Password must be 8+ characters and include a number.");
        return false;
    }
    clearError("password");
    return true;
}

  // 2. Real-Time Feedback (Blur Events)
  document.getElementById("username").addEventListener("blur", validateUsername);
  document.getElementById("email").addEventListener("blur", validateEmail);

  // 3. Final Submission Check
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Run all validations
    const isUserValid = validateUsername();
    const isEmailValid = validateEmail();

    if (isUserValid && isEmailValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
