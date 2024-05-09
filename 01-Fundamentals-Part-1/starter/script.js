/*let js = 'amazing';
if (js === "amazing") alert("Javascript is FUN!");

40 + 8 + 90 - 5;
console.log(40 + 8 + 90 - 5);


console.log("Jonas");
console.log(23);

let firstName = "James";

console.log(firstName)

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1957;
console.log(typeof year);
*/

// Declare Mark's variables and assign values
const markWeight = 95;
const markHeight = 1.88;

// Declare John's variables and assign values
const johnWeight = 85;
const johnHeight = 1.76;

//Calculate BMI
let markBmiFirstFormula = markWeight / markHeight ** 2;
let markBmiSecondFormula = markWeight / (markHeight * markHeight);

let johnBmiFirstFormula = johnWeight / johnHeight ** 2;
let johnBmiSecondFormula = johnWeight / (johnHeight * johnHeight);
console.log(markBmiFirstFormula, markBmiSecondFormula);
console.log(johnBmiFirstFormula, johnBmiSecondFormula);

let markHigherBmi = markBmiFirstFormula > johnBmiFirstFormula;
console.log(markHigherBmi);

//let bmiCompare;
if (markBmiFirstFormula > johnBmiFirstFormula) {
    console.log(`Mark's BMI ${markBmiFirstFormula} is higher than John's ${johnBmiFirstFormula}`)
}
else {
    console.log(`John's BMI ${johnBmiFirstFormula} is higher than Marks's ${markBmiFirstFormula}`)
}

















