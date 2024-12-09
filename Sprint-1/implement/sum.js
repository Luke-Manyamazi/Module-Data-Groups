function sum(elements) {
  const sum = 0;

  for (let i = 0; i < elements.length; i++) {
    if (typeof elements[i] === "number") {
      sum += elements[i];
    }
  }
  return sum;
}

module.exports = sum;
