
const elBtn = document.querySelector(".btn");
const elInput = document.querySelector("input");
const elMessage = document.querySelector(".message");
const elError = document.querySelector(".error");


elBtn.addEventListener("click", displayMessage);

function displayMessage() {
    if (elInput.value) {
        elMessage.textContent = elInput.value;
        elInput.value = "";

    } else {
        elError.style.display = "block";
        setInterval(() => {
            elError.style.display = "none";
        }, 10000)
    }
}