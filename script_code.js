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

// console.log(friend(["Ryan", "Jimmy", "1234", "Cool Man"]));

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((bird) => !geese.includes(bird));
}

// console.log(
//   gooseFilter([
//     "Mallard",
//     "Hook Bill",
//     "African",
//     "Crested",
//     "Pilgrim",
//     "Toulouse",
//     "Blue Swedish",
//   ])
// );

function accum(s) {
  return s
    .split("")
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join("-");
}

// console.log(accum("ZpglnRxqenU"));

function combat(health, damage) {
  const hp = health - damage;
  if (health < damage) {
    return 0;
  } else {
    return hp;
  }
}

// console.log(combat(92, 8));

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// console.log(reverseWords("double  spaced  words"));

function position(letter) {
  const DIFFERENCE_CHARCODE_AND_LETTERS = 96;

  const myCharLowercase = letter.toLowerCase();

  const position =
    myCharLowercase.charCodeAt() - DIFFERENCE_CHARCODE_AND_LETTERS;

  return `Position of alphabet: ${position}`;
}

// console.log(position("e"));

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

// console.log(roundToNext5(28));

function duplicateEncode(word) {
  let result = "";
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

// console.log(duplicateEncode("Success"));

function feast(beast, dish) {
  return (
    beast.charCodeAt(0) === dish.charCodeAt(0) &&
    beast.charCodeAt(beast.length - 1) === dish.charCodeAt(dish.length - 1)
  );
}

// console.log(feast("great blue heron", "garlic naan"));
// console.log(feast("brown bear", "bear claw"));

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// console.log(twiceAsOld(36, 7));

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
    case 10:
      return "Ten";
      break;

    default:
      break;
  }
}

// console.log(switchItUp(6));

function solve(s) {
  let lowerCase = 0;
  let upperCase = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      upperCase++;
    } else {
      lowerCase++;
    }
  }
  return upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase();
}

// console.log(solve("CODe"));
// console.log(solve("Code"));

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// console.log(hexToDec("a"));
// console.log(hexToDec("FF"));

function persistence(num) {
  let digits = num.toString();
  let counter = 0;

  while (digits.length > 1) {
    digits = digits
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
    counter++;
  }
  return counter;
}

// console.log(persistence(39));

function greet(language) {
  const database = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  return database[language] || database["english"];
}

// console.log(greet("spanish"));

function solutionString(str, ending) {
  return str.endsWith(ending);
}

// console.log(solutionString("abcde", "cde"));

function factorial(n) {
  if (n > 12 || n < 0) {
    throw new RangeError();
  }
  let arOfNum = [];
  for (let i = 0; i <= n; i++) {
    if (i > 0) {
      arOfNum.push(i);
    }
  }
  return arOfNum.reduce((a, b) => a * b, 1);
}

// console.log(factorial(3));

function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}

// console.log(saleHotdogs(1));

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return text
    .toLowerCase()
    .split("")
    .filter((letter) => alphabet.includes(letter))
    .map((l) => alphabet.indexOf(l) + 1)
    .join(" ");
}

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

function stringToArray(string) {
  return string.split(" ");
}

// console.log(stringToArray("Robin Singh"));

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

// console.log(duplicateCount("abba"));

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  return numbers.slice(0, index).concat(numbers.slice(index + 1));
}

// console.log(removeSmallest([1, 2, 1, 3, 4, 5]));

function reverseList(list) {
  return list.reverse();
}

// console.log(reverseList([1, 2, 3, 4]));

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

// console.log(
//   flattenAndSort([
//     [3, 2, 1],
//     [7, 9, 8],
//     [6, 4, 5],
//   ])
// );

function replace(s) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newSentence = "";
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      newSentence += "!";
    } else {
      newSentence += s[i];
    }
  }
  return newSentence;
}

// console.log(replace("ABCDE"));

function problem(x) {
  if (typeof x === "string") {
    return "Error";
  }
  return x * 50 + 6;
}

// console.log(problem(8));

function reverseLetter(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .replace(/[^a-zA-Z]/g, "");
}

// console.log(reverseLetter("krishan"));

function countBy(x, n) {
  let arraycountBy = [];

  for (let i = 1; i <= n; i++) {
    arraycountBy.push(i * x);
  }
  return arraycountBy;
}

// console.log(countBy(1, 10));

function check50(x, y) {
  return x === 50 || y === 50 || x + y === 50;
}

console.log(check50(25, 25));
