
const colorButtons = document.querySelectorAll(".color-btn");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

let selectedColor = "blue";

// Change theme color
function selectColor(color, button) {
    selectedColor = color;

    document.body.dataset.theme = color;

    colorButtons.forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");

    message.textContent = "";
}

// Color buttons
colorButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        selectColor(button.dataset.color, button);
    });
});

// Login functionality
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (selectedColor === "blue") {
        message.textContent = "Login Successfully!";
        message.style.color = "green";
    } else {
        message.textContent = "Login Failed!";
        message.style.color = "red";
    }
});
