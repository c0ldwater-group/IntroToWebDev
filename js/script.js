function validateForm() {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const pickupDate = document.querySelector('#pickupDate').value;
    const message = document.querySelector('#itemDetails').value;

    if (email.trim() === '') {
        return { valid: false, message: 'Email is required' };
    }

    if (!email.includes('@')) {
        return { valid: false, message: 'Please enter a valid email' };
    }

    if (name.trim() === '') {
        return { valid: false, message: 'Name is required' };
    }

    if (new Date(pickupDate) < new Date()) {
        return { valid: false, message: 'Date cannot be in the past'};
    }

    if (message.trim() === '') {
        return { valid: false, message: 'Message is required' };
    }

    if (message.length < 10) {
        return { valid: false, message: 'Message must be at least 10 characters long' };
    }

    return { valid: true, message: '' };
}

document.querySelector('#contactForm').addEventListener('submit', function(event) {
    const status = validateForm();

    if (!status.valid) {
        event.preventDefault();
        alert(status.message);
    }
});

const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const pickupDate = document.getElementById('pickupDate');
const reqType = document.getElementById('reqType');
const itemDetails = document.getElementById('itemDetails');
const allergies = document.getElementById('allergies');

nameInput.addEventListener('input', function() {
    localStorage.setItem('name', nameInput.value);
});

email.addEventListener('input', function() {
    localStorage.setItem('email', email.value);
});

pickupDate.addEventListener('input', function() {
    localStorage.setItem('pickupDate', pickupDate.value);
});

reqType.addEventListener('input', function() {
    localStorage.setItem('reqType', reqType.value);
});

itemDetails.addEventListener('input', function() {
    localStorage.setItem('itemDetails', itemDetails.value);
});

allergies.addEventListener('input', function() {
    localStorage.setItem('allergies', allergies.value);
});


function loadFormData() {
    const savedName = localStorage.getItem('name');
    const savedEmail = localStorage.getItem('email');
    const savedPickupDate = localStorage.getItem('pickupDate');
    const savedReqType = localStorage.getItem('reqType');
    const savedItemDetails = localStorage.getItem('itemDetails');
    const savedAllergies = localStorage.getItem('allergies');

    if (savedName) nameInput.value = savedName;
    if (savedEmail) email.value = savedEmail;
    if (savedPickupDate) pickupDate.value = savedPickupDate;
    if (savedReqType) reqType.value = savedReqType;
    if (savedItemDetails) itemDetails.value = savedItemDetails;
    if (savedAllergies) allergies.value = savedAllergies;
}

loadFormData();