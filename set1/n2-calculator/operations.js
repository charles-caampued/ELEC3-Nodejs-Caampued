// Charles Caampued | IV-BSIT-A | N2 | 11-21-2026

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero.");
  return a / b;
}

function average(...numbers) {
  const total = numbers.reduce(add, 0);
  return total / numbers.length;
}

module.exports = { add, subtract, multiply, divide, average };
