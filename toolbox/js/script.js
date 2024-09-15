// Get required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// Example suggestions array (you should replace this with your actual suggestions)
const suggestions = [
    "sip calculator",
    "pdf to word",
    "emi calculator"
    // Add more suggestions here
];

// Handling input and showing suggestions
inputBox.onkeyup = (e) => {
    const userData = e.target.value.trim();
    if (userData) {
        // Filter and map suggestions
        const filteredSuggestions = suggestions.filter(data =>
            data.toLowerCase().startsWith(userData.toLowerCase())
        ).map(data => `<li>${data}</li>`);

        // Show the suggestion box
        searchWrapper.classList.add("active");
        showSuggestions(filteredSuggestions);
    } else {
        // Hide the suggestion box if input is empty
        searchWrapper.classList.remove("active");
    }
};

// Display suggestions in the dropdown
function showSuggestions(list) {
    suggBox.innerHTML = list.length ? list.join('') : "";
}
