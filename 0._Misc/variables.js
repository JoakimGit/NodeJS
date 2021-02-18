"use strict";

var myPreciousRing = "0";

let variableA;
let variableB;

console.log(variableA + variableB);
console.log(variableA, variableB);

{
    let scopedVariable = "abc";
    {
        scopedVariable = 123;
    }
    console.log(scopedVariable);
}

{
    let scopedVariable = "abc";
    {
        let scopedVariable = 123;
        console.log(scopedVariable);
    }
    console.log(scopedVariable);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}