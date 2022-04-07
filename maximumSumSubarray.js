const input = [-2, 2, 5, -11, 6]

// If the current number > maxSum + current number
const maxSumSubArr = (arr) => {
    let start = 0
    let end = 0
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]

        if (currentSum > maxSum + currentSum) {
            maxSum = currentSum
        }
    }

    return maxSum
}

console.log("result: ", maxSumSubArr(input))
 