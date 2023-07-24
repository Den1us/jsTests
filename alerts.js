//git remote add origin https://github.com/Den1us/jsTests.git"use strict";

/* alert('hello'); */
/* const result = confirm("a y here?"); */
/* console.log(result); */

const answer = +prompt("Do you 18?", ""); //number
console.log(typeof(answer));


const answer2 = prompt("Do you 18?", ""); //string
console.log(typeof(answer2));

const answers = [];

answers[0] = prompt('What is y name?','');
answers[1] = prompt('What is y surname?','');
answers[2] = prompt('How is old y?','');

document.write(answers);

//отримуємо масив як об'єкт

const answers2 = [];

// answers2[0] = prompt('What is y name?','');
// answers2[1] = prompt('What is y surname?','');
// answers2[2] = prompt('How is old y?','');

console.log(typeof(answers2)); //object