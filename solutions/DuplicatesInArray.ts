
//no duplicates allowed
function removeDuplicates(nums: number[]): number {
    let noDupl = Array.from(new Set<number>(nums));
    nums.length = 0
    for (let i = 0; i<noDupl.length;i++){
        nums[i] = noDupl[i]
    }
    return nums.length;
};
console.log(removeDuplicates([1,1,2]));

//here only 1 duplicate of each element allowed
function removeDuplicates2(nums: number[]): number {
    const maxAmount = 2;
    const numberToAmounts = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if(numberToAmounts.has(n) && numberToAmounts.get(n)<maxAmount){
            numberToAmounts.set(n, numberToAmounts.get(n)+1);
        } else if(!numberToAmounts.has(n)) {
            numberToAmounts.set(n, 1);
        }
    }
    nums.length = 0;
    const keys = Array.from(numberToAmounts.keys());
    for (let i = 0; i < keys.length; i++) {
        let n = keys[i];
        let amountOfn = numberToAmounts.get(n);
        for (let i = 0; i <amountOfn; i++) {
            nums.push(n)
        }
    }
    nums.sort((n1, n2)=>{
        if(n1==n2) return 0;
        if(n1>n2) return 1;
        if(n1<n2) return -1;
    })
    return nums.length;
};

console.log(removeDuplicates2([-3,-1,0,0,0,3,3]));