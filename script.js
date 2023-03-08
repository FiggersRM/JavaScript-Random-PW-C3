// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be? Must be between 8 and 128 characters.");
  console.log(passwordLength);
  function checkLength () {
    while(passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Sorry, but it seems you have entered a number that does not match the criteria, please try again using a number between 8 and 128.");
    }
  }
  checkLength ();
  var password = [];
  password.length = passwordLength;
  console.log(password.length);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
