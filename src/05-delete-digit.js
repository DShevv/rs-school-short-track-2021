/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let max = 0;
  str.split('').forEach((elem, index) => {
    const arr = str.split('');
    arr.splice(index, 1);
    if (parseInt(arr.join(''), 10) > max) {
      max = parseInt(arr.join(''), 10);
    }
  });
  return max;
}

module.exports = deleteDigit;
