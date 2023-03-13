// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt(
    "How many characters would you like your password to be? Must be between 8 and 128 characters."
  );
  console.log(passwordLength);
  function checkLength() {
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt(
        "Sorry, but it seems you have entered a number that does not match the criteria, please try again using a number between 8 and 128."
      );
    }
  }
  checkLength();
  var password = [];
  password.length = passwordLength;
  console.log(password.length);
  var upperCase;
  var lowerCase;
  var numbers;
  var specChar;
  function getCharTypes() {
    upperCase = confirm(
      "Would you like to use uppercase letters in your password?"
    );
    console.log(upperCase);
    lowerCase = confirm(
      "Would you like to use lowercase letters in your password?"
    );
    console.log(lowerCase);
    numbers = confirm("Would you like to add numbers to your password?");
    console.log(numbers);
    specChar = confirm(
      "Would you like to add special characters to your password? Special characters include: !, ?, (, ), {, }, %, $, &, @, and *."
    );
    console.log(specChar);
  }
  getCharTypes();
  while (!upperCase && !lowerCase && !numbers && !specChar) {
    alert(
      "Sorry, but you must have at least one character type selected to generate a password. Please choose again."
    );
    getCharTypes();
  }
  var uppercaseLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var characters = ["!", "?", "(", ")", "{", "}", "%", "$", "&", "@", "*"];
  function createPassword() {
    for (i = 0; i < password.length; i++) {
      if (upperCase && lowerCase && numbers && specChar) {
        var newArray = uppercaseLetters.concat(
          lowercaseLetters,
          nums,
          characters
        );
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (upperCase && lowerCase && numbers) {
        var newArray = uppercaseLetters.concat(lowercaseLetters, nums);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (upperCase && lowerCase && specChar) {
        var newArray = uppercaseLetters.concat(lowercaseLetters, characters);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (upperCase && numbers && specChar) {
        var newArray = uppercaseLetters.concat(nums, characters);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (lowerCase && numbers && specChar) {
        var newArray = lowercaseLetters.concat(nums, characters);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (upperCase && lowerCase) {
        var newArray = uppercaseLetters.concat(lowercaseLetters);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (upperCase && numbers) {
        var newArray = uppercaseLetters.concat(nums);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (upperCase && specChar) {
        var newArray = uppercaseLetters.concat(characters);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (lowerCase && numbers) {
        var newArray = lowercaseLetters.concat(nums);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (lowerCase && specChar) {
        var newArray = lowercaseLetters.concat(characters);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (numbers && specChar) {
        var newArray = nums.concat(characters);
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (upperCase) {
        var newArray = uppercaseLetters;
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (lowerCase) {
        var newArray = lowercaseLetters;
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (numbers) {
        var newArray = nums;
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      } else if (specChar) {
        var newArray = characters;
        var randomChar = Math.floor(Math.random() * newArray.length);
        password[i] = newArray[randomChar];
      }
    }
  }
  createPassword();
  console.log(password);
  var stringPassword = password.toString();
  console.log(stringPassword);
  return stringPassword.replaceAll(",", "");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
