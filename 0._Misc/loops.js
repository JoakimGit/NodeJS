// Functional looping methods are prefered (map, filter, reduce, etc.)
const fruits = ['apples', 'bananas', 'blueberries'];

fruits.map(fruit => {
    console.log(fruit);
});

fruits[1] = "oranges";

//const copiedFruits = fruits.map(fruit => fruit);

const copiedFruits = fruits.map(fruit => {
    return { fruit, delicious: "yes yes yes" };
});

console.log(copiedFruits);

const people = [
    {
        name: "David Krtolica",
        age: 50
    },
    {
        name: "Alex Maccagnan",
        age: 20
    },
    {
        name: "Nicklas Bogeskov-Jensen",
        age: 30
    }
];

const peopleAgeSum = people.reduce((total, person) => total + person.age, 0);

console.log(peopleAgeSum);