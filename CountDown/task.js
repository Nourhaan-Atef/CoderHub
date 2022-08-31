function countDown(number) {
  let result = "";
  for (let i = number; i >= 0; i--) {
    result += i + " ";
  }
  return result;
}
console.log(countDown(5));
