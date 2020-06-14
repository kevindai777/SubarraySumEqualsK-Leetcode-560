//Given a 1-D array, find the numbber of subarrays whose elements that add up to 'k'.

let arr = [1,1,1]
let k = 2


//O(n) soution that uses a hashmap to keep track of values that can add up to 'k'

let map = {0: 1}

let sum = 0 
let count = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    if (map[sum - k] !== undefined) {
        count += map[sum - k]    
    }

    map[sum] = (map[sum] || 0) + 1
}

return count