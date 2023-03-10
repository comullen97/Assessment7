let array = [28, 43, -12, 30, 4, 0, 12]
let sumToZero = false

for (i = 0; i < array.length; i++) {
    for (let j= i; j < array.length; j++) {
        if(array[i] + array[j + 1] === 0){
            sumToZero = true
        }
    }
}
console.log(sumToZero)

//runtime will be: O(n^2) and space complexity: O(1)

const hasUnique = str => {
    for(let i = 0; i < str.length; i++){
        for(let j = i +1; j < str.length; j++){
            console.log(`the character at index i is ${str[i]}`)
            console.log(`The character at index j is ${str[j]}`)
            console.log("===")
        }
        return false
    }
    return true
}

console.log(hasUnique("Moonday"))
console.log(hasUnique("Monday"))

//runtime will be: O(n^2) and space complexity: O(1)

function isPangram(sentence) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const sentenceLower = sentence.toLowerCase();

    for (let char of alphabet) {
      if (sentenceLower.indexOf(char) === -1) {
        return false;
      }
    }

    return true;
  }

  console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
  console.log(isPangram("I like cats, but not mice."))

//runtime will be: O(n) and space complexity: O(1)

function findLongestWord(words) {
    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
      const currentLength = words[i].length;

      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }

    return longestLength;
  }

  console.log(findLongestWord(["hi", "hello"]))

  //Runtime will be: O(n) and space complexity: O(1)
