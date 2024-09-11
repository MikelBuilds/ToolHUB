console.log("Main.js working");

const currencyData = {
    "USD": { "code": "USD", "value": 1 },
    "EUR": { "code": "EUR", "value": 0.9019401718 },
    "JPY": { "code": "JPY", "value": 142.2912494088 },
    "GBP": { "code": "GBP", "value": 0.7616600788 },
    "CNY": { "code": "CNY", "value": 7.0827512361 },
    "AUD": { "code": "AUD", "value": 1.4995601731 },
    "CAD": { "code": "CAD", "value": 1.3570001415 },
    "CHF": { "code": "CHF", "value": 0.8426301651 },
    "HKD": { "code": "HKD", "value": 7.7940813714 },
    "SGD": { "code": "SGD", "value": 1.3015902453 },
    "SEK": { "code": "SEK", "value": 10.297501196 },
    "KRW": { "code": "KRW", "value": 1336.0983585305 },
    "NOK": { "code": "NOK", "value": 10.7155819094 },
    "NZD": { "code": "NZD", "value": 1.6196702421 },
    "INR": { "code": "INR", "value": 83.9708530382 },
    "MXN": { "code": "MXN", "value": 19.9761635959 }
};

const populate = (value, currency) => {
    if (isNaN(value) || value <= 0) {
        console.error("Invalid quantity");
        return;
    }

    if (!currencyData[currency]) {
        console.error("Invalid currency");
        return;
    }

    let myStr = "";
    document.querySelector(".output").style.display = "block";

    for (const key in currencyData) {
        if (currency === "USD") {
            const selectedCurrencyValue = currencyData[currency].value * value;
            document.querySelector(".usd-price").style.display = "block";
            document.getElementById("usdPrice").textContent = Math.round(selectedCurrencyValue);
        }

        myStr += `
            <tr>
                <td>${key}</td>
                <td>${currencyData[key].code}</td>
                <td>${Math.round(currencyData[key].value * value)}</td>
            </tr>
        `;
    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
});
// Script to add a class to the body when scrolled
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust the scroll distance as needed
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
