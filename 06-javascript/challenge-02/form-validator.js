let isUserValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;

// Elements
const userInput = document.getElementById("user");
const emailInput = document.getElementById("email");
const pwdInput = document.getElementById("pwd");
const confirmPwdInput = document.getElementById("confirm-pwd");

const userMsg = document.getElementById("userV");
const emailMsg = document.getElementById("emailV");
const pwdMsg = document.getElementById("pwdV");
const confirmMsg = document.getElementById("conpwdV");

// Username
userInput.addEventListener("blur", () => {
    const regex = /^[a-zA-Z0-9]{3,15}$/;

    if (regex.test(userInput.value)) {
        userMsg.textContent = "";
        isUserValid = true;
    } else {
        userMsg.textContent =
            "Username must be 3–15 characters (letters & numbers only)";
        isUserValid = false;
    }
    checkFormValidity();
});

// Email
emailInput.addEventListener("blur", () => {
    const regex = /^[a-z0-9._%-]+@[a-z]+\.[a-z]{2,}$/;

    if (regex.test(emailInput.value)) {
        emailMsg.textContent = "";
        isEmailValid = true;
    } else {
        emailMsg.textContent = "Invalid email address";
        isEmailValid = false;
    }
    checkFormValidity();
});

// Password
pwdInput.addEventListener("blur", () => {
    const regex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%&*]).{8,}$/;

    if (regex.test(pwdInput.value)) {
        pwdMsg.textContent = "";
        isPasswordValid = true;
    } else {
        pwdMsg.textContent =
            "Password must be 8+ chars with uppercase, lowercase, number & symbol";
        isPasswordValid = false;
    }
    checkFormValidity();
});

// Confirm Password
confirmPwdInput.addEventListener("blur", () => {
    if (pwdInput.value === confirmPwdInput.value) {
        confirmMsg.textContent = "";
        isConfirmValid = true;
    } else {
        confirmMsg.textContent = "Passwords do not match";
        isConfirmValid = false;
    }
    checkFormValidity();
});

// Final check
const checkFormValidity = () => {
    document.getElementById("submitbtn").disabled = !(
        isUserValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmValid
    );
};
