const loginButton = document.querySelector(".nav-secondhalf");

const loginPopup = document.querySelector("#loginPopup");
const signupPopup = document.querySelector("#sloginPopup");

const signupButton = document.querySelector(".lasignup");
const loginFromSignup = document.querySelector(".sasignup");

const closeLogin = document.querySelector("#closeLogin");
const closeSignup = document.querySelector("#closesignup");


loginButton.addEventListener("click", function () {
    loginPopup.classList.add("show");
});

signupButton.addEventListener("click", function () {
    loginPopup.classList.remove("show");
    signupPopup.classList.add("sshow");
});

closeLogin.addEventListener("click", function () {
    loginPopup.classList.remove("show");
});

closeSignup.addEventListener("click", function () {
    signupPopup.classList.remove("sshow");
});

loginFromSignup.addEventListener("click", function () {
    signupPopup.classList.remove("sshow");
    loginPopup.classList.add("show");
});