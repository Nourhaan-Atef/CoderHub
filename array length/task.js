function num_elements(array) {
  let count = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    count++;
  }
  console.log(count);
}
let array = [2, 4, 9, 23, 435];
num_elements(array);
