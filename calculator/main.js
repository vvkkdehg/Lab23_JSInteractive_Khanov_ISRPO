const form = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const cityInput = document.getElementById('city');
const hobbyInput = document.getElementById('hobby');

const nameError = document.getElementById('nameError');
const ageError = document.getElementById('ageError');
const cityError = document.getElementById('cityError');
const hobbyError = document.getElementById('hobbyError');

function validateForm() {
    let isValid = true;
    
    if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    if (ageInput.value.trim() === '') {
        ageError.style.display = 'block';
        isValid = false;
    } else {
        ageError.style.display = 'none';
    }
    
    if (cityInput.value.trim() === '') {
        cityError.style.display = 'block';
        isValid = false;
    } else {
        cityError.style.display = 'none';
    }
    
    if (hobbyInput.value.trim() === '') {
        hobbyError.style.display = 'block';
        isValid = false;
    } else {
        hobbyError.style.display = 'none';
    }
    
    return isValid;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
});