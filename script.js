// Assignment Code
var generateBtn = document.querySelector("#generate");

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
var specialCharacter = ["!","@","#","$","%","^","&","*","<",">","?"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var generatedPassword = "";

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


var generatePassword = function() {
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

    if ((userWantsLowercase === "y" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*firstOptionSequence.length);
            generatedPassword += firstOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "y" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "n")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*secondOptionSequence.length);
            generatedPassword += secondOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "y" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "n" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*thirdOptionSequence.length);
            generatedPassword += thirdOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "n" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*fourthOptionSequence.length);
            generatedPassword += fourthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "y" && userWantsUppercase === "n") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*fifthOptionSequence.length);
            generatedPassword += fifthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "y" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "n" && userWantsNumbers === "n")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*sixthOptionSequence.length);
            generatedPassword += sixthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "y" && userWantsUppercase === "n") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "n")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*seventhOptionSequence.length);
            generatedPassword += seventhOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "y" && userWantsUppercase === "n") && (userWantsSpecialCharacters === "n" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*eighthOptionSequence.length);
            generatedPassword += eighthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "n" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "n")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*ninthOptionSequence.length);
            generatedPassword += ninthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "n" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "n" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*tenthOptionSequence.length);
            generatedPassword += tenthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "n" && userWantsUppercase === "n") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*eleventhOptionSequence.length);
            generatedPassword += eleventhOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "y" && userWantsUppercase === "n") && (userWantsSpecialCharacters === "n" && userWantsNumbers === "n")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*twelevthOptionSequence.length);
            generatedPassword += twelevthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "n" && userWantsUppercase === "y") && (userWantsSpecialCharacters === "n" && userWantsNumbers === "n")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*thirteenthOptionSequence.length);
            generatedPassword += thirteenthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "n" && userWantsUppercase === "n") && (userWantsSpecialCharacters === "y" && userWantsNumbers === "n")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*fourteenthOptionSequence.length);
            generatedPassword += fourteenthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else if ((userWantsLowercase === "n" && userWantsUppercase === "n") && (userWantsSpecialCharacters === "n" && userWantsNumbers === "y")) {
        for (i=0 ; i < userLength ; i++) {
            var randomIndex = Math.floor(Math.random()*fifteenthOptionSequence.length);
            generatedPassword += fifteenthOptionSequence[randomIndex];
        }
        console.log(generatedPassword);
        return generatedPassword;
    }
    else {
        return;
    }
}
