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
  var upperCase = confirm("Would you like to use uppercase letters in your password?");
  console.log(upperCase);
  function addUppercase () {
    if (upperCase === true){
      var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      for (i = 0; i < password.length; i++) {
        var randomChar = Math.floor(Math.random() * (uppercaseLetters.length + 1));
        var randomIndex = Math.floor(Math.random() * password.length);
        password[randomIndex] = uppercaseLetters[randomChar];
      }
    }
  }
  addUppercase();
  console.log(password);
  var lowerCase = confirm("Would you like to use lowercase letters in your password?");
  console.log(lowerCase);
  function addLowercase () {
    if (lowerCase === true){
      var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      for (i = 0; i < password.length; i++) {
        var randomChar = Math.floor(Math.random() * (lowercaseLetters.length + 1));
        var randomIndex = Math.floor(Math.random() * password.length);
        password[randomIndex] = lowercaseLetters[randomChar];
      }
    }
  }
  addLowercase ();
  console.log(password);
  var numbers = confirm("Would you like to add numbers to your password?");
  console.log(numbers);
  function addNumbers () {
    if (numbers === true){
      var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (i = 0; i < password.length; i++) {
        var randomChar = Math.floor(Math.random() * (nums.length + 1));
        var randomIndex = Math.floor(Math.random() * password.length);
        password[randomIndex] = nums[randomChar];
      }
    }
  }
  addNumbers();
  console.log(password);
  var specChar = confirm("Would you like to add special characters to your password? Special characters include: !, ?, (, ), {, }, %, $, &, @, and *.");
  console.log(specChar);
  function addSpecChars () {
    if (specChar === true){
      var characters = ["!", "?", "(", ")", "{", "}", "%", "$", "&", "@", "*"];
      for (i = 0; i < password.length; i++) {
        var randomChar = Math.floor(Math.random() * (characters.length + 1));
        var randomIndex = Math.floor(Math.random() * password.length);
        password[randomIndex] = characters[randomChar];
      }
    }
  }
  addSpecChars();
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
