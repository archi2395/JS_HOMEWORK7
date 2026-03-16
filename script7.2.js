const array = [ 15, "hello", true, null, undefined, 25, 40 ]; 
function average(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      count++;
    }
  }
  return sum / count;
}

console.log(average(array));