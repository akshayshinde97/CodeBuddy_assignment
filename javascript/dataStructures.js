// level {1/2/3}
// level 3
// q3 balanced parenthisis
function balancedPar(str) {
  var stack = [];
  const valid = ["(", "{", "["];
  const invalid = [")", "}", "]"];
  const validmap = new Map([
    [")", "("],
    ["]", "{"],
    ["]", "["],
  ]);

  for (let exp of str) {
    if (stack.length > 0) {
      let lastitem = stack.length - 1;
      if (exp in invalid) {
        if (stack[lastitem] != validmap.get(exp)) {
          return false;
        }
        else if(stack[lastitem] == validmap.get(exp))
        {
            stack.pop()
        }
      }
    } else {
      if (exp in valid) {
        valid.push(exp);
      }
    }
  }
  if(stack.length > 0)
  {
      return false
  }
  return true
}
