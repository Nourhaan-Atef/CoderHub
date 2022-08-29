function countChar(sentence, ch) {
  let sum = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === ch) {
      sum++;
    }
  }
  return sum;
}
console.log(countChar("Hello there", "t"));
