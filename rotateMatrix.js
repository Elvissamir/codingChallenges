const rotateMatrix = (matrix) => {

	const transposeMatrix = (matrix) => {
  	for (let y = 0; y < matrix.length; y++) {
       for (let x = y; x < matrix.length; x++) {
         let temp = matrix[y][x]
         matrix[y][x] = matrix[x][y]
         matrix[x][y] = temp
       }
     }
     
    return matrix
  }
  
  const reverseArray = (arr) => {
    let r = arr.length - 1
    for (let l = 0; l < r; l++) {
    	let temp = arr[r]
      arr[r] = arr[l]
      arr[l] = temp
      
      r -= 1
    }
    
    return arr
  }
  
  const tmatrix = transposeMatrix(matrix)
  
  for (let i = 0; i < tmatrix.length; i++)
  	reverseArray(tmatrix[i])
  
  return matrix
}


const matrix = [
	[1, 2, 3], 
  [4, 5, 6],
  [7, 8, 9]
]	

console.log(rotateMatrix(matrix))