function solution(crypt, solution) {
    let result = true
    
    // crypt = ['SEND', 'MORE', 'MONEY']
    // Solution = [['O', '0'], ['M', '1']]
    // 3 words w1 + w2 = w3
    
    // Extract solution letters and values to an object
    const solutionTable = {}
    for (let i = 0; i < solution.length; i++) {
        const letter = solution[i][0]
        const value = solution[i][1]
        solutionTable[letter] = value  
    }
    
    // Loop over crypt, and for each word convert to num_str and store in operation array
    const operation = []
    for (let w = 0; w < crypt.length; w++) {
        let numb = ''
        for (let letter of crypt[w]) {
            numb = numb + solutionTable[letter]
        }
        operation.push(numb)
    }
    
    // Check if the num_str starts with 0
    for (let i = 0; i < 3; i++) {
        if (operation[i][0] === '0' && operation[i].length > 1) {
            result = false
            break
        }
        else 
            continue        
    }
    
    if (!result)
        return result 

    const a = parseInt(operation[0])
    const b = parseInt(operation[1])
    const c = parseInt(operation[2])
    
    if (a + b === c)
        return result
    else 
        return false
}