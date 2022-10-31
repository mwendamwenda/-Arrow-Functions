// console.log('tokiti kitchen is about to go down');

// function expression
const calcAge2 = function(birthAge){
    return 2037 - birthAge;
}
const age2 = calcAge2(1991);


//arrow function

birthAge => 2037 - birthAge;
//then we assin the birth year to a variable;

const calcAge3 = birthAge => 2037 - birthAge;
const age3 = calcAge3(1991);
console.log(age2,age3);

//function declaration

function ageDifferenceSonDad(milan){
    const diff = 30 - milan;
    return diff;
}
 const age4 = ageDifferenceSonDad(2);
 console.log(age4);
 
 //function expression

 const ageDifferenceSonDad2 = function(milan){
    const diff2 = 30 - milan;
    return diff2;
 }
 const age6 = ageDifferenceSonDad2(2);
 console.log(age6);

 //arrow functions
 diff2 => 30 - diff2;
 const calcAge7 = diff2 => 30-diff2;
 const age7 = calcAge7(2);
 console.log(age7);

//  const yearUntilRetirement = birthyear => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     return retirement;
//  }
//  yearUntilRetirement(1991);
//  const retire = yearUntilRetirement(1991);
//  console.log(retire);

//arrow functions when we have more than on parameter

const yearUntilRetirement = (birthyear,firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
 }
 console.log(yearUntilRetirement(1991,'mwenda'));
 console.log(yearUntilRetirement(1999,'tokiti'));
 console.log(yearUntilRetirement(2020,'kariuki'));