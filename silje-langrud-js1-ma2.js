//q1: Create a function expression by assigning an anonmyous function to a variable called myFunctionExpression. The function should console log your name.
var myFunctionExpression = function() {
  console.log("Silje");
};
myFunctionExpression();

//q2: Select the input in the HTML below by its class. Add a click event listener. The callback function passed to the event listener should log the sentence I was clicked.
//You can pass the function in directly, declare it and pass it in by its name or assign it to a variable and pass it in by the variable name.
//<input type="button" class="btn" value="Click me">
const btn = document.querySelector(".btn");
function callAfterButtonClick() {
  console.log("I was clicked");
}
btn.addEventListener("click", callAfterButtonClick);

//q3: Select the input in the HTML below by its id. Add a keydown event listener. The callback function passed to the event listener should log the value of the key that was pressed.
//<input class="input" id="firstName"></div>
const keyDown = document.querySelector("#firstName");
function callWhenKeyIsClicked(event) {
  console.dir(event.key);
}
keyDown.addEventListener("keydown", callWhenKeyIsClicked);

//q4: Select the button in the HTML below by its tag. Add a mouseover event listener. The callback function should add a class called hover to the button.
//<button class="btn" data-animal="dog">Hover over me</button>
const button = document.querySelector("button");
function mouseOver() {
  console.log(button.classList);
  button.classList.add("hover");
}
button.addEventListener("mouseover", mouseOver);

//q5: Select the button in the HTML below by its data attribute and add a mouseout event listener to it. The callback function should remove the class called hover from the button.
//<button class="btn" data-animal="dog">Hover over me</button>
const button = document.querySelector("[data-animal='dog']");

function mouseOut() {
  button.classList.remove("hover");
}
button.addEventListener("mouseout", mouseOut);

//q6: Select all the li tags from the HTML below. Using a loop, add a mouseover event listener to each tag.
// The callback function should log the value of the data attribute on each element when the cursor moves over it.
//<ul>
//<li data-animal="goose">Animal 1</li>
//<li data-animal="frog">Animal 2</li>
//<li data-animal="elephant">Animal 3</li>
//</ul>

const listItems = document.querySelectorAll("li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", mouseOver);
}
function mouseOver(event) {
  console.dir(event.target.dataset.animal);
}

//q7: Convert the if-else-if statement below to a switch statement. Use the code inside the else block in the default block in the switch.
//const animal = "cow";
//if(animal === "cat") {
//  console.log("Meow");
//}
//else if(animal === "cow") {
//  console.log("Moo");
//}
//else if(animal === "bird") {
//  console.log("Tweet");
//}
//else {
//  console.log("Harrumph");
//}

const animal = "cow";
switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

//q8: Convert the for loop code below to a forEach loop.
//const sheep = ["Malcolm", "Anders", "Marie"];

//for(let i = 0; i < sheep.length; i++) {
//  console.log(sheep[i]);
//}

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(logSheep) {
  console.log(logSheep);
});

//or

const sheep = ["Malcolm", "Anders", "Marie"];
function handleEachSheep(logSheep) {
  console.log(logSheep);
}
sheep.forEach(handleEachSheep);

//q9: Create a timer that logs the word hello every half a second. It must stop after its logged the word 6 times.
function logHello() {
  console.log("Hello");
  if (counter === 5) {
    clearInterval(intervalId);
  }
  counter++;
}
let counter = 0;

const intervalId = setInterval(logHello, 500);

//q10: Select the div from the HTML below. Write code that updates the div's text to say Text updated after waiting 2 seconds. You can use either innerText or innerHTML to update the text.
//<div class="container">Placeholder text</div>
const updateContainer = document.querySelector(".container");

function updateText() {
  updateContainer.innerHTML = "Text updated";
}
setTimeout(updateText, 2000);
