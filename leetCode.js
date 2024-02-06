function isValid(s) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (const char of s) {
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// console.log(isValid("()[]{}"));

const isEmpty = (obj) => {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else {
    return Object.keys(obj).length === 0;
  }
};

// console.log(isEmpty({}));

const createCounter = function (n) {
  return function () {
    return n++;
  };
};

// console.log(createCounter(10));

async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// console.log(sleep(100));

const filter = function (arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// console.log(filter([0, 10, 20, 30]));

const createCounterII = function (init) {
  let current_value = init;

  function increment() {
    current_value += 1;
    return current_value;
  }

  function decrement() {
    current_value -= 1;
    return current_value;
  }

  function reset() {
    current_value = init;
    return current_value;
  }

  return {
    increment,
    decrement,
    reset,
  };
};
// const counter = createCounterII(8);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// JavaScript chalange 30 in LeeTcode;

const createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

// const greeting = createHelloWorld();
// console.log(greeting());

function expect(val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// const result = expect(5);
// console.log(result.toBe(5));
// console.log(result.notToBe(5));

var map = function (arr, fn) {
  let transformedArray = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArray[i] = fn(arr[i], i);
  }
  return transformedArray;
};

let arr = [1, 2, 3, 4, 5];
let fn = function (element, index) {
  return element * index;
};
// let transformedArray = map(arr, fn);
// console.log(transformedArray);

function customReduce(nums, fn, init) {
  // Initialize the accumulator with the initial value
  let val = init;

  // Iterate through each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Apply the reducer function to the current element and the accumulated value
    val = fn(val, nums[i]);
  }

  // Return the final result
  return val;
}

function compose(functions) {
  // If the array is empty, return the identity function
  if (functions.length === 0) {
    return (x) => x;
  }

  // Otherwise, create the composed function
  return function (x) {
    // Apply each function in reverse order
    return functions.reduceRight((result, fn) => fn(result), x);
  };
}

var argumentsLength = function (...args) {
  return arguments.length;
};

// console.log(argumentsLength(1, 2, 3));

var once = function (fn) {
  let hasBeenCalled = false;
  let result;

  return function () {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, arguments);
      return result;
    } else {
      return undefined;
    }
  };
};

function memoize(fn) {
  const cache = {}; // Initialize an empty cache

  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key based on input arguments

    if (key in cache) {
      console.log("Fetching from cache"); // Log cache hit
      return cache[key]; // Return cached result
    } else {
      console.log("Calculating result"); // Log cache miss
      const result = fn(...args); // Compute the result using the original function
      cache[key] = result; // Store the result in the cache
      return result;
    }
  };
}
