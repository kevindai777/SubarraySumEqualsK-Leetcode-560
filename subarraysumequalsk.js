//Given a 1-D array, find the numbber of subarrays whose elements that add up to 'k'.

let arr = [1,1,1]
let k = 2


//O(n) soution that uses a hashmap to keep track of the number of times a certain sum occurs

//Here we initialize the map with 0:1 because the sum '0' occurs once from the start
let map = {0: 1}

let sum = 0 
let count = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    //If the complement of the sum has already happened, that means that the 
    //sum has already been fulfilled. Thus, add one to the count.
    if (map[sum - k]) {
        count += map[sum - k]    
    }

    //If the sum hasn't occurred yet, make its frequency 0. Else, add one to it.
    map[sum] = (map[sum] || 0) + 1
}

return count
