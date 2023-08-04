function addToZero(arr) {
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return true
            } 
        }
    }
    return false
}

console.log(addToZero([1, 2, 3, -2]))
//Space Complexity O(1)

function hasUniqueChar(str){
    for (let i=0; i<str.length - 1; i++){
        for(let j = i +1; j<str.length; j++){
            if (str[i] === str[j])
            return false
        }
    }
    return true
}
console.log(hasUniqueChar('moonday'))
//Space Complexity O(1)

function isPangram(str){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const sentence = str.toLowerCase()
    for (const letter of alphabet){
        if (!sentence.includes(letter)){
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
//Space Complexity O(n)

function findLongestWord(arr){
    let longestLength = 0
    for (const word of arr){
        const wordLength = word.length;
        if (wordLength > longestLength){
            longestLength = wordLength
        }
    }
    return longestLength
}

console.log(findLongestWord(["hi", "hello"]));
//Space Complexity O(n)