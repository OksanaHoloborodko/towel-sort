module.exports = function towelSort (matrix = []) {
  if(matrix.length === 0) {
    return [];
  }
  let arr = matrix[0];
  for (let i = 1; i < matrix.length; i++) {
    (i % 2 == 0) ? arr = arr.concat(matrix[i]) : arr = arr.concat(matrix[i].reverse());
  }
  return arr;
}
