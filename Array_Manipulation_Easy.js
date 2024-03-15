// Array Manipulation:

const testArr=[1,2,3,5,4,7,5,2,1,9,8,1,8,1,0,8,5];

// 1) Remove Duplicates: Write a function that takes an array as input and returns a new array with all duplicate elements removed. (e.g., [1, 2, 2, 3, 4, 1] -> [1, 2, 3, 4])
function removeDup(arr) {
    let newArr = [];
    for(let i=0;i<arr.length;i++) {
        if(newArr.includes(arr[i])) {
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(removeDup(testArr));

// 2) Filter by Condition: Write a function that takes an array and a callback function as input and returns a new array containing only elements that pass the test implemented by the callback function. (e.g., [1, 2, 3, 4, 5], element > 3 -> [4, 5])
function filterArray(arr, callback) {
    const filteredArray = [];
    for(let i=0;i<arr.length;i++) {
        let ele = arr[i];
        if(callback(ele)) {
            filteredArray.push(ele);
        }
    }
    return filteredArray;
}
// console.log(filterArray(testArr, element => element>3));

// 3) Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all the elements in the array.
function sum(arr) {
    let totalSum=0;
    for(let num of arr) {
        totalSum+=num;
    }
    return totalSum;
}
// console.log(sum(testArr));

// 4) Count of all duplicate Elements present in the array
function findDup(arr) {
    let counts = {};
    let newArr = [];
    for(let num of arr) {
        if(newArr.includes(num)) {
            // found duplicate
            counts[num]++;
        }
        else {
            counts[num]=1;
            newArr.push(num);
        }
    }
    return {counts,newArr};
}
const res = findDup(testArr);
console.log(res.counts);
console.log(res.newArr);