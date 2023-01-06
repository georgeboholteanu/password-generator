// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// var charactersArr = [];
var selection;

// Function to prompt user for password options
function getPasswordOptions() {  
  var charactersArr = [];
  do{
    selection = parseInt(window.prompt("Please specify password lenght!\nPassword lenght must be between 10 and 64 characters!", ""), 10);
  }while(isNaN(selection) || selection >64 || selection < 10);

  if (confirm("Do you want lowercase characters?")) {
    charactersArr.push.apply(charactersArr, lowerCasedCharacters);
  }
  
  if (confirm("Do you want uppercase characters?")) {
    charactersArr.push.apply(charactersArr, upperCasedCharacters);
  }
  
  if (confirm("Do you want special characters?")) {
    charactersArr.push.apply(charactersArr, specialCharacters);
  }
  
  // randomize joined arrays 
  charactersArr = charactersArr.sort(() => Math.random() - 0.5);
  
  return charactersArr;
}


// Function for getting a random element from an array
function getRandom(arr) {  
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  arr = getPasswordOptions();
  
  var pass = [];
  for (var i = 0; i < selection; i++) {
    pass.push(getRandom(arr));
  }
  return pass.join('')
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


