const climbStairs = (stair) => {
     
    let stairLength = stair.length;
    if(stairLength === 1) {
        return stair[0]; 

    }
    for (let i = stairLength - 3; ~i; i--) {
        stair[i] += Math.min(stair[i+1], stair[i+2]);
    return Math.min(stair[0], stair[1]);
    }
    
}
console.log(climbStairs([5, 5, 15, 25]));
console.logc(climbStairs([10, 15, 20]))