var maxSubArray = function(nums) {
    //it stores previous sum which will be previous+num[i]
    let prev=0;
    //it stores maximum sum
    let maxNum=0;
    //this loop will run to the length of array
    for(let i=0;i<nums.length;i++){
        //here it is adding previous value and next value(nums[i]) 
        prev+=nums[i];
        //it is checking which value is maximum previous or maximum
        maxNum=Math.max(maxNum,prev);
        //  if the previous value is negative then it will set it to zero 
        // because the condition given in the question was if the array is 
        // negative then the program should return 0
        if(prev<0){
            prev= 0;
        }
    }
    //here it is returning the maximum value
    return maxNum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));