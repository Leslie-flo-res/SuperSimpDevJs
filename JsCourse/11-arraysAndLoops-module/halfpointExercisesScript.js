//11a
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

//11b
function getLastValue(array) {
  let lastIndex = array.length - 1;
  console.log(lastIndex);
}

console.log(getLastValue([1, 20, 22, 24, 5]));
