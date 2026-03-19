function deleteLetters(str, lettersToRemove) {
  return str
    .split('') 
    .filter(letter => !lettersToRemove.includes(letter)) 
    .join(''); 
}

const result = deleteLetters("hello world", ['l', 'd']);
console.log(result); 