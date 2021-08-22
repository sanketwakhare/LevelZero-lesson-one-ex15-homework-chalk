var readlineSync = require("readline-sync");
const chalk = require('chalk');

// data
var questions = [
  {
    question: "What is color of the Moon?",
    answer: "grey"
  },
  {
    question: "Which is the smallest planet in solar system?",
    answer: "Mercury"
  },
  {
    question: "Which is the biggest planet in solar system?",
    answer: "Jupiter"
  },
  {
    question: "How many planets are there in the Solar System?",
    answer: "9"
  },
  {
    question: "What planet is closest to the sun?",
    answer: "Mercury"
  },
  {
    question: "What is the fourth planet from the sun?",
    answer: "Mars"
  },
  {
    question: "What is the third planet from the sun?",
    answer: "Earth"
  },
  {
    question: "Which planet has the largest ring system?",
    answer: "Saturn"
  },
  {
    question: "Which is the densest planet?",
    answer: "Earth"
  },
  {
    question: "Which planet has the hottest temperatures?",
    answer: "Venus"
  }
];

console.log(chalk.green("Welcome to the Random Quiz App [10 Ques]"));
var userName = readlineSync.question("Please enter your name: ");
var highestScoreDetails = [{
  userName: "John",
  score: 8
}, {
  userName: "Sarah",
  score: 7
}];
var highestScore = 8;
var score = 0;
var qIndex = 1;
function checkAnswer(question, answer) {
  let userAnswer = readlineSync.question(chalk.whiteBright("Q."+ qIndex++ +") " + question) + chalk.green("\nAns-> "));
  if (answer.toUpperCase() === userAnswer.toUpperCase()) {
    console.log(chalk.greenBright('You are correct!'));
    score++;
  }
  else {
    console.log(chalk.redBright('You are wrong!'));
  }
  console.log('Score is ' + score);
}

for (var i = 0; i < questions.length; i++) {
  checkAnswer(questions[i].question, questions[i].answer);
}

if (score > highestScore) {
  console.log(chalk.green("\nCongratulations! You have beaten the highest score " + chalk.bold.red(highestScore)));
  highestScore = score;
  console.log(chalk.green("Your final score is " + score));
  console.log("\nGrab a screen shot and share with us.");
}
else {
  console.log(chalk.green("\nYour final score is " + score));
  console.log("[The highest score is ");
  for(var i=0;i<highestScoreDetails.length;i++){
    var highScore = highestScoreDetails[i];
    console.log("[", highScore.userName, highScore.score, "]");
  }
}

