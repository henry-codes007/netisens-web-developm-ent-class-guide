function copyPassword() {
    const password = document.getElementById("password");
    password.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}

function updateLengthValue(val) {
    document.getElementById("lengthValue").innerText = val;
}

function generatePassword() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}<>?/";

    let charSet = "";
    if (useUppercase) charSet += uppercaseChars;
    if (useLowercase) charSet += lowercaseChars;
    if (useNumbers) charSet += numberChars;
    if (useSymbols) charSet += symbolChars;

    if (charSet === "") {
        alert("Please select at least one character type");
        return;
    }
    // variable
// rejex
// the return keyword in function
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    document.getElementById("password").value = password;
}