function filterWords(words, letters) {
  // Write your code here
  // To debug: console.error('Debug messages...');
  const lettersArray = letters.split("");
  const resultWords = [];

  for (let x = 0; x < words.length; x++) {
    const word = words[x];

    for (let index = 0; index < lettersArray.length; index++) {
      const letter = lettersArray[index];
      if (word.includes(letter)) {
        resultWords.push(word);
        break;
      }
    }
  }

  return resultWords;
}

console.log(filterWords(["the", "dog", "got", "a", "bone"], "ae"));
