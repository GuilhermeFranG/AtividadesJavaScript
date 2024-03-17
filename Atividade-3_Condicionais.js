let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let num0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const random = num[Math.floor(Math.random() * num.length)];
const index = num.indexOf(random);
const slice = num.slice(random);

const randomWith0 = num0[Math.floor(Math.random() * num0.length)];
const indexOf0 = num0.indexOf(randomWith0);
const sliceOf0 = num0.slice(randomWith0);


if (random % 2 === 0) {
    console.log("Par");
} 
if (random % 2 !== 0) {
    console.log("Impar");
}

console.log(random);
console.log(index);
console.log(slice);

if (randomWith0 % 2 === 0) {
    console.log("Par");
} 
if (randomWith0 % 2 !== 0) {
    console.log("Impar");
}

console.log(randomWith0);
console.log(indexOf0);
console.log(sliceOf0);