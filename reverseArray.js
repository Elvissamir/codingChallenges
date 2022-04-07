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

const arr = [1, 2, 3, 4, 5]

console.log(reverseArray(arr))