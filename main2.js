// Profile Edit and Save
function enableEdit() {
  const inputs = document.querySelectorAll('#name, #email, #phone, #status, #university');
  inputs.forEach(input => input.disabled = false);
  document.getElementById('save-button').style.display = 'inline-block';
}

function saveProfile() {
  const inputs = document.querySelectorAll('#name, #email, #phone, #status, #university');

  // Save the profile data to localStorage
  const profileData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    status: document.getElementById('status').value,
    university: document.getElementById('university').value
  };

  // Save the profile data in localStorage
  localStorage.setItem('profileData', JSON.stringify(profileData));

  // Disable input fields and hide save button
  inputs.forEach(input => input.disabled = true);
  document.getElementById('save-button').style.display = 'none';
  alert('Profile saved successfully!');
}

// Load profile data from localStorage when the page loads
function loadProfile() {
  const savedData = localStorage.getItem('profileData');
  if (savedData) {
    const profileData = JSON.parse(savedData);
    document.getElementById('name').value = profileData.name;
    document.getElementById('email').value = profileData.email;
    document.getElementById('phone').value = profileData.phone;
    document.getElementById('status').value = profileData.status;
    document.getElementById('university').value = profileData.university;
  }
}

// Delete Profile
function deleteProfile() {
  // Remove profile data from localStorage
  localStorage.removeItem('profileData');

  // Clear the profile fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('status').value = '';
  document.getElementById('university').value = '';

  alert('Profile deleted successfully!');

  // Redirect to login or homepage
  window.location.href = 'login.html'; // Or 'homepage.html'
}

// Add event listeners
document.getElementById('edit-button').addEventListener('click', enableEdit);
document.getElementById('save-button').addEventListener('click', saveProfile);
document.getElementById('delete-button').addEventListener('click', deleteProfile);

// Password Change
function togglePasswordForm() {
  const passwordForm = document.getElementById('password-form');
  passwordForm.style.display = passwordForm.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('change-password-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (newPassword === confirmPassword) {
    alert('Password changed successfully!');
    document.getElementById('password-form').style.display = 'none'; // Hide form
  } else {
    alert('Passwords do not match. Please try again.');
  }
});

// Toggle the visibility of the preferences form
function togglePreferencesForm() {
  const preferencesForm = document.getElementById('preferences-form');
  preferencesForm.style.display = preferencesForm.style.display === 'none' || preferencesForm.style.display === ''
    ? 'block'
    : 'none';
}

// Call loadProfile to load the profile data when the page is loaded
document.addEventListener('DOMContentLoaded', loadProfile);
