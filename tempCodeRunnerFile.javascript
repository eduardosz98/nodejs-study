function change(cash) {
  let bills = {
    two: 0,
    five: 0,
    ten: 0,
  };

  while (cash > 0) {
    if (cash >= 10) {
      const result = Math.trunc(cash / 10);
      console.log(result);
      bills.ten = result;
      cash -= result * 10;
      continue;
    }

    if (cash >= 5) {
      const result = Math.trunc(cash / 5);
      bills.five = result;
      cash -= result * 5;
      continue;
    }

    if (cash >= 2) {
      const result = Math.trunc(cash / 2);
      bills.two = result;
      cash -= result * 2;
      continue;
    }
  }
  return bills;
}

console.log(change(9007199254740991));