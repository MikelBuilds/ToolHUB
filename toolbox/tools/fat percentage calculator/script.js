function calculateBodyFat() {
    const weight = parseFloat(document.getElementById('weight').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const hip = parseFloat(document.getElementById('hip').value);
    const neck = parseFloat(document.getElementById('neck').value);
    const height = parseFloat(document.getElementById('height').value);

    // Body Fat Percentage calculation for men
    const bodyFatPercentage = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;

    document.getElementById('result').innerText = `Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%`;
}

