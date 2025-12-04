/**
 * Web Space Uganda - Form Validation
 * Simple form validation
 */

function validateForm() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name === '') {
        alert('Please enter your name');
        return false;
    }

    if (email === '') {
        alert('Please enter your email');
        return false;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }

    if (phone === '') {
        alert('Please enter your phone number');
        return false;
    }

    if (phone.replace(/\D/g, '').length < 10) {
        alert('Phone number must have at least 10 digits');
        return false;
    }

    if (message === '') {
        alert('Please enter a message');
        return false;
    }

    alert('Thank you for your message! We will get back to you soon.');
    return true;
}