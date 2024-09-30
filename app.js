/* Exercise 1 */

const foods = [];  

console.log('Exercise 1 result:', foods);

/* Exercise 2 */

foods.push ("pizza","cheeseburger");

console.log('Exercise 2 result:', foods);

/* Exercise 3 */

foods.unshift('taco');

console.log('Exercise 3 result:', foods);

/* Exercise 4 */

const favFood = [1];

console.log('Exercise 4 result:', favFood);

/* Exercise 5 */

foods.splice(0,2,'tofu');

console.log('Exercise 5 result:', foods);

/* Exercise 6 */

foods.splice('sushi','cupcake');

console.log('Exercise 6 result:', foods);

/* Exercise 7 */

const yummy=[foods.slice (1,3)];

console.log('Exercise 7 result:', yummy);

/* Exercise 8 */

const soyIdx = foods.indexOf('tufo');

console.log('Exercise 8 result:', soyIdx);

/* Exercise 9 */

const allFoods = foods.join('->');

console.log('Exercise 9 result:', allFoods);

/* Exercise 10 */

const hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);

/* Exercise 11 */

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];
for (const number of nums){
    if(number % 2 === 1){
        odds.push(number);
    }
};

console.log('Exercise 11 result:', odds);

/* Exercise 12 */

const fizz = [];
const buzz = [];
const fizzbuzz = [];
for (const number of nums){
    if(number % 3 === 0){
        fizz.push(number);
    }
}
    for (const number of nums){
     if (number % 5 === 0){
        buzz.push(number);
}
}
for (number of nums){
 if(number % 3 === 0 && number % 5 === 0){
    fizzbuzz.push(number);
}
}

console.log('Exercise 12 Results:');

console.log('  fizz:', fizz);

console.log('  buzz:', buzz);

console.log('  fizzbuzz:', fizzbuzz);

/* Exercise 13 */

const numArrays = [
    [100, 5, 23],
    [15, 21, 72, 9],
    [45, 66],
    [7, 81, 90]
];

const numList = numArrays.flat();

console.log('Exercise 13 result:', numList);

/* Exercise 14 */

const num = numArrays[2][1];

console.log('Exercise 14 result:', num);

/* Exercise 15 */

let total = 0;
for (const innerArray of numArrays){
    for (const number of innerArray){
        total += number;
    }
};

console.log('Exercise 15 result:\n', total);