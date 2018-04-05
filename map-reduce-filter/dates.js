// Changing "-" for "/"
var bdays = ["08-09", "01-03", "04-14"];

var bdays2 = bdays.map(function (date) {
  return date.replace("-", "/");
})

console.log(bdays);
console.log(bdays2);

console.log("=================");

// rounding an array of numbers

var nums = [1.5, 2.45, 2.41, 5.3112];

var rounded = nums.map(Math.round);

console.log(nums);
console.log(rounded);
