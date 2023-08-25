function helloProperties(obj) {
  let result = [];
  for (const key of Object.keys(obj)) {
    result.push(`Hello-${key}`);
  }
  return result;
}

var o = {
  john: 12,
  brian: true,
  doe: "hi",
  fred: false,
};
console.log(helloProperties(o));
// Hello-john,Hello-brian,Hello-doe,Hello-fred
