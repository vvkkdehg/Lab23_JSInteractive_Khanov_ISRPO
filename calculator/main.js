const form = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const cityInput = document.getElementById('city');
const hobbyInput = document.getElementById('hobby');

const nameError = document.getElementById('nameError');
const ageError = document.getElementById('ageError');
const cityError = document.getElementById('cityError');
const hobbyError = document.getElementById('hobbyError');

const displayName = document.getElementById('displayName');
const displayAge = document.getElementById('displayAge');
const displayCity = document.getElementById('displayCity');
const displayHobby = document.getElementById('displayHobby');
const profileCard = document.getElementById('profileCard');

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


function displayProfile() {
    displayName.textContent = nameInput.value;
    displayAge.textContent = ageInput.value;
    displayCity.textContent = cityInput.value;
    displayHobby.textContent = hobbyInput.value;
    profileCard.style.display = 'block';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        displayProfile();
    }
});