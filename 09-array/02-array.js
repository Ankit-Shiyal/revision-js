

const vegetables =["potato", "tomato", "ginger", "chilli"]

console.log("first element of array :", vegetables[0])

console.log("last element of array :", vegetables[vegetables.length-1])

vegetables[1]="carrot"

console.log("array modify :", vegetables)



vegetables.push("onion")

console.log("add in last :", vegetables)


// push manually

function PushManually (newVegetables){

   let count =0

   for (let i of vegetables){
    count ++
   }

   vegetables[count]=newVegetables

   console.log("added", vegetables)

}
PushManually("Carrot")

PushManually("Radish")





