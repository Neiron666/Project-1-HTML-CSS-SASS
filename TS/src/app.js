"use strict";
const TRIVIA_QUESTION = document.getElementById("trivia_question");
const TRIVIA_ANSWER_1 = document.getElementById("trivia_answer1");
const TRIVIA_ANSWER_2 = document.getElementById("trivia_answer2");
const TRIVIA_ANSWER_3 = document.getElementById("trivia_answer3");
const TRIVIA_ANSWER_4 = document.getElementById("trivia_answer4");
const SCORE_COUNTER = document.getElementById("score-counter");
const TRIVIA_NEXT_BUTTON = document.getElementById("trivia-next-button");
let counter = window.counter;
counter = 0;
let scoreCounter = window.scoreCounter;
scoreCounter = 0;
SCORE_COUNTER.innerHTML = scoreCounter;
const questions_data = [
    {
        question: "Lets Begin?",
    },
    {
        question: "Lets BOO?",
    },
    {
        question: "Lets CCCOO?",
    },
];
const click_btn_fn = () => {
    return (counter += 1);
};
const answers_data = [
    {
        answer1: "Yes Of Course",
        answer2: "No",
        answer3: "I don't know",
        answer4: "May be",
    },
    {
        answer1: "Yes",
        answer2: "No",
        answer3: "I don't know",
        answer4: "May be",
    },
    {
        answer1: "Haha",
        answer2: "ttt",
        answer3: "tggfdgfd",
        answer4: "tbbbbbbbb",
    },
];
const true_anwers = [{
        rightAnswer: "Yes Of Course",
    },
    {
        rightAnswer: "Yes",
    },
    {
        rightAnswer: "ttt",
    },
];
const question_num_fn = (question) => {
    return question[counter].question;
};
const answer_num_fn = (answer) => {
    return answer[counter];
};
let cFn = () => {
    return console.log(counter);
};
const check_fn = (answer, true_answer, counter, counterFn, cFn, injectData) => {
    const answerRed = answer.style.backgroundColor = "red";
    const answerGreen = answer.style.backgroundColor = "green";
    console.log(answerRed);
    console.log(answerGreen);
    console.log(answer.innerText);
    console.log(true_answer[counter].rightAnswer);
    counterFn();
    cFn();
    inject_data_questions(questions_data[counter].question, answers_data[counter], counter);
    if (answer.innerText !== true_answer[counter].rightAnswer)
        return answer = answerRed;
    answer = answerGreen;
};
const inject_data_questions = (question, answer, page_counter) => {
    TRIVIA_QUESTION.innerHTML = question;
    const { answer1, answer2, answer3, answer4 } = answer;
    TRIVIA_ANSWER_1.innerHTML = answer1;
    TRIVIA_ANSWER_2.innerHTML = answer2;
    TRIVIA_ANSWER_3.innerHTML = answer3;
    TRIVIA_ANSWER_4.innerHTML = answer4;
};
const test_fn = (click) => {
    return click();
};
inject_data_questions(questions_data[counter].question, answers_data[counter], counter);
TRIVIA_NEXT_BUTTON.addEventListener("click", () => {
    click_btn_fn(counter);
});
TRIVIA_NEXT_BUTTON.addEventListener("click", () => inject_data_questions(questions_data[counter].question, answers_data[counter], counter));
TRIVIA_ANSWER_1.addEventListener("click", () => check_fn(TRIVIA_ANSWER_1, true_anwers, counter, click_btn_fn, cFn, inject_data_questions));
TRIVIA_ANSWER_2.addEventListener("click", () => check_fn(TRIVIA_ANSWER_2, true_anwers, counter, click_btn_fn, cFn, inject_data_questions));
TRIVIA_ANSWER_3.addEventListener("click", () => check_fn(TRIVIA_ANSWER_3, true_anwers, counter, click_btn_fn, cFn, inject_data_questions));
TRIVIA_ANSWER_4.addEventListener("click", () => check_fn(TRIVIA_ANSWER_4, true_anwers, counter, click_btn_fn, cFn, inject_data_questions));
