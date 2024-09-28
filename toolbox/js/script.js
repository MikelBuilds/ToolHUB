// Get required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

// Example suggestions array with relative paths
const suggestions = [
    { name: "PDF to Word", link: "coming soon/index.html" },
    { name: "PDF to PP", link: "coming soon/index.html"}, 
    { name: "Word to PDF", link: "coming soon/index.html" }, 
    { name: "Compress PDF", link: "coming soon/index.html" }, 
    { name: "PP to PDF", link: "coming soon/index.html" }, 
    { name: "Word Counter", link: "tools/wordcount/index.html" }, 
    { name: "Font Styles", link: "tools/font styles/index.html" }, 
    { name: "Grammar Checker", link: "tools/grammarly/index.html" }, 
    { name: "Case Changer", link: "tools/cases/index.html" }, 
    { name: "Whatsapp Spammer", link: "tools/whatsapp spammer/index.html" }, 
    { name: "Password Generator", link: "tools/password genarator/index.html" }, 
    { name: "EMI Calculator", link: "tools/emi calculator/index.html" },
    { name: "SIP Calculator", link: "tools/sip calculator/index.html" }, 
    { name: "Currency Coverter", link: "tools/currencyconvertor/index.html" }, 
    { name: "Loan Calculator", link: "tools/loan calculator/index.html" }, 
    { name: "Income Tax Calculator", link: "tools/income tax calculator/index.html" }, 
    { name: "Body Mass Index", link: "tools/BMI calculator/index.html" }, 
    { name: "Pregnancy Due Date", link: "tools/pregnancy due date cal/index.html" }, 
    { name: "Age Calculator", link: "tools/age calculator/index.html" }, 
    { name: "Fat Percentage Calculator", link: "tools/fat percentage calculator/index.html" }, 
    { name: "Calorie Maintenance", link: "tools/calorie maintenance/index.html" }
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
