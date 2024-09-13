// Get DOM elements
const textInput = document.getElementById('text-input');
const fontFamily = document.getElementById('font-family');
const fontSize = document.getElementById('font-size');
const fontColor = document.getElementById('font-color');
const preview = document.getElementById('preview');

// Function to update preview
function updatePreview() {
    const text = textInput.value;
    const selectedFontFamily = fontFamily.value;
    const selectedFontSize = fontSize.value;
    const selectedFontColor = fontColor.value;

    // Update preview styles
    preview.textContent = text;
    preview.style.fontFamily = selectedFontFamily;
    preview.style.fontSize = `${selectedFontSize}px`;
    preview.style.color = selectedFontColor;
}

// Add event listeners to input elements
textInput.addEventListener('input', updatePreview);
fontFamily.addEventListener('change', updatePreview);
fontSize.addEventListener('input', updatePreview);
fontColor.addEventListener('input', updatePreview);