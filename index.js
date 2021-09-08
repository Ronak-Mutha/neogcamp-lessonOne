var readlineSync = require('readline-sync');

// ex01: output your name
console.log('Ronak Mutha');

// ex02: read the name of your user
var userName = readlineSync.question('What\'s your name? ');

// ex03: welcome your user
console.log(`Welcome ${userName}!`);

// ex04: do it all together
var userAge = readlineSync.question(`What's your age ${userName}? `);
var userCity = readlineSync.question(`Where are you from ${userName}. Please type your city? `);

if(readlineSync.keyInYN(`Please confirm your details:\nName: ${userName}\nAge: ${userAge}\nCity: ${userCity}`)) {
  console.log(`Thanks ${userName} for confirming your details. Welcome aboard!`);
} else {
  console.log(`Please re-enter information.`)
}


// ex05: print right/wrong if greater than 25
if(readlineSync.keyInYN('Is your age greater than 25? ')) {
  console.log("You're getting old.")
} else {
  console.log("There's enough time left for you, son! Don't get sucked up in rat race.")
}


// ex06: increment score if the right answer
var score = 0;
if(readlineSync.keyInYN('Is your birthplace Ahmedabad?')) {
  score += 100 ;
  console.log(`Ye bhi sahi hai. Your score is ${score}.`);
} else {
  score -= 50; //Add validation if you don't want a negative score
  console.log(`Wrong answer. 50 cut overacting ke. Your score is now ${score}.`)
}

// ex07: function to add two numbers

function add(num1, num2) {
  var result = parseInt(num1) + parseInt(num2);
  console.log(`The result after adding ${num1} & ${num2} is ${result}.`);
}
console.log(`Welcome to ADDITION HUB. We'll do addition of two numbers for you!`)
var num1 = readlineSync.question('Enter first number: ');
var num2 = readlineSync.question('Enter second number: ');
add(num1, num2);

// ex08: function to check the answer

var score = 0;
function checkAnswer(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer) {
    score++;
    console.log(`Thats correct!!! Your score is ${score}.`);
  } else {
    console.log(`That\'s wrong :( Your score is ${score}.`);
  }
}

checkAnswer(`2+2 is 4 minus 1 is? `, 'quick mafs');
checkAnswer('Am I older than 25? ', 'no');


// ex09: print your name 5 times
for(let i=1; i<= 5; i++) {
  console.log(`${i}. Ronak`);
}

// homework: star pattern

let numberOfIterations = parseInt(readlineSync.question('Enter a number: '));
for(let i=1; i<= numberOfIterations; i++) {
  console.log('* '.repeat(i));
}
for(let i=numberOfIterations; i>= 1; i--) {
  console.log('* '.repeat(i));
}

// ex10: list grocery items to buy

let groceryList = ['apple', 'peas', 'milk', 'beans', 'bread'];

console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[groceryList.length -1]);

// ex11: print every item on the list

groceryList.forEach((item,index) => console.log(`${index} ${item}`));

// ex12: club info about a superhero together
var superman = {
  name: 'superman',
  power: 'flight',
  strength : 100,
  costumeColor: 'blue'
}

var batman = {
  name: 'batman',
  power: 'rich',
  strength : 100,
  costumeColor: 'black'
}


console.log(superman.strength);
console.log(superman.costumeColor);
console.log(batman.strength);
console.log(superman.strength > batman.strength);

// Create an array of superhero objects, print name and costumeColor of every superhero in the list


const superHeroes = [
  {
    name: 'batman',
    power: 'martial arts',
    strength : 100,
    costumeColor: 'black'
  }, 
  {
    name: 'superman',
    power: 'flight',
    strength : 100,
    costumeColor: 'blue'
  },
  {
    name: 'ironman',
    power: 'flight',
    strength : 100,
    costumeColor: 'red'
  }, 
  {
    name: 'hulk',
    power: 'size',
    strength : 100,
    costumeColor: 'green'
  }];

  function printNameAndCostumeColor() {
    superHeroes.forEach(item => console.log(`${item.name} : ${item.costumeColor}`))
  };

  printNameAndCostumeColor();