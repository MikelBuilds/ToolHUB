function updateValue(type, value) {
    if (type === 'monthly') {
        document.getElementById('monthly-investment-value').innerText = `₹ ${value}`;
    } else if (type === 'rate') {
        document.getElementById('return-rate-value').innerText = `${value}%`;
    } else if (type === 'time') {
        document.getElementById('time-period-value').innerText = `${value}Yr`;
    }
    calculateSIP();
}

function calculateSIP() {
    let monthlyInvestment = document.getElementById('monthly-investment').value;
    let annualRate = document.getElementById('return-rate').value;
    let timePeriod = document.getElementById('time-period').value;

    let months = timePeriod * 12;
    let monthlyRate = (annualRate / 12) / 100;

    let investedAmount = monthlyInvestment * months;
    let futureValue = monthlyInvestment * (((Math.pow(1 + monthlyRate, months)) - 1) / monthlyRate) * (1 + monthlyRate);

    let estReturns = futureValue - investedAmount;

    document.getElementById('invested-amount').innerText = `₹${(investedAmount).toLocaleString()}`;
    document.getElementById('est-returns').innerText = `₹${(estReturns).toLocaleString()}`;
    document.getElementById('total-value').innerText = `₹${(futureValue).toLocaleString()}`;
}

calculateSIP();

