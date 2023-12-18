// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve data from localStorage on page load
    displayData();

    // Function to save data to localStorage
    window.saveData = function () {
        const userInput = prompt("Enter data to save:");
        if (userInput !== null) {
            localStorage.setItem("userInput", userInput);
            displayData();
        }
    };

    // Function to display data from localStorage
    function displayData() {
        const storedData = localStorage.getItem("userInput");
        const resultElement = document.getElementById("result");

        if (storedData) {
            resultElement.innerHTML = `Data from localStorage: ${storedData}`;
        } else {
            resultElement.innerHTML = "No data stored in localStorage.";
        }
    }
});
