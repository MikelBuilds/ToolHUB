const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const lengthInput = document.getElementById('length');
const passwordDisplay = document.getElementById('password-display');
const strengthMeter = document.getElementById('password-strength-meter');

const generateButton = document.getElementById('generate-password');
const copyButton = document.getElementById('copy-password');

generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);

function generatePassword() {
    const length = +lengthInput.value;
    let chars = '';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+{}[]|:;<>,.?/~`';

    if (lowercaseCheckbox.checked) chars += lowercase;
    if (uppercaseCheckbox.checked) chars += uppercase;
    if (numbersCheckbox.checked) chars += numbers;
    if (symbolsCheckbox.checked) chars += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    passwordDisplay.value = password;
    checkPasswordStrength(password);
}

function copyToClipboard() {
    passwordDisplay.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

function checkPasswordStrength(password) {
    let strength = 'Very Weak';
    let bgColor = '#dc3545'; // Red

    if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength = 'Very Strong';
        bgColor = '#28a745'; // Green
    } else if (password.length >= 10) {
        strength = 'Strong';
        bgColor = '#ffc107'; // Yellow
    } else if (password.length >= 8) {
        strength = 'Moderate';
        bgColor = '#fd7e14'; // Orange
    }

    strengthMeter.textContent = strength;
    strengthMeter.style.backgroundColor = bgColor;
}
