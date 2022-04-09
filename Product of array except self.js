var productExceptSelf = function(nums) {
    const answer = []
    
    let pref = 1
    for (let i = 0; i < nums.length; i++) {
        answer.push(pref)
        pref = nums[i] * pref
    }
    
    let post = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * post
        post = nums[i] * post
    }
    
    return answer
};