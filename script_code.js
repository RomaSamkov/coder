function opposite(number) {
  return -number;
}

// console.log(opposite(4));

function litres(time) {
  return Math.floor(time * 0.5);
}

// console.log(litres(11.8));

function findMultiples(integer, limit) {
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}

// console.log(findMultiples(5, 25));

function nameShuffler(str) {
  let r = [];
  r.reverse;
  return str.split(" ").reverse().join(" ");
}

// console.log(nameShuffler("john McClane"));

function findUniq(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}

// console.log(findUniq([1, 1, 1, 2, 1, 1]));

function solution(nums) {
  if (nums == null) {
    return [];
  }

  return nums.sort((a, b) => a - b);
}

// console.log(solution([1, 2, 3, 10, 5]));

function getChar(c) {
  return String.fromCharCode(c);
}

// console.log(getChar(31));

function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  }
  if (old < 18) {
    return "drink coke";
  }
  if (old < 21) {
    return "drink beer";
  }
  if (old >= 21) {
    return "drink whisky";
  }
}

// console.log(peopleWithAgeDrink(21));

function min(list) {
  return Math.min(...list);
}

function max(list) {
  return Math.max(...list);
}

console.log(min([-52, 56, 30, 29, -54, 0, -110])); /*  -110  */
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); /* 566 */
