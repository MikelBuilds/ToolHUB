function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('result').innerText = `Your BMI is ${bmi} (${category})`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid height and weight!';
    }
}
