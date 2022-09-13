function cumulativeAddition(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  array = [sum, array.length];
  return array;
}
let arr = [2, 4, 9, 23, 435];
console.log(cumulativeAddition(arr));
