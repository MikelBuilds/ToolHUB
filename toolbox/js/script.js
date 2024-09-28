// Get required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// Example suggestions array with relative paths
const suggestions = [
    { name: "PDF to Word", link: "coming soon/index.html" },
    { name: "EMI Calculator", link: "tools/emi calculator/index.html" },
    { name: "SIP Calculator", link: "tools/sip calculator/index.html" } 
];

// Handling input and showing suggestions
inputBox.onkeyup = (e) => {
    const userData = e.target.value.trim();
    if (userData) {
        // Filter and map suggestions to list items with links
        const filteredSuggestions = suggestions
            .filter(data => data.name.toLowerCase().startsWith(userData.toLowerCase()))
            .map(data => `<li onclick="redirectTo('${data.link}')">${data.name}</li>`);

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

// Redirect function
function redirectTo(link) {
    window.location.href = link; // This redirects to the specified link
}
