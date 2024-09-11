function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    const regime = document.getElementById("regime").value;
    let tax = 0;

    if (isNaN(income) || income <= 0) {
        document.getElementById("result").innerHTML = "Please enter a valid income.";
        return;
    }

    if (regime === "new") {
        tax = calculateNewRegimeTax(income);
    } else {
        tax = calculateOldRegimeTax(income);
    }

    document.getElementById("result").innerHTML = `Your payable tax is ₹${tax.toFixed(2)}`;
}

function calculateNewRegimeTax(income) {
    let tax = 0;

    if (income > 1500000) {
        tax = 187500 + 0.30 * (income - 1500000);
    } else if (income > 1250000) {
        tax = 125000 + 0.25 * (income - 1250000);
    } else if (income > 1000000) {
        tax = 75000 + 0.20 * (income - 1000000);
    } else if (income > 750000) {
        tax = 37500 + 0.15 * (income - 750000);
    } else if (income > 500000) {
        tax = 12500 + 0.10 * (income - 500000);
    } else if (income > 250000) {
        tax = 0.05 * (income - 250000);
    }

    return tax;
}

function calculateOldRegimeTax(income) {
    let tax = 0;

    if (income > 1500000) {
        tax = 262500 + 0.30 * (income - 1500000);
    } else if (income > 1250000) {
        tax = 187500 + 0.30 * (income - 1250000);
    } else if (income > 1000000) {
        tax = 112500 + 0.30 * (income - 1000000);
    } else if (income > 750000) {
        tax = 62500 + 0.20 * (income - 750000);
    } else if (income > 500000) {
        tax = 12500 + 0.20 * (income - 500000);
    } else if (income > 250000) {
        tax = 0.05 * (income - 250000);
    }

    return tax;
}
