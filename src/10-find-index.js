/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let st = 0;
  let end = array.length;
  let center = Math.floor(array.length / 2);
  for (let i = 0; i < Math.floor(array.length / 2) + 1; i++) {
    if (array[center] !== value) {
      if (value < array[center]) {
        end = center;
      } else {
        st = center;
      }
      center = Math.floor((st + end) / 2);
    } else {
      return center;
    }
  }
  return null;
}

module.exports = findIndex;
