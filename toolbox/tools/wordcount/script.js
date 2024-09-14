const textArea = document.getElementById('text-input');
const wordCountElement = document.getElementById('word-count');
const charCountElement = document.getElementById('char-count');
const sentenceCountElement = document.getElementById('sentence-count');
const paragraphCountElement = document.getElementById('paragraph-count');

textArea.addEventListener('input', () => {
    const text = textArea.value;

    // Count words by splitting the text by spaces and filtering empty strings
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    // Count characters
    const charCount = text.length;

    // Count sentences by splitting by periods, exclamation marks, and question marks
    const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    // Count paragraphs by splitting by newlines
    const paragraphCount = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;

    // Update the UI
    wordCountElement.textContent = wordCount;
    charCountElement.textContent = charCount;
    sentenceCountElement.textContent = sentenceCount;
    paragraphCountElement.textContent = paragraphCount;
});