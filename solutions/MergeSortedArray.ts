/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.length = m;
    let times = m>=n? m : n;
    let result = [];
    for(let i = 0; i<times; i++){
        let n1 = nums1[i];
        let n2 = nums2[i];
        if(n1<= n2){
            result.push(n1, n2);
        }
        else{
            result.push(n2, n1);
        }
    }
    result = result.sort();
    nums1 = result;
    console.log(nums1);
};

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.length = m;
    nums2.length = n;
    let result = [...nums1, ...nums2];
    result.filter((x)=>x!=undefined)
    result.sort();
    // Deep copy the elements from result to nums1
    for (let i = 0; i < result.length; i++) {
        nums1[i] = result[i];
    }
    console.log(nums1)
};

merge2([1,2,3,0,0,0],3,[2,5,6],3);