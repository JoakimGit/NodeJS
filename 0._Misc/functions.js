function greeting(name) {
    return "Hello " + name;
}

const myVariableFunction = function() {
    console.log("Hello there from the anonymous function");
};

const myArrowFunction = () => {
    return "Hell there from the arrow function";
}

function hiNow() {
    return "Hi";
}

const sayHello = () => {
    return "Hello";
};

function sayHiLater(anyFunctionReference) {
    // do stuff
    return anyFunctionReference();
}

console.log(greeting("Joakim"));
console.log(myVariableFunction());
console.log(myArrowFunction());

console.log(sayHiLater(hiNow));
console.log(sayHiLater(sayHello));

const poke = (name) => {
    return "Poke " + name;
};

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

interact(poke, "Joakim");
interact((name) => {return "Hug " + name}, "Napster");