function convertToUpperCase() {
    const input = document.getElementById("inputText").value;
    document.getElementById("outputText").value = input.toUpperCase();
}

function convertToLowerCase() {
    const input = document.getElementById("inputText").value;
    document.getElementById("outputText").value = input.toLowerCase();
}

function convertToSentenceCase() {
    const input = document.getElementById("inputText").value.toLowerCase();
    const sentences = input.split(". ");
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
    }
    document.getElementById("outputText").value = sentences.join(". ");
}

function convertToTitleCase() {
    const input = document.getElementById("inputText").value.toLowerCase();
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    document.getElementById("outputText").value = words.join(" ");
}

function convertToInverseCase() {
    const input = document.getElementById("inputText").value;
    let result = '';
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    document.getElementById("outputText").value = result;
}

function convertToAlternatingCase() {
    const input = document.getElementById("inputText").value.toLowerCase();
    let result = '';
    for (let i = 0; i < input.length; i++) {
        result += i % 2 === 0 ? input[i].toUpperCase() : input[i].toLowerCase();
    }
    document.getElementById("outputText").value = result;
}