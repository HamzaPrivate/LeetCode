function isPalindrome(x: number): boolean {
    let word = ""+x;
    let front: string, back: string;
    for(let i = 0; i < word.length; i++){
        front+=word.charAt(i);
        back+=word.charAt((word.length-1)-i);
    }
    return front === back;
};

console.log(isPalindrome(-121));