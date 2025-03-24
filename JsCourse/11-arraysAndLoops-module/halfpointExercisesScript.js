/*//11a
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

//11b
function getLastValue(array) {
  let lastIndex = array[array.length - 1];
  console.log(lastIndex);
}

console.log(getLastValue([1, 20, 22, 24, 5]));
console.log(getLastValue(["hi", "hello", "good"]));

//11c
function arraySwap(array) {
  let backwardsArr = array.reverse();
  console.log(backwardsArr);
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(["hi", "hello", "good"]));

//11d
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//11e
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

//11f
let i = 0;
while (i < 10) {
  i += 2;
  console.log(i);
}
//f2
let j = 5;
while ( j >=0 ) {
 console.log( j );
  
  j--; //Increment placement matters with while loops. 
 };
//11g

let numberList = [1, 2, 3];
let newNumList = [];

for (let i = 0; i < numberList.length; i++) {
  let num = numberList[i];
  newNumList.push(num + 1);
}
console.log(newNumList);

//11h --- "Without return, a function just performs actions (like modifying variables), but you can’t use that result directly in your program. If you want the function to compute something and give you that result, you need to return it"
function addOne( numberList) { 
  let newNumList = []; 
  
for (let i = 0; i < numberList.length; i++) {
  let num = numberList[i];
  newNumList.push(num + 1);
  }
  return newNumList
}; 
console.log( addOne( [1, 2, 3] ) );
console.log(addOne([-2, -1,0,99]));

//11i 
function addOne( numberList,added) { 
  let newNumList = []; 
  
for (let i = 0; i < numberList.length; i++) {
  let num = numberList[i];
  newNumList.push(num + added);
  }
  return newNumList
}; 
console.log( addOne( [1, 2, 3],2 ) );
console.log(addOne([1, 2, 3], 3));
console.log(addOne([-2, -1, 0, 99],2));

//11j
function addArray(array1,array2) { 
  let newArrayList = []; 
  for ( let i = 0; i < array1.length; i++ ) { 
 
  newArrayList.push(array1[i] + array2[i]);
   
};return newArrayList
  } 
  console.log(addArray([1,1,2],[1,1,3]))
   console.log(addArray([1,2,3], [4,5,6]));
 

//11k
function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      count++;
    }
  }
  return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10])); 

//11L
function minMax(nums) {
  if (nums.length === 0) {
    return { min: null, max: null };
  }
  let outcome = {
    min: nums[0],
    max: nums[0],
  };

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < outcome.min) {
      outcome.min = nums[i];
    }

    if (nums[i] > outcome.max) {
      outcome.max = nums[i];
    }
  }
  return outcome;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([])); //11mpart1=thought process to get null. min and max should be in one variable to reassign to nothing. therefore an object.
console.log(minMax([3])); //11m part2
*/

//11n

function countWords(words) {
  let holder = {};
  for ( let word of words ) {
   
    console.log(holder);
  }
}

console.log(countWords(["apple", "grape", "apple", "apple"]));
