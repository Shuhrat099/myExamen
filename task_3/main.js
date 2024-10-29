

function singleNumber(nums) {
    const countMap = new Map()

    for (let num of nums) {
        countMap.set(num,(countMap.get(num) || 0) + 1)
        
    }

    for(let [num, count] of countMap){
        if(count === 1) {
            return num
        }
    }
    
}


console.log(singleNumber([3,4,3,4,6]))
