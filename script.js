const loginButton = document.querySelector(".nav-secondhalf");
const loginPopup = document.querySelector("#loginPopup");

loginButton.addEventListener("click", function () {
    loginPopup.classList.add("show");
});

const closeLogin = document.querySelector("#closeLogin");

closeLogin.addEventListener("click", function () {
    loginPopup.classList.remove("show");
});