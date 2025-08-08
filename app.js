const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop form from submitting

  if (nameInput.value.trim() === '') { //
    alert('Please enter your name');
    return;
  }

  if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
    alert('Please enter a valid email');
    return;
  }

  if (passwordInput.value.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }

  alert('✅ Form submitted successfully!');
  form.reset(); // Clear form
});

