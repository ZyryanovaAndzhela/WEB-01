//1
function pickPropArray(arr, prop) {
    const result = [];
    for (let obj of arr) {
        if (obj[prop]) {
            result.push(obj[prop]);
        }
    }
    return result;
}

const students = [
   { name: 'Павел', age: 20 },
   { name: 'Иван', age: 20 },
   { name: 'Эдем', age: 20 },
   { name: 'Денис', age: 20 },
   { name: 'Виктория', age: 20 },
   { age: 40 },
];

const result = pickPropArray(students, 'name');

console.log(result);

//2
function createCounter() {
    let count = 0;
    
    return function() {
      count++;
      console.log(count);
    };
  }
  
  const counter1 = createCounter();
  counter1();
  counter1();
  
  const counter2 = createCounter();
  counter2();
  counter2();

//3
function spinWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];

        if (currentWord.length >= 5) {
            const reversedWord = currentWord.split('').reverse().join('');
            reversedWords.push(reversedWord);
        } else {
            reversedWords.push(currentWord);
        }
    }

    const result = reversedWords.join(' ');
    return result;
}

const result1 = spinWords("Привет от Legacy");
console.log(result1);

const result2 = spinWords("This is a test");
console.log(result2);

//4
function twoSum(nums, target) {
    const indices = {};
    
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        
        if (diff in indices) {
            return [indices[diff], i];
        }
        
        indices[nums[i]] = i;
    }
    
    return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result_4 = twoSum(nums, target);
console.log(result_4);

//5
function longestCommonSuffix(strs) {
    if (strs.length === 0) return "";

    let suffix = "";

    let minLength = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        minLength = Math.min(minLength, strs[i].length);
    }

    for (let i = 1; i <= minLength; i++) {
        const currentChar = strs[0][strs[0].length - i];
        
        let isCommon = true;
        for (const str of strs) {
            if (str[str.length - i] !== currentChar) {
                isCommon = false;
                break;
            }
        }

        if (isCommon) {
            suffix = currentChar + suffix;
        } else {
            break;
        }
    }

    return suffix.length >= 2 ? suffix : "";
}

const strs1=["цветок", "поток", "хлопок"];
const strs2=["собака", "гоночная машина", "машина"];
const res1 = longestCommonSuffix(strs1);
const res2 = longestCommonSuffix(strs2);

console.log(res1);
console.log(res2);