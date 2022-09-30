// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&*";

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var generatePassword = function() {
    var userChoiceOne = window.prompt("How long would you like your password to be? (must be between 8 and 128 characters");


var index = Math.floor(Math.random() * lowercase.length);
var passwordOutput = lowercase[index];

window.alert("Your password is " + passwordOutput);

if (userchoice > 128) { 
    window.alert("Invalid") 
}
else if (userchoice < 8) {
    window.alert("Invalid")
}
else {
    window.alert(passwordOutput)
}

generatePassword ();






var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacter = ["!","@","#","$","%","^","&","*","<",">","?"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var generatedPassword = '';

var firstOptionSequence = lowercase.concat(uppercase,specialCharacter,numbers);
var secondOptionSequence = lowercase.concat(uppercase,specialCharacter);
var thirdOptionSequence = lowercase.concat(uppercase, numbers);
var fourthOptionSequence = uppercase.concat(specialCharacter,numbers);
var fifthOptionSequence = lowercase.concat(specialCharacter,numbers);
var sixthOptionSequence = lowercase.concat(uppercase);
var seventhOptionSequence = lowercase.concat(specialCharacter);
var eighthOptionSequence = lowercase.concat(numbers);
var ninthOptionSequence = uppercase.concat(specialCharacter);
var tenthOptionSequence = uppercase.concat(numbers);
var eleventhOptionSequence = specialCharacter.concat(numbers);
var twelevthOptionSequence = lowercase;
var thirteenthOptionSequence = uppercase;
var fourteenthOptionSequence = specialCharacter;
var fifteenthOptionSequence = numbers;

var passwordGen = function(){
    var userLength = window.prompt("How long would you like your password to be? (Must be between 8 and 128 characters)");
    if (userLength > 128) {
        return;
    }
    else if (userLength < 8) {
        return;
    }

    var userWantsLowercase = window.prompt("Would you like lowercase letters in your password? (y/n)");
    var userWantsUppercase = window.prompt("Would you like uppercase letters in your password? (y/n)");
    var userWantsSpecialCharacters = window.prompt("Would you like special characters in your password? (y/n)");
    var userWantsNumbers = window.prompt("Would you like numbers in your password? (y/n)");

    if (userWantsLowercase === "y" && userWantsUppercase === "y" && userWantsSpecialCharacters === "y" && userWantsNumbers === "y") {
        for (i=0 ; i < userLength ; i++) {
            Math.floor(Math.random()*firstOptionSequence.length+1)
            generatedPassword = firstOptionSequence[i];
        }
        return generatedPassword;
    }
}

passwordGen();