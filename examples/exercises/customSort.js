function customSort(table, criteria) {
  for (let x = 0; x < table.length; x++) {
    for (let y = 0; y < table.length; y++) {
      if (table[x][criteria] >= table[y][criteria]) {
        const aux = table[x][criteria];
        table[y][criteria] = table[x][criteria];
        table[y][criteria] = aux;
      }
    }
  }
  return table;
}

var a = [
  { key: 6 },
  { key: 9 },
  { key: 2 },
  { key: 1 },
  { key: 12 },
  { key: 63 },
  { key: 20 },
  { key: 25 },
  { key: 13 },
  { key: 19 },
  { key: 32 },
  { key: 70 },
  { key: 14 },
  { key: 7 },
  { key: 8 },
];

console.log(display(a, "key"));
customSort(a, "key");
console.log(display(a, "key")); //Expected: 70,63,32,25,20,19,14,13,12,9,8,7,6,2,1
