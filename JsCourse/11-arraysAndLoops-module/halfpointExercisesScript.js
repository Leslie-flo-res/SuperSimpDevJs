//11a
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
