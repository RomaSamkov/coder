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

console.log(reverseWords("a b c d"));
console.log(reverseWords("javascript"));
