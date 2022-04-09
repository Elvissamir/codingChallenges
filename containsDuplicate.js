var containsDuplicate = function(nums) {
    const table = {}
    let result = false
    
    // loop over the array
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i]
        if (!table[item])
            table[item] = 1
        else 
            return true
    }
  
    return result
};