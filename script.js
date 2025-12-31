function openPopup() {
    document.getElementById('accountPopup').style.display = 'flex';
}


function closePopup() {
    document.getElementById('accountPopup').style.display = 'none';
}


window.onclick = function (event) {
    var popup = document.getElementById('accountPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        errorMessage.style.display = 'block';
        return false;
    }

    return true;
}
