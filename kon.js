// //let name1 = "Mary"
// //let name2 = "Tess"
// //let place = "farm";
// //let status = "farmer";

// //document.writeln(`${name1} and ${name2} are childhood bestfriends. They go to 
//    // ${place} together. Their ${place} is located at Bitano, Legazpi, Albay. ${name1} is a skilled ${status} while ${name2} is a begginer ${status}.`);

// let names3 = ["Mary", 18, "Smith", "BSIT", 3, 'A', true];
// names3.unshift["John", "Doe"]
// names3.push[17, "BSCS"]

// document.writeln("Firstname "(${names3}));


// let grade = prompt("Enter grade[A,B,C]: "); 

// switch(grade){
//    case 'A':
//       document.writeln("Outstanding");
//       break;
//    case 'B':
//       document.writeln("Very Good");
//       break;
//    case 'C':
//       document.writeln("Good");
//       break;
//    default:
//       document.writeln("Invalid Grade");
//       break;
// }

function login() {
   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;

   let isLoggedIn = (username === correctUsername && password === correctPassword);

   switch(isLoggedIn){
      case true:
         document.getElementById("result").innerText = "Welcome admin!";
         break;
      default:
         document.getElementById("result").innerText = "Invalid username or password";
         break;     
 }

}


/* //let names3 = ["Mary", 18, "Smith", "BSIT", 3, 'A', true];


//names3.unshift("John", "Doe");

//names3.push(17, "BSCS");

//document.writeln(`Firstname: ${names3[2]} </br>
    Lastname : ${names3[4]} <br>
    Age : ${names3[3]} <br>
    Student : ${names3[8]} <br>
    Course : ${names3[5]} <br>
    Year : ${names3[6]} <br>
    //</br></br>Section: ${names3[7]} <br><br>`);

document.writeln(`Firstname: ${names3[0]} </br>
    Lastname : ${names3[1]} <br>
    Age : ${names3[9]} <br>
    Student : ${names3[8]} <br>
    Course : ${names3[5]} <br>
    Year : ${names3[6]} <br>
    Section: ${names3[7]} <br>
    `);
document.writeln("</br>")
let sliced = names3.splice(0, 2);

let sliced1 = names3.splice(7, 2);

document.writeln(names3.join('&'));
 */
/* 
let age = prompt("Enter age");
    age = 18;

if(age >= 19) {
    document.writeln("Legal age");    
} else if (age===18){
    document.writeln("Legal age but under supervision")
} else {
    document.writeln("Not legal age");
} */

// let grade = prompt("Enter your general average: ");

// if (grade > 100) {
//     document.writeln("Invalid grade");
// } else if (grade >= 98) {
//     document.writeln("With Highest Honor");
// } else if (grade >= 95) {
//     document.writeln("With High Honor");
// } else if (grade >= 90) {
//     document.writeln("With Honor");
// } else if (grade >= 75) {
//     document.writeln("Passed");
// } else if (grade >= 0) {
//     document.writeln("Failed");
// }else {
//     document.writeln("Invalid Grade");
// }

/* let i = 0;
while(i<5){
    document.writeln(i);
    i++;
}
 */

/* 
let lives = 3;
let currentQuestion = 0;

const questions = [
  { text: "What planet is the nearest to the sun?", answer: "mercury" },
  { text: "What is the farthest planet?", answer: "neptune" }
];

const submitBtn = document.getElementById("submitBtn");
const answerInput = document.getElementById("answer");
const questionEl = document.getElementById("question");
const messageEl = document.getElementById("message");
const livesEl = document.getElementById("lives");
const extraBtnContainer = document.getElementById("extraBtnContainer");

submitBtn.addEventListener("click", checkAnswer);

// ✅ Allow pressing Enter to submit
answerInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
  }
});

function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    messageEl.textContent = "✅ Correct!";
    messageEl.style.color = "green";

    submitBtn.disabled = true;
    answerInput.disabled = true;

    // If not last question → show Next button
    if (currentQuestion < questions.length - 1) {
      showNextButton();
    } else {
      // Last question answered correctly
      messageEl.textContent = "🎉 Congratulations! You finished the quiz!";
      showResetButton();
    }

  } else {
    lives--;
    if (lives > 0) {
      messageEl.textContent = "❌ Wrong answer. Try again!";
      messageEl.style.color = "blue";
    } else {
      messageEl.textContent = "💀 Game Over!";
      messageEl.style.color = "blue";
      submitBtn.disabled = true;
      answerInput.disabled = true;
      showResetButton();
    }
  }

  livesEl.textContent = "Lives left: " + lives;
}

function showNextButton() {
  extraBtnContainer.innerHTML = `
    <button id="nextBtn">Next Question →</button>
  `;
  document.getElementById("nextBtn").addEventListener("click", goToNextQuestion);
}

function goToNextQuestion() {
  currentQuestion++;
  loadQuestion();
}

function showResetButton() {
  extraBtnContainer.innerHTML = `
    <button id="resetBtn">🔄 Reset Game</button>
  `;
  document.getElementById("resetBtn").addEventListener("click", resetQuiz);
}

function loadQuestion() {
  questionEl.textContent = (currentQuestion + 1) + ". " + questions[currentQuestion].text;
  answerInput.value = "";
  answerInput.disabled = false;
  submitBtn.disabled = false;
  messageEl.textContent = "";
  extraBtnContainer.innerHTML = ""; 
}

function resetQuiz() {
  lives = 3;
  currentQuestion = 0;
  submitBtn.disabled = false;
  answerInput.disabled = false;
  messageEl.textContent = "";
  livesEl.textContent = "Lives left: " + lives;
  extraBtnContainer.innerHTML = "";
  loadQuestion();
}


loadQuestion(); */
/* function search() {
let names = ["Kon", "Nuyds", "Yanna"];
let search = prompt(`Name to search: `);
let isFound = false; */

/* for(let i=0;i < name.length; i++){
  document.writeln(`${i}. hii ${name[i]} </br>`);
} */ 

/* let names = ["Kon", "Nuyds", "Yanna"];

for(let x in names){
  document.writeln(`${x}. Hai ${names[x]}. </br`);
} */

/* let n = 0; 
for(let name of names){
  document.writeln(`${n+1}, ${names} </br>`);
  Infinity
  n++;
}   */
/* 
  let n = 0;
  for(let i = 0; i < names.length; i++){
    if(i.toLowerCase()===search.toLowerCase()){
    isFound = true;
    document.getElementById("answer").textContent = "I found you " + i;
    break;

   }
 }

  if(!isFound) document.writeln(`Not Found`);
} */

  /* let person2 = {
    firstName: "Roblox",
    lastName: "Ml",
    age: 16,
    hobbies: ["ml", "piano", "gf"],
    pets: {
      0:{
        name: "Justine",
        type: "Kon",

      },
      1:{
        name: "Cat",
        type: "Ex",
        breed: "Exotic",
      }
    }
    
  };
    person2["firstName"] = "Kon";
    person2["middleInitial"] = "R";
    let strPerson = JSON.stringify(person2);

document.writeln("<pre>" + strPerson + "<pre>");
console.log(person2["pets"][1]["name"]);
console.log(person2.pets[1].name);
console.log(person2["firstName"]);
console.log(person2.age);
console.log(person2["hobbies"][0]);
console.log(person2.hobbies);
console.log(person2);

 */

/* function sayHello(){
  console.log("Hello");
}

sayHello();

function add(num1,num2){
  let sum = num1+num2;
  console.log(sum);
}
function subtract(num1,num2){
  let diff = num1-num2;
  console.log(diff);
}
function multiply(num1,num2){
  let prod = num1*num2;
  console.log(prod);
}
function divide(num1,num2){
  let quo = num1/num2;
  console.log(quo);
}

add(5,2);
subtract(5,2);
multiply(5,2);
divide(5,2); */



function sayHello(){
  console.log("Hello");
}

sayHello();

function add(num1,num2){
  return num1+num2;
}
function subtract(num1,num2){
  return num1-num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function divide(num1,num2){
  return num1/num2;
}
console.log(add(5,2));  // let sum = add(5,2); 
console.log(subtract(5,2)); // let diff = subtract(5,2);
console.log(multiply(5,2)); // let prod = multiply(5,2);
console.log(divide(5,2));  //let quo = divide(5,2); */

function average(num1,num2,num3){
  return (num1+num2+num3)/3;
}
console.log(average(2,5,4));

let n = ["John", "Mary", "Tess"];
let n1 = ["Sarah", "Fond", "Mac"];

let lastName = "Doe";

function printnames(names){
  for(let i = 0; i < names.length; i++){
    console.log(names[i] + " " + lastName);
  }
}

printnames(n1);
printnames(n);
