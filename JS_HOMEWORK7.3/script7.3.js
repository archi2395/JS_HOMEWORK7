function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
    }
  }
}
const numbers = [1, 8, 3, 0, 4];

removeElement(numbers, 8);

console.log(numbers);