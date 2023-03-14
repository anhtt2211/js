const removeDuplicates = (nums) => {
    return [...new Set(nums)]
};

const aaa = [0,0,1,1,1,2,2,3,3,4]
const bbb = [1,1,2]

console.log(removeDuplicates(bbb));