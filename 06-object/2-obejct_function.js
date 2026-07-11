

function Hotel(rating, room, staff){
    this.rating = rating;
    this.room = room;
    this.staff = staff;
}

const hotel1 = new Hotel(5, 50, 50);
console.log("Hotel detail 1:", hotel1);

const hotel2 = new Hotel(4, 40, 30);
console.log("Hotel detail 2:", hotel2);

const hotel3 = new Hotel(3, 20, 15);
console.log("Hotel detail 3:", hotel3);





const person = {
    name: "Ankit",
    lastName: "Shiyal",
    city: "Bhavnagar",
    age: 20
};

console.log(person);

// using . (dot)
console.log(person.name);
console.log(person.age);

// using []
console.log(person["name"]);
console.log(person["age"]);

// using destructuring
const { name, lastName, city, age } = person;

console.log(name);
console.log(lastName);
console.log(city);
console.log(age);



const person = {
    name: "Ankit",
    lastName: "Shiyal",
    city: "Bhavnagar",
    age: 20
};

// using dot
person.desgnation = "web Developer"
console.log(person)

//using []
person["Blood-Group"] = "O+";
console.log(person)
