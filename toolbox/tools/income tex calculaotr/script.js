function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        tax = (income - 500000) * 0.2 + 12500;
    } else {
        tax = (income - 1000000) * 0.3 + 112500;
    }

    document.getElementById("result").innerText = "Your total tax payable is ₹" + tax.toFixed(2);
}
<button onclick="window.location.href='https://ide.geeksforgeeks.org/';" class="GFG">Click Here</button>