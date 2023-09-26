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

console.log(maps([1, 2, 3]));
