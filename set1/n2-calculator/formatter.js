// Charles Caampued | IV-BSIT-A | N2 | 11-21-2026

function formatResult(operation, numbers, result) {
  const rounded = Math.round(result * 100) / 100;
  return operation + "(" + numbers.join(", ") + ") = " + rounded;
}

module.exports = { formatResult };
