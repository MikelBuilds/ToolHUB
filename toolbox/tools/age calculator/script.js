function calculateAge() {
    const birthDate = new Date(document.getElementById('birth-date').value);
    const currentDate = new Date(document.getElementById('current-date').value);

    if (!birthDate || !currentDate) {
        document.getElementById('output').innerHTML = "Please enter both dates.";
        return;
    }

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate(); // days in last month
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('output').innerHTML = `Age: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
}
