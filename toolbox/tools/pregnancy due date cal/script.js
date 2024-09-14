document.getElementById('due-date-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const lmp = new Date(document.getElementById('lmp').value);
    const dueDate = new Date(lmp);
    dueDate.setDate(dueDate.getDate() + 280); // Pregnancy typically lasts 280 days

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('result').innerText = `Your estimated due date is: ${dueDate.toLocaleDateString(undefined, options)}`;
});
