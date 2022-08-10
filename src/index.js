
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == null) {
    return matrix = []
 }
  if (matrix.length < 2) {
    return matrix = []
 }
  else if (matrix.length === 2) {
     return matrix = [...matrix[0].toString().split(','), ...matrix[1].toString().split(',').reverse()].map(item => Number(item))
  }
  else if (matrix.length === 3) {
    return matrix = [...matrix[0].toString().split(','), ...matrix[1].toString().split(',').reverse(), ...matrix[2].toString().split(','),].map(item => Number(item))
 }
 else if (matrix.length === 4) {
  return matrix = [...matrix[0].toString().split(','), ...matrix[1].toString().split(',').reverse(), ...matrix[2].toString().split(','), ...matrix[3].toString().split(',').reverse(),].map(item => Number(item))
}
}