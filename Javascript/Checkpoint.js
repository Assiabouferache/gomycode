// --- String Manipulation Functions ---

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// --- Array Functions ---

// Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

// Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array (example: filter out numbers less than threshold)
function filterArray(arr, conditionFn) {
  return arr.filter(conditionFn);
}

// --- Mathematical Functions ---

// Factorial
function factorial(n) {
  if (n < 0) return undefined; // factorial undefined for negative
  if (n === 0 || n === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact *= i;
  return fact;
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence up to n terms
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let fib = [0, 1];
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
