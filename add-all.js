// console.log(...process.argv);
let typed = process.argv.slice(2);
let sum = 0;

for (let single of typed) {
  sum += Number(single);
}

console.log(sum);
