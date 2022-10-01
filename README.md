# JavaScript-Window-Edit

## Description
This project was the third challenge I completed during a coding bootcamp with the University of Texas at Austin. The purpose of the project was to add functionality to a password generator. To start, the HTML and CSS elements were written in already. There was some basic Javascript given as a starting place as well- the starting Javascript code defined the special characters, numbers, and letters that could be used as a wordbank for the password generator. Additionally, the JavaScript code also provided a path to output the function into a predefined box on the screen.

This project combined all of the basic elements of JavaScript and serves as a demonstration of my knowledge of functions, arrays, objects, iterators, for loops, and JavaScript's connection to CSS/HTML code.

The overall task of the project was to use window prompts to allow the user to input choices. The user had the option to decide if they wanted numbers, lowercase letters, uppercase letters, or special characters in their code. The user also had the ability to set the desired length of their password (as long as it was between 8 and 128 characters). My goal as a developer was to take the five different pieces of selection criteria from the user and output a randomly generated password that fit their criteria.

In order to complete this project, I first pseudo coded the task out. I wrote out the path I wanted the user to take to answer the questions and made sure to store all of the user perferences as variables. Next, I wrote a code that randomly selected a password given each of their variable criteria. The options for numbers, special characters, lowercase, and uppercase letters were all stored as an array. I used the .concat method to string different arrays together based off what the user selected. With four possible selectors, that means there were fifteen possible option combinations. I stored each one of these options as a different array. Essentially, the user selects how large they want their "word bank" of random numbers, letters, and characters to be. Next, the function iterates through that array and randomly selects a password.

## Installation

-Live Site: https://pariselectra.github.io/JavaScript-Window-Edit/

-JavaScript file: https://github.com/pariselectra/JavaScript-Window-Edit/blob/main/script.js

## Usage
![Selector 1](images/Screen%20Shot%202022-09-30%20at%2010.12.12%20PM.png)
![Selector 2](images/Screen%20Shot%202022-09-30%20at%2010.12.26%20PM.png)
![Selector 3](images/Screen%20Shot%202022-09-30%20at%2010.12.36%20PM.png)
![Selector 4](images/Screen%20Shot%202022-09-30%20at%2010.12.49%20PM.png)
![Selector 5](images/Screen%20Shot%202022-09-30%20at%2010.12.58%20PM.png)
![Result](images/Screen%20Shot%202022-09-30%20at%2010.13.09%20PM.png)

## License
MIT License

https://github.com/pariselectra/JavaScript-Window-Edit/blob/main/LICENSE

## Features

-Set Password Length

-Select uppercase preference

-Select lowercase preference

-Select special character preference

-Select number preference