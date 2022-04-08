function solution(s) {
    
    let minIndex = s.length
    let result = null
    const ocurrences = {  }
    
    // Loop over all the items in the array
    // check if the letter exists in the ocurrences
    // if exists add 1
    // else create key and set value to 1 and index to i
    // loop over the keys and find the key with lower index
    // that has only 1 appearence
    
    for (let i = 0; i < s.length; i++) {
        if (ocurrences[s[i]]) {
            ocurrences[s[i]].o += 1
        }
        else {
            ocurrences[s[i]] = { o: 1, index: i }
        }
    }
    
    for (let key in ocurrences) {
        if (ocurrences[key].o === 1) {
            if (ocurrences[key].index < minIndex) 
            {
                minIndex = ocurrences[key].index
                result = key
            }
        }
    }
    
    if (minIndex != s.length)
        return result
    return '_'
}