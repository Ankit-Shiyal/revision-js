

const vegetables = ["potato", "tomato", "ginger", "chilli"]

console.log("vegetables array :", vegetables)

// unshift

vegetables.unshift("Ginger")

console.log("add in first :", vegetables)


// unshift manually

function unshiftManually(newVegetables) {


    let count = 0

    for (let i of vegetables) {
        count++
    }

    for (let i = vegetables.count - 1; i >= 0; i--) {
        vegetables[i + 1] = vegetables[i]
    }

    vegetables[0] = newVegetables

    console.log("unshift manually", vegetables)
}

unshiftManually("Coriander")



// pop

vegetables.pop()

console.log("last element remove :", vegetables)

// shift

vegetables.shift()

console.log("first element remove :", vegetables)

// splice

vegetables.splice(1, 0, "Cucumber", "onion");

console.log("splice method :", vegetables)


