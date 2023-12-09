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

// console.log(min([-52, 56, 30, 29, -54, 0, -110])); /*  -110  */
// console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); /* 566 */

function digitize(n) {
  return [...String(n)].map(Number).reverse();
}

// console.log(digitize(35231));

function makeUpperCase(str) {
  return str.toUpperCase();
}

// console.log(makeUpperCase("hello"));

function rentalCarCost(d) {
  const carPay = d * 40;
  if (d < 3) {
    return carPay;
  }
  if (d >= 3 && d < 7) {
    return carPay - 20;
  }
  if (d >= 7) {
    return carPay - 50;
  }
}

// console.log(rentalCarCost(3));
// console.log(rentalCarCost(4));

function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  if (score >= 90) {
    return "A";
  }
  if (score < 90 && score >= 80) {
    return "B";
  }
  if (score < 80 && score >= 70) {
    return "C";
  }
  if (score < 70 && score >= 60) {
    return "D";
  }
  if (score < 60) {
    return "F";
  }
}

// console.log(getGrade(44, 55, 52));

function openOrSenior(data) {
  let result = [];
  data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      result.push("Senior");
    } else result.push("Open");
  });
  return result;
}

// console.log(
//   openOrSenior([
//     [45, 12],
//     [55, 21],
//     [19, -2],
//     [104, 20],
//   ])
// );

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft ? true : false;
};

// console.log(zeroFuel(50, 25, 2));

function gimme(triplet) {
  const sortedArray = triplet.slice(0);
  sortedArray.sort((a, b) => a - b);
  return triplet.indexOf(sortedArray[1]);
}

// console.log(gimme([5, 10, 14]));

function smallEnough(a, limit) {
  let arSmallEnough = [];
  a.map((el) => {
    if (el > limit) {
      arSmallEnough.push(el);
    }
  });
  return arSmallEnough.length > 0 ? false : true;
}

// console.log(smallEnough([101, 45, 75, 105, 99, 107], 107));

const countSheep = function (num) {
  let strSheep = "";
  for (let i = 1; i <= num; i++) {
    strSheep += i.toString() + " sheep...";
  }

  return strSheep;
};

// console.log(countSheep(2));

function friend(friends) {
  return friends.filter((el) => el.length == 4);
}

console.log(friend(["Ryan", "Jimmy", "1234", "Cool Man"]));
