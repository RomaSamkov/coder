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

console.log(findMultiples(5, 25));
