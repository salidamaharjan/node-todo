function palindrome(num) {
  let length = Math.trunc(num.length / 2);

  for (let i = 0; i < length; i++) {
    let first = (num[i]);
    let second = (num[num.length - 1 - i]);
    if (first !== second) {
      return false;
    }
  }
  return true;
}
module.exports = palindrome;
