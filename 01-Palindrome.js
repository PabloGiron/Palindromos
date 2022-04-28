const isPalindrome = (str = '') =>{
    str = str + '';
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('Reconocer'))
// console.log(isPalindrome(123456654321))
// console.log(isPalindrome('oso'))
// console.log(isPalindrome('isla'))
// console.log(isPalindrome('abcdeffedcba'))
// console.log(isPalindrome('Not palindrome'))