/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  /*
  let helpArr = [];
  const array = arr;
  array.forEach((elem) => {
    if (elem !== -1) {
      helpArr.push(elem);
    }
  });
  helpArr = helpArr.sort();
  array.forEach((elem, index) => {
    if (elem !== -1) {
      array.splice(index, 1, helpArr[0]);
      helpArr.splice(0, 1);
    }
  });
  return array;
  */
  const array = arr;
  let help;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] !== -1 && array[i] !== -1) {
        if (array[i] < array[j]) {
          help = array[i];
          array[i] = array[j];
          array[j] = help;
        }
      }
    }
  }
  return array;
}

module.exports = sortByHeight;
