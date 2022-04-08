function solution(a) {
    let result = null
    const ocurrences = {}
   
    for (let i = 0; i < a.length; i++) {
        if (ocurrences[a[i]]) {
            ocurrences[a[i]] += 1
            
            if (ocurrences[a[i]] === 2) {
                result = a[i]
                break
            }
        }
        else 
            ocurrences[a[i]] = 1
    }
    
    if (result != null)
        return result
    return -1 
}