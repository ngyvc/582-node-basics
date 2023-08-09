let first = process.argv[2];
let second = process.argv[3];

if (isNaN(first) || isNaN(second)) {
  console.log(`${first} ${second}`);
} else {
  console.log(Number(first) + Number(second));
}
