function add(a, b) {
  return a - b; // Intentional error
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };