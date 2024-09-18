document.getElementById("calculateBtn").addEventListener("click", calculateLoan);

function calculateLoan() {
    let amount = parseFloat(document.getElementById("loanAmount").value);
    let interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    let term = parseFloat(document.getElementById("loanTerm").value) * 12;

    // Monthly Payment Calculation
    let x = Math.pow(1 + interestRate, term);
    let monthly = (amount * interestRate * x) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById("monthlyPayment").innerText = `Monthly Payment:  ₹${monthly.toFixed(2)}`;
        document.getElementById("totalPayment").innerText = `Total Payment:  ₹${(monthly * term).toFixed(2)}`;
        document.getElementById("totalInterest").innerText = `Total Interest:  ₹${((monthly * term) - amount).toFixed(2)}`;

        document.querySelector('.result').classList.add('show'); // Add animation to the result
    } else {
        document.querySelector('.result').classList.remove('show');
        alert("Please enter valid numbers.");
    }
}
