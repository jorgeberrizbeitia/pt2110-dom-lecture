console.log("script running YAY!");

console.log(document);

// dom methods

// let myHeader = document.getElementById("title");
// console.log(myHeader);

let myParagraphsOld = document.getElementsByClassName("parag");
console.log(myParagraphsOld);
// here you cannot use advance arrays methods

// let mySection = document.getElementsByTagName("section");
// console.log(mySection);

// querySelector

let myHeader = document.querySelector("#title");
console.log(myHeader);

let myInput1 = document.querySelector(".my-inputs input[type=number]");
console.log(myInput1);

let myParagraphs = document.querySelectorAll("p");
console.log(myParagraphs);
// NodeLists work as arrays. You can use forEach

myParagraphs.forEach((eachNode) => {
  // console.log(eachNode)
  console.log(eachNode.innerText);
  eachNode.innerText = "Ironhack";
});

const myFooter = document.querySelector("footer");
console.log(myFooter.innerText);
console.log(myFooter.innerHTML);
console.log(myFooter.classList);
myFooter.classList.add("myNewClass");
myFooter.classList.remove("footer");

myFooter.setAttribute("id", "myId");
myFooter.removeAttribute("id", "myId");

myFooter.setAttribute("title", "FOOTER");

// EVENTS!

let myTitle = document.querySelector("#title");
console.log(myTitle);

let originalColor = myTitle.style.color;

// DOM elements
let keyElem = document.querySelector("#press-key");
let incBtn = document.querySelector("#increment");
let dcrBtn = document.querySelector("#decrement");
let numberElem = document.querySelector("h2 span");
let addBtn = document.querySelector("#add-btn");
let nameInput = document.querySelector("#name");
let numberInput = document.querySelector("#number");
let myList = document.querySelector("#output-list")

// Functions
function changeTitleRed() {
  console.log("event FIRES!!!");
  myTitle.style.color = "red";
}

function changeTitleBack() {
  // myTitle.style.color = "yellow"
  myTitle.style.color = originalColor;
}

function pressingKeys(event) {
  // console.log("Pressing keys!");
  console.log(event.key);
  keyElem.innerText = keyElem.innerText + event.key;
}

function increasePrice() {
  console.log("HERE");
  numberElem.innerText = Number(numberElem.innerText) + 1;
}

function decreasePrice() {
  console.log("HERE");
  numberElem.innerText = Number(numberElem.innerText) - 1;
}

function addToList() {
  console.log("trying to add!");

  // we need to get the values of the inputs
  console.log(nameInput.value);
  console.log(numberInput.value);

  // we need to create a DOM element
  let liElem = document.createElement("li")
  liElem.innerText = `${nameInput.value} : ${numberInput.value}`
  console.log(liElem)

  // we need to add that DOM element to the list
  myList.appendChild(liElem)

}

// addEventListeners

window.addEventListener("load", () => {
  myTitle.addEventListener("mouseenter", changeTitleRed);
  document.addEventListener("keydown", pressingKeys);
  myTitle.addEventListener("mouseleave", changeTitleBack);
  incBtn.addEventListener("click", increasePrice);
  dcrBtn.addEventListener("click", decreasePrice);
  addBtn.addEventListener("click", addToList)
});
