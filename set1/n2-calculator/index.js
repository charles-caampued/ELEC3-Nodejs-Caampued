// Charles Caampued | IV-BSIT-A | N2 | 11-21-2026

const path = require("node:path");
const operations = require("./operations");
const { formatResult } = require("./formatter");

function main() {
  const [operation, ...inputs] = process.argv.slice(2);
  if (!Object.hasOwn(operations, operation)) {
    throw new Error("Unknown operation. Use add, subtract, multiply, divide or average.");
  }
  if (inputs.length === 0 || (operation !== "average" && inputs.length !== 2)) {
    throw new Error("Use two numbers, or one or more for average.");
  }
  const numbers = inputs.map(Number);
  if (inputs.some(input => !input.trim()) || !numbers.every(Number.isFinite)) {
    throw new Error("Invalid number. Use finite numeric values.");
  }
  const result = operations[operation](...numbers);
  console.log(formatResult(operation, numbers, result));
}

try {
  main();
} catch (error) {
  console.error(error.message);
  console.error("Example: node " + path.basename(__filename) + " add 12 8");
  process.exitCode = 1;
}
