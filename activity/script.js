console.log("Hello")

// 1: Get the node with the  main title

// ... your code here
let myTitle = document.querySelector("h1")
console.log(myTitle)

// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

// ... your code here
console.log(myTitle.innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

// ... your code here
let myFruits = document.querySelectorAll(".fruits > li")
// let myFruits = document.querySelectorAll(".fruit-item")
console.log(myFruits)

// => NodeList(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text
// think about loops, innerText vs innerHTML

// ... your code here
let myVeggies = document.querySelectorAll(".veggies > li")
myVeggies.forEach((potatoParameter) => {
  console.log(potatoParameter.innerText)
})

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Add a class 'best-fruit' to the 1st and the 3rd fruit
// think about loops, ways to add classes to an element

// ... your code here
myFruits.forEach((eachFruit, index) => {
  if (index === 0 || index === 2) {
    eachFruit.classList.add("best-fruit")
  }
})

// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 6: Remove class 'veggie-item' from 'spinach'

// ... your code here
myVeggies.forEach((eachVeggie) => {
  if (eachVeggie.innerText === "Spinach") {
    eachVeggie.classList.remove("veggie-item")
  }
})

// => ... <li class="veggie-love">Spinach</li>