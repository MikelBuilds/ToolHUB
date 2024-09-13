document.getElementById('check-button').addEventListener('click', () => {
    const text = document.getElementById('text-input').value;

    // LanguageTool API call
    fetch('https://api.languagetool.org/v2/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'text': text,
            'language': 'en-US'
        })
    })
    .then(response => response.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ''; // Clear previous results

        if (data.matches.length > 0) {
            data.matches.forEach(match => {
                const message = document.createElement('p');
                message.innerHTML = `<strong>Error:</strong> ${match.message} <br> <strong>Suggestion:</strong> ${match.replacements.map(r => r.value).join(', ')}`;
                outputDiv.appendChild(message);
            });
        } else {
            outputDiv.innerHTML = '<p>No grammar issues found!</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});