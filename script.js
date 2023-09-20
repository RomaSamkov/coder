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

console.log(oddOrEven([0]));
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 2]));
