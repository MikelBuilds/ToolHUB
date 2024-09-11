function calculateEMI() {
    // Get input values
    let P = document.getElementById("loanAmount").value;
    let annualInterestRate = document.getElementById("interestRate").value;
    let years = document.getElementById("loanTenure").value;

    // Validate input
    if (P <= 0 || annualInterestRate <= 0 || years <= 0) {
        alert("Please enter valid values!");
        return;
    }

    // Convert interest rate into monthly rate and years into months
    let r = (annualInterestRate / 100) / 12;
    let n = years * 12;

    // EMI formula
    let emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    // Display result
    document.getElementById("emiAmount").innerText = emi.toFixed(2);
}
