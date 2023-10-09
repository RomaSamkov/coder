function setAlarm(employed, vacation) {
  if (employed == true && vacation == true) {
    return false;
  }
  return employed;
}

// console.log(setAlarm(true, true));

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// console.log(Kata.getVolumeOfCuboid(6, 2, 5));

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// console.log(reverseWords("a b c d"));
// console.log(reverseWords("javascript"));

function areYouPlayingBanjo(name) {
  if (name.charAt(0).toLowerCase() == "r") {
    return name + " plays banjo";
  }

  return name + " does not play banjo";
}

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Ringo"));

function testEven(n) {
  return n % 2 === 0 ? false : true;
}

// console.log(testEven(0));
// console.log(testEven(1));

function oddOrEven(array) {
  if (array.length === 0) {
    return "even";
  }

  const ar = [...array].reduce((total, item) => total + item);
  if (ar % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
  // return ar % 2 === 0 ? "even" : "odd";
}

// console.log(oddOrEven([0]));
// console.log(oddOrEven([0, 1, 5]));
// console.log(oddOrEven([0, 1, 2]));

function printerError(s) {
  const regex = /[a-m]/g;
  const proper_num_of_matches = ((s || "").match(regex) || []).length;
  return `${s.length - proper_num_of_matches}/${s.length}`;
}

// console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

function repeatStr(n, s) {
  return s.repeat(n);
}

// console.log(repeatStr(3, "*"));
// console.log(repeatStr(5, "#"));

function lovefunc(flower1, flower2) {
  let sum = 0;
  sum = flower1 + flower2;

  if (sum % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

// console.log(lovefunc(1, 4)); //true
// console.log(lovefunc(2, 2)); //false

const reverseSeq = (n) => {
  const array = [];
  for (let i = 1; i <= n; i += 1) {
    array.push(i);
  }
  return array.reverse();
};

// console.log(reverseSeq(5));

// function checkForFactor(base, factor) {
//   return base % factor === 0 ? true : false;
// }

// console.log(checkForFactor(10, 2)); //true
// console.log(checkForFactor(11, 2)); //false

function maps(x) {
  return x.map((item) => item * 2);
}

// console.log(maps([1, 2, 3]));

const quarterOf = (month) => {
  if (month > 0 && month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

// console.log(quarterOf(12)); //1

function sayHello(name) {
  return `Hello, ${name}`;
}

// console.log(sayHello("Mr. Spock"));

function move(position, roll) {
  return roll * 2 + position;
}

// console.log(move(0, 4)); //8

function findShort(s) {
  let arr = [];
  s.split(" ").map((item) => {
    arr.push(item.length);
  });

  return Math.min(...arr);
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps")); // 3

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

// console.log(binaryArrayToNumber([1, 1, 0, 1]));

function getAge(inputString) {
  return Number(inputString.charAt(0));
}

// console.log(getAge("4 years old"));

function correct(string) {
  string = string.split("");
  for (var i = 0; i < string.length; i++) {
    if (string[i] == "5") {
      string[i] = "S";
    }
    if (string[i] == "0") {
      string[i] = "O";
    }
    if (string[i] == "1") {
      string[i] = "I";
    }
  }
  return string.join("");
}

// console.log(correct("L0ND0N"));
// console.log(correct("DUBL1N"));

function points(games) {
  let x = 0;
  games.map((item) => {
    if (item[0] > item[2]) {
      x = x + 3;
    } else if (item[0] == item[2]) {
      x = x + 1;
    }
  });
  return x;
}

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );

// console.log(
//   points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
// );

function square(num) {
  return num * num;
}

// console.log(square(3));

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let result = [];
  result.push(min, max);
  return result;
}

// console.log(minMax([1, 2, 3, 4, 5]));

function upperCase(string) {
  return string.toString() === string.toUpperCase();
}

console.log(upperCase("Hello World!"));
