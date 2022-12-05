function sum(a, b) {
  return a + b;
}

export function capitalize(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

  return capitalized;
}

export function reverse(str) {
  let rev = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
  return rev;
}

const calculator = () => {
  const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const divide = (a, b) => {
    return a / b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  return { add, subtract, divide, multiply };
};

export const newCalc = calculator();

export function shift(arr) {
  let shifted = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.charCodeAt(i) > 64 && arr.charCodeAt(i) < 123) {
      if (arr[i] !== "z" && arr[i] !== "Z") {
        shifted += String.fromCharCode(arr.charCodeAt(i) + 1);
      } else {
        shifted += String.fromCharCode(arr.charCodeAt(i) - 25);
      }
    } else {
      shifted += arr[i];
    }
  }
  return shifted;
}

export function analyzeArray(arr) {
  return {
    average: arr[arr.length / 2],
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
