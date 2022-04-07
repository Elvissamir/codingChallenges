const transposeMatrix = (matrix) => {
	let temp = null
  
  for (let y = 0; y < matrix.length; y++) {
  	for (let x = y; x < matrix.length; x++) {
    	let temp = matrix[y][x]
      matrix[y][x] = matrix[x][y]
      matrix[x][y] = temp
    }
  }
  
  return matrix
}


const matrix = [
	[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(transposeMatrix(matrix))