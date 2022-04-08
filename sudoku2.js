function solution(grid) {
    let result = true
    const table = {}
    
    for (let n = 1; n < 10; n++)
        table[n] = 1
        
    const columns = {}
    for (let i = 0; i < 9; i++)
        columns[i] = {}
    
    const squares = {}
    
    for (let row = 0; row < grid.length; row++) {    
        const rowItems = {}
        for (let col = 0; col < grid.length; col++) {
            const item = grid[row][col]
            
            if (table[item]) { 
                if (columns[col][item]) {
                    result = false
                    break
                }
                else     
                    columns[col][item] = 1
                    
                if (rowItems[item]) {
                    result = false
                    break
                }
                else
                    rowItems[item] = 1
                    
                const coords = `${Math.floor(row/3)}${Math.floor(col/3)}`
                if (squares[coords]) {
                    if (squares[coords][item]) {
                        result = false
                        break
                    }
                }
                else {
                    squares[coords] = {}
                    squares[coords][item] = 1
                }
            }
        }
    }
    
    return result
}
