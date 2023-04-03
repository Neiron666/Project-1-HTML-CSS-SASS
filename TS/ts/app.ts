//**************DOM SERVICE************ */

const TRIVIA_QUESTION = document.getElementById("trivia_question");

const TRIVIA_ANSWER_1 = document.getElementById("trivia_answer1");
const TRIVIA_ANSWER_2 = document.getElementById("trivia_answer2");
const TRIVIA_ANSWER_3 = document.getElementById("trivia_answer3");
const TRIVIA_ANSWER_4 = document.getElementById("trivia_answer4");

const SCORE_COUNTER = document.getElementById("score-counter");

const TRIVIA_NEXT_BUTTON = document.getElementById("trivia-next-button");

//**************PAGE COUNTER************ */

let counter: number = window.counter;
counter = 0;

//**************SCORE COUNTER************ */
let scoreCounter: number = window.scoreCounter;
scoreCounter = 0;
SCORE_COUNTER.innerHTML=scoreCounter;

//**************QUESTIONS DATABASE************ */

interface Question {
  question: string;
}

const questions_data: Array<Question> = [
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

//**************ANSWERS DATABASE************ */
interface Answer {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
}

const click_btn_fn = () => {
  return (counter += 1);
};



const answers_data: Array<Answer> = [
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

const true_anwers:Array<object>=[{
    rightAnswer:"Yes Of Course",
},
{
    rightAnswer:"Yes",
},
{
    rightAnswer:"ttt",
},
]



const question_num_fn = (question: Array<object>) => {
  return question[counter].question;
};
// console.log(question_num_fn(questions_data));

const answer_num_fn = (answer: Array<object>) => {
  return answer[counter];
};
// console.log(answer_num_fn(answers_data));

let cFn=()=>{
  return console.log(counter);
}

const check_fn=(answer:string,true_answer:string,counter:number,counterFn,cFn,injectData)=>{
  const answerRed = answer.style.backgroundColor="red";
  const answerGreen = answer.style.backgroundColor="green";
  console.log(answerRed);
  console.log(answerGreen);
  
  console.log(answer.innerText);
  console.log(true_answer[counter].rightAnswer);
  counterFn()
  cFn()
  inject_data_questions(
      questions_data[counter].question,
      answers_data[counter],
      counter
    );
  if (answer.innerText!==true_answer[counter].rightAnswer) return answer=answerRed;
  answer= answerGreen;
}



const inject_data_questions = (
    question: string,
    answer: object,
    page_counter: number
    ) => {
        TRIVIA_QUESTION.innerHTML = question;
        const { answer1, answer2, answer3, answer4 } = answer;
        
        TRIVIA_ANSWER_1.innerHTML = answer1;
        TRIVIA_ANSWER_2.innerHTML = answer2;
        TRIVIA_ANSWER_3.innerHTML = answer3;
        TRIVIA_ANSWER_4.innerHTML = answer4;
    };
    
    const test_fn=(click)=>{
        return click()
    }

    // console.log(counter);
    


    inject_data_questions(
      questions_data[counter].question,
      answers_data[counter],
      counter
    );

//**************BUTTON EVENTS************ */
TRIVIA_NEXT_BUTTON.addEventListener("click", () => {
  click_btn_fn(counter);
});
TRIVIA_NEXT_BUTTON.addEventListener("click", () => inject_data_questions(
  questions_data[counter].question,
  answers_data[counter],
  counter
);
)

// TRIVIA_NEXT_BUTTON.addEventListener("click",console.log(counter))

  // console.log(TRIVIA_ANSWER_1.innerText === true_anwers[counter].rightAnswer);
//   TRIVIA_ANSWER_1.style.backgroundColor="red"




TRIVIA_ANSWER_1.addEventListener("click",()=> check_fn(TRIVIA_ANSWER_1,true_anwers,counter,click_btn_fn,cFn,inject_data_questions))
TRIVIA_ANSWER_2.addEventListener("click",()=>  check_fn(TRIVIA_ANSWER_2,true_anwers,counter,click_btn_fn,cFn,inject_data_questions))
TRIVIA_ANSWER_3.addEventListener("click",()=>  check_fn(TRIVIA_ANSWER_3,true_anwers,counter,click_btn_fn,cFn,inject_data_questions))
TRIVIA_ANSWER_4.addEventListener("click",()=>  check_fn(TRIVIA_ANSWER_4,true_anwers,counter,click_btn_fn,cFn,inject_data_questions))