function sumFor(arr) {
  let sum = 0;
  for (const num of arr) {
    // console.log(num);
    sum += num;
  }
  return sum;
}
function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

function sumRecursion(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRecursion(arr.slice(1, arr.length));
}

function sumTheSimpleWay(arr) {
  const sum = _.reduce(arr, function (memo, num) { return memo + num; }, 0);
  return sum;
}

const nums = [1, 2, 3, 4, 5];

console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));
