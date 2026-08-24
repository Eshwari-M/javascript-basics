let button = document.querySelector("#btn");

button.addEventListener("click", function () {
    message.innerText = "Button was Clicked!!";
});

let username = document.querySelector("#username");

let output = document.querySelector("#output");

username.addEventListener("input", function () {
    output.innerText = username.value;
});