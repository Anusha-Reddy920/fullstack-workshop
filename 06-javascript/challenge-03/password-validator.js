let isUserValid = false;
let isEmailValid = false;
let isPasswordValid = false;
let isConfirmValid = false;

// Elements
const userInput = document.getElementById("user");
const emailInput = document.getElementById("email");
const pwdInput = document.getElementById("pwd1");
const confirmPwdInput = document.getElementById("confirm-pwd");

const userMsg = document.getElementById("userV");
const emailMsg = document.getElementById("emailV");
const pwdMsg = document.getElementById("pwdV");
const confirmMsg = document.getElementById("conpwdV");
const scoreMsg = document.getElementById("password_score");
const errorMsg = document.getElementById("invalid_user");

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
pwdInput.addEventListener("input", () => {
    const pwd = pwdInput.value;
    const result = validatePassword(pwd);

    scoreMsg.textContent = `Strength: ${result.score}/100`;

    if (result.isValid) {
        pwdMsg.textContent = "Strong password ✅";
        pwdMsg.style.color = "green";
        errorMsg.textContent = "";
        isPasswordValid = true;
    } else {
        pwdMsg.textContent = "";
        errorMsg.textContent = result.errors.join(", ");
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

// Password validation logic
const validatePassword = (pwd) => {
    let score = 0;
    let errors = [];

    const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];

    if (pwd.length >= 8) score += 20;
    else errors.push("Too short (min 8 characters)");

    if (pwd.length >= 12) score += 10;
    if (/[A-Z]/.test(pwd)) score += 15;
    else errors.push("No uppercase letter");

    if (/[a-z]/.test(pwd)) score += 15;
    else errors.push("No lowercase letter");

    if (/\d/.test(pwd)) score += 15;
    else errors.push("No number");

    if (/[!@#$%^&*()_+\-=]/.test(pwd)) score += 15;
    else errors.push("No special character");

    if (commonPasswords.includes(pwd.toLowerCase())) {
        score -= 30;
        errors.push("Common password");
    }

    score = Math.max(0, Math.min(score, 100));

    return {
        isValid: score >= 70,
        score,
        errors
    };
};

// Final form check
const checkFormValidity = () => {
    document.getElementById("submitbtn").disabled = !(
        isUserValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmValid
    );
};
