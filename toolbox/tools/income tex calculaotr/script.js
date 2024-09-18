function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 750000) {
        tax = 12500 + (income - 500000) * 0.1;
    } else if (income <= 1000000) {
        tax = 37500 + (income - 750000) * 0.15;
    } else if (income <= 1250000) {
        tax = 75000 + (income - 1000000) * 0.2;
    } else {
        tax = 125000 + (income - 1250000) * 0.3;
    }

    document.getElementById('result').innerText = `Total Tax: INR ${tax.toFixed(2)}`;
    document.getElementById('result').classList.remove('hidden');
}
