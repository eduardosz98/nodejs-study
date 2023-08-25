function reshape(n, str) {
  let trimmedString = str.replaceAll(" ", "");

  let resString = "";
  for (let index = 0; index < n; index++) {
    let result = `${trimmedString.substring(0, n)}`;
    trimmedString = trimmedString.slice(n);

    if (index + 1 === n) {
      result += "\\";
      result += trimmedString;
    } else {
      result += "\\";
    }
    resString += result;
  }

  return resString;
}

console.log(reshape(3, "abc de fghij")); //  "abc\ndef\nghi\nj"
console.log(reshape(2, "1 23 456")); // "12\n34\n56"
