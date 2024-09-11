function copyCode() {
    const code = document.getElementById('code');
    code.select();
    code.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');
    document.getElementById('status').innerText = "Code copied to clipboard!";
}
