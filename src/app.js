import { isYes, isNo, lcase } from './is-yes.js';

const button = document.getElementById('quizbutton');
const quizmsg = document.getElementById('quizResults');

button.addEventListener('click', () => {

    //quiz prompts & store answers
    const uname = prompt("What is your name?") || "Human";
    const ready = confirm(`${uname}, are you ready to take this quiz?`);
    if(!ready) return;
    const question1 = prompt(`${uname}, do you like the picture of the kitten?`);
    const question2 = prompt(`${uname}, is this content?`);
    const question3 = prompt(`${uname}, is Lorem Ipsum actual latin?`);
    alert('See below for your results!');
    //scroll up after quiz complete
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //do ifYes and total the results
    let results = 0;
    let questions = 0;
    isYes(lcase(question1)) ? results++ : questions++;
    isNo(lcase(question2)) ? results++ : questions++;
    isNo(lcase(question3)) ? results++ : questions++;
    //total questions asked
    questions = questions + results;

    //display results, include styling
    console.log(results);

    if (results / questions >= .7) {
        quizmsg.className = 'good';
        quizmsg.innerText = `${uname}, you got ${results} out of ${questions} questions correct! You scored ${(results / questions).toFixed(2) * 100}%. Good job!`;
    } else {
        quizmsg.className = 'bad';
        quizmsg.innerText = `${uname}, you got ${results} out of ${questions} questions correct. You scored ${(results / questions).toFixed(2) * 100}%. You can do better.`;
    }
});