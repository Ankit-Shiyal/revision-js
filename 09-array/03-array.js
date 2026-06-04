

const vegetables =["potato", "tomato", "ginger", "chilli"]

console.log("vegetables array :", vegetables)

// unshift

vegetables.unshift("Ginger")

console.log("add in first :", vegetables)

// pop

vegetables.pop()

console.log("last element remove :", vegetables)

// shift

vegetables.shift()

console.log("first element remove :", vegetables)

// splice

vegetables.splice(1, 0, "Cucumber" , "onion");

console.log("splice method :", vegetables)
