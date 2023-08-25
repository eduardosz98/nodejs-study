function average(table) {
  if (table.length === 0) return 0;

  const sum = table.reduce((sum, num) => sum + num, 0);
  return sum / table.length;
}

var values = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(average(values)); // 5