function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(min) || isNaN(max)) {
        resultElement.textContent = 'Please enter valid numbers';
        resultElement.style.display = 'block'; // Show the result when an error occurs
        return;
    }

    if (min >= max) {
        resultElement.textContent = 'Minimum should be less than maximum';
        resultElement.style.display = 'block'; // Show the result when an error occurs
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultElement.textContent = `Generated Number: ${randomNumber}`;
    resultElement.style.display = 'block'; // Show the result after number generation
}
