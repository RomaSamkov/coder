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

console.log(isValid("()[]{}"));
