var generateBtn = document.querySelector("#generate");
var passwdLen = 0;
var isUppercase = false;
var isLowercase = false;
var isDigits = false;
var isSpecialChar = false;
window.onload = function() {
    document.getElementById("passwdLen").value = 8;
    document.getElementById("popUpBoxPasswdLen").style.display = "none";
    document.getElementById("bgBlur").style.display = "none";
}

function writePassword(password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function getPasswordLen() {
    document.getElementById("popUpBoxPasswdLen").style.display = "block";
    document.getElementById("bgBlur").style.display = "block";
}

function getCharacterTypes() {
    document.getElementById("popUpBoxPasswdLen").style.display = "none";
    document.getElementById("popUpBoxCharacterTypes").style.display = "block";
}

function changeState(type) {
    if (type == 'ua') {
        if (isUppercase == true) {
            document.getElementById(type).classList.remove("selectedBorders");
        } else {
            document.getElementById(type).classList.add("selectedBorders");
        }
        isUppercase = !isUppercase;
    } else if (type == 'la') {
        if (isLowercase == true) {
            document.getElementById(type).classList.remove("selectedBorders");
        } else {
            document.getElementById(type).classList.add("selectedBorders");
        }
        isLowercase = !isLowercase;
    } else if (type == 'd') {
        if (isDigits == true) {
            document.getElementById(type).classList.remove("selectedBorders");
        } else {
            document.getElementById(type).classList.add("selectedBorders");
        }
        isDigits = !isDigits;
    } else if (type == 'sc') {
        if (isSpecialChar == true) {
            document.getElementById(type).classList.remove("selectedBorders");
        } else {
            document.getElementById(type).classList.add("selectedBorders");
        }
        isSpecialChar = !isSpecialChar;
    }
}

function validateCharacterTypes() {
    if (isDigits == false && isLowercase == false && isSpecialChar == false && isUppercase == false) {
        document.getElementById("characterTypeHint").style.display = "block";
    } else {
        document.getElementById("ua").classList.remove("selectedBorders");
        document.getElementById("la").classList.remove("selectedBorders");
        document.getElementById("d").classList.remove("selectedBorders");
        document.getElementById("sc").classList.remove("selectedBorders");
        document.getElementById("passwdLen").style.borderColor = "#E3E3E3";
        document.getElementById("passwordLenHint").style.display = "none";
        document.getElementById("characterTypeHint").style.display = "none";
        document.getElementById("passwdLen").value = 8;
        generatePassword();
    }
}

function validatePasswordLen() {
    var passwdLenT = document.getElementById("passwdLen").value;
    if (passwdLenT < 8 || passwdLenT > 128) {
        document.getElementById("passwordLenHint").style.display = "block";
        document.getElementById("passwdLen").style.borderColor = "red";
    } else {
        passwdLen = passwdLenT;
        getCharacterTypes();
    }
}

function createCharacters() {
    var upperCaseA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCaseA = "abcdefghijklmnopqrstuvwxyz";
    var digits = "0123456789";
    var specialChar = "~`!@#$%^&*()_-+={}[]:;><.,/?";
    var arr = [];
    if (isUppercase == true) {
        for (let index = 0; index < upperCaseA.length; index++) {
            arr.push(upperCaseA[index]);
        }
    }
    if (isLowercase == true) {
        for (let index = 0; index < lowerCaseA.length; index++) {
            arr.push(lowerCaseA[index]);
        }
    }
    if (isDigits == true) {
        for (let index = 0; index < digits.length; index++) {
            arr.push(digits[index]);
        }
    }
    if (isSpecialChar == true) {
        for (let index = 0; index < specialChar.length; index++) {
            arr.push(specialChar[index]);
        }
    }
    return arr;
}

function generatePassword() {
    var availCharacters = createCharacters();
    document.getElementById("bgBlur").style.display = "none";
    document.getElementById("popUpBoxCharacterTypes").style.display = "none";
    var password = "";
    for (let i = 0; i < passwdLen; i++) {
        password += availCharacters[Math.floor(Math.random() * availCharacters.length)];
    }
    isUppercase = false;
    isLowercase = false;
    isSpecialChar = false;
    isDigits = false;
    writePassword(password);
}

function closeEverything() {
    document.getElementById("ua").classList.remove("selectedBorders");
    document.getElementById("la").classList.remove("selectedBorders");
    document.getElementById("d").classList.remove("selectedBorders");
    document.getElementById("sc").classList.remove("selectedBorders");
    document.getElementById("passwdLen").style.borderColor = "#E3E3E3";
    document.getElementById("passwordLenHint").style.display = "none";
    document.getElementById("characterTypeHint").style.display = "none";
    document.getElementById("bgBlur").style.display = "none";
    document.getElementById("popUpBoxCharacterTypes").style.display = "none";
    document.getElementById("popUpBoxPasswdLen").style.display = "none";
    document.getElementById("passwdLen").value = 8;
}