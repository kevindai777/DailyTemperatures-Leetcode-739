//Objective is, given a 1-D array of temperatures, to create an array
//that identifies how many days until the temperature increases

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]


//O(n) solution that uses a stack.

//Fill with 0's for worst case 
let result = new Array(T.length).fill(0)
let stack = []

//stack = [73], index = 0
//since 74 > 73, we pop the 73 out and return i - index, and thus result[0] = 1
//stack = [75], index = 2
//stack = [75, 71], index = 2, 3
//stack = [75, 71, 69], index = 2, 3, 4
//since 72 > 69, we pop the 69 out and return i - index, and thus, result[4] = 1
//since 72 > 71 as well, we pop 71 out and do the same thing
for (let i = 0; i < T.length; i++) {
    //When we find a larger element than the top of the stack, we pop it out
    while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
        let index = stack.pop()
        result[index] = i - index
    }
    stack.push(i)
}

return result