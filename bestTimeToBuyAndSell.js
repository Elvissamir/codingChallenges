const maxProfit = function(prices) {
    let maxProfit = 0
    
    if (prices.length === 1)
        return maxProfit
    
    let l = 0
    for (let r = 1; r < prices.length; r++) {
        const buyPrice = prices[l]
        const sellPrice = prices[r]
        
        if (sellPrice < buyPrice) {
            l = r
            continue
        }
        
        if (sellPrice - buyPrice > maxProfit)
            maxProfit = sellPrice - buyPrice
    }
    
    return maxProfit
};