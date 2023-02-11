// Iteration 1: Names and Input
const hacker1 = "Krisztian"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Elisa"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
    }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
   } else {
     console.log(`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!`)
  }

// Iteration 3: Loops
let capitalLetters = "";
for (i=0 ; i < hacker1.length ; i++)
  capitalLetters+= hacker1[i].toUpperCase()+" "
console.log(capitalLetters)

 for (i=hacker2.length-1 ; i> 0 ; i--)
   console.log(hacker2[i])

console.log("The driver's name goes first.")
console.log ("What?! You both have the same name?")
console.log("Yo, the navigator goes first definitely.")
