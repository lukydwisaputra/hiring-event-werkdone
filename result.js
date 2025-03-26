const { question1 } = require("./question01/answer.js");
const { question2 } = require("./question02/answer.js");

const testResult = () => {
  const isQuestion1Correct = question1;
  const isQuestion2Correct = question2;

  console.log(`Question 1: ${isQuestion1Correct}`);
  console.log(`Question 2: ${isQuestion2Correct}`);
};

testResult();
